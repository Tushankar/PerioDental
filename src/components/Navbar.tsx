import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Periodontics", to: "/periodontics" },
  { label: "Dental Implants", to: "/implants" },
  { label: "LANAP Laser", to: "/lanap" },
  { label: "Exams & Cleaning", to: "/exams" },
  { label: "Our Doctors", to: "/doctors" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Fixed wrapper — keeps both bars pinned on scroll */}
      <div className="fixed top-0 left-0 right-0 z-50">

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#8D2C08] shadow-sm py-3" : isHome ? "bg-transparent py-5 border-b border-white/10" : "bg-[#8D2C08] py-4"
        )}
      >
        {/* Subtle gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(33_38%_64%)] to-transparent opacity-60" />

        <div className="container-wide px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isTransparent ? "bg-white/10" : "bg-white/10")}>
              <span className="text-white font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-lg text-white">
              Perio<span className={cn(isTransparent ? "text-white/60" : "text-white/70")}>Dental</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200",
                  location.pathname === link.to
                    ? "text-white/90 font-semibold"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[hsl(33_38%_64%)]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+17135551234" className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              (713) 555-1234
            </a>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">Book Your Consultation</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white relative z-[60]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      </div>{/* end fixed wrapper */}

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 320, damping: 28 }}
              className="fixed top-[56px] left-3 right-3 z-[56] lg:hidden bg-[#2B0D03] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(33_38%_64%)] to-transparent" />
              <div className="p-4 space-y-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all",
                        location.pathname === link.to
                          ? "text-accent bg-white/5"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                      <ChevronRight className={cn("w-4 h-4 opacity-30", location.pathname === link.to && "opacity-80 text-accent")} />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.2 }}
                  className="pt-3 mt-2 border-t border-white/10 space-y-2.5"
                >
                  <a href="tel:+17135551234" className="flex items-center justify-center gap-2 text-sm text-white/40 py-1.5">
                    <Phone className="w-3.5 h-3.5" /> (713) 555-1234
                  </a>
                  <Link to="/contact" className="block">
                    <Button variant="gold" className="w-full h-11 text-[15px] rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                      Book Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
