export type Review = {
  name: string;
  rating: number; // 1–5
  text: string;
  source?: string; // e.g. "Google"
};

// Patient reviews featured on the homepage.
// Paste real reviews here (e.g. from the practice's Google profile) and they
// will render automatically. Leave the array empty to show placeholder cards.
export const reviews: Review[] = [];
