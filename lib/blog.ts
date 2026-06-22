import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type PostFrontmatter = {
  title: string;
  slug: string;
  date: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  author?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  content: string;
};

function getPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getAllPosts(): Post[] {
  return getPostFiles()
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || file.replace(/\.mdx?$/, '');
      return {
        frontmatter: { ...(data as PostFrontmatter), slug },
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.frontmatter.slug === slug) ?? null;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.frontmatter.slug);
}
