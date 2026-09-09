import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Factory } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ImagePlaceholder icon={Factory} tone="navy" label="Industrial plant" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/60" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          Let's Build a Safer Future Together
        </h2>
        <p className="text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you're starting your HSE career, upgrading your skills or
          looking for professional safety training, we're here to help.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
