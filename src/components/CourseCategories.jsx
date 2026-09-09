import { Link } from "react-router-dom";
import {
  Award, ShieldCheck, Flame, HardHat, Building2, ClipboardList, ArrowRight,
} from "lucide-react";
import { courseCategories } from "../data/courses";

const icons = {
  "professional-qualifications": Award,
  "safety-management": ShieldCheck,
  "fire-industrial-safety": Flame,
  "specialist-safety-training": HardHat,
  "corporate-training": Building2,
  consultancy: ClipboardList,
};

export default function CourseCategories() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
          Browse by Category
        </h2>
        <p className="text-stone-600 max-w-lg mb-12">
          Course offerings are organised into six areas, so you can find the
          right pathway whether you're starting out or specialising further.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseCategories.map((cat) => {
            const Icon = icons[cat.slug] || Award;
            return (
              <Link
                key={cat.slug}
                to={`/courses?category=${cat.slug}`}
                className="group flex items-center justify-between p-5 border border-stone-200 rounded-sm hover:border-green-500/50 hover:bg-stone-50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-sm bg-navy-900 text-green-400 shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-medium text-charcoal text-sm">{cat.name}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
