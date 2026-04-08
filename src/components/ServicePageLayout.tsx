import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import AutoGallery from "@/components/AutoGallery";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Feature {
  title: string;
  desc: string;
}

interface StatItem {
  value: string;
  label: string;
}

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
  badge,
  title,
  subtitle,
  ctaText,
  galleryImages,
  services,
  servicesTitle,
  servicesSubtitle,
  features,
  featuresTitle,
  featuresDesc,
  featuresImage,
  stats,
  ctaTitle,
  ctaDesc,
  ctaButtonText,
  extraSection,
}: ServicePageProps) => (
  <div>
    {/* Hero — Full-width immersive banner */}
    <section className="relative mt-[64px] overflow-hidden">
      {/* Background gallery image */}
      <div className="absolute inset-0">
        <AutoGallery images={galleryImages} interval={3000} className="w-full h-full rounded-none aspect-auto" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      <div className="container-wide px-5 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-primary-foreground">{badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-extrabold text-primary-foreground leading-[1.08] mb-5"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-primary-foreground/70 leading-relaxed mb-8 max-w-lg text-sm md:text-base lg:text-lg"
          >
            {subtitle}
          </motion.p>

          {/* CTA + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Link to="/contact">
              <Button variant="gold" size="lg" className="rounded-xl px-8 min-h-[48px] text-base">
                {ctaText} <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>

            {stats && (
              <div className="flex items-center gap-4 md:gap-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="font-heading font-extrabold text-primary-foreground text-lg md:text-xl">{s.value}</span>
                    <span className="text-[10px] md:text-xs text-primary-foreground/50 whitespace-nowrap">{s.label}</span>
                    {i < stats.length - 1 && (
                      <span className="hidden" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom edge curve */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-background rounded-t-[2rem]" />
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="container-tight text-center mb-10 md:mb-12">
        <ScrollReveal>
          {servicesSubtitle && (
            <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">
              {servicesSubtitle}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">{servicesTitle}</h2>
        </ScrollReveal>
      </div>
      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="bg-primary/[0.04] rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-primary/[0.07] transition-colors h-full group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2 text-sm md:text-[15px]">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Features with image */}
    <section className="section-padding bg-muted/30">
      <div className="container-wide grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <ScrollReveal>
          <span className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-3 block">Why Choose Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3">{featuresTitle}</h2>
          {featuresDesc && (
            <p className="text-muted-foreground mb-6 md:mb-8 max-w-md text-sm md:text-base">{featuresDesc}</p>
          )}
          <div className="space-y-3 md:space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-xl p-4 md:p-5 card-shadow"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-primary text-sm mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <img
            src={featuresImage}
            alt={featuresTitle}
            className="rounded-2xl md:rounded-3xl w-full object-cover aspect-[4/5] max-h-[500px]"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>

    {/* Extra section (FAQ, steps, etc.) */}
    {extraSection}

    {/* CTA */}
    <section className="section-padding gradient-navy text-center">
      <ScrollReveal>
        <div className="container-tight max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">{ctaTitle}</h2>
          <p className="text-primary-foreground/60 mb-6 md:mb-8 text-sm md:text-base">{ctaDesc}</p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="min-h-[48px]">{ctaButtonText} <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  </div>
);

export default ServicePageLayout;
