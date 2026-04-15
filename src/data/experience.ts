export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
  variant: 'dark' | 'light';
}

export const experiences: ExperienceRole[] = [
  {
    company: 'Ryt Bank',
    title: 'Frontend Engineer',
    period: '2024 — Present',
    location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Engineered scalable digital banking experiences across mobile and web platforms using React, React Native, and UmiJS.',
      'Spearheaded development for customer onboarding and CIAM (Customer Identity & Access Management) modules.',
      'Delivered a high-performance onboarding flow enabling users to open bank accounts in under 3 minutes while supporting high concurrent traffic.',
      'Applied Clean Architecture principles, including modular design and separation of concerns, to maintain a high-quality codebase.',
      'Optimized rendering efficiency to ensure smooth user interactions across a wide range of devices.',
      'Utilized AI-assisted, spec-driven development workflows to enhance engineering productivity and delivery speed.',
    ],
    tags: ['React', 'React Native', 'UmiJS', 'Clean Architecture'],
    variant: 'dark',
  },
  {
    company: 'Didian Sdn Bhd',
    title: 'Software Engineer (Full-stack)',
    period: '2020 — 2024',
    location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Architected and maintained Proptech systems including API servers, web applications, and mobile apps using React Native, ReactJS, Node.js, Postgres, MongoDB, and Docker.',
      'Developed digital sales packages, VR room tours, and digital booking forms to boost agent sales.',
      'Integrated CTOS and banking systems to digitalize sales management and finance department workflows.',
      'Contributed to the Agent-Cooperation Network (ACN) to facilitate nationwide sales collaboration.',
      'Involved in the Didian Now project, enabling home purchases without down payments.',
    ],
    tags: ['React Native', 'ReactJS', 'Node.js', 'Postgres', 'MongoDB', 'Docker'],
    variant: 'light',
  },
  {
    company: 'Didian Sdn Bhd',
    title: 'Software Engineer Intern',
    period: 'Oct — Dec 2019',
    location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Optimized SQL queries to improve the performance of internal sales and finance dashboards.',
      'Built a showroom appointment feature for agents to manage customer schedules via mobile app.',
    ],
    tags: ['SQL', 'Mobile Development'],
    variant: 'light',
  },
];

export const experiencePreview = experiences.slice(0, 2);

export const experienceTaglines: Record<string, string> = {
  'Ryt Bank': 'Digital banking · Onboarding · CIAM',
  'Didian Sdn Bhd': 'Proptech · VR Tours · Sales Platform',
};
