import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { journey } from "../data/site";
import { siteImages } from "../data/siteImages";

const benefits = [
  "Expert Guidance",
  "Practical Learning",
  "Career Development",
  "Industry Knowledge",
];

export default function JourneyCTA() {
  return (
    <section className="relative bg-navy-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #9ADB3C 0px, #9ADB3C 2px, transparent 2px, transparent 26px)",
        }}
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
              {journey.headline}
            </h2>

            <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {journey.copy}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-stone-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  {benefit}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
              >
                Talk to a Trainer
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — Image (desktop/tablet only) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-green-500/10 blur-3xl" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
                <img
                  src={siteImages.journeyCta}
                  alt="Health and safety training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>

              {/* Green accent */}
              <div className="absolute -bottom-2 -left-2 w-20 h-1 bg-green-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
