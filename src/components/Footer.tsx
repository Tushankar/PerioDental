import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Clock, Shield, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-[#2B0D03] border-t border-white/10 text-white overflow-hidden relative z-20">
    {/* CTA band */}
    <div className="relative border-b border-white/10">
      <div className="container-wide px-5 md:px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative">
        <div className="text-center md:text-left">
          <p className="text-white/80 text-sm mb-1 font-medium">Ready to get started?</p>
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">Complete Care for Every Smile</h3>
        </div>
        <Link to="/contact">
          <Button variant="gold" size="lg" className="rounded-full px-8 min-h-[52px] shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            Book an Appointment <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>

    {/* Main grid */}
    <div className="container-wide px-5 md:px-8 py-14 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Perio<span className="text-accent">Dental</span>
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs font-medium mb-8">
            Comprehensive periodontal and implant care with a precision touch — because every smile deserves the best.
          </p>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Shield, label: "HIPAA" },
              { icon: Award, label: "Board Certified" },
              { icon: Star, label: "ADA Member" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-[11px] font-bold text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 uppercase tracking-wider">
                <Icon className="w-3 h-3 text-accent" /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-extrabold text-xs uppercase tracking-[0.2em] mb-7 text-white">Services</h4>
          <div className="space-y-4">
            {[
              { label: "Periodontics", to: "/periodontics" },
              { label: "Dental Implants", to: "/implants" },
              { label: "LANAP Laser", to: "/lanap" },
              { label: "Exams & Cleaning", to: "/exams" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="group flex items-center gap-1.5 text-sm text-white hover:text-accent transition-colors font-semibold">
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Clinic */}
        <div>
          <h4 className="font-heading font-extrabold text-xs uppercase tracking-[0.2em] mb-7 text-white">Clinic</h4>
          <div className="space-y-4">
            <Link to="/doctors" className="group flex items-center gap-1.5 text-sm text-white hover:text-accent transition-colors font-semibold">
              Our Doctors <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/contact" className="group flex items-center gap-1.5 text-sm text-white hover:text-accent transition-colors font-semibold">
              Contact <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="pt-6 mt-2 border-t border-white/10">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">Operating Hours</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" /> Mon–Fri: 8am – 5pm
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" /> Sat: By appointment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-extrabold text-xs uppercase tracking-[0.2em] mb-7 text-white">Contact</h4>
          <div className="space-y-4">
            <a href="tel:+17135551234" className="flex items-center gap-2.5 text-sm text-white hover:text-accent transition-colors font-semibold">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              (713) 555-1234
            </a>
            <a href="mailto:info@perioimplant.com" className="flex items-center gap-2.5 text-sm text-white hover:text-accent transition-colors break-all font-semibold">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              info@perioimplant.com
            </a>
            <div className="flex items-start gap-2.5 text-sm text-white font-medium leading-relaxed">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              1234 Medical Center Blvd,<br />Houston, TX 77030
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="container-wide px-5 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">© 2026 PerioDental. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["ADA Member", "Board Certified", "HIPAA Compliant"].map((badge) => (
             <span key={badge} className="text-[11px] text-white/40 font-bold uppercase tracking-widest hidden md:block">{badge}</span>
          ))}
        </div>
        <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">
          Designed by{" "}
          <a href="https://kyptronix.us" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-opacity">
            Kyptronix LLP
          </a>
        </p>
      </div>
    </div>

    {/* Giant typographic text */}
    <div className="container-wide px-5 md:px-8 pb-10 pt-4 overflow-hidden select-none pointer-events-none">
      <h2 className="font-heading font-extrabold text-[clamp(2.5rem,10vw,10rem)] leading-[0.9] tracking-tighter text-white/[0.03] whitespace-nowrap" aria-hidden="true">
        Every Smile
      </h2>
    </div>
  </footer>
);

export default Footer;
