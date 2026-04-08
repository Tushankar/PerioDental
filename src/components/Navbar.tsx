import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#8D2C08] shadow-sm py-3" : isHome ? "bg-transparent py-5 border-b border-white/10" : "bg-[#8D2C08] py-4"
        )}
      >
        <div className="container-wide px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isTransparent ? "bg-white/10" : "bg-white/10")}>
              <span className="text-white font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-lg text-white">
              Perio<span className={cn(isTransparent ? "text-white/60" : "text-white/70")}>Dental</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.to
                    ? "text-white/90 font-semibold"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

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
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* iOS-style mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-primary/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-[60px] left-4 right-4 z-[56] lg:hidden bg-background/98 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50 overflow-hidden"
            >
              <div className="p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      className={cn(
                        "block px-4 py-3.5 rounded-xl text-base font-medium transition-all active:scale-[0.98]",
                        location.pathname === link.to
                          ? "text-accent bg-accent/8 font-semibold"
                          : "text-foreground/80 hover:bg-muted/50 active:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.25 }}
                  className="pt-4 mt-2 border-t border-border/50 space-y-3"
                >
                  <a href="tel:+17135551234" className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2">
                    <Phone className="w-4 h-4" />
                    (713) 555-1234
                  </a>
                  <Link to="/contact" className="block">
                    <Button variant="gold" className="w-full h-12 text-base rounded-xl">Book Your Consultation</Button>
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
