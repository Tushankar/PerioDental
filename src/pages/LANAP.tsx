import { Zap, Clock, Heart, Bone, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceLanap from "@/assets/service-lanap.jpg";
import lanapLaser from "@/assets/lanap-laser.jpg";
import lanapFiber from "@/assets/lanap-fiber.jpg";
import lanapResults from "@/assets/lanap-results.jpg";

const lanapGallery = [
  { src: serviceLanap, alt: "LANAP laser treatment" },
  { src: lanapLaser, alt: "LANAP laser device" },
  { src: lanapFiber, alt: "Laser fiber technology" },
  { src: lanapResults, alt: "Treatment results" },
];

const services = [
  { icon: Clock, title: "Back to Normal in 24 Hours", desc: "Most patients return to work and daily activities the next day. Traditional surgery takes weeks." },
  { icon: Heart, title: "Minimal Pain, No Stitches", desc: "The laser seals tissue naturally. No scalpels, no sutures, significantly less post-op discomfort." },
  { icon: Bone, title: "Regenerates Lost Bone", desc: "LANAP is the only FDA-cleared protocol proven to stimulate new bone growth around diseased teeth." },
  { icon: Shield, title: "FDA-Cleared Protocol", desc: "Not an off-label use. LANAP is specifically cleared by the FDA for treating periodontal disease." },
  { icon: Sparkles, title: "Saves Teeth Others Would Extract", desc: "Teeth previously considered hopeless can often be saved with LANAP when caught in time." },
  { icon: Zap, title: "Targets Only Diseased Tissue", desc: "The laser distinguishes between healthy and infected tissue. Only the disease gets removed." },
];

const features = [
  { title: "Selective Bacterial Elimination", desc: "The laser wavelength targets dark, diseased tissue and bacteria — leaving healthy gum untouched." },
  { title: "Natural Blood Clot Seal", desc: "Laser energy creates a stable fibrin clot that protects the surgical site and accelerates healing." },
  { title: "Measurable Bone Regrowth", desc: "Post-treatment X-rays consistently show new bone formation — something traditional surgery rarely achieves." },
];

const StepsSection = () => {
  const steps = [
    { num: "01", title: "Eliminate Infection", desc: "Laser energy selectively destroys bacteria and diseased tissue below the gumline." },
    { num: "02", title: "Seal & Protect", desc: "A natural blood clot forms instantly, sealing the pocket and protecting healing tissue." },
    { num: "03", title: "Regenerate Bone", desc: "Your body's healing response rebuilds bone and connective tissue over the following months." },
    { num: "04", title: "Stabilize Results", desc: "Teeth return to Within Normal Limits — stable, secure, and measurably healthier." },
  ];

  return (
    <section className="section-padding">
      <div className="container-tight text-center mb-10 md:mb-12">
        <ScrollReveal>
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">The LANAP Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">Four Steps. No Scalpels. Real Bone Growth.</h2>
        </ScrollReveal>
      </div>
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-primary/[0.04] rounded-xl md:rounded-2xl p-5 md:p-6 text-center h-full"
            >
              <span className="text-4xl font-heading font-extrabold text-accent/20 block mb-3">{s.num}</span>
              <h3 className="font-heading font-bold text-primary mb-2 text-sm md:text-base">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

const LANAP = () => (
  <ServicePageLayout
    badge="LANAP Certified Clinic"
    title="Save Your Teeth Without Surgery. Regrow Bone Without Grafting."
    subtitle="LANAP laser treatment eliminates gum infection, regenerates bone, and gets you back to normal in 24 hours — no cutting, no stitches, no downtime."
    ctaText="Am I a LANAP Candidate?"
    galleryImages={lanapGallery}
    services={services}
    servicesTitle="Why Patients Choose LANAP Over Surgery"
    servicesSubtitle="The Advantages"
    features={features}
    featuresTitle="How LANAP Actually Works"
    featuresDesc="This isn't a generic laser cleaning. LANAP uses a specific wavelength that selectively destroys disease while stimulating bone regrowth."
    featuresImage={lanapLaser}
    stats={[
      { value: "24hr", label: "Recovery Time" },
      { value: "98%", label: "Success Rate" },
      { value: "0", label: "Sutures Required" },
    ]}
    ctaTitle="Told You Need Gum Surgery? Ask About LANAP First."
    ctaDesc="Many patients referred for traditional surgery qualify for LANAP instead — with faster recovery and better outcomes."
    ctaButtonText="Find Out If LANAP Is Right for You"
    extraSection={<StepsSection />}
  />
);

export default LANAP;
