import Link from 'next/link';
import Image from 'next/image';
import { site, stats, conditions } from '@/lib/site';
import { services } from '@/lib/services';
import { team } from '@/lib/team';
import ServiceCard from '@/components/ServiceCard';
import TeamCard from '@/components/TeamCard';
import CTABanner from '@/components/CTABanner';
import Icon from '@/components/Icon';

const whyPoints = [
  {
    icon: 'check',
    title: 'One-on-One Care',
    text: 'Every appointment, every time. No aides, no handoffs — just your therapist and you.',
  },
  {
    icon: 'star',
    title: '100+ Years Combined Experience',
    text: "A team that's seen it all and treated it all, right here in Oshkosh.",
  },
  {
    icon: 'wave',
    title: 'Only Pool in Town',
    text: 'The only private PT practice in Oshkosh with a therapeutic pool.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'PhysicalTherapy',
  name: 'Fox Valley Physical Therapy & Wellness Clinic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '909 S Washburn Street',
    addressLocality: 'Oshkosh',
    addressRegion: 'WI',
    postalCode: '54904',
  },
  telephone: '+1-920-235-8966',
  faxNumber: '+1-920-235-1526',
  url: 'https://www.foxvalleyphysicaltherapy.com',
  foundingDate: '1990',
  description:
    'One-on-one physical therapy, aquatic therapy, and occupational therapy in Oshkosh, WI. The only private practice in Oshkosh with a therapeutic pool.',
  openingHours: ['Mo-Th 08:00-17:30', 'Fr 08:00-13:00'],
};

export default function HomePage() {
  const teamPreview = team.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/facility-team.jpg"
            alt="The Fox Valley Physical Therapy team outside their facility in Oshkosh, WI"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Oshkosh&apos;s Most Trusted Private Practice — Since 1990
            </h1>
            <p className="mt-6 text-lg text-cream/85 md:text-xl">
              One-on-one physical therapy, aquatic therapy, and occupational
              therapy. Real care from a team that knows you by name.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-gold-light"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold-dark">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="font-serif text-3xl font-bold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/85">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Fox Valley */}
      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Why Fox Valley
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
            Care that feels personal, because it is
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {whyPoints.map((point) => (
            <div key={point.title} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Icon name={point.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {point.title}
              </h3>
              <p className="mt-2 text-charcoal/75">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                What We Do
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-navy hover:underline"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions we treat */}
      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
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
      </section>

      {/* Team preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Meet Us
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
                A Team That Knows You by Name
              </h2>
            </div>
            <Link
              href="/our-team"
              className="text-sm font-semibold text-navy hover:underline"
            >
              Meet the whole team →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamPreview.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Patient Stories
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
            What Our Patients Say
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-dashed border-navy/20 bg-white p-6"
            >
              <Icon name="star" className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 flex-1 italic text-charcoal/50">
                {/* TODO: Replace with a real patient testimonial when provided. */}
                &ldquo;Patient testimonial coming soon.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-charcoal/40">
                — Patient Name, Oshkosh
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-charcoal/40">
          Real patient quotes will be added here when provided.
        </p>
      </section>

      {/* Location / CTA strip */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
              Visit Us in Oshkosh
            </h2>
            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <Icon
                  name="mapPin"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Address</dt>
                  <dd className="text-charcoal/80">
                    <a
                      href={site.mapsLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {site.address.full}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  name="phone"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Phone</dt>
                  <dd className="text-charcoal/80">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  name="clock"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Hours</dt>
                  <dd className="text-charcoal/80">
                    {site.hours.map((h) => (
                      <div key={h.days}>
                        {h.days}: {h.time}
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
            <iframe
              title="Map to Fox Valley Physical Therapy in Oshkosh, WI"
              src={site.mapsEmbedUrl}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
