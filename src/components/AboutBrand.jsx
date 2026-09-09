import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const points = [
  {
    title: "Why we exist",
    body: "Too much workplace harm is preventable. We exist to close the gap between knowing a rule and knowing how to apply it under real pressure.",
  },
  {
    title: "Practical training",
    body: "Every course is built around real incidents, real sites and real decisions — not just what the standard says on paper.",
  },
  {
    title: "Career development",
    body: "We treat certification as a starting point, not the finish line, and stay involved in where your HSE career goes next.",
  },
];

export default function AboutBrand() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ImagePlaceholder
            icon={Users2}
            tone="light"
            label="About: editorial training photo"
            className="aspect-[4/5] rounded-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-6">
            Knowledge That Creates Safer Workplaces
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 max-w-lg">
            Health, Safety & Environment education should change how someone
            actually behaves on site, not just what they can recite in an
            exam. That belief shapes every course, every case study and every
            conversation we have with students and organisations.
          </p>
          <div className="space-y-6">
            {points.map((p) => (
              <div key={p.title} className="border-l-2 border-green-500 pl-5">
                <h3 className="font-display font-medium text-charcoal mb-1">{p.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
