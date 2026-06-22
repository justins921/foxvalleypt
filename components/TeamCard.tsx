'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { TeamMember } from '@/lib/team';

export default function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full bg-navy/5">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold text-navy">
          {member.name}
          {member.credential && (
            <span className="text-base font-medium text-charcoal/70">
              , {member.credential}
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold-dark">
          {member.title}
        </p>
        {member.since && (
          <p className="mt-0.5 text-xs uppercase tracking-wide text-charcoal/50">
            With FVPT since {member.since}
          </p>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-3 self-start text-sm font-semibold text-navy hover:underline"
          aria-expanded={open}
        >
          {open ? 'Hide bio −' : 'Read bio +'}
        </button>

        {open && (
          <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
}
