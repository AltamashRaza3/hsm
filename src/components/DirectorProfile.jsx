import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UserRound } from "lucide-react";
import { director } from "../data/site";
import ImagePlaceholder from "./ImagePlaceholder";

export default function DirectorProfile() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ImagePlaceholder
            icon={UserRound}
            tone="navy"
            label="Director portrait"
            className="aspect-[4/5] rounded-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-2">
            Meet the Director
          </h2>
          <p className="text-green-600 font-medium mb-6">{director.designation}</p>

          <p className="text-stone-700 leading-relaxed mb-6 max-w-lg">
            {director.name} brings hands-on industry exposure and a genuine
            teaching practice to every program — built on time actually spent
            on live sites, not only in a classroom.
          </p>

          <div className="mb-8">
            <p className="text-xs tracking-wide text-stone-500 mb-2">QUALIFICATIONS — TO BE CONFIRMED</p>
            <ul className="flex flex-wrap gap-2">
              {director.qualifications.map((q) => (
                <li key={q} className="text-xs bg-stone-100 text-stone-600 rounded-sm px-3 py-1.5">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-9 border-t border-stone-100 pt-6">
            {director.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-2xl font-semibold text-charcoal">{s.value}</dd>
                <dd className="text-xs text-stone-500 mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/director"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600"
          >
            Know His Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
