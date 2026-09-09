import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { resources } from "../data/resources";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ResourcesPreview() {
  const items = resources.slice(0, 3);
  return (
    <section className="bg-stone-50 py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
              HSE Knowledge Hub
            </h2>
            <p className="text-stone-600 max-w-lg">
              Practical articles, career guidance and study material for
              anyone building an HSE career.
            </p>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600 shrink-0"
          >
            All resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((r) => (
            <Link
              key={r.slug}
              to={`/resources/${r.slug}`}
              className="group bg-white border border-stone-100 rounded-sm overflow-hidden hover:border-green-500/40 transition-colors"
            >
              <ImagePlaceholder icon={BookOpen} tone="light" label={r.category} className="aspect-[16/10]" />
              <div className="p-5">
                <span className="text-[11px] tracking-wide text-green-600 font-medium">{r.category}</span>
                <h3 className="font-display font-medium text-charcoal mt-1.5 mb-2 leading-snug group-hover:text-green-600 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-stone-500">{r.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
