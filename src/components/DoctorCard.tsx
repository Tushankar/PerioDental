import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Award, BookOpen, Users, GraduationCap, Star, Shield, Cpu, Calendar } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  note?: string;
}

interface DoctorProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  philosophy?: string;
  careerSummary?: string;
  education: Education[];
  memberships: string[];
  honors?: string[];
  licensure?: string[];
  expertise?: { implantSystems: string[]; software: string[] };
  closingNote?: string;
  reversed?: boolean;
}

const DoctorCard = ({ name, title, image, bio, philosophy, careerSummary, education, memberships, honors, licensure, expertise, closingNote, reversed }: DoctorProps) => (
  <section className={`section-padding ${reversed ? "bg-muted/20" : ""}`}>
    <div className={`container-wide grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start ${reversed ? "lg:grid-cols-[1fr_420px]" : ""}`}>
      {/* Photo Column */}
      <ScrollReveal className={reversed ? "lg:order-2" : ""}>
        <div className="sticky top-28">
          <div className="relative max-w-[420px] mx-auto lg:mx-0">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-3xl border-2 border-accent/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <img
              src={image}
              alt={`Dr. ${name}`}
              className="rounded-2xl w-full object-cover aspect-[3/4] shadow-lg"
              loading="lazy"
              width={420}
              height={560}
            />
            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 left-6 right-6 bg-background rounded-xl p-4 card-shadow border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-bold text-primary text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">Board-Certified Periodontist</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 1:1 CTA under photo */}
          <div className="mt-12 max-w-[420px] mx-auto lg:mx-0">
            <Link to="/contact">
              <Button variant="gold" size="lg" className="w-full rounded-xl min-h-[52px] text-base">
                <Calendar className="w-5 h-5 mr-2" />
                Book 1:1 with Dr. {name.split(" ")[0]}
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Content Column */}
      <div className={reversed ? "lg:order-1" : ""}>
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4"
            >
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Specialist</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-tight mb-1">
              Dr. {name}
            </h2>
            <p className="text-accent font-heading font-semibold text-lg mb-6">{title}</p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">{bio}</p>
            {philosophy && <p className="text-muted-foreground leading-relaxed text-[15px] mt-3">{philosophy}</p>}
          </div>
        </ScrollReveal>

        {/* Career Summary */}
        {careerSummary && (
          <ScrollReveal delay={0.15}>
            <div className="mb-8 bg-primary/[0.03] rounded-2xl p-6 border border-border/30">
              <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>
                Career Overview
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{careerSummary}</p>
            </div>
          </ScrollReveal>
        )}

        {/* Education */}
        <ScrollReveal delay={0.2}>
          <div className="mb-8">
            <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent" />
              </div>
              Education & Training
            </h3>
            <div className="space-y-3">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-px bg-accent/30 self-stretch shrink-0 ml-4 relative">
                    <div className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full border-2 border-accent bg-background" />
                  </div>
                  <div className="pb-4">
                    <p className="font-heading font-bold text-primary text-sm">{ed.degree}</p>
                    <p className="text-sm text-muted-foreground">{ed.school}</p>
                    {ed.note && (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-medium mt-1 bg-accent/5 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-accent" /> {ed.note}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Licensure */}
        {licensure && (
          <ScrollReveal delay={0.25}>
            <div className="mb-8">
              <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                Licensure & Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {licensure.map((l) => (
                  <div key={l} className="flex items-start gap-2.5 bg-muted/30 rounded-xl px-4 py-3">
                    <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Memberships */}
        <ScrollReveal delay={0.3}>
          <div className="mb-8">
            <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-accent" />
              </div>
              Professional Affiliations
            </h3>
            <div className="flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span key={m} className="bg-primary/[0.05] border border-border/40 px-4 py-2 rounded-full text-sm text-foreground font-medium">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Honors */}
        {honors && (
          <ScrollReveal delay={0.35}>
            <div className="mb-8">
              <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                Honors & Achievements
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {honors.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 px-3 py-2">
                    <Star className="w-3.5 h-3.5 text-accent fill-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Clinical Expertise */}
        {expertise && (
          <ScrollReveal delay={0.35}>
            <div className="mb-8">
              <h3 className="font-heading font-bold text-primary text-base flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                Clinical Expertise & Technology
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">Implant Systems</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.implantSystems.map((s) => (
                      <span key={s} className="bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">Digital Planning</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.software.map((s) => (
                      <span key={s} className="bg-primary/[0.05] border border-border/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Closing */}
        {closingNote && (
          <ScrollReveal delay={0.4}>
            <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-5">
              <p className="text-sm text-muted-foreground italic leading-relaxed">{closingNote}</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>
);

export default DoctorCard;
