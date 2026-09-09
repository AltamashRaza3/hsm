import { Link } from "react-router-dom";
import { ArrowRight, Clock, Monitor, BarChart3 } from "lucide-react";
import { siteImages } from "../data/siteImages";

export default function CourseCard({ course }) {
  const image = siteImages.courses[course.image];

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col bg-white border border-stone-100 rounded-sm overflow-hidden hover:border-green-500/40 hover:shadow-[0_8px_30px_-12px_rgba(31,122,77,0.25)] transition-all duration-300"
    >
      {/* Course Image */}
      <div className="aspect-[16/9] overflow-hidden bg-stone-100">
        {image ? (
          <img
            src={image}
            alt={course.title}
            className="w-full h-full object-contain object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
            {course.title}
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] tracking-wide text-green-600 font-medium mb-2">
          {course.level}
        </span>

        <h3 className="font-display font-semibold text-charcoal text-lg mb-2 leading-snug">
          {course.title}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-1">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-stone-500 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5" />
            {course.mode.join(" / ")}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            {course.level}
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 group-hover:text-green-600 transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
