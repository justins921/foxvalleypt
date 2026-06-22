export type TeamMember = {
  name: string;
  credential: string;
  title: string;
  since?: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    name: 'Steve Sobojinski',
    credential: 'OTR, CSCS',
    title: 'Occupational Therapist & Co-Founder',
    since: '1988',
    bio: 'Steve co-founded Fox Valley Physical Therapy and has been an occupational therapist in the Oshkosh community since 1988. As a Certified Strength and Conditioning Specialist, he blends rehabilitation with conditioning to help patients rebuild the strength and independence they need for everyday life.',
    image: '/images/team-steve.png',
    imageAlt: 'Portrait of Steve Sobojinski, OTR, CSCS',
  },
  {
    name: 'Regina Sobojinski',
    credential: 'PT',
    title: 'Physical Therapist & Co-Founder',
    since: '1987',
    bio: 'Regina co-founded Fox Valley Physical Therapy and has practiced as a physical therapist since 1987. Her decades of hands-on experience and commitment to one-on-one care set the standard for the entire practice.',
    image: '/images/team-regina.png',
    imageAlt: 'Portrait of Regina Sobojinski, PT',
  },
  {
    name: 'Dr. Stephanie Meyer',
    credential: 'DPT, CMTPT',
    title: 'Physical Therapist & Dry Needling Specialist',
    bio: 'Dr. Stephanie Meyer is a Doctor of Physical Therapy and a Certified Myofascial Trigger Point Therapist. She specializes in dry needling to relieve stubborn muscle pain and restore healthy, pain-free movement.',
    image: '/images/team-stephanie.png',
    imageAlt: 'Portrait of Dr. Stephanie Meyer, DPT, CMTPT',
  },
  {
    name: 'Darrick Lang',
    credential: 'PTA',
    title: 'Physical Therapist Assistant',
    since: '2005',
    bio: 'Darrick has been a Physical Therapist Assistant at Fox Valley Physical Therapy since 2005. His experience and steady, encouraging approach help patients stay motivated throughout their recovery.',
    image: '/images/team-darrick.png',
    imageAlt: 'Portrait of Darrick Lang, PTA',
  },
  {
    name: 'Darren Hanusa',
    credential: 'LAT, CSCS',
    title: 'Licensed Athletic Trainer',
    since: '1998',
    bio: 'Darren is a Licensed Athletic Trainer and Certified Strength and Conditioning Specialist who has served the practice since 1998. He works with athletes of every level to recover safely and return to peak performance.',
    image: '/images/team-darren.png',
    imageAlt: 'Portrait of Darren Hanusa, LAT, CSCS',
  },
  {
    name: 'Paula Clark',
    credential: '',
    title: 'Clinic Manager',
    bio: 'Paula keeps Fox Valley Physical Therapy running smoothly as Clinic Manager, making sure every patient has a welcoming, well-organized experience from the moment they walk in.',
    image: '/images/team-paula.png',
    imageAlt: 'Portrait of Paula Clark, Clinic Manager',
  },
];
