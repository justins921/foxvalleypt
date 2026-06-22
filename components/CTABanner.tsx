import Link from 'next/link';
import { site } from '@/lib/site';
import Icon from './Icon';

type CTABannerProps = {
  heading?: string;
  text?: string;
};

export default function CTABanner({
  heading = 'Ready to feel better?',
  text = 'Wisconsin is a Direct Access state — no referral needed. Call today and start one-on-one care with a team that knows you by name.',
}: CTABannerProps) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-4 py-14 text-center md:px-6">
        <h2 className="max-w-2xl font-serif text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        <p className="max-w-2xl text-cream/80">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-white shadow transition hover:bg-gold-light"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
