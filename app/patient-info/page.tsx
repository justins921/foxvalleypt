import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Patient Information',
  description:
    'Insurance, billing, intake forms, and Direct Access info for Fox Valley Physical Therapy patients in Oshkosh, WI. No referral needed to start care.',
  alternates: { canonical: '/patient-info' },
};

const insurers = [
  'Medicare',
  'Medicaid',
  'UnitedHealthcare',
  'Anthem Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'Humana',
  'Network Health',
  'WPS Health Insurance',
  'Workers’ Compensation',
];

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Info"
        title="Everything You Need Before Your Visit"
        subtitle="Insurance, billing, forms, and good news: in Wisconsin, you don't need a referral to get started."
      />

      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        {/* Direct Access highlight */}
        <div className="rounded-2xl border-2 border-gold bg-gold/5 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Icon
              name="check"
              className="mt-1 h-8 w-8 shrink-0 text-gold-dark"
            />
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                No Referral Needed — Wisconsin Is a Direct Access State
              </h2>
              <p className="mt-3 max-w-2xl text-charcoal/80">
                You have the right to see a licensed physical therapist without
                first getting a referral from your doctor. That means you can
                skip the wait and start your recovery right away. Some insurance
                plans have their own requirements — just call us and we&apos;ll
                walk you through exactly what your plan needs.
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:bg-gold-dark"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Insurance */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              Insurance We Accept
            </h2>
            <p className="mt-3 text-charcoal/75">
              We accept most major insurance plans. If you don&apos;t see yours
              listed, give us a call — chances are we work with it.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {insurers.map((insurer) => (
                <li key={insurer} className="flex items-center gap-2">
                  <Icon
                    name="check"
                    className="h-4 w-4 shrink-0 text-gold-dark"
                  />
                  <span className="text-sm text-charcoal/85">{insurer}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-charcoal/50">
              Plan list is representative — confirm coverage by calling our
              office. Update this list with the practice&apos;s exact payer
              roster when available.
            </p>
          </div>

          {/* Forms */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              Patient Forms
            </h2>
            <p className="mt-3 text-charcoal/75">
              Save time at your first visit by completing your intake paperwork
              ahead of time.
            </p>
            <a
              href="/forms/patient-intake-form.pdf"
              className="mt-5 inline-flex items-center gap-3 rounded-lg border border-navy/15 bg-white px-5 py-4 font-medium text-navy shadow-sm transition hover:border-gold hover:shadow"
            >
              <Icon name="document" className="h-6 w-6 text-gold-dark" />
              Download Patient Intake Form (PDF)
            </a>
            <p className="mt-3 text-xs text-charcoal/50">
              Replace /public/forms/patient-intake-form.pdf with the
              practice&apos;s real intake PDF.
            </p>
          </div>
        </div>

        {/* Workers comp */}
        <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="font-serif text-2xl font-bold text-navy">
            Workers&apos; Comp &amp; Injury Rehabilitation
          </h2>
          <p className="mt-3 max-w-3xl text-charcoal/80">
            Injured on the job or in an accident? We work directly with
            workers&apos; compensation and auto-injury claims to get you back to
            work and back to life. Our team coordinates with your employer,
            case manager, and physician so you can focus on recovery. Call us
            and we&apos;ll help you navigate the process from day one.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center font-semibold text-navy hover:underline"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
