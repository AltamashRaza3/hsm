import { credentials } from "../data/site";

// Shown only as a structural placeholder. Do not present these as verified
// accreditations, affiliations or partnerships until the client confirms them.
export default function CredentialsStrip() {
  return (
    <section className="bg-white border-b border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-8 md:py-10">
        <p className="text-center text-[11px] tracking-[0.14em] text-stone-500 mb-5">
          CREDENTIALS &amp; ALIGNMENTS <span className="text-stone-300">— pending client confirmation</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {credentials.map((c) => (
            <span
              key={c.name}
              className="text-stone-400 font-display font-medium text-sm sm:text-base tracking-tight"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
