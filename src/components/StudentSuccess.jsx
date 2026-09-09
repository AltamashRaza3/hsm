import { Link } from "react-router-dom";
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

export default function StudentSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  // Auto slide every 5.5 seconds
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  if (total === 0) {
    return (
      <section className="bg-white py-20 md:py-28 border-t border-stone-100">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
                Real People. Real Progress. Real Impact.
              </h2>

              <p className="text-stone-600 max-w-lg">
                Hear from learners building practical knowledge and progressing
                toward careers in health and safety.
              </p>
            </div>

            <Link
              to="/success-stories"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600 shrink-0"
            >
              All success stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-dashed border-stone-300 rounded-sm p-10 text-center">
            <Quote className="w-6 h-6 text-stone-300 mx-auto mb-3" />

            <p className="text-sm text-stone-500 max-w-sm mx-auto">
              Student testimonials will be added here once the client provides
              verified, consented feedback.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-green-600 mb-3">
              STUDENT SUCCESS
            </p>

            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
              Real People. Real Progress. Real Impact.
            </h2>

            <p className="text-stone-600 max-w-lg">
              Hear from learners building practical knowledge and progressing
              toward careers in health and safety.
            </p>
          </div>

          <Link
            to="/success-stories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-green-600 shrink-0"
          >
            All success stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div key={testimonial.name} className="w-full shrink-0">
                    <div className="border border-stone-200 rounded-sm p-7 sm:p-10 md:p-12 bg-stone-50/50">
                      <Quote className="w-10 h-10 text-green-600/20 mb-8" />

                      <div className="max-w-4xl">
                        <blockquote className="font-display text-xl sm:text-2xl md:text-3xl leading-relaxed text-charcoal tracking-tight mb-10">
                          “{testimonial.quote}”
                        </blockquote>

                        <div className="flex items-center justify-between gap-6">
                          {/* Student */}
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                              {initials}
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-charcoal">
                                {testimonial.name}
                              </p>

                              <p className="text-xs text-stone-500 mt-1">
                                {testimonial.course}
                              </p>

                              {testimonial.country && (
                                <p className="text-xs text-stone-400 mt-0.5">
                                  {testimonial.country}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Arrows */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={prevSlide}
                              aria-label="Previous testimonial"
                              className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-navy-900 hover:text-navy-900 transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>

                            <button
                              type="button"
                              onClick={nextSlide}
                              aria-label="Next testimonial"
                              className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-navy-900 hover:text-navy-900 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-navy-900"
                    : "w-1.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
