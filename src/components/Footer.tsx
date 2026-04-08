import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-[#2B0D03] border-t border-white/10 text-white overflow-hidden relative z-20">
    {/* CTA band */}
    <div className="border-b border-primary-foreground/10">
      <div className="container-wide px-5 md:px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-white/80 text-sm mb-1 font-medium">Ready to get started?</p>
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">Complete Care for Every Smile</h3>
        </div>
        <Link to="/contact">
          <Button variant="gold" size="lg" className="rounded-full px-8 min-h-[48px]">
            Book an Appointment <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>

    {/* Main footer grid */}
    <div className="container-wide px-5 md:px-6 py-12 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-lg">
              Perio<span className="text-accent">Dental</span>
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs font-medium">
            Comprehensive periodontal and implant care with a precision touch — because every smile deserves the best.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-5 text-white/30">Services</h4>
          <div className="space-y-3">
            {[
              { label: "Periodontics", to: "/periodontics" },
              { label: "Dental Implants", to: "/implants" },
              { label: "LANAP Laser", to: "/lanap" },
              { label: "Exams & Cleaning", to: "/exams" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-accent transition-colors">
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Clinic */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-5 text-white/30">Clinic</h4>
          <div className="space-y-3">
            <Link to="/doctors" className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-accent transition-colors">
              Our Doctors <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/contact" className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-accent transition-colors">
              Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] mb-5 text-white/30">Contact</h4>
          <div className="space-y-3">
            <a href="tel:+17135551234" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 shrink-0" /> (713) 555-1234
            </a>
            <a href="mailto:info@perioimplant.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors break-all font-medium">
              <Mail className="w-3.5 h-3.5 shrink-0" /> info@perioimplant.com
            </a>
            <div className="flex items-start gap-2 text-sm text-white/80 font-medium leading-relaxed">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" /> 1234 Medical Center Blvd, Houston, TX 77030
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust badges */}
    <div className="border-t border-primary-foreground/10">
      <div className="container-wide px-5 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
          {["ADA Member", "Board Certified", "HIPAA Compliant"].map((badge) => (
            <span key={badge} className="text-xs text-white/60 font-bold uppercase tracking-widest">{badge}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Giant typographic text */}
    <div className="container-wide px-5 md:px-6 pb-6 pt-2 overflow-hidden">
      <h2 className="font-heading font-extrabold text-[clamp(2.5rem,10vw,10rem)] leading-[0.9] tracking-tighter text-white/[0.04] select-none whitespace-nowrap" aria-hidden="true">
        Every Smile
      </h2>
    </div>
  </footer>
);

export default Footer;
