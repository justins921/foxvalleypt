import Link from 'next/link';
import Icon from './Icon';

const points = [
  {
    icon: 'shield',
    title: 'Most Major Insurance Accepted',
    text: 'We work with most major plans — call and we’ll verify your benefits.',
  },
  {
    icon: 'check',
    title: 'No Referral Needed',
    text: 'Wisconsin is a Direct Access state — start care without a doctor’s note.',
  },
  {
    icon: 'star',
    title: 'Free Injury Screenings',
    text: 'Not sure if PT is right for you? Get a free screening or second opinion.',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        {points.map((p) => (
          <div key={p.title} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-light">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-cream/75">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-4 py-4 text-center text-sm md:px-6">
          <Link
            href="/patient-info"
            className="font-semibold text-gold-light hover:underline"
          >
            See insurance &amp; patient info →
          </Link>
        </div>
      </div>
    </section>
  );
}
