import { team } from './team';

export const site = {
  name: 'Fox Valley Physical Therapy & Wellness Clinic',
  shortName: 'Fox Valley Physical Therapy',
  tagline:
    "Oshkosh's private practice for one-on-one physical therapy since 1990.",
  url: 'https://www.foxvalleyphysicaltherapy.com',
  phone: '(920) 235-8966',
  phoneHref: '+19202358966',
  fax: '(920) 235-1526',
  email: 'info@foxvalleyphysicaltherapy.com',
  address: {
    street: '909 S Washburn Street',
    city: 'Oshkosh',
    region: 'WI',
    postalCode: '54904',
    full: '909 S Washburn Street, Oshkosh, WI 54904',
  },
  hours: [
    { days: 'Monday – Thursday', time: '8:00am – 5:30pm' },
    { days: 'Friday', time: '8:00am – 1:00pm' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  careersUrl: 'https://careers.foxvalleyphysicaltherapy.com',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=909+S+Washburn+Street,+Oshkosh,+WI+54904&output=embed',
  mapsLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=909+S+Washburn+Street,+Oshkosh,+WI+54904',
} as const;

export const stats = [
  { value: '34+', label: 'Years in Business' },
  { value: '35,000+', label: 'Patients Treated' },
  { value: String(team.length), label: 'Healthcare Team Members' },
  { value: 'Only', label: 'Private Practice in Oshkosh with Aquatic Therapy' },
];

export const conditions = [
  'Neck & Back Pain',
  'Shoulder Injuries',
  'Knee Pain',
  'Hand & Wrist Injuries',
  'Ankle Sprains & Strains',
  'Plantar Fasciitis',
  'Hip & Thigh Injuries',
  'Headaches',
  'TMJ Disorders',
  'Post-Surgical Rehab',
  'Balance Disorders',
  'Fibromyalgia',
  'Arthritis',
  'Neurological Conditions',
  'Scoliosis',
  'Sacroiliac Disorders',
];
