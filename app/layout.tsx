import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      'Fox Valley Physical Therapy & Wellness Clinic | Oshkosh, WI',
    template: '%s | Fox Valley Physical Therapy',
  },
  description:
    'One-on-one physical therapy, aquatic therapy, and occupational therapy in Oshkosh, WI. The only private practice in Oshkosh with a therapeutic pool. Serving the Fox Valley and Winnebago County since 1990.',
  keywords: [
    'physical therapy Oshkosh WI',
    'aquatic therapy Oshkosh',
    'occupational therapy Oshkosh',
    'dry needling Oshkosh',
    'Fox Valley physical therapy',
    'Winnebago County physical therapy',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'Fox Valley Physical Therapy & Wellness Clinic | Oshkosh, WI',
    description:
      'One-on-one physical therapy, aquatic therapy, and occupational therapy in Oshkosh, WI. The only private practice in Oshkosh with a therapeutic pool.',
    images: ['/images/facility-team.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fox Valley Physical Therapy & Wellness Clinic | Oshkosh, WI',
    description:
      'One-on-one physical therapy, aquatic therapy, and occupational therapy in Oshkosh, WI.',
    images: ['/images/facility-team.jpg'],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
