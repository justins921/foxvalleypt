export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-navy">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl font-serif text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-cream/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
