import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { director } from "../data/site";
import ImagePlaceholder from "./ImagePlaceholder";

export default function DirectorMessage() {
  return (
    <section className="bg-stone-50 py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ImagePlaceholder
            icon={UserRound}
            tone="navy"
            label="Director portrait"
            className="aspect-square rounded-sm mb-5"
          />
          <p className="font-display italic text-xl text-charcoal">{director.name}</p>
          <p className="text-sm text-stone-500">{director.designation}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-8">
            A Message From the Director
          </h2>
          <div className="space-y-5">
            {director.message.map((para, i) => (
              <p key={i} className="text-stone-700 leading-relaxed max-w-2xl">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
