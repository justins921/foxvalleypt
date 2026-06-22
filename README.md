# Fox Valley Physical Therapy & Wellness Clinic

Marketing website for Fox Valley Physical Therapy & Wellness Clinic in
Oshkosh, WI. Built with Next.js 14 (App Router), Tailwind CSS, and MDX-powered
blog posts. Designed to deploy to Vercel.

## Tech stack

- **Framework:** Next.js 14 (App Router, static export friendly)
- **Styling:** Tailwind CSS (`tailwind.config.ts`)
- **Blog:** MDX files in `content/posts/`, rendered via `next-mdx-remote/rsc`
- **Fonts:** `next/font` — Fraunces (serif headings) + Inter (body)
- **Analytics:** Vercel Analytics
- **Forms:** No-backend contact form (mailto), with optional Formspree support

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/                      Routes (App Router)
  page.tsx                Homepage
  services/               Services overview + [service] detail pages
  our-team/               Team bios
  blog/                   Blog index + [slug] post pages
  patient-info/           Insurance, forms, Direct Access info
  contact/                Contact page + map + form
  careers/                Redirects to careers.foxvalleyphysicaltherapy.com
  sitemap.ts / robots.ts  Auto-generated SEO files
components/                Nav, Footer, cards, CTA, ContactForm, Icon
content/posts/             Blog posts (.mdx with frontmatter)
lib/                       site config, services, team, blog helpers
public/images/             Placeholder images (replace with real photos)
public/forms/              Patient intake PDF goes here
scripts/                   Placeholder image generator
```

## Images

Team headshots, the hero/facility photo, and the logo in `public/images/`
were sourced from the practice's existing website. Replace any of them with
updated photography by dropping a new file in `public/images/` and pointing
the relevant reference (`lib/team.ts`, `app/page.tsx`, or the layout) at it.

## Content to replace before launch

- **Patient intake PDF** — drop the real PDF at
  `public/forms/patient-intake-form.pdf`.
- **Testimonials** — homepage testimonial section has three placeholder cards.
- **Insurance list** — `app/patient-info/page.tsx` has a representative payer
  list; confirm against the practice's real roster.

## Contact form

By default the form opens the visitor's email client via `mailto:`
(no backend needed). To use Formspree's free tier instead, set the env var
`NEXT_PUBLIC_FORMSPREE_ID` to your form ID and the form will POST to it.

## Editing site-wide info

Business details (phone, address, hours, etc.) live in `lib/site.ts`.
Services, team members, and conditions are also defined in `lib/`.

## Deploying

Push to a Git repo connected to Vercel, or run `vercel`. The site is fully
static and requires no environment configuration to deploy.
