import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StickyCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3 safe-bottom">
    <a href="tel:+17135551234" className="flex-1 flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-primary text-primary-foreground font-semibold text-sm active:scale-[0.97] transition-transform">
      <Phone className="w-4 h-4" />
      Talk to a Specialist
    </a>
    <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-gold active:scale-[0.97] transition-transform">
      <Calendar className="w-4 h-4" />
      Book Consultation
    </Link>
  </div>
);

export default StickyCTA;
