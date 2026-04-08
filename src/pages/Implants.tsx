import { Bone, Layers, Crown, Sparkles, Wrench, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceImplants from "@/assets/service-implants.jpg";
import galleryImplant2 from "@/assets/gallery-implant-2.jpg";
import implantPosts from "@/assets/implant-posts.jpg";
import implantConsult from "@/assets/implant-consult.jpg";

const implantGallery = [
  { src: serviceImplants, alt: "Dental implant procedure" },
  { src: galleryImplant2, alt: "Implant cross-section" },
  { src: implantPosts, alt: "Titanium implant posts" },
  { src: implantConsult, alt: "Implant consultation" },
];

const services = [
  { icon: Crown, title: "Single Tooth Replacement", desc: "One missing tooth affects your bite, your jawbone, and the teeth around it. One implant fixes all three." },
  { icon: Layers, title: "Implant Bridges", desc: "Two implants replace 3–4 missing teeth without touching healthy teeth. Stronger than traditional bridges." },
  { icon: Sparkles, title: "Implant-Secured Dentures", desc: "No more slipping. No more adhesive. 4–6 implants lock your dentures in place permanently." },
  { icon: Bone, title: "Full Mouth Reconstruction", desc: "Strategic implant placement rebuilds a complete arch — eat, speak, and smile like you have natural teeth." },
  { icon: Wrench, title: "CT-Guided Precision Planning", desc: "Digital 3D planning eliminates guesswork. Every implant is placed exactly where it needs to be." },
  { icon: Shield, title: "Bone Grafting for Implants", desc: "Not enough bone? We rebuild it. Grafting creates the foundation implants need to last a lifetime." },
];

const features = [
  { title: "Specialist Placement, Not GP Placement", desc: "Periodontists place implants in bone and tissue daily. General dentists don't. That difference matters." },
  { title: "CT-Guided Surgical Precision", desc: "Every implant is pre-planned in 3D before we make a single incision. No guesswork. No surprises." },
  { title: "Recovery Support From Day One", desc: "We guide you through healing, hygiene, and long-term maintenance — not just the surgery." },
];

const faqs = [
  { q: "How long do dental implants last?", a: "With proper care, implants last 20+ years — often a lifetime. They're the only tooth replacement that actually preserves bone." },
  { q: "Is the procedure painful?", a: "Most patients say it was less uncomfortable than a tooth extraction. We use local anesthesia and sedation options." },
  { q: "How long until I can eat normally?", a: "Soft foods for 1–2 weeks. You'll have a temporary restoration while the implant fuses with bone over 3–6 months." },
  { q: "What do implants cost?", a: "Single implants: $3,000–$6,000. Full arch reconstruction: $20,000–$45,000. We offer financing. The real cost? Not getting them — and losing more bone." },
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="section-padding">
      <div className="container-tight max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Answers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">Questions Patients Actually Ask</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-primary/[0.04] rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left min-h-[48px]">
                  <span className="font-heading font-bold text-primary text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ml-2 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Implants = () => (
  <ServicePageLayout
    badge="Dental Implant Specialists"
    title="Permanent Dental Implants. Eat, Smile, Live Without Pain Again."
    subtitle="Missing teeth affect more than your smile. They change how you eat, speak, and feel about yourself. Implants restore all of it — permanently."
    ctaText="See If You Qualify"
    galleryImages={implantGallery}
    services={services}
    servicesTitle="Implant Solutions"
    servicesSubtitle="From Single Teeth to Full Mouth"
    features={features}
    featuresTitle="Why Specialists Get Better Results"
    featuresDesc="Implant success depends on precision placement in bone and tissue. That's exactly what periodontists are trained to do — and general dentists aren't."
    featuresImage={implantConsult}
    stats={[
      { value: "2,000+", label: "Implants Placed" },
      { value: "98%", label: "Success Rate" },
      { value: "20+", label: "Years Experience" },
    ]}
    ctaTitle="Every Month You Wait, You Lose More Bone."
    ctaDesc="Bone deteriorates where teeth are missing. The longer you wait, the more grafting you'll need — and the higher the cost."
    ctaButtonText="Check If You Qualify"
    extraSection={<FaqSection />}
  />
);

export default Implants;
