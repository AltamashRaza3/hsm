export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-navy-950 text-white pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        {eyebrow && (
          <p className="text-xs font-medium tracking-[0.18em] text-green-400 mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-stone-300 max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
