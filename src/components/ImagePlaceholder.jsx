import { ImageOff } from "lucide-react";

// Elegant stand-in for real photography. Swap real images into
// src/data/siteImages.js and this component becomes unnecessary —
// or extend it to fall back gracefully if an image 404s.
export default function ImagePlaceholder({
  icon: Icon = ImageOff,
  tone = "navy", // "navy" | "light"
  label,
  className = "",
}) {
  const toneClasses =
    tone === "navy"
      ? "bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-stone-300"
      : "bg-gradient-to-br from-stone-100 via-stone-50 to-white text-stone-500";

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${toneClasses} ${className}`}
      role="img"
      aria-label={label || "Placeholder image"}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <Icon className="w-8 h-8 opacity-60" strokeWidth={1.5} />
        {label && (
          <span className="text-[11px] tracking-wide opacity-60 max-w-[16ch]">{label}</span>
        )}
      </div>
    </div>
  );
}
