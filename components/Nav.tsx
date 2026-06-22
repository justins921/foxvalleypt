'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { servicePages } from '@/lib/services';
import Icon from './Icon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/our-team', label: 'Our Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/patient-info', label: 'Patient Info' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = Object.values(servicePages).map((s) => ({
  href: `/services/${s.slug}`,
  label: s.title.replace(/ in Oshkosh, WI$/, ''),
}));

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.webp"
            alt="Fox Valley Physical Therapy logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-navy md:text-xl">
              Fox Valley
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold-dark">
              Physical Therapy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="rounded px-3 py-2 text-sm font-medium text-charcoal transition hover:text-navy"
                >
                  {link.label} <span aria-hidden="true">▾</span>
                </Link>
                <div
                  className={`absolute left-0 top-full w-64 rounded-lg border border-navy/10 bg-white p-2 shadow-lg transition ${
                    servicesOpen
                      ? 'visible opacity-100'
                      : 'invisible opacity-0'
                  }`}
                >
                  <Link
                    href="/services"
                    className="block rounded px-3 py-2 text-sm font-semibold text-navy hover:bg-cream"
                  >
                    All Services
                  </Link>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded px-3 py-2 text-sm text-charcoal hover:bg-cream hover:text-navy"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium text-charcoal transition hover:text-navy"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={`tel:${site.phoneHref}`}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gold-dark"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-2 text-xs font-semibold text-white"
            aria-label={`Call ${site.phone}`}
          >
            <Icon name="phone" className="h-4 w-4" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded p-2 text-navy"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-cream lg:hidden">
          <div className="mx-auto flex max-w-content flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-navy/5 py-3 text-base font-medium text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.careersUrl}
              className="border-b border-navy/5 py-3 text-base font-medium text-charcoal"
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
