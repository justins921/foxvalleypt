import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Physical therapy tips, recovery guidance, and clinic news from Fox Valley Physical Therapy in Oshkosh, WI.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The Fox Valley Blog"
        subtitle="Practical advice on recovery, pain relief, and staying active — from the team at Fox Valley Physical Therapy in Oshkosh, WI."
      />

      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-charcoal/60">
            New posts are on the way — check back soon.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.frontmatter.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <CTABanner />
    </>
  );
}
