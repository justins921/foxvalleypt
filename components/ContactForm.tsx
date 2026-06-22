'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { site } from '@/lib/site';

// No-backend appointment request form: composes a mailto: with the request.
// To use a hosted form service instead, set NEXT_PUBLIC_FORMSPREE_ID and
// the form will POST to Formspree's free tier.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const areaOptions = [
  'Neck',
  'Back',
  'Shoulder',
  'Elbow, Wrist & Hand',
  'Hip',
  'Knee',
  'Foot & Ankle',
  'Headaches & TMJ',
  'Another area / not sure',
];

const inputClass =
  'mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const presetArea = searchParams.get('area') ?? '';
  const defaultArea = areaOptions.includes(presetArea)
    ? presetArea
    : presetArea
      ? 'Another area / not sure'
      : '';

  function handleMailto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const phone = String(data.get('phone') ?? '');
    const email = String(data.get('email') ?? '');
    const area = String(data.get('area') ?? '');
    const preferred = String(data.get('preferred') ?? '');
    const message = String(data.get('message') ?? '');
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `What's bothering you: ${area}`,
      `Preferred day/time: ${preferred}`,
      '',
      message,
    ].join('\r\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Appointment request from ${name}`
    )}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={FORMSPREE_ID ? undefined : handleMailto}
      action={FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : undefined}
      method={FORMSPREE_ID ? 'POST' : undefined}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="area" className="text-sm font-medium text-navy">
            What&apos;s bothering you?
          </label>
          <select
            id="area"
            name="area"
            defaultValue={defaultArea}
            className={inputClass}
          >
            <option value="">Select an area</option>
            {areaOptions.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="preferred" className="text-sm font-medium text-navy">
            Preferred day/time{' '}
            <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <input
            id="preferred"
            name="preferred"
            type="text"
            placeholder="e.g. weekday mornings"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Anything else?{' '}
          <span className="font-normal text-charcoal/50">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-dark"
      >
        Request Appointment
      </button>
      {submitted && !FORMSPREE_ID && (
        <p className="text-sm text-charcoal/70">
          Your email app should open with your request ready to send. Prefer to
          call? Reach us at{' '}
          <a
            href={`tel:${site.phoneHref}`}
            className="font-semibold text-gold-dark underline"
          >
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
