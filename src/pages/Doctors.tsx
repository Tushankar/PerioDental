import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import DoctorCard from "@/components/DoctorCard";
import { ArrowRight, Star, Shield, Stethoscope, Calendar } from "lucide-react";
import drHai from "@/assets/dr-hai-nguyen.webp";
import drThomas from "@/assets/dr-thomas-nguyen.webp";

const doctors = [
  {
    name: "Hai H. Nguyen",
    title: "DDS, MS, PA",
    image: drHai,
    bio: "A periodontist with over 20 years of experience focused on advanced periodontics and dental implant therapy. Helping patients restore function, health, and confidence through surgical implant placement, regenerative treatments, and comprehensive periodontal care.",
    philosophy: "My approach is built on precision and evidence-based methods, paired with trust and clear communication. The best outcomes happen when advanced clinical expertise meets each patient's unique needs and goals.",
    careerSummary: "Practicing periodontics since 1997 — specializing in prevention, diagnosis, and treatment of periodontal disease and dental implant procedures. Leading his periodontal practice with decades of trusted clinical experience.",
    education: [
      { degree: "Master of Science in Periodontics", school: "Baylor College of Dentistry — 1997" },
      { degree: "Doctor of Dental Surgery (DDS)", school: "UT Health Science Center at Houston — 1994", note: "Graduated 6th in a class of 107" },
      { degree: "Pre-Dentistry, Business Administration", school: "University of Texas at Austin — 1990" },
    ],
    memberships: ["American Dental Association", "American Academy of Periodontology"],
    honors: [
      "Omicron Kappa Upsilon (National Dental Honor Society)",
      "Human Physiology – Honors",
      "Outstanding College Student Association",
      "Dean's List",
      "Dean's Honor List",
    ],
    closingNote: "Dr. Hai's long-standing commitment to periodontal excellence and patient-centered care has shaped decades of trusted service in the field of periodontics.",
  },
  {
    name: "Thomas Nguyen",
    title: "DDS, MS",
    image: drThomas,
    bio: "Combines advanced surgical training with modern digital technology to deliver precise, comfortable, and predictable periodontal and implant care. Focused on minimally invasive techniques and long-term patient outcomes.",
    education: [
      { degree: "Doctor of Dental Surgery", school: "UT Health San Antonio School of Dentistry" },
      { degree: "Master of Science & Certificate in Periodontics", school: "UT Health Houston School of Dentistry", note: "Advanced residency in implant surgery, regeneration & IV sedation" },
    ],
    licensure: [
      "Texas State Board of Dental Examiners",
      "Level 3 Moderate Sedation Permit",
      "LANAP Protocol — Certified Clinician",
      "Pinhole Surgical Technique — Certified",
      "Certified Laser Safety Officer",
      "BLS & ACLS Advanced Certification",
    ],
    memberships: [
      "American Academy of Periodontology",
      "Southwest Society of Periodontists",
      "Texas Dental Association",
      "Greater Houston Dental Society",
    ],
    expertise: {
      implantSystems: ["Straumann", "Nobel Biocare", "BioHorizons", "Neodent", "Zimmer"],
      software: ["DTX Studio", "BlueSkyBio", "CT-guided implant planning"],
    },
  },
];

const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "5,000+", label: "Successful Procedures" },
  { value: "2", label: "Board-Certified Specialists" },
  { value: "98%", label: "Patient Satisfaction" },
];

const Doctors = () => (
  <div>
    {/* Hero — Boxed Grid layout matching Index.tsx */}
    <section className="relative px-4 pb-4 md:px-6 md:pb-6 lg:px-8 pt-[88px] z-10 xl:px-12">
      <div className="relative border border-white/20 rounded-[2rem] overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-700 hover:border-white/30">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#8D2C08]/40 to-[#B54804]/20 hidden" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container-wide px-5 md:px-6 relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white">Specialist-Led Periodontal Care</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-[1.08] mb-5">
              Your Gums Deserve{" "}
              <span className="text-accent">Specialists,</span>{" "}
              Not Generalists.
            </h1>

            <p className="text-white/60 leading-relaxed mb-8 max-w-lg text-sm md:text-base">
              Two board-certified periodontists with decades of combined experience in implant surgery, gum disease treatment, and tissue regeneration. Get the precision care your case requires.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="rounded-xl px-8 min-h-[52px] text-base w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-1" />
                  Book a 1:1 Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right — Doctor previews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-4 justify-center lg:justify-end"
          >
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="relative group"
              >
                <div className="w-[160px] sm:w-[200px] md:w-[220px] rounded-2xl overflow-hidden border-2 border-primary-foreground/10 group-hover:border-accent/40 transition-colors duration-300">
                  <img
                    src={doc.image}
                    alt={`Dr. ${doc.name}`}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-4 pt-12">
                    <p className="font-heading font-bold text-white text-sm">Dr. {doc.name.split(" ")[0]}</p>
                    <p className="text-accent text-xs font-medium">{doc.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-foreground/[0.06] backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/10">
              <p className="font-heading font-extrabold text-accent text-2xl md:text-3xl">{s.value}</p>
              <p className="text-xs text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      </div>
    </section>

    {/* Why a Specialist */}
    <section className="section-padding">
      <div className="container-tight text-center mb-10">
        <ScrollReveal>
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Why It Matters</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Why Choose a Periodontist Over a General Dentist?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A periodontist completes 3+ additional years of surgical residency beyond dental school — focused exclusively on gum disease, bone regeneration, and implant placement.
          </p>
        </ScrollReveal>
      </div>
      <div className="container-wide grid sm:grid-cols-3 gap-4">
        {[
          { icon: Shield, title: "Advanced Surgical Training", desc: "3+ years of specialized residency in periodontal surgery, tissue grafting, and implant placement." },
          { icon: Star, title: "Higher Success Rates", desc: "Specialists achieve significantly better long-term outcomes for implants and gum disease treatment." },
          { icon: Stethoscope, title: "Complex Case Expertise", desc: "From severe bone loss to full-mouth rehabilitation — trained to handle cases general dentists refer out." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="bg-primary/[0.03] rounded-2xl p-6 border border-border/30 h-full hover:border-accent/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary text-[15px] mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Doctor Profiles */}
    <DoctorCard {...doctors[0]} />
    <DoctorCard {...doctors[1]} reversed />

    {/* Final CTA */}
    <section className="section-padding gradient-navy text-center">
      <ScrollReveal>
        <div className="container-tight max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-white">Limited Consultation Slots</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get a 1:1 Consultation With Your Specialist
          </h2>
          <p className="text-white/60 mb-8 text-sm md:text-base">
            Discuss your case directly with a board-certified periodontist. No referrals needed. No obligation.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="rounded-xl px-10 min-h-[52px] text-base">
              Book Your 1:1 Consultation <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </div>
);

export default Doctors;
