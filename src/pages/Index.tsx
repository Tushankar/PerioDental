import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import drHai from "@/assets/dr-hai-nguyen.webp";
import drThomas from "@/assets/dr-thomas-nguyen.webp";
import { Star, Shield, Award, Droplets, CircleDot, Bone, Utensils, Search, Scissors, Heart, ArrowRight, Clock, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import smileAfter from "@/assets/smile-after.jpg";
import smileBefore from "@/assets/smile-before.jpg";
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
  { title: "Periodontics", desc: "Bleeding gums, receding tissue, bone loss — we treat the disease, not just the symptoms.", link: "/periodontics", image: servicePerio, cta: "Fix My Gum Problem" },
  { title: "Dental Implants", desc: "Missing teeth change how you eat, speak, and feel. Implants restore all three — permanently.", link: "/implants", image: serviceImplants, cta: "See If You Qualify" },
  { title: "LANAP Laser", desc: "Regenerate bone and save teeth without scalpels or sutures. Back to normal in 24 hours.", link: "/lanap", image: serviceLanap, cta: "Learn About LANAP" },
  { title: "Exams & Cleaning", desc: "Catch problems before they become painful and expensive. One visit can save you thousands.", link: "/exams", image: serviceExams, cta: "Book a Check-Up" },
];

const Index = () => {
  const [eligibility, setEligibility] = useState({ teeth: "", bleeding: "", budget: "" });
  const [showResult, setShowResult] = useState(false);
  
  // Simple clock logic
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Madrid",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " GMT+1"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] h-screen lg:overflow-hidden bg-gradient-to-br from-[#8D2C08] to-[#B54804] text-white font-body selection:bg-white/20">
      
      {/* Top Row (Header) - Left Column */}
      {/* Hero Main Content - Left Column */}
      <div className="border-r border-white/10 relative flex flex-col justify-between h-auto lg:h-[calc(100vh-88px)] pt-[72px] lg:pt-[88px] overflow-hidden">
        
        {/* Glowing Background Effect behind the tooth */}
        <div className="absolute top-1/2 left-2/3 lg:left-[70%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFD700]/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] h-full relative z-10 p-6 lg:p-14 pt-4 lg:pt-6">
          
          {/* Main Text Content */}
          <div className="flex flex-col justify-start h-full z-20 gap-8 pt-6 lg:pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-fit border border-white/20">
                <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                <span className="text-sm font-semibold text-white">Specialist-Led Care · 7,000+ Procedures</span>
              </div>
              <p className="text-white/80 text-[16px] leading-relaxed max-w-sm font-light tracking-wide mt-1">
                Specialized periodontal and implant care for patients dealing with bleeding gums, bone loss, and missing teeth — treated with precision and long-term results.
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-[75px] font-heading font-extrabold text-white leading-[1.05] mb-4 tracking-[-0.03em] max-w-xl"
              style={{ paddingBottom: '0.1em' }}
            >
              <span className="whitespace-nowrap">Stop Gum Disease</span> Before It Costs You Your Teeth.
            </motion.h1>
          </div>

          {/* Central Image (Glowing Implant) */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-center justify-center pointer-events-none overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="relative w-full h-[120%] -mr-16 flex items-center justify-center"
            >
              <div className="relative flex flex-col items-center drop-shadow-[0_0_30px_rgba(255,215,0,0.15)] translate-y-4 lg:translate-y-8 scale-100 lg:scale-110 hover:scale-[1.12] transition-transform duration-700">
                <img 
                  src="/Dental%20implant%20with%20glowing%20tooth%20crown.png" 
                  alt="Glowing Dental Implant" 
                  className="w-[110%] max-w-[350px] lg:max-w-[550px] object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Middle Row (Hero Main Content) - Right Sidebar */}
      <div className="relative flex flex-col p-6 lg:p-10 justify-between col-span-1 lg:h-[calc(100vh-88px)] pt-[72px] lg:pt-[88px] border-t-0">
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-[18px] leading-relaxed max-w-[250px] font-light mt-12 lg:mt-20"
        >
          Select from our team<br />
          of highly skilled and<br />
          experienced dentists
        </motion.p>

        <div className="mt-12 lg:mt-auto">
          <div className="flex items-center text-white/50 text-[13px] tracking-wide mb-6">
            Next <span className="ml-1 opacity-70">›</span>
          </div>
          
          <div className="flex gap-4 scrollbar-hide w-[120%] -mr-10">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="relative w-40 h-[220px] shrink-0 bg-black/20 rounded-sm overflow-hidden"
            >
              <img src={drHai} alt="Clara Collins" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-opacity hover:grayscale-0 hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-[13px] font-medium text-white/90">
                Clara Collins
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative w-40 h-[220px] shrink-0 bg-black/20 rounded-sm overflow-hidden"
            >
              <img src={drThomas} alt="Mason" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-opacity hover:grayscale-0 hover:opacity-100 object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-[13px] font-medium text-white/90">
                Mason
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Footer Grid Layer */}
      <div className="border-t border-r border-white/10 h-[88px] grid grid-cols-2 px-6 lg:px-10 items-center text-[13px] text-white/60 font-body col-span-1 lg:col-span-1">
        <div>
          <div className="mb-0.5 opacity-80">Best Dentistry</div>
          <div>2025</div>
        </div>
        <div className="pl-4">
          <div className="mb-0.5 opacity-80">Barcelona, Spain</div>
          <div>{time || "17:17:03 GMT+1"}</div>
        </div>
      </div>
      
      <div className="border-t border-white/10 h-[88px] flex flex-col justify-center px-6 lg:px-10 text-[13px] text-white/60 col-span-1 lg:col-span-1">
        <div className="mb-0.5 opacity-80">Advanced Dental</div>
        <div>Technologies</div>
      </div>

    </div>

      {/* PAIN → SOLUTION (Emotional Trigger) */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -ml-40 -mb-40" />
        
        <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-semibold text-xs tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Recognize the Signs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              These Symptoms Won't <br className="hidden md:block" />
              <span className="text-accent underline decoration-white/20 underline-offset-8">Resolve</span> on Their Own.
            </h2>
            <p className="text-white/70 mb-6 max-w-md text-base md:text-lg leading-relaxed">
              Every week you wait, the damage progresses. Gum disease is silent, irreversible, and the <span className="text-white font-semibold">#1 cause of adult tooth loss.</span>
            </p>
            <div className="flex items-start gap-4 mb-8 md:mb-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
              <div className="w-1.5 h-12 bg-accent rounded-full mt-1" />
              <p className="text-white/90 font-heading font-medium text-sm md:text-base italic">
                "We don't just clean teeth. We treat the root cause."
              </p>
            </div>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="min-h-[56px] px-8 text-base shadow-[0_0_20px_rgba(255,215,0,0.15)] group">
                Get Your Personalized Plan 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 h-full flex flex-col items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-destructive/40 group-hover:bg-destructive/10 transition-colors duration-500">
                    <p.icon className="w-6 h-6 md:w-7 md:h-7 text-destructive transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding relative">
        <div className="container-tight text-center mb-12 md:mb-20">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-semibold text-xs tracking-wider uppercase mb-5">How It Works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">From Diagnosis to Results in 4 Steps</h2>
            <p className="text-white/60 max-w-lg mx-auto text-base md:text-lg">No guesswork. No unnecessary procedures. A clear path from day one.</p>
          </ScrollReveal>
        </div>
        <div className="container-wide max-w-5xl mx-auto px-5">
          <div className="relative">
            <motion.div
              className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.4), transparent)" }}
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {[
                { icon: Search, num: 1, title: "Consultation & Diagnosis", desc: "3D imaging and thorough evaluation to understand exactly what's happening." },
                { icon: Scissors, num: 2, title: "Personalized Treatment Plan", desc: "A clear roadmap tailored to your condition, goals, and timeline." },
                { icon: Heart, num: 3, title: "Precision Procedure", desc: "Minimally invasive treatment by board-certified specialists." },
                { icon: Shield, num: 4, title: "Recovery & Maintenance", desc: "Ongoing care that keeps your results stable for years." },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  className="group relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:bg-white/10">
                    <span
                      className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110"
                    >
                      {s.num}
                    </span>
                    <s.icon className="w-7 h-7 md:w-8 md:h-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-extrabold text-white text-base md:text-lg mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed text-center max-w-[200px] sm:max-w-none group-hover:text-white/70 transition-colors duration-300">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding relative">
        <div className="container-tight text-center mb-12 md:mb-20">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-semibold text-xs tracking-wider uppercase mb-5">Specialized Treatment</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Targeted Solutions. Measurable Outcomes.</h2>
            <p className="text-white/60 max-w-lg mx-auto text-base md:text-lg">Every service follows one principle: diagnose accurately, treat precisely, deliver lasting results.</p>
          </ScrollReveal>
        </div>
        <div className="container-wide grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link to={s.link} className="group block h-full">
                <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                      loading="lazy" 
                    />
                    {/* Image overlay to blend with card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/20" />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="font-heading font-extrabold text-white text-xl md:text-2xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                    <p className="text-white/60 text-sm md:text-base mb-6 md:mb-8 leading-relaxed line-clamp-3">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide uppercase transition-all group-hover:gap-3">
                      {s.cta} 
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER */}
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

      {/* SOCIAL PROOF */}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-semibold text-xs tracking-wider uppercase mb-5">Patient Results</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-3">
              They Came in With Pain.
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading text-white/30 mb-6 tracking-tight">
              They Left With Confidence.
            </p>
            <p className="text-white/70 max-w-lg mx-auto mb-10 text-base md:text-lg">
              Every review is from a verified patient who trusted us with their oral health — and got measurable results.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-10 mb-12">
            {[{ name: "Maria G.", text: "I was losing my teeth to gum disease. Within months of treatment, everything changed. I can finally eat without pain again.", tag: "Periodontal Treatment" },
              { name: "James T.", text: "LANAP saved my teeth when I was told I'd need full extractions. No cutting, no stitches. I was back at work the next day.", tag: "LANAP Laser" },
              { name: "Sarah K.", text: "Sarah K. lost her confidence due to missing teeth. She got implants that look and feel completely real. Best decision of her life.", tag: "Dental Implants" }
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 h-full flex flex-col items-start text-left">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
                    ))}
                  </div>
                  <p className="italic text-white/70 text-sm md:text-base leading-relaxed mb-8 flex-grow">"{t.text}"</p>
                  <div className="w-full flex items-center justify-between pt-5 border-t border-white/5">
                    <p className="font-heading font-bold text-white text-sm md:text-base">{t.name}</p>
                    <span className="text-[10px] md:text-[11px] font-bold text-accent px-3 py-1 bg-accent/10 rounded-full uppercase tracking-wider">{t.tag}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 transition-all duration-300">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all" width={16} height={16} />
              <span className="text-white font-bold text-sm">5.0 on Google</span>
              <span className="text-white/40 text-sm">• 200+ verified reviews</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SPECIALIST ADVANTAGE */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -ml-96 -translate-y-1/2" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-12 md:mb-16">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] font-heading font-extrabold text-white leading-[1.05] mb-5">
                Why Patients Choose a Periodontist<br className="hidden md:block" />
                <span className="text-accent underline decoration-white/10 underline-offset-8"> Over a General Dentist</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                A periodontist completes <span className="text-white font-semibold">3+ additional years</span> of surgical residency — focused exclusively on gum disease, bone regeneration, and implant surgery.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {[
                { icon: Award, title: "3+ Years Advanced Training", desc: "Beyond dental school. Focused exclusively on gums, bone, and implant surgery.", stat: "3+ yrs" },
                { icon: Shield, title: "Higher Success Rates", desc: "Specialists achieve significantly better implant success and long-term outcomes.", stat: "98%" },
                { icon: CheckCircle2, title: "7,000+ Procedures", desc: "Complex periodontal and implant cases — not general check-ups.", stat: "7K+" },
                { icon: Clock, title: "Faster Recovery", desc: "Precision diagnosis and minimally invasive techniques mean fewer complications.", stat: "24hr" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/[0.08] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 h-full transition-all duration-500 hover:bg-white/[0.12] hover:border-white/30 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/50 transition-all duration-500 text-accent">
                        <item.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <span className="font-heading font-extrabold text-white/40 text-2xl md:text-3xl group-hover:text-accent/60 transition-colors duration-500">{item.stat}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-28 space-y-5">
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
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl rounded-[1.25rem] px-6 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/20 flex items-center gap-4 z-20"
                  >
                    <div className="flex -space-x-3">
                      <img src={drHai} alt="" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover shadow-lg" />
                      <img src={drThomas} alt="" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover shadow-lg" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-white text-sm">Board-Certified</p>
                      <p className="text-[11px] font-bold text-accent uppercase tracking-wider">Specialists</p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4 pt-4">
                  <Link to="/contact" className="block group">
                    <Button variant="gold" size="lg" className="w-full rounded-xl min-h-[56px] text-base shadow-[0_10px_20px_rgba(255,215,0,0.15)] group-hover:shadow-[0_15px_30px_rgba(255,215,0,0.25)] transition-all">
                      Book a 1:1 Consultation <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/18321234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Button variant="outline" size="lg" className="w-full rounded-xl min-h-[56px] text-base border-white/10 hover:border-[#25D366]/40 text-white hover:bg-[#25D366]/10 gap-3 transition-all">
                      <Phone className="w-4 h-4 text-[#25D366]" />
                      <span>Book via WhatsApp</span>
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="section-padding relative">
        <div className="container-tight max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-heading font-semibold text-xs tracking-wider uppercase mb-4">Takes Less Than 30 Seconds</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">Check If You're a Candidate</h2>
              <p className="text-white/70 text-sm md:text-base">No obligation. No commitment. Just answers.</p>
            </div>

            {!showResult ? (
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 md:p-10 shadow-[-10px_20px_40px_rgba(0,0,0,0.3)] text-left space-y-6 md:space-y-8">
                <div>
                  <label className="block font-heading font-bold text-white mb-3 text-[15px] pl-1">Are you missing any teeth?</label>
                  <div className="flex gap-3 md:gap-4">
                    {["Yes", "No"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, teeth: v })} className={`flex-1 min-h-[56px] rounded-xl border-2 font-semibold text-sm md:text-[15px] transition-all duration-300 active:scale-[0.98] ${eligibility.teeth === v ? "border-accent bg-accent/15 text-accent shadow-[0_0_15px_rgba(255,215,0,0.15)]" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/30"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-bold text-white mb-3 text-[15px] pl-1">Do your gums bleed when brushing?</label>
                  <div className="flex gap-3 md:gap-4">
                    {["Yes", "No"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, bleeding: v })} className={`flex-1 min-h-[56px] rounded-xl border-2 font-semibold text-sm md:text-[15px] transition-all duration-300 active:scale-[0.98] ${eligibility.bleeding === v ? "border-accent bg-accent/15 text-accent shadow-[0_0_15px_rgba(255,215,0,0.15)]" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/30"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-bold text-white mb-3 text-[15px] pl-1">Estimated treatment budget?</label>
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {["< $5K", "$5K–$15K", "$15K+"].map((v) => (
                      <button key={v} onClick={() => setEligibility({ ...eligibility, budget: v })} className={`min-h-[56px] rounded-xl border-2 font-semibold text-xs md:text-sm transition-all duration-300 active:scale-[0.98] ${eligibility.budget === v ? "border-accent bg-accent/15 text-accent shadow-[0_0_15px_rgba(255,215,0,0.15)]" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/30"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="gold" className={`w-full min-h-[56px] text-base rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(255,215,0,0.2)] ${(!eligibility.teeth || !eligibility.bleeding || !eligibility.budget) ? "opacity-30 grayscale saturate-0" : "hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]"}`} size="lg" onClick={() => setShowResult(true)} disabled={!eligibility.teeth || !eligibility.bleeding || !eligibility.budget}>
                    Check My Eligibility
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 md:p-12 shadow-[-10px_20px_40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-3">You Qualify for Treatment</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm mb-8">Based on your responses, our specialists can definitely help. The next step is a no-obligation clinical checkup to construct your plan.</p>
                <Link to="/contact" className="w-full">
                  <Button variant="gold" size="lg" className="w-full min-h-[56px] text-base rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all">Book Your Consultation <ArrowRight className="w-5 h-5 ml-1.5" /></Button>
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
              { platform: "Instagram", handle: "@perioimplant", color: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]", followers: "2.4K", desc: "Before & after transformations", img: patient1 },
              { platform: "Facebook", handle: "PerioDental Houston", color: "from-[#1877F2] to-[#0C63D4]", followers: "5.1K", desc: "Community updates & tips", img: patient3 },
              { platform: "YouTube", handle: "PerioDental", color: "from-[#FF0000] to-[#CC0000]", followers: "890", desc: "Procedure walkthroughs", img: patient4 },
              { platform: "TikTok", handle: "@perioimplant", color: "from-[#000000] to-[#25F4EE]", followers: "3.2K", desc: "Quick dental tips & reels", img: patient5 },
              { platform: "Google", handle: "5.0 ★ Rating", color: "from-[#4285F4] via-[#34A853] to-[#FBBC05]", followers: "200+", desc: "Verified patient reviews", img: patient2 },
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
      <section className="section-padding gradient-brand">
        <div className="container-tight max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Gum Disease Gets Worse Every Week You Wait.
            </h2>
            <p className="text-white/60 mb-2 text-sm md:text-base">
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
    </>
  );
};

export default Index;
