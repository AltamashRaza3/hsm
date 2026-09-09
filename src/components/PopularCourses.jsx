import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedCourses } from "../data/courses";
import CourseCard from "./CourseCard";

export default function PopularCourses() {
  const courses = getFeaturedCourses();

  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
              Popular Courses
            </h2>
            <p className="text-stone-600 max-w-lg">
              A cross-section of the training programs offered — from
              foundation-level safety awareness to advanced management
              qualifications.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600 shrink-0"
          >
            View all courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
