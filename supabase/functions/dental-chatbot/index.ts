import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a virtual front desk assistant for The Periodontal, a premium periodontal and dental implant clinic in Houston, TX. Your name is "Perio Assistant".

PERSONALITY: Friendly, professional, confident like a clinic coordinator. Keep responses SHORT (2-3 sentences max). Always guide toward booking.

CLINIC INFO:
- Board-certified periodontists: Dr. Hai H. Nguyen (DDS, MS, PA) and Dr. Thomas Nguyen (DDS, MS)
- Services: Periodontics, Dental Implants, LANAP Laser Treatment, Exams & Cleaning
- 20+ years experience, 7,000+ successful procedures, 5.0 Google rating

QUALIFICATION FLOW - Ask these in order if not yet answered:
1. What dental issue they're dealing with (bleeding gums, tooth pain, missing teeth, implants, checkup)
2. How urgent (immediate pain, within a week, just exploring)
3. Their name and phone number to book

RESPONSE RULES:
- If they mention PAIN → prioritize fast booking: "We can usually see urgent cases quickly. Let me get you booked."
- If they ask about COST → "Pricing depends on your specific condition. The doctor will assess and give exact pricing during a quick consultation. No obligation."
- If they mention IMPLANTS → show authority: "Our specialists have placed thousands of implants with a 98% success rate."
- Always redirect to booking after 2-3 exchanges
- Use persuasion naturally: "Most patients wait too long — early treatment is easier and less expensive."
- If they seem hesitant: "This will only take 30 seconds to book."

BOOKING: When ready to book, ask for: Name, Phone, Preferred date/time. Then confirm the booking.

IMPORTANT: 
- Never diagnose conditions
- Never give specific medical advice  
- Never quote specific prices
- Keep every response under 3 sentences unless answering a detailed question
- Use emoji sparingly (one per message max)
- If conversation stalls, offer: "Would you like our team to call you instead?"

OUTPUT FORMAT: Always respond in plain text. No markdown formatting.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, action, leadData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Handle lead capture
    if (action === "capture_lead" && leadData) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("chatbot_leads").insert({
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email,
        issue: leadData.issue,
        urgency: leadData.urgency,
        preferred_date: leadData.preferredDate,
        preferred_time: leadData.preferredTime,
        conversation: leadData.conversation,
        status: "new",
      });

      if (error) {
        console.error("Lead capture error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to capture lead" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // AI Chat
    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're experiencing high demand. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chatbot error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
