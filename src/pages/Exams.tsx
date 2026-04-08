import { Search, Sparkles, ClipboardList, Shield, Heart, Eye } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceExams from "@/assets/service-exams.jpg";
import examsSmile from "@/assets/exams-smile.jpg";
import examsCleaning from "@/assets/exams-cleaning.jpg";
import examsDigital from "@/assets/exams-digital.jpg";

const examsGallery = [
  { src: serviceExams, alt: "Comprehensive dental examination" },
  { src: examsSmile, alt: "Healthy patient after cleaning" },
  { src: examsCleaning, alt: "Professional teeth cleaning" },
  { src: examsDigital, alt: "Digital dental imaging" },
];

const services = [
  { icon: Search, title: "Comprehensive Periodontal Exam", desc: "Full evaluation of teeth, gums, bone, and oral tissues. We measure pocket depths, check for recession, and identify active disease." },
  { icon: Sparkles, title: "Professional Deep Cleaning", desc: "Remove plaque and tartar that daily brushing can't reach — especially below the gumline where infection starts." },
  { icon: Eye, title: "Digital X-Ray & 3D Imaging", desc: "Low-radiation digital scans reveal hidden cavities, bone loss, and infections invisible to the naked eye." },
  { icon: ClipboardList, title: "Clear Treatment Roadmap", desc: "Leave with a specific plan: what's healthy, what needs attention, timeline, and costs — no ambiguity." },
  { icon: Shield, title: "Oral Cancer Screening", desc: "Early detection saves lives. Every exam includes visual and manual screening for abnormal tissue changes." },
  { icon: Heart, title: "Custom Prevention Protocol", desc: "Personalized home care instructions based on your specific risk factors — not generic advice." },
];

const features = [
  { title: "Catch Problems at $200, Not $20,000", desc: "A cavity caught early is a simple filling. The same cavity ignored becomes a root canal, crown, or extraction." },
  { title: "Specialist-Level Diagnostics", desc: "Periodontists see things general dentists miss — especially early bone loss and hidden gum disease." },
  { title: "Comfortable, Efficient Visits", desc: "We respect your time and your comfort. Thorough exams without unnecessary procedures or upsells." },
];

const Exams = () => (
  <ServicePageLayout
    badge="Preventive & Diagnostic Care"
    title="One Visit Can Save You Thousands in Future Treatment."
    subtitle="Most dental problems are painless until they're expensive. A comprehensive exam catches issues when they're small, simple, and affordable to fix."
    ctaText="Book My Check-Up"
    galleryImages={examsGallery}
    services={services}
    servicesTitle="What's Included in Every Visit"
    servicesSubtitle="Exam & Cleaning"
    features={features}
    featuresTitle="Prevention Is the Smartest Investment"
    featuresDesc="Patients who get regular specialist exams spend 10x less on dental work over their lifetime. The math isn't complicated."
    featuresImage={examsCleaning}
    stats={[
      { value: "2x", label: "Yearly Visits Recommended" },
      { value: "100%", label: "Digital Imaging" },
      { value: "30min", label: "Average Visit" },
    ]}
    ctaTitle="When Was Your Last Real Exam?"
    ctaDesc="Not a quick look with a mirror. A thorough, specialist-level evaluation that actually finds problems before they find you."
    ctaButtonText="Schedule My Exam"
  />
);

export default Exams;
