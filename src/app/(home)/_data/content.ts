export const tiles = [
  { variant: 'dark' as const, icon: 'Palette', label: 'FRONTEND & UI/UX', heading: 'Pixel-perfect\ninterfaces.', description: 'I obsess over the details — from micro-interactions to layout rhythm. Beautiful UIs that feel intuitive and perform flawlessly.' },
  { variant: 'light' as const, icon: 'Server', label: 'BACKEND & INFRA', heading: 'Scalable\nby nature.', description: 'Systems built for reliability at scale. Clean architecture, thoughtful APIs, and infrastructure that just works.' },
  { variant: 'light' as const, icon: 'Lightbulb', label: 'CREATIVE PROBLEM SOLVER', heading: 'Unconventional\nsolutions.', description: 'I thrive at the intersection of creativity and logic. Complex problems get elegant, unexpected answers.' },
  { variant: 'dark' as const, icon: 'Target', label: 'PRODUCT MINDED', heading: 'Ship what\nmatters.', description: 'Code is a means, not the end. I think in user outcomes, business impact, and the shortest path to real value.' },
] as const;

export const philosophyPills = [
  { icon: 'Code', label: 'Clean code' },
  { icon: 'Layers', label: 'Scalable systems' },
  { icon: 'Heart', label: 'User-first design' },
  { icon: 'Rocket', label: 'Ship fast' },
] as const;
