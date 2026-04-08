import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-[#2B0D03] min-h-screen">
      <section className="relative px-4 pb-4 md:px-6 md:pb-6 lg:px-8 pt-[88px] z-10 xl:px-12">
        <div className="relative border border-white/20 rounded-[2rem] overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-700 hover:border-white/30 p-8 md:p-14 lg:p-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#8D2C08]/40 to-[#B54804]/20 hidden" />
          <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
            
            {/* Form */}
            <ScrollReveal>
              <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Get in Touch</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
                Book Your Consultation
              </h1>
              <p className="text-white/80 mb-8 text-sm">Next available slot in 3 days — Our board-certified specialists will reach out within 24 hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                    { key: "phone", label: "Phone", type: "tel", placeholder: "(713) 555-1234" },
                    { key: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-heading font-bold text-white mb-2 ml-1">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 min-h-[52px] rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all hover:bg-white/10"
                      />
                      {errors[field.key] && <p className="text-destructive font-semibold text-xs mt-1">{errors[field.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-heading font-bold text-white mb-2 ml-1">Message (optional)</label>
                    <textarea
                      placeholder="Tell us about your concerns..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none hover:bg-white/10"
                    />
                  </div>
                  <div className="pt-2">
                    <Button variant="gold" size="lg" type="submit" className="w-full min-h-[56px] text-base rounded-xl shadow-[0_10px_20px_rgba(255,215,0,0.15)] hover:shadow-[0_15px_30px_rgba(255,215,0,0.25)] transition-all">
                      Book Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 md:mt-8 bg-white/5 backdrop-blur-md border border-accent/20 rounded-[2rem] p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-4 tracking-tight">Request Received</h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-sm mx-auto">We'll reach out to you within <span className="text-white font-bold">24 hours</span> to finalize your consultation time.</p>
                </div>
              )}
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-xl">
                  <h3 className="font-heading font-extrabold text-white text-xl md:text-2xl mb-8 tracking-tight pl-1 border-l-4 border-accent leading-none">Contact Information</h3>
                  <div className="space-y-6">
                    <a href="tel:+17135551234" className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-white text-sm md:text-base">Call Us</p>
                        <p className="text-white/60 text-sm md:text-base group-hover:text-white transition-colors tracking-tight font-medium underline underline-offset-4 decoration-white/10 group-hover:decoration-accent/40">(713) 555-1234</p>
                      </div>
                    </a>
                    <a href="mailto:info@perioimplant.com" className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-white text-sm md:text-base">Email</p>
                        <p className="text-white/60 text-sm md:text-base group-hover:text-white transition-colors break-all tracking-tight font-medium underline underline-offset-4 decoration-white/10 group-hover:decoration-accent/40">info@perioimplant.com</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-white text-sm md:text-base">Visit Us</p>
                        <p className="text-white/60 text-sm md:text-base leading-relaxed tracking-tight font-medium underline underline-offset-4 decoration-white/10">1234 Medical Center Blvd<br />Houston, TX 77030</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h4 className="text-white font-heading font-bold mb-4">Clinic Hours</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Mon - Fri</p>
                        <p className="text-white text-sm font-medium">8:00 AM - 5:00 PM</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Sat</p>
                        <p className="text-white text-sm font-medium">By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-64 md:h-72 group relative">
                  <div className="absolute inset-0 bg-accent/5 pointer-events-none group-hover:opacity-0 transition-opacity z-10" />
                  <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5!2d-95.4!3d29.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQyJzAwLjAiTiA5NcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                    className="w-full h-full border-0 grayscale invert brightness-75 contrast-125 transition-all duration-700 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:contrast-100"
                    loading="lazy"
                  />
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  {["ADA Member", "Board Certified", "HIPAA Compliant"].map((badge) => (
                    <div key={badge} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 text-xs font-bold text-white/50 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest cursor-default">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
