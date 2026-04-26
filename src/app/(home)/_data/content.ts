import type { LucideIcon } from 'lucide-react';
import { Palette, Server, Lightbulb, Target, Code, Layers, Heart, Rocket } from 'lucide-react';

export interface Tile {
  variant: 'dark' | 'light';
  icon: LucideIcon;
  label: string;
  heading: string;
  description: string;
}

export interface PhilosophyPill {
  icon: LucideIcon;
  label: string;
}

export const tiles: readonly Tile[] = [
  { variant: 'dark', icon: Palette, label: 'FRONTEND & UI/UX', heading: 'Pixel-perfect\ninterfaces.', description: 'I obsess over the details — from micro-interactions to layout rhythm. Beautiful UIs that feel intuitive and perform flawlessly.' },
  { variant: 'light', icon: Server, label: 'BACKEND & INFRA', heading: 'Scalable\nby nature.', description: 'Systems built for reliability at scale. Clean architecture, thoughtful APIs, and infrastructure that just works.' },
  { variant: 'light', icon: Lightbulb, label: 'CREATIVE PROBLEM SOLVER', heading: 'Unconventional\nsolutions.', description: 'I thrive at the intersection of creativity and logic. Complex problems get elegant, unexpected answers.' },
  { variant: 'dark', icon: Target, label: 'PRODUCT MINDED', heading: 'Ship what\nmatters.', description: 'Code is a means, not the end. I think in user outcomes, business impact, and the shortest path to real value.' },
];

export const philosophyPills: readonly PhilosophyPill[] = [
  { icon: Code, label: 'Clean code' },
  { icon: Layers, label: 'Scalable systems' },
  { icon: Heart, label: 'User-first design' },
  { icon: Rocket, label: 'Ship fast' },
];
