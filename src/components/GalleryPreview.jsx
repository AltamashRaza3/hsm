import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteImages } from "../data/siteImages";

export default function GalleryPreview() {
  const items = siteImages.gallery.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
              Training Gallery
            </h2>

            <p className="text-stone-600 max-w-lg">
              Moments from the classroom, corporate workshops and industrial
              visits.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600 shrink-0"
          >
            View gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-sm overflow-hidden bg-stone-100 ${
                i === 0
                  ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                  : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
