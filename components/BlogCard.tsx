import Link from 'next/link';
import type { Post } from '@/lib/blog';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: { post: Post }) {
  const { title, slug, date, excerpt } = post.frontmatter;
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <time className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
        {formatDate(date)}
      </time>
      <h3 className="mt-2 font-serif text-xl font-bold text-navy group-hover:text-navy-light">
        {title}
      </h3>
      {excerpt && (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
          {excerpt}
        </p>
      )}
      <span className="mt-4 text-sm font-semibold text-gold-dark group-hover:underline">
        Read more →
      </span>
    </Link>
  );
}
