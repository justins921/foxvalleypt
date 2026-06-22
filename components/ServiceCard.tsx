import Link from 'next/link';
import Icon from './Icon';
import type { Service } from '@/lib/services';

export default function ServiceCard({ service }: { service: Service }) {
  const inner = (
    <div
      className={`group flex h-full flex-col rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${
        service.featured
          ? 'border-gold bg-gold/5 ring-1 ring-gold/30'
          : 'border-navy/10 bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
            service.featured ? 'bg-gold text-white' : 'bg-navy/5 text-navy'
          }`}
        >
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-lg font-semibold text-navy">
          {service.name}
          {service.featured && (
            <span className="ml-1 text-gold" aria-label="featured">
              ★
            </span>
          )}
        </h3>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
        {service.short}
      </p>
      {service.hasPage && (
        <span className="mt-4 text-sm font-semibold text-gold-dark group-hover:underline">
          Learn more →
        </span>
      )}
    </div>
  );

  if (service.hasPage) {
    return (
      <Link href={`/services/${service.slug}`} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
