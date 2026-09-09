import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Clock,
  Monitor,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { getCourseBySlug } from "../data/courses";
import { siteImages } from "../data/siteImages";
import { brand } from "../data/site";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) return <Navigate to="/courses" replace />;

  const image = siteImages.courses[course.image];

  return (
    <>
      <Helmet>
        <title>
          {course.title} | {brand.name}
        </title>
        <meta name="description" content={course.description} />
      </Helmet>

      <section className="bg-navy-950 text-white pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <Link
            to="/courses"
            className="text-xs text-stone-400 hover:text-green-400"
          >
            ← Back to Courses
          </Link>

          <p className="text-xs font-medium tracking-[0.18em] text-green-400 mt-6 mb-4">
            {course.level.toUpperCase()}
          </p>

          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 max-w-2xl">
            {course.title}
          </h1>

          <p className="text-stone-300 max-w-xl leading-relaxed">
            {course.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_320px] gap-12">
          <div>
            {/* Course Image */}
            <div className="aspect-video rounded-sm mb-10 overflow-hidden bg-stone-100">
              {image ? (
                <img
                  src={image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                  {course.title}
                </div>
              )}
            </div>

            <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
              Modules
            </h2>

            <ul className="space-y-2.5 mb-10">
              {course.modules.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2.5 text-sm text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>

            <h2 className="font-display font-semibold text-2xl text-charcoal mb-4">
              Learning Outcomes
            </h2>

            <ul className="space-y-2.5">
              {course.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-2.5 text-sm text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-stone-200 rounded-sm p-6 h-fit sticky top-24">
            <dl className="space-y-4 mb-6">
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="w-4 h-4 text-green-600" />
                <dt className="text-stone-500">Duration</dt>
                <dd className="ml-auto font-medium text-charcoal">
                  {course.duration}
                </dd>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <Monitor className="w-4 h-4 text-green-600" />
                <dt className="text-stone-500">Mode</dt>
                <dd className="ml-auto font-medium text-charcoal">
                  {course.mode.join(" / ")}
                </dd>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <BarChart3 className="w-4 h-4 text-green-600" />
                <dt className="text-stone-500">Level</dt>
                <dd className="ml-auto font-medium text-charcoal">
                  {course.level}
                </dd>
              </div>
            </dl>

            <p className="text-xs text-stone-500 mb-5">
              Eligibility: {course.eligibility}
            </p>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              Enquire About This Course
              <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
