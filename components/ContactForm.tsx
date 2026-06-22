'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

// No-backend contact form: composes a mailto: with the patient's message.
// To use a hosted form service instead, set NEXT_PUBLIC_FORMSPREE_ID and
// the form will POST to Formspree's free tier.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const inputClass =
  'mt-1 w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleMailto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const phone = String(data.get('phone') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(
      message
    )}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website inquiry from ${name}`
    )}&body=${body}`;
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
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-dark"
      >
        Send Message
      </button>
      {submitted && !FORMSPREE_ID && (
        <p className="text-sm text-charcoal/70">
          Your email app should open with your message ready to send. Prefer to
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
