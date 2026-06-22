import Link from 'next/link';

// Symptom-first entry point, inspired by how the top-ranking PT sites let
// visitors start from "what hurts." Each area links to the appointment
// request with the area pre-filled.
const areas = [
  'Neck',
  'Back',
  'Shoulder',
  'Elbow, Wrist & Hand',
  'Hip',
  'Knee',
  'Foot & Ankle',
  'Headaches & TMJ',
];

export default function BodyAreaFinder() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Start Here
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
            What Hurts?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/75">
            Tell us where it hurts and we&apos;ll take it from there — no
            referral needed to get started.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area}
              href={`/contact?area=${encodeURIComponent(area)}`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-navy/10 bg-cream px-5 py-4 font-semibold text-navy transition hover:border-gold hover:bg-navy hover:text-white"
            >
              <span>{area}</span>
              <span
                aria-hidden="true"
                className="text-gold-dark transition group-hover:translate-x-0.5 group-hover:text-white"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
