import type { Metadata } from 'next';
import { site } from '@/lib/site';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Fox Valley Physical Therapy in Oshkosh, WI. Call (920) 235-8966, visit us at 909 S Washburn Street, or send us a message.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Fox Valley Physical Therapy"
        subtitle="We're here to help. Call us, stop by, or send a message and we'll get right back to you."
      />

      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              Clinic Details
            </h2>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <Icon
                  name="phone"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-charcoal/80 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  name="document"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Fax</dt>
                  <dd className="text-charcoal/80">{site.fax}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  name="mapPin"
                  className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                />
                <div>
                  <dt className="font-semibold text-navy">Address</dt>
                  <dd>
                    <a
                      href={site.mapsLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/80 hover:underline"
                    >
                      {site.address.full}
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

            <div className="mt-8 overflow-hidden rounded-xl border border-navy/10 shadow-sm">
              <iframe
                title="Map to Fox Valley Physical Therapy in Oshkosh, WI"
                src={site.mapsEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              Send Us a Message
            </h2>
            <p className="mt-2 text-charcoal/75">
              Have a question or want to schedule? Fill out the form below.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
