import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center md:px-6">
      <p className="font-serif text-6xl font-bold text-gold">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-navy">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-charcoal/75">
        Sorry, we couldn&apos;t find the page you were looking for. Let&apos;s
        get you back on track.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-dark"
      >
        Back to Home
      </Link>
    </section>
  );
}
