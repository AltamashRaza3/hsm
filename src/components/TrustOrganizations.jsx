import { trustOrganizations } from "../data/testimonials";

export default function TrustOrganizations() {
  if (trustOrganizations.length === 0) return null;

  return (
    <section className="bg-stone-50 py-14 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <p className="text-center text-[11px] tracking-[0.14em] text-stone-500 mb-8">
          ORGANISATIONS WE'VE WORKED WITH
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustOrganizations.map((org) => (
            <span key={org.name} className="text-stone-400 font-display font-medium text-base">
              {org.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
