import { whyLearnFeatures } from "../data/site";
import { getIcon } from "../lib/icons";

export default function WhyLearnWithUs() {
  return (
    <section className="bg-navy-950 text-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-3">
          Why Learn With Us?
        </h2>
        <p className="text-stone-400 max-w-lg mb-14">
          Training built to change how you actually work, not just what you
          can recall in an exam.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {whyLearnFeatures.map((f) => {
            const Icon = getIcon(f.icon);
            return (
              <div key={f.title} className="bg-navy-950 p-7">
                <Icon className="w-6 h-6 text-green-400 mb-4" strokeWidth={1.75} />
                <h3 className="font-display font-medium text-white mb-2">{f.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
