import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
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
    <div>
      <section className="section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-[1.1] mb-4 md:mb-6">
              Book Your Consultation
            </h1>
            <p className="text-muted-foreground mb-2 text-sm">Next available slot in 3 days</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-4 md:space-y-5">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "(713) 555-1234" },
                  { key: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-heading font-semibold text-primary mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                    {errors[field.key] && <p className="text-destructive text-xs mt-1">{errors[field.key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-heading font-semibold text-primary mb-2">Message (optional)</label>
                  <textarea
                    placeholder="Tell us about your concerns..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>
                <Button variant="gold" size="lg" type="submit" className="w-full min-h-[48px]">
                  Book Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            ) : (
              <div className="mt-6 md:mt-8 bg-accent/10 rounded-2xl p-6 md:p-8 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-primary text-xl mb-2">Request Received</h3>
                <p className="text-muted-foreground text-sm">We'll contact you within 24 hours to confirm your consultation.</p>
              </div>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              <div className="bg-muted/30 rounded-xl md:rounded-2xl p-6 md:p-8">
                <h3 className="font-heading font-bold text-primary mb-5 md:mb-6">Contact Information</h3>
                <div className="space-y-4 md:space-y-5">
                  <a href="tel:+17135551234" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">Call Us</p>
                      <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">(713) 555-1234</p>
                    </div>
                  </a>
                  <a href="mailto:info@perioimplant.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">Email</p>
                      <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors break-all">info@perioimplant.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm">Visit Us</p>
                      <p className="text-muted-foreground text-sm">1234 Medical Center Blvd<br />Houston, TX 77030</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden card-shadow h-56 md:h-64">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5!2d-95.4!3d29.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQyJzAwLjAiTiA5NcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-3 md:gap-4 justify-center flex-wrap">
                {["ADA Member", "Board Certified", "HIPAA Compliant"].map((badge) => (
                  <div key={badge} className="bg-muted/50 rounded-lg px-3 md:px-4 py-2 text-xs font-semibold text-muted-foreground">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
