import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { conditions } from '@/lib/site';
import ServiceCard from '@/components/ServiceCard';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Physical Therapy Services in Oshkosh, WI',
  description:
    'Explore physical therapy, aquatic therapy, occupational therapy, dry needling, the McKenzie Method, and more at Fox Valley Physical Therapy in Oshkosh, WI.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Physical Therapy Services in Oshkosh, WI"
        subtitle="Comprehensive, one-on-one care for the Fox Valley and Winnebago County — from injury recovery to aquatic therapy in our own therapeutic pool."
      />

      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
              How We Help
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
              Conditions We Treat
            </h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {conditions.map((condition) => (
              <li key={condition} className="flex items-center gap-3">
                <Icon
                  name="check"
                  className="h-5 w-5 shrink-0 text-gold-dark"
                />
                <span className="text-charcoal/85">{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
