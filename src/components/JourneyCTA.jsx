import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { journey } from "../data/site";

const benefits = ["Expert Guidance", "Practical Learning", "Career Development", "Industry Knowledge"];

export default function JourneyCTA() {
  return (
    <section className="relative bg-navy-900 text-white py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #9ADB3C 0px, #9ADB3C 2px, transparent 2px, transparent 26px)",
        }}
      />
      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
            {journey.headline}
          </h2>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            {journey.copy}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
            {benefits.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> {b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              Talk to a Trainer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
