import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import CourseCard from "../components/CourseCard";
import { courses, courseCategories } from "../data/courses";
import { brand } from "../data/site";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    if (activeCategory === "all") return courses;
    return courses.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (slug) => {
    if (slug === "all") setSearchParams({});
    else setSearchParams({ category: slug });
  };

  return (
    <>
      <Helmet>
        <title>Courses | {brand.name}</title>
        <meta name="description" content="Browse professional HSE courses covering health and safety, fire safety, risk assessment, HSE management and more." />
      </Helmet>
      <PageHeader
        eyebrow="COURSES"
        title="Explore Our Courses"
        description="Structured, practical HSE courses across foundation, specialist and advanced qualification levels."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2.5 mb-12">
            <button
              onClick={() => setCategory("all")}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                activeCategory === "all"
                  ? "bg-navy-900 text-white border-navy-900"
                  : "border-stone-200 text-stone-600 hover:border-navy-300"
              }`}
            >
              All Courses
            </button>
            {courseCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-navy-900 text-white border-navy-900"
                    : "border-stone-200 text-stone-600 hover:border-navy-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-stone-500 text-sm">No courses in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
