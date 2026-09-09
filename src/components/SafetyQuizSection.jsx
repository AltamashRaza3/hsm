import { Link } from "react-router-dom";
import { ClipboardCheck } from "lucide-react";

export default function SafetyQuizSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8 text-center">
        <ClipboardCheck className="w-8 h-8 text-green-500 mx-auto mb-5" strokeWidth={1.5} />
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
          Test Your Safety Knowledge
        </h2>
        <p className="text-stone-600 max-w-md mx-auto mb-8">
          A short, five-question quiz covering the fundamentals of workplace
          safety. See where you stand.
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
        >
          Take the Safety Quiz
        </Link>
      </div>
    </section>
  );
}
