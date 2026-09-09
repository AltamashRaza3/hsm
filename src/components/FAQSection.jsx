import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-charcoal text-base">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ standalone = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`bg-white py-20 md:py-28 ${!standalone ? "border-t border-stone-100" : ""}`}>
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-center mb-10">
            Common questions about courses, formats and enquiries.
          </p>
          <div>
            {faqs.map((item, i) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
