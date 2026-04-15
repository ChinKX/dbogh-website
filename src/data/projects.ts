export interface Project {
  name: string;
  url: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: 'MyRumahBaru',
    url: 'https://www.myrumahbaru.com/',
    description: 'AI-powered Proptech platform matching buyers to homes based on property data.',
    stack: ['React', 'Node.js', 'Postgres', 'OpenAI', 'Posthog', 'Datadog', 'GitHub Actions'],
    highlights: [
      'Built a buyer chatbot using OpenAI that matches users to homes.',
      'Full-stack platform with analytics and CI/CD pipeline.',
    ],
    featured: true,
  },
  {
    name: 'Grace',
    url: 'https://apps.apple.com/my/app/grace-spiritual-companion/id6478172934',
    description: 'AI spiritual companion with tailored prayers, reflections, and spiritual tools.',
    stack: ['Flutter', 'Node.js', 'Postgres', 'OpenAI', 'Posthog', 'GitHub Actions'],
    highlights: [
      'Mobile app utilizing AI for personalized spiritual experiences.',
      'Published on the App Store.',
    ],
    featured: true,
  },
  {
    name: 'RentSmartProp',
    url: 'https://rentsmartprop.com.my/',
    description: 'Tenant management system for landlords to track properties and for tenants to process payments and maintenance.',
    stack: ['ReactJS', 'React Native', 'Node.js', 'Firebase Realtime Database', 'Firestore'],
    highlights: [
      'Cross-platform web and mobile application.',
      'Real-time data sync with Firebase.',
    ],
    featured: false,
  },
  {
    name: 'Nutrilite Health Run',
    url: 'https://apps.apple.com/us/app/nutrilite-health-run/id1634171580',
    description: 'Fitness application for setting challenge goals and tracking workouts.',
    stack: ['Flutter', 'Laravel', 'MySQL'],
    highlights: [
      'Challenge-based fitness tracking.',
      'Published on the App Store.',
    ],
    featured: false,
  },
];

export const projectsPreview = projects.filter((p) => p.featured);
