import { motion } from "framer-motion";
import { timeline } from "../data/journeyData";

export default function JourneyTimeline() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-stone-100 overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
          Our Journey
        </h2>
        <p className="text-stone-600 max-w-lg mb-14">
          Placeholder milestones — dates and details will be replaced with
          the client's real history.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-3 left-0 right-0 h-px bg-stone-200" />
          <div className="grid grid-cols-6 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pt-10"
              >
                <span className="absolute top-0 left-0 w-[7px] h-[7px] rounded-full bg-green-500 -translate-y-1/2" />
                <span className="text-xs tracking-wide text-green-600 font-medium">{item.year}</span>
                <h3 className="font-display font-medium text-charcoal mt-1 mb-1.5 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-6">
          <div className="absolute top-1 bottom-1 left-[3px] w-px bg-stone-200" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-6 top-1.5 w-[7px] h-[7px] rounded-full bg-green-500" />
                <span className="text-xs tracking-wide text-green-600 font-medium">{item.year}</span>
                <h3 className="font-display font-medium text-charcoal mt-1 mb-1.5">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
