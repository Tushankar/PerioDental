import { Search, Scissors, Bone, Heart, Layers, Shield } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import servicePerio from "@/assets/service-periodontics.jpg";
import perioxray from "@/assets/perio-xray.jpg";
import perioTreatment from "@/assets/perio-treatment.jpg";
import perioAnatomy from "@/assets/perio-anatomy.jpg";

const galleryImages = [
  { src: servicePerio, alt: "Periodontal examination" },
  { src: perioxray, alt: "Digital dental imaging" },
  { src: perioTreatment, alt: "Gum treatment procedure" },
  { src: perioAnatomy, alt: "Tooth and gum anatomy" },
];

const services = [
  { icon: Search, title: "Periodontal Diagnosis", desc: "Identify active infection, measure bone loss, and map the full extent of disease before any treatment begins." },
  { icon: Scissors, title: "Scaling & Root Planing", desc: "Deep cleaning below the gumline removes bacteria at the source — stopping the infection cycle." },
  { icon: Layers, title: "Gum Recession Surgery", desc: "Exposed roots lead to sensitivity and further decay. We restore tissue coverage and protect vulnerable areas." },
  { icon: Bone, title: "Bone Grafting", desc: "Rebuild jaw structure destroyed by disease. Stronger bone means stronger teeth — or a solid foundation for implants." },
  { icon: Heart, title: "Tissue Regeneration", desc: "Stimulate your body's natural healing to regrow gum and bone lost to infection." },
  { icon: Shield, title: "Maintenance Programs", desc: "Disease doesn't stay away on its own. Custom schedules keep your results stable for years, not months." },
];

const features = [
  { title: "Root-Cause Treatment, Not Band-Aids", desc: "We diagnose the source of infection and treat it — not just the symptoms you can see." },
  { title: "Measurable, Trackable Progress", desc: "Every visit includes clinical measurements so you can see exactly how your condition is improving." },
  { title: "Built for Long-Term Stability", desc: "Our treatment plans are designed to last. We prioritize lasting outcomes over quick fixes." },
];

const Periodontics = () => (
  <ServicePageLayout
    badge="Periodontal Specialists"
    title="Your Gums Are Infected. We Treat the Root Cause."
    subtitle="Bleeding gums, receding tissue, and bone loss don't resolve with brushing. Specialized periodontal treatment stops the damage and rebuilds what's been lost."
    ctaText="Fix My Gum Problem"
    galleryImages={galleryImages}
    services={services}
    servicesTitle="What We Treat"
    servicesSubtitle="Periodontal Services"
    features={features}
    featuresTitle="Why General Cleanings Aren't Enough"
    featuresDesc="Gum disease lives below the gumline where regular cleanings can't reach. Specialist-level care targets the infection where it actually exists."
    featuresImage={perioTreatment}
    stats={[
      { value: "20+", label: "Years Treating Gum Disease" },
      { value: "5,000+", label: "Cases Resolved" },
      { value: "98%", label: "Stabilization Rate" },
    ]}
    ctaTitle="Don't Wait Until You Lose a Tooth."
    ctaDesc="Gum disease progresses silently. Get a specialist evaluation before the damage becomes irreversible."
    ctaButtonText="Get a Personalized Treatment Plan"
  />
);

export default Periodontics;
