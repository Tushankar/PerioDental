import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_REPLIES_INITIAL = [
  "Yes, I need help",
  "Book appointment",
  "Just exploring",
];

const ISSUE_OPTIONS = [
  "Bleeding gums",
  "Tooth pain",
  "Missing teeth",
  "Want dental implants",
  "General checkup",
];

const URGENCY_OPTIONS = ["Immediate – pain now", "Within a week", "Just exploring"];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dental-chatbot`;

async function streamChat({
  messages,
  onDelta,
  onDone,
}: {
  messages: Message[];
  onDelta: (t: string) => void;
  onDone: () => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error || "Failed to connect");
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: rd, value } = await reader.read();
    if (rd) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || !line.trim() || !line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }
  onDone();
}

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [phase, setPhase] = useState<"initial" | "issue" | "urgency" | "chat" | "booking">("initial");
  const [booking, setBooking] = useState<BookingForm>({ name: "", phone: "", email: "", date: "", time: "" });
  const [showPulse, setShowPulse] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowPulse(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showBookingForm]);

  const addAssistantMessage = useCallback((content: string) => {
    setMessages((prev) => [...prev, { role: "assistant", content }]);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text };
    const allMsgs = [...messages, userMsg];
    setMessages(allMsgs);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 0) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: allMsgs,
        onDelta: upsert,
        onDone: () => setIsLoading(false),
      });
    } catch {
      setIsLoading(false);
      addAssistantMessage("I'm having trouble connecting right now. Would you like our team to call you instead?");
    }
  };

  const handleQuickReply = (text: string) => {
    if (phase === "initial") {
      if (text === "Book appointment") {
        setPhase("booking");
        setShowBookingForm(true);
        addAssistantMessage("Great! Let me get your details to book an appointment. Please fill out the quick form below 👇");
        return;
      }
      if (text === "Just exploring") {
        setPhase("chat");
        sendMessage(text);
        return;
      }
      setPhase("issue");
      addAssistantMessage("What dental issue are you dealing with right now?");
      return;
    }
    if (phase === "issue") {
      setSelectedIssue(text);
      setPhase("urgency");
      sendMessage(text);
      return;
    }
    if (phase === "urgency") {
      setSelectedUrgency(text);
      setPhase("chat");
      sendMessage(text);
      return;
    }
    sendMessage(text);
  };

  const handleBookingSubmit = async () => {
    if (!booking.name || !booking.phone) return;
    setIsLoading(true);

    try {
      await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          action: "capture_lead",
          leadData: {
            name: booking.name,
            phone: booking.phone,
            email: booking.email,
            issue: selectedIssue,
            urgency: selectedUrgency,
            preferredDate: booking.date,
            preferredTime: booking.time,
            conversation: messages,
          },
        }),
      });

      setBookingSubmitted(true);
      setShowBookingForm(false);
      addAssistantMessage(
        `Thank you, ${booking.name}! Your consultation request has been submitted. Our team will call you at ${booking.phone} to confirm your appointment. We typically respond within 2 hours.`
      );
    } catch {
      addAssistantMessage("Something went wrong submitting your booking. Please try again or call us directly.");
    }
    setIsLoading(false);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowPulse(false);
    if (messages.length === 0) {
      addAssistantMessage("Hi 👋 Looking to fix a dental issue or book a consultation?");
    }
  };

  const getQuickReplies = () => {
    if (bookingSubmitted) return [];
    if (phase === "initial") return QUICK_REPLIES_INITIAL;
    if (phase === "issue") return ISSUE_OPTIONS;
    if (phase === "urgency") return URGENCY_OPTIONS;
    if (phase === "chat" && !showBookingForm) return ["Book appointment", "Talk to someone"];
    return [];
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={openChat}
            className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
          >
            <MessageCircle className="w-6 h-6" />
            {showPulse && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
            className="fixed bottom-20 lg:bottom-6 right-4 z-[100] w-[calc(100vw-2rem)] max-w-[400px] h-[min(650px,calc(100vh-8rem))] bg-[#1A0501] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white px-5 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#8D2C08]/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#8D2C08]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#1A0501] text-base">Perio Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] text-[#1A0501]/60 font-medium">Online now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-9 h-9 rounded-xl hover:bg-black/5 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-black/40" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-[15px] leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground rounded-br-md font-medium"
                        : "bg-white/10 text-white border border-white/10 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Form */}
              {showBookingForm && !bookingSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-muted/50 border border-border/50 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="font-heading font-bold text-primary text-sm">Quick Booking</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <select
                      value={booking.time}
                      onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                  <Button
                    variant="gold"
                    className="w-full min-h-[44px] rounded-lg"
                    onClick={handleBookingSubmit}
                    disabled={!booking.name || !booking.phone || isLoading}
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Confirm Booking <ArrowRight className="w-4 h-4 ml-1" /></>}
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">Takes 30 seconds · No obligation</p>
                </motion.div>
              )}

              {/* Quick Replies */}
              {getQuickReplies().length > 0 && !isLoading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {getQuickReplies().map((r) => (
                    <button
                      key={r}
                      onClick={() => handleQuickReply(r)}
                      className="bg-accent/10 hover:bg-accent/20 text-foreground border border-accent/20 rounded-full px-3 py-1.5 text-xs font-medium transition-colors active:scale-95"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border/50 px-3 py-3 shrink-0">
              <div className="flex items-center gap-2">
                <a
                  href="tel:+18321234567"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 hover:bg-accent/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                </a>
                <div className="flex-1 flex items-center bg-white/5 border border-white/10 rounded-full px-4 transition-all focus-within:bg-white/10 focus-within:border-accent/30">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                    className="flex-1 bg-transparent py-3 text-white placeholder:text-white/30 text-sm focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isLoading}
                    className="w-9 h-9 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 flex items-center justify-center disabled:opacity-40 transition-all ml-1 shrink-0 active:scale-90"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
