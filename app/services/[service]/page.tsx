import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicePages, servicePageSlugs } from '@/lib/services';
import { site } from '@/lib/site';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import Icon from '@/components/Icon';

type Props = { params: { service: string } };

export function generateStaticParams() {
  return servicePageSlugs.map((service) => ({ service }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = servicePages[params.service];
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const page = servicePages[params.service];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow="Our Services" title={page.title} />

      <article className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="prose-fvpt max-w-2xl">
            {page.intro.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-lg' : undefined}>
                {para}
              </p>
            ))}

            <h2>Who It Helps</h2>
            <ul>
              {page.helps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>What to Expect at Fox Valley</h2>
            <ul>
              {page.expect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy">
                Ready to get started?
              </h2>
              <p className="mt-2 text-sm text-charcoal/75">
                No referral needed — Wisconsin is a Direct Access state. Call us
                to schedule your one-on-one evaluation.
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-white transition hover:bg-gold-dark"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border-2 border-navy/20 px-5 py-3 font-semibold text-navy transition hover:bg-navy/5"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="mt-4 block text-center text-sm font-semibold text-navy hover:underline"
              >
                ← All services
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
