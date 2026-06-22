import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import CTABanner from '@/components/CTABanner';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const { title, metaTitle, metaDescription, excerpt, slug } =
    post.frontmatter;
  return {
    title: metaTitle ?? title,
    description: metaDescription ?? excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: metaTitle ?? title,
      description: metaDescription ?? excerpt,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { title, date, author } = post.frontmatter;

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <Link
          href="/blog"
          className="text-sm font-semibold text-navy hover:underline"
        >
          ← Back to blog
        </Link>
        <header className="mt-6 border-b border-navy/10 pb-8">
          <time className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
            {formatDate(date)}
          </time>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
            {title}
          </h1>
          {author && (
            <p className="mt-4 text-sm text-charcoal/60">By {author}</p>
          )}
        </header>

        <div className="prose-fvpt mt-8">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <CTABanner />
    </>
  );
}
