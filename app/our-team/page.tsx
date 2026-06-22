import type { Metadata } from 'next';
import { team } from '@/lib/team';
import TeamCard from '@/components/TeamCard';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the physical therapists, occupational therapists, and care team at Fox Valley Physical Therapy in Oshkosh, WI — over 100 years of combined experience.',
  alternates: { canonical: '/our-team' },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Us"
        title="A Team That Knows You by Name"
        subtitle="With more than 100 years of combined experience, our Oshkosh team has been caring for the Fox Valley community since 1990 — one patient, one appointment at a time."
      />

      <section className="mx-auto max-w-content px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <CTABanner heading="Want to join our team?" text="We're always looking for caring professionals. Explore careers at Fox Valley Physical Therapy." />
    </>
  );
}
