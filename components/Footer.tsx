import Link from 'next/link';
import { site } from '@/lib/site';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/patient-info', label: 'Patient Info' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/90">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="font-serif text-2xl font-bold text-white">
            Fox Valley Physical Therapy
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/70">{site.tagline}</p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/80 transition hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.careersUrl}
                className="text-cream/80 transition hover:text-gold-light"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-white">
            Visit Us
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>{site.address.full}</p>
            <p>
              <a
                href={`tel:${site.phoneHref}`}
                className="transition hover:text-gold-light"
              >
                {site.phone}
              </a>
            </p>
            <p>Fax: {site.fax}</p>
            <div className="pt-2">
              {site.hours.map((h) => (
                <p key={h.days}>
                  <span className="font-medium text-cream">{h.days}:</span>{' '}
                  {h.time}
                </p>
              ))}
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-4 py-5 text-center text-xs text-cream/60 md:px-6">
          © {new Date().getFullYear()} Fox Valley Physical Therapy &amp;
          Wellness Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
