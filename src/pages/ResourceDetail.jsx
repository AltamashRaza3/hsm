import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BookOpen, ArrowLeft } from "lucide-react";
import { getResourceBySlug, resources } from "../data/resources";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { brand } from "../data/site";

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) return <Navigate to="/resources" replace />;

  const related = resources.filter((r) => r.slug !== slug && r.category === resource.category).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{resource.title} | {brand.name}</title>
        <meta name="description" content={resource.excerpt} />
      </Helmet>

      <section className="bg-navy-950 text-white pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-green-400 mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <p className="text-xs font-medium tracking-[0.18em] text-green-400 mb-4">
            {resource.category.toUpperCase()} · {resource.readTime}
          </p>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl">
            {resource.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_280px] gap-12">
          <article>
            <ImagePlaceholder icon={BookOpen} tone="light" label={resource.title} className="aspect-video rounded-sm mb-10" />
            <div className="space-y-5 max-w-2xl">
              {resource.body.map((para, i) => (
                <p key={i} className="text-stone-700 leading-relaxed">{para}</p>
              ))}
            </div>
          </article>

          {related.length > 0 && (
            <aside>
              <p className="text-xs tracking-wide text-stone-500 mb-4">RELATED</p>
              <div className="space-y-5">
                {related.map((r) => (
                  <Link key={r.slug} to={`/resources/${r.slug}`} className="block group">
                    <h3 className="font-display font-medium text-sm text-charcoal group-hover:text-green-600 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">{r.readTime}</p>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
