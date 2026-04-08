import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) handleMove(e.touches[0].clientX);
    };
    const handleUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-2xl select-none cursor-col-resize aspect-[4/3]", className)}
      onMouseDown={() => { isDragging.current = true; }}
      onTouchStart={() => { isDragging.current = true; }}
    >
      {/* After (background) */}
      <img src={afterImage} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeImage} alt="Before treatment" className="w-full h-full object-cover" />
      </div>

      {/* Slider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-accent" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs font-semibold bg-primary/80 text-primary-foreground px-2 py-1 rounded">Before</span>
      <span className="absolute top-3 right-3 text-xs font-semibold bg-accent/80 text-accent-foreground px-2 py-1 rounded">After</span>
    </div>
  );
};

export default BeforeAfterSlider;
