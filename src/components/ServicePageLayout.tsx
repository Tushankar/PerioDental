import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Star, CheckCircle2, ChevronRight } from "lucide-react";
import AutoGallery from "@/components/AutoGallery";
import type { LucideIcon } from "lucide-react";

interface ServiceCard { icon: LucideIcon; title: string; desc: string; }
interface Feature { title: string; desc: string; }
interface StatItem { value: string; label: string; }

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  galleryImages: { src: string; alt: string }[];
  services: ServiceCard[];
  servicesTitle: string;
  servicesSubtitle?: string;
  features: Feature[];
  featuresTitle: string;
  featuresDesc?: string;
  featuresImage: string;
  stats?: StatItem[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButtonText: string;
  extraSection?: React.ReactNode;
}

const ServicePageLayout = ({
  badge, title, subtitle, ctaText, galleryImages,
  services, servicesTitle, servicesSubtitle,
  features, featuresTitle, featuresDesc, featuresImage,
  stats, ctaTitle, ctaDesc, ctaButtonText, extraSection,
}: ServicePageProps) => (
  <div className="bg-[#1A0501] min-h-screen text-white">
    {/* Hero — Boxed Grid matching Index.tsx / Doctors.tsx */}
    <section className="relative px-4 pb-4 md:px-6 md:pb-6 lg:px-8 pt-[88px] z-10 xl:px-12">
      <div className="relative border border-white/20 rounded-[2rem] overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-700 hover:border-white/30">
        {/* Background gallery with deep overlay */}
        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-20 grayscale">
          <AutoGallery images={galleryImages} interval={3500} className="w-full h-full rounded-none aspect-auto object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0501]/95 via-[#1A0501]/80 to-transparent -z-10" />

        <div className="container-wide px-5 md:px-12 relative z-10 pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-bold text-white/30 mb-8 uppercase tracking-widest"
            >
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-accent">{badge}</span>
            </motion.div>

            {/* Title & Badge */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2"
              >
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">{badge} Specialist</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="rounded-2xl px-12 min-h-[56px] text-lg font-bold shadow-2xl shadow-accent/20">
                    {ctaText} <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                {stats && (
                  <div className="flex items-center gap-8 pl-2 border-l border-white/10">
                    {stats.map((s) => (
                      <div key={s.label} className="flex flex-col">
                        <span className="font-heading font-extrabold text-white text-2xl md:text-3xl leading-tight">{s.value}</span>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid with boxed glassmorphism */}
    <section className="section-padding">
      <div className="container-tight text-center mb-16 px-5">
        <ScrollReveal>
          {servicesSubtitle && (
            <span className="text-accent font-heading font-bold text-xs tracking-[0.25em] uppercase mb-4 block">{servicesSubtitle}</span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">{servicesTitle}</h2>
        </ScrollReveal>
      </div>
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="group relative bg-white/[0.03] rounded-[2rem] p-8 border border-white/10 hover:bg-white/[0.05] hover:border-accent/30 transition-all h-full overflow-hidden shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">{s.title}</h3>
              <p className="text-base text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Features with side image */}
    <section className="section-padding bg-white/[0.02]">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center px-5">
        <ScrollReveal>
          <span className="text-accent font-heading font-bold text-xs tracking-[0.25em] uppercase mb-4 block">Precision Training</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-8 leading-tight">{featuresTitle}</h2>
          {featuresDesc && <p className="text-white/50 mb-10 text-lg leading-relaxed">{featuresDesc}</p>}
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">{f.title}</h4>
                  <p className="text-base text-white/50 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative p-2 border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent -z-10" />
            <img
              src={featuresImage}
              alt={featuresTitle}
              className="rounded-[2.5rem] w-full object-cover aspect-[4/5] max-h-[600px] shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {extraSection}

    {/* High-impact CTA Section */}
    <section className="relative section-padding overflow-hidden text-center bg-[#2B0D03]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0501]/30 to-transparent" />
      <div className="container-tight max-w-2xl mx-auto relative z-10 px-5">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Board Certified Periodontists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">{ctaTitle}</h2>
          <p className="text-white/60 mb-10 text-lg md:text-xl leading-relaxed">{ctaDesc}</p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="rounded-2xl px-12 min-h-[56px] text-lg font-bold shadow-2xl shadow-accent/20">
              {ctaButtonText} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default ServicePageLayout;
