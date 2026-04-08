import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AutoGalleryProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
}

const AutoGallery = ({ images, interval = 2000, className }: AutoGalleryProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl aspect-[4/3]", className)}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          width={800}
          height={600}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      {/* Dots — only show if rounded (not full-screen) */}
      {!className?.includes("rounded-none") && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === current ? "bg-accent w-5" : "bg-primary-foreground/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoGallery;
