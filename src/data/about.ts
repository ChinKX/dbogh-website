export const education = {
  university: 'Universiti Tunku Abdul Rahman',
  location: 'Sungai Long, Kajang, Selangor',
  period: 'May 2017 — May 2020',
  degree: 'Bachelor of Science (Hons) Software Engineering',
  cgpa: '3.8008',
  honours: 'First-Class Honours',
  coursework: [
    'Data Structures & Algorithms',
    'Mobile & Web Development',
    'Cloud Computing',
    'Advanced Database',
    'Artificial Intelligence',
    'Data Mining',
    'Software Construction',
    'Server Configuration',
  ],
};

export const achievements = [
  { title: "President's List", detail: '4 trimesters (Jan 2018, May 2018, Jan 2019, May 2019)' },
  { title: "Dean's List", detail: '2 trimesters (May 2017, Oct 2018)' },
  { title: 'UTAR FYP Poster Competition', detail: 'First runner-up (Tenant Management Mobile App)' },
  { title: 'IOI Hackathon 2020', detail: 'Top 10 Finalists (Hi Tech Tenancy)' },
];

export const technicalSkills = {
  core: {
    label: 'Core Tech Stack',
    categories: [
      { name: 'Languages', skills: ['TypeScript', 'JavaScript (ES6+)', 'Dart'] },
      { name: 'Frontend', skills: ['React', 'React Native', 'Flutter', 'Next.js', 'UmiJS'] },
      { name: 'Backend & API', skills: ['Node.js', 'GraphQL'] },
      { name: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    ],
  },
  devops: {
    label: 'Engineering & DevOps',
    categories: [
      { name: 'CI/CD & Versioning', skills: ['GitHub Actions', 'CircleCI', 'Git', 'AppVeyor'] },
      { name: 'Cloud & Infra', skills: ['AWS', 'Alibaba Cloud', 'Firebase', 'Supabase', 'Docker', 'Nginx', 'PM2'] },
      { name: 'Testing & Quality', skills: ['Jest', 'Mockito', 'Unit/Integration Testing', 'TDD'] },
      { name: 'Monitoring', skills: ['Datadog', 'Sentry', 'Posthog', 'Segment', 'Mixpanel', 'Fullstory', 'Amplitude'] },
    ],
  },
  additional: {
    label: 'Additional',
    categories: [
      { name: 'AI & ML', skills: ['OpenAI API', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Keras'] },
      { name: 'Dev Tools', skills: ['GitHub Copilot', 'Claude Code', 'Cursor', 'VS Code', 'Vim', 'Linux'] },
    ],
  },
};

export const personal = {
  languages: ['Chinese', 'English', 'Malay', 'Hokkien'],
  interests: ['Tech enthusiast', 'Badminton'],
};

export const aboutStats = [
  { value: '5+', label: 'Years Experience' },
  { value: '3.80', label: 'CGPA (First Class)' },
  { value: '4', label: 'Languages Spoken' },
];
