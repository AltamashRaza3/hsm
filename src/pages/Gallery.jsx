import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, Images } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { siteImages } from "../data/siteImages";
import { brand } from "../data/site";

const categories = [
  "All",
  "Classroom Training",
  "Corporate Training",
  "Workshops",
  "Industrial Visits",
  "Student Activities",
  "Events",
  "Certifications",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = siteImages.gallery.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <>
      <Helmet>
        <title>Training Gallery | {brand.name}</title>
        <meta name="description" content="Photos from classroom training, corporate workshops, industrial visits and events." />
      </Helmet>
      <PageHeader
        eyebrow="GALLERY"
        title="Training Gallery"
        description="A look inside the classroom, corporate workshops and industrial visits."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white border-navy-900"
                    : "border-stone-200 text-stone-600 hover:border-navy-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="block w-full mb-3 break-inside-avoid"
              >
                <ImagePlaceholder
                  icon={Images}
                  tone={i % 2 === 0 ? "light" : "navy"}
                  label={item.category}
                  className={`rounded-sm w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImagePlaceholder icon={Images} tone="navy" label={lightbox.category} className="aspect-video rounded-sm" />
            <p className="text-stone-300 text-sm mt-4 text-center">{lightbox.category}</p>
          </div>
        </div>
      )}
    </>
  );
}
