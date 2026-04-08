import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Shield, Award, Droplets, CircleDot, Bone, Utensils, Search, Scissors, Heart, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useState } from "react";

import smileAfter from "@/assets/smile-after.jpg";
import smileBefore from "@/assets/smile-before.jpg";
import drHai from "@/assets/dr-hai-nguyen.webp";
import drThomas from "@/assets/dr-thomas-nguyen.webp";
import servicePerio from "@/assets/service-periodontics.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceLanap from "@/assets/service-lanap.jpg";
import serviceExams from "@/assets/service-exams.jpg";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import patient4 from "@/assets/patient-4.jpg";
import patient5 from "@/assets/patient-5.jpg";
import patient6 from "@/assets/patient-6.jpg";
import patient7 from "@/assets/patient-7.jpg";

const problems = [
  { icon: Droplets, title: "Bleeding When Brushing", desc: "Blood on your toothbrush isn't normal. It's the first sign of active gum infection." },
  { icon: CircleDot, title: "Loose or Shifting Teeth", desc: "Your bone is dissolving beneath the gumline. Without treatment, tooth loss follows." },
  { icon: Bone, title: "Jaw Bone Deterioration", desc: "Once bone is lost, it doesn't grow back on its own. Every month of delay matters." },
  { icon: Utensils, title: "Pain While Chewing", desc: "If eating is uncomfortable, infection or structural damage is already advanced." },
];

const services = [
  {
    title: "Periodontics",
    desc: "Bleeding gums, receding tissue, bone loss — we treat the disease, not just the symptoms.",
    link: "/periodontics",
    image: servicePerio,
    cta: "Fix My Gum Problem",
  },
  {
    title: "Dental Implants",
    desc: "Missing teeth change how you eat, speak, and feel. Implants restore all three — permanently.",
    link: "/implants",
    image: serviceImplants,
    cta: "See If You Qualify",
  },
  {
    title: "LANAP Laser",
    desc: "Regenerate bone and save teeth without scalpels or sutures. Back to normal in 24 hours.",
    link: "/lanap",
    image: serviceLanap,
    cta: "Learn About LANAP",
  },
  {
    title: "Exams & Cleaning",
    desc: "Catch problems before they become painful and expensive. One visit can save you thousands.",
    link: "/exams",
    image: serviceExams,
    cta: "Book a Check-Up",
  },
];

const Index = () => {
  const [eligibility, setEligibility] = useState({ teeth: "", bleeding: "", budget: "" });
  const [showResult, setShowResult] = useState(false);

  return (
    <div>
      {/* HERO — CONVERSION CRITICAL */}
      <section className="relative mt-[64px] overflow-hidden bg-background">
        <div className="container-wide px-4 md:px-6 relative z-10 py-6 md:py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-stretch min-h-[60vh] lg:min-h-[75vh]">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-primary/[0.06] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col justify-between"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 card-shadow mb-6 md:mb-8"
                >
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-semibold text-primary">Specialist-Led Care · 7,000+ Procedures</span>
                </motion.div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-heading font-extrabold text-primary leading-[1.08] mb-4 md:mb-5">
                  Stop Gum Disease Before It Costs You Your Teeth.
                </h1>

                <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-md text-sm md:text-base">
                  Specialized periodontal and implant care for patients dealing with bleeding gums, bone loss, and missing teeth — treated with precision and long-term results.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10"
                >
                  <Link to="/contact">
                    <Button variant="hero-primary" size="lg" className="rounded-xl px-8 min-h-[48px] w-full sm:w-auto">Book Your Consultation</Button>
                  </Link>
                  <a href="#eligibility">
                    <Button variant="hero-secondary" size="lg" className="rounded-xl px-8 min-h-[48px] w-full sm:w-auto">Check If You're a Candidate</Button>
                  </a>
                </motion.div>
              </div>

              {/* Bottom mini cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-2 gap-3 md:gap-4"
              >
                <div className="bg-accent/15 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col gap-2 md:gap-3 relative overflow-hidden">
                  <p className="font-heading font-bold text-primary text-xs md:text-sm leading-tight">Board-Certified<br />Periodontists</p>
                  <Link to="/doctors" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" />
                  </Link>
                  <img src={drHai} alt="Dr. Hai Nguyen, DDS MS" className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top opacity-80" loading="lazy" />
                </div>
                <div className="bg-accent/10 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col gap-2 md:gap-3 relative overflow-hidden">
                  <p className="font-heading font-bold text-primary text-xs md:text-sm leading-tight">DDS + MS<br />Trained Specialists</p>
                  <Link to="/doctors" className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" />
                  </Link>
                  <img src={drThomas} alt="Dr. Thomas Nguyen, DDS MS" className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top opacity-80" loading="lazy" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative flex-1 min-h-[280px] md:min-h-[400px]">
                <img src={smileAfter} alt="Patient smiling after successful implant procedure" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 grid grid-cols-3 gap-2 md:gap-3"
              >
                {[
                  { value: "20+", label: "Years in Practice" },
                  { value: "7,000+", label: "Successful Cases" },
                  { value: "5.0", label: "Google Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background/95 backdrop-blur-md rounded-lg md:rounded-xl px-2 md:px-4 py-2 md:py-3 text-center">
                    <p className="font-heading font-extrabold text-primary text-sm md:text-lg leading-tight">{stat.value}</p>
                    <p className="text-[10px] md:text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION (Emotional Trigger) */}
      <section className="section-padding gradient-navy overflow-hidden">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Recognize the Signs</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-[1.1] mb-5 md:mb-6">
              These Symptoms Won't Resolve on Their Own.
            </h2>
            <p className="text-primary-foreground/60 mb-4 max-w-md text-sm md:text-base">
              Every week you wait, the damage progresses. Gum disease is silent, irreversible, and the #1 cause of adult tooth loss.
            </p>
            <p className="text-primary-foreground/80 font-heading font-semibold text-sm mb-6 md:mb-8">
              We don't just clean teeth. We treat the root cause.
            </p>
            <Link to="/contact">
              <Button variant="gold" className="min-h-[48px]">Get a Personalized Treatment Plan <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl md:rounded-2xl p-4 md:p-5 hover-lift h-full">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-destructive/20 flex items-center justify-center mb-3">
                    <p.icon className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground text-xs md:text-sm mb-1.5">{p.title}</h3>
                  <p className="text-[11px] md:text-xs text-primary-foreground/50 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (Remove Fear → Increase Bookings) */}
      <section className="section-padding relative">
        <div className="container-tight text-center mb-10 md:mb-16">
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-4">From Diagnosis to Results in 4 Steps</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">No guesswork. No unnecessary procedures. A clear path from day one.</p>
          </ScrollReveal>
        </div>
        <div className="container-wide max-w-5xl mx-auto px-5">
          <div className="relative">
            <motion.div
              className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{ background: "linear-gradient(90deg, hsl(33 38% 64% / 0), hsl(33 38% 64% / 0.4), hsl(33 38% 64% / 0))" }}
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Search, num: 1, title: "Consultation & Diagnosis", desc: "3D imaging and thorough evaluation to understand exactly what's happening." },
                { icon: Scissors, num: 2, title: "Personalized Treatment Plan", desc: "A clear roadmap tailored to your condition, goals, and timeline." },
                { icon: Heart, num: 3, title: "Precision Procedure", desc: "Minimally invasive treatment by board-certified specialists." },
                { icon: Shield, num: 4, title: "Recovery & Maintenance", desc: "Ongoing care that keeps your results stable for years." },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-5 relative z-10 bg-background"
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.15, type: "spring", stiffness: 300 }}
                    >
                      {s.num}
                    </motion.span>
                    <s.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-primary text-sm md:text-base mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (Problem → What We Do → Result) */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight text-center mb-10 md:mb-16">
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Specialized Treatment</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Targeted Solutions. Measurable Outcomes.</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">Every service follows one principle: diagnose accurately, treat precisely, deliver lasting results.</p>
          </ScrollReveal>
        </div>
        <div className="container-wide grid sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link to={s.link} className="group block">
                <div className="rounded-xl md:rounded-2xl overflow-hidden card-shadow hover-lift bg-background grid md:grid-cols-2 h-full">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-primary text-lg md:text-xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 md:mb-5 leading-relaxed">{s.desc}</p>
                    <span className="text-accent font-semibold text-sm flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      {s.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER — Proof */}
      <section className="section-padding">
        <div className="container-tight text-center mb-10 md:mb-12">
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Documented Results</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">Real Patients. Real Outcomes.</h2>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="container-tight max-w-2xl mx-auto">
            <BeforeAfterSlider beforeImage={smileBefore} afterImage={smileAfter} />
          </div>
        </ScrollReveal>
      </section>

      {/* SOCIAL PROOF — Conversion Booster */}
      <section className="section-padding bg-muted/30 overflow-hidden">
        <div className="container-wide relative mb-8">
          <div className="flex justify-center items-end gap-2 md:gap-4 overflow-hidden max-w-4xl mx-auto">
            {[
              { img: patient1, size: "w-14 h-20 md:w-24 md:h-32", mt: "mt-8" },
              { img: patient2, size: "w-16 h-24 md:w-28 md:h-36", mt: "mt-0" },
              { img: patient3, size: "w-14 h-20 md:w-24 md:h-34", mt: "mt-4" },
              { img: patient4, size: "w-20 h-24 md:w-32 md:h-40", mt: "-mt-2" },
              { img: patient5, size: "w-16 h-20 md:w-28 md:h-36", mt: "mt-6" },
              { img: patient6, size: "w-14 h-20 md:w-24 md:h-32", mt: "mt-2" },
              { img: patient7, size: "w-16 h-24 md:w-28 md:h-38", mt: "mt-0" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${item.size} ${item.mt} rounded-lg md:rounded-xl overflow-hidden shrink-0 shadow-md`}
              >
                <img src={item.img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container-tight text-center">
          <ScrollReveal>
            <span className="inline-block bg-background rounded-full px-4 py-1.5 text-sm font-medium text-primary card-shadow mb-6">
              Patient Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-[1.1] mb-2">
              They Came in With Pain.
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-heading text-muted-foreground/50 mb-5 md:mb-6">
              They Left With Confidence.
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm md:text-base">
              Every review is from a verified patient who trusted us with their oral health — and got measurable results.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-8 mb-8">
            {[
              { name: "Maria G.", text: "I was losing my teeth to gum disease. Within months of treatment, everything changed. I can finally eat without pain again.", tag: "Periodontal Treatment" },
              { name: "James T.", text: "LANAP saved my teeth when I was told I'd need full extractions. No cutting, no stitches. I was back at work the next day.", tag: "LANAP Laser" },
              { name: "Sarah K.", text: "I thought I'd need dentures at 52. Instead, I got implants that look and feel completely real. Best decision of my life.", tag: "Dental Implants" },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 card-shadow text-left h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-bold text-primary text-sm">{t.name}</p>
                    <span className="text-[10px] font-medium text-accent bg-accent/10 rounded-full px-2 py-0.5">{t.tag}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-background rounded-full px-5 py-2.5 card-shadow">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" width={16} height={16} />
              <span className="text-primary font-semibold text-sm">5.0 on Google</span>
              <span className="text-muted-foreground text-sm">• 200+ verified reviews</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SPECIALIST ADVANTAGE — Modern Redesign */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-5"
              >
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Specialist Advantage</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-extrabold text-primary leading-[1.1] mb-4">
                Why Patients Choose a Periodontist<br className="hidden md:block" />
                <span className="text-accent"> Over a General Dentist</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                A periodontist completes 3+ additional years of surgical residency — focused exclusively on gum disease, bone regeneration, and implant surgery.
              </p>
            </ScrollReveal>
          </div>

          {/* Main grid: Advantages + Doctors */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
            {/* Left: Advantage cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Award, title: "3+ Years Advanced Training", desc: "Beyond dental school. Focused exclusively on gums, bone, and implant surgery.", stat: "3+ yrs" },
                { icon: Shield, title: "Higher Success Rates", desc: "Specialists achieve significantly better implant success and long-term outcomes.", stat: "98%" },
                { icon: CheckCircle2, title: "7,000+ Procedures", desc: "Complex periodontal and implant cases — not general check-ups.", stat: "7K+" },
                { icon: Clock, title: "Faster Recovery", desc: "Precision diagnosis and minimally invasive techniques mean fewer complications.", stat: "24hr" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-primary/[0.03] border border-border/30 rounded-2xl p-5 md:p-6 h-full hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-heading font-extrabold text-accent/30 text-2xl group-hover:text-accent/50 transition-colors">{item.stat}</span>
                    </div>
                    <h3 className="font-heading font-bold text-primary text-[15px] mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right: Doctor photos + WhatsApp CTA */}
            <ScrollReveal delay={0.2}>
              <div className="sticky top-28 space-y-5">
                {/* Stacked doctor photos */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="rounded-2xl overflow-hidden"
                    >
                      <img src={drHai} alt="Dr. Hai Nguyen" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="rounded-2xl overflow-hidden mt-6"
                    >
                      <img src={drThomas} alt="Dr. Thomas Nguyen" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                    </motion.div>
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-xl px-5 py-3 card-shadow border border-border/50 flex items-center gap-3"
                  >
                    <div className="flex -space-x-2">
                      <img src={drHai} alt="" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                      <img src={drThomas} alt="" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-primary text-xs">Board-Certified</p>
                      <p className="text-[10px] text-muted-foreground">DDS, MS Specialists</p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Link to="/contact" className="block">
                    <Button variant="gold" size="lg" className="w-full rounded-xl min-h-[52px] text-base">
                      Book a 1:1 Consultation <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/18321234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20with%20a%20periodontal%20specialist."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" size="lg" className="w-full rounded-xl min-h-[52px] text-base border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/50 gap-2.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Book via WhatsApp
                    </Button>
                  </a>
                  <p className="text-center text-[11px] text-muted-foreground">No obligation · Response within 2 hours</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY FUNNEL */}
      <section id="eligibility" className="section-padding bg-muted/50">
        <div className="container-tight max-w-xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Takes Less Than 30 Seconds</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3">Check If You're a Candidate</h2>
            <p className="text-muted-foreground text-sm mb-6 md:mb-8">No obligation. No commitment. Just answers.</p>

            {!showResult ? (
              <div className="bg-background rounded-xl md:rounded-2xl p-6 md:p-8 card-shadow text-left space-y-5 md:space-y-6">
                <div>
                  <label className="block font-heading font-semibold text-primary mb-3 text-sm">Are you missing any teeth?</label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, teeth: v })} className={`flex-1 min-h-[48px] rounded-xl border-2 font-semibold text-sm transition-all active:scale-[0.97] ${eligibility.teeth === v ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-primary mb-3 text-sm">Do your gums bleed when brushing?</label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, bleeding: v })} className={`flex-1 min-h-[48px] rounded-xl border-2 font-semibold text-sm transition-all active:scale-[0.97] ${eligibility.bleeding === v ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-primary mb-3 text-sm">Estimated treatment budget?</label>
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {["< $5K", "$5K–$15K", "$15K+"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, budget: v })} className={`min-h-[48px] rounded-xl border-2 font-semibold text-xs md:text-sm transition-all active:scale-[0.97] ${eligibility.budget === v ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <Button variant="gold" className="w-full min-h-[48px]" size="lg" onClick={() => setShowResult(true)} disabled={!eligibility.teeth || !eligibility.bleeding || !eligibility.budget}>
                  Check My Eligibility
                </Button>
              </div>
            ) : (
              <div className="bg-background rounded-xl md:rounded-2xl p-6 md:p-8 card-shadow">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">You Qualify for Treatment</h3>
                <p className="text-muted-foreground text-sm mb-6">Based on your responses, our specialists can help. The next step is a no-obligation consultation to build your treatment plan.</p>
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full min-h-[48px]">Book Your Consultation <ArrowRight className="w-4 h-4 ml-1" /></Button>
                </Link>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Social Media Follow */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container-wide px-5 md:px-6 mb-8 md:mb-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-2 block">Follow Along</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">Real Cases. Real Transformations.</h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm">Patient before/afters, procedure walkthroughs, and dental tips you won't find anywhere else.</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-5 md:px-6 snap-x snap-mandatory scrollbar-hide">
            {[
              { platform: "Instagram", handle: "@perioimplant", color: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]", followers: "2.4K", desc: "Before & after transformations", img: patient1, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              { platform: "Facebook", handle: "PerioDental Houston", color: "from-[#1877F2] to-[#0C63D4]", followers: "5.1K", desc: "Community updates & tips", img: patient3, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { platform: "YouTube", handle: "PerioDental", color: "from-[#FF0000] to-[#CC0000]", followers: "890", desc: "Procedure walkthroughs", img: patient4, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              { platform: "TikTok", handle: "@perioimplant", color: "from-[#000000] to-[#25F4EE]", followers: "3.2K", desc: "Quick dental tips & reels", img: patient5, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
              { platform: "Google", handle: "5.0 ★ Rating", color: "from-[#4285F4] via-[#34A853] to-[#FBBC05]", followers: "200+", desc: "Verified patient reviews", img: patient2, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
            ].map((social, i) => (
              <motion.a
                key={social.platform}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="snap-start shrink-0 w-[220px] md:w-[280px] group"
              >
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden h-[280px] md:h-[320px] card-shadow">
                  <img src={social.img} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${social.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {social.icon}
                      </div>
                      <span className="text-[10px] md:text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">{social.followers} followers</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base md:text-lg mb-0.5">{social.platform}</h3>
                      <p className="text-white/80 text-xs md:text-sm mb-1">{social.handle}</p>
                      <p className="text-white/60 text-[11px] md:text-xs">{social.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
            <div className="shrink-0 w-1" />
          </div>
          <div className="absolute top-0 right-0 w-16 md:w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* URGENCY + CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-tight max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Gum Disease Gets Worse Every Week You Wait.
            </h2>
            <p className="text-primary-foreground/60 mb-2 text-sm md:text-base">
              Bone loss is irreversible once it progresses. Don't wait until it becomes painful — or expensive.
            </p>
            <div className="mt-6 md:mt-8">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="min-h-[48px]">Book Your Consultation Today <ArrowRight className="w-4 h-4 ml-1" /></Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
