export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  featured?: boolean;
  hasPage?: boolean;
};

// Services shown in the homepage grid + services overview.
export const services: Service[] = [
  {
    slug: 'physical-therapy',
    name: 'Physical Therapy',
    short:
      'One-on-one, hands-on physical therapy for injury recovery, chronic pain, and post-surgical rehab.',
    icon: 'activity',
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    short:
      'Helping you regain the everyday skills and independence that matter most to your life.',
    icon: 'hand',
    hasPage: true,
  },
  {
    slug: 'aquatic-therapy',
    name: 'Aquatic Therapy',
    short:
      'The only private PT practice in Oshkosh with a therapeutic pool — heal faster with less pain.',
    icon: 'wave',
    featured: true,
    hasPage: true,
  },
  {
    slug: 'dry-needling',
    name: 'Dry Needling',
    short:
      'Targeted relief for stubborn muscle knots and trigger points, performed by certified specialists.',
    icon: 'target',
    hasPage: true,
  },
  {
    slug: 'mckenzie-method',
    name: 'McKenzie Method',
    short:
      'A proven, research-backed approach to diagnosing and treating neck and back pain.',
    icon: 'spine',
    hasPage: true,
  },
  {
    slug: 'athletic-training',
    name: 'Athletic Training',
    short:
      'Sport-specific care from licensed athletic trainers to get athletes back in the game safely.',
    icon: 'medal',
  },
  {
    slug: 'sports-analysis',
    name: 'Sports Analysis',
    short:
      'Movement and biomechanical analysis to improve performance and prevent re-injury.',
    icon: 'chart',
  },
  {
    slug: 'preventative-programs',
    name: 'Preventative Programs',
    short:
      'Wellness and conditioning programs designed to keep you strong, mobile, and pain-free.',
    icon: 'shield',
  },
];

export type ServicePage = {
  slug: string;
  title: string; // H1 with keyword
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  helps: string[];
  expect: string[];
};

// Full content for the dedicated /services/[service] pages.
export const servicePages: Record<string, ServicePage> = {
  'aquatic-therapy': {
    slug: 'aquatic-therapy',
    title: 'Aquatic Therapy in Oshkosh, WI',
    metaTitle: 'Aquatic Therapy in Oshkosh, WI | Fox Valley Physical Therapy',
    metaDescription:
      'Fox Valley Physical Therapy is the only private practice in Oshkosh with a therapeutic pool. Discover how aquatic therapy relieves pain and speeds recovery.',
    intro: [
      'Fox Valley Physical Therapy is the only private practice in Oshkosh, WI with its own therapeutic pool — and for many of our patients, the water is exactly where healing begins. Aquatic therapy uses the natural properties of warm water to reduce the stress on your joints while you rebuild strength, mobility, and confidence.',
      "When you're submerged, the water supports as much as 80–90% of your body weight. That buoyancy means you can start moving, walking, and exercising far sooner than you could on land — often with dramatically less pain. The gentle resistance of the water also strengthens muscles in every direction without the pounding impact of a gym floor.",
      'For patients recovering from surgery, living with arthritis, managing chronic pain, or rebuilding after a serious injury, aquatic therapy can be the difference between a slow, painful recovery and one that feels manageable and even encouraging.',
    ],
    helps: [
      'Post-surgical rehabilitation (knee, hip, shoulder, and spine)',
      'Arthritis and joint pain',
      'Chronic pain and fibromyalgia',
      'Balance disorders and fall-risk reduction',
      'Neurological conditions',
      'Back and neck pain',
      'Athletes recovering from impact injuries',
      'Anyone who finds land-based exercise too painful to begin',
    ],
    expect: [
      'A one-on-one evaluation with a licensed therapist who designs a plan around your goals.',
      'Sessions in our warm therapeutic pool, guided every step of the way — no swimming ability required.',
      'A gradual, structured progression from water-based work toward land-based strength as you improve.',
      'Real attention from a team that knows you by name, every single appointment.',
    ],
  },
  'dry-needling': {
    slug: 'dry-needling',
    title: 'Dry Needling in Oshkosh, WI',
    metaTitle: 'Dry Needling in Oshkosh, WI | Fox Valley Physical Therapy',
    metaDescription:
      'Certified dry needling at Fox Valley Physical Therapy in Oshkosh, WI. Relieve stubborn muscle pain and trigger points and restore healthy movement.',
    intro: [
      'Dry needling is a precise, research-supported technique for releasing the tight bands of muscle — known as trigger points — that cause stubborn pain, stiffness, and limited movement. At Fox Valley Physical Therapy in Oshkosh, our certified specialists use thin, sterile needles to target these knots directly.',
      "Despite the name, dry needling isn't acupuncture. It's a modern, evidence-based tool rooted in Western anatomy and neuroscience, used to reset overactive muscles and calm the pain signals around them. Many patients feel noticeable relief and improved range of motion after just a few sessions.",
      'We pair dry needling with hands-on therapy and targeted exercise so the relief actually lasts — addressing the root of the problem, not just the symptom.',
    ],
    helps: [
      'Chronic muscle knots and trigger points',
      'Neck and back tension',
      'Headaches and TMJ-related pain',
      'Shoulder, hip, and other joint pain',
      'Sports injuries and overuse strains',
      'Limited range of motion from muscle tightness',
    ],
    expect: [
      'An evaluation by a Certified Myofascial Trigger Point Therapist (CMTPT).',
      'A clear explanation of how dry needling fits into your overall plan of care.',
      'Brief, targeted needle placement into the trigger points causing your symptoms.',
      'A combined approach with manual therapy and exercise so improvements stick.',
    ],
  },
  'mckenzie-method': {
    slug: 'mckenzie-method',
    title: 'McKenzie Method in Oshkosh, WI',
    metaTitle:
      'McKenzie Method (MDT) in Oshkosh, WI | Fox Valley Physical Therapy',
    metaDescription:
      'McKenzie Method physical therapy in Oshkosh, WI. A proven approach to diagnosing and treating neck and back pain at Fox Valley Physical Therapy.',
    intro: [
      'The McKenzie Method — also called Mechanical Diagnosis and Therapy (MDT) — is one of the most thoroughly researched approaches in physical therapy for neck, back, and extremity pain. At Fox Valley Physical Therapy in Oshkosh, our therapists use it to find the true source of your pain and treat it at the root.',
      "What makes the McKenzie Method different is its focus on empowering you. Rather than relying on passive treatments alone, your therapist identifies the specific movements and positions that relieve your symptoms — and teaches you how to manage your pain on your own, reducing your risk of it coming back.",
      'It begins with a thorough mechanical assessment that often pinpoints the problem without the need for expensive imaging or invasive procedures.',
    ],
    helps: [
      'Chronic and recurring low back pain',
      'Neck pain and stiffness',
      'Sciatica and radiating leg or arm pain',
      'Disc-related conditions',
      'Postural pain from work or sitting',
      'Patients who want lasting self-management tools',
    ],
    expect: [
      'A detailed mechanical assessment to classify and explain your pain.',
      'A personalized program of specific movements that reduce your symptoms.',
      'Hands-on treatment when it is the right fit for your case.',
      'Education and tools so you can prevent future flare-ups yourself.',
    ],
  },
  'occupational-therapy': {
    slug: 'occupational-therapy',
    title: 'Occupational Therapy in Oshkosh, WI',
    metaTitle:
      'Occupational Therapy in Oshkosh, WI | Fox Valley Physical Therapy',
    metaDescription:
      'Occupational therapy in Oshkosh, WI at Fox Valley Physical Therapy. Regain independence and the everyday skills that matter most with one-on-one care.',
    intro: [
      'Occupational therapy is about helping you get back to doing the things that make up your daily life — dressing, cooking, working, caring for family, and everything in between. At Fox Valley Physical Therapy in Oshkosh, our occupational therapy is led by co-founder Steve Sobojinski, OTR, CSCS, who has been serving the Fox Valley community since 1988.',
      'Whether you are recovering from a hand or wrist injury, rebuilding fine-motor skills after surgery or a neurological event, or learning new ways to manage a chronic condition, our occupational therapists meet you where you are and build a plan around your real-life goals.',
      'As always, you get true one-on-one care — every appointment, every time. No aides, no handoffs.',
    ],
    helps: [
      'Hand and wrist injuries and post-surgical recovery',
      'Fine-motor skill rehabilitation',
      'Stroke and neurological recovery',
      'Arthritis and chronic-condition management',
      'Return-to-work conditioning and ergonomics',
      'Daily-living independence and adaptive strategies',
    ],
    expect: [
      'A one-on-one evaluation focused on the activities that matter to you.',
      'A personalized plan to rebuild strength, coordination, and confidence.',
      'Practical, real-world strategies and adaptations for daily tasks.',
      'A warm, experienced team that has served Oshkosh for decades.',
    ],
  },
};

export const servicePageSlugs = Object.keys(servicePages);
