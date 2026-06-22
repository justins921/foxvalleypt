import { redirect } from 'next/navigation';
import { site } from '@/lib/site';

// Careers live on a separate site — send visitors straight there.
export default function CareersPage() {
  redirect(site.careersUrl);
}
