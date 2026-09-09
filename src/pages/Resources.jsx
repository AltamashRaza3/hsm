import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { resources, resourceCategories } from "../data/resources";
import { brand } from "../data/site";

export default function Resources() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? resources : resources.filter((r) => r.category === active)),
    [active]
  );

  return (
    <>
      <Helmet>
        <title>HSE Knowledge Hub | {brand.name}</title>
        <meta name="description" content="Articles, safety tips, career guidance and study material for the HSE profession." />
      </Helmet>
      <PageHeader
        eyebrow="RESOURCES"
        title="HSE Knowledge Hub"
        description="Practical articles, career guidance and study material for anyone building an HSE career."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2.5 mb-12">
            <button
              onClick={() => setActive("All")}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                active === "All" ? "bg-navy-900 text-white border-navy-900" : "border-stone-200 text-stone-600 hover:border-navy-300"
              }`}
            >
              All
            </button>
            {resourceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  active === cat ? "bg-navy-900 text-white border-navy-900" : "border-stone-200 text-stone-600 hover:border-navy-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-stone-500 text-sm">No resources in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => (
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
          )}
        </div>
      </section>
    </>
  );
}
