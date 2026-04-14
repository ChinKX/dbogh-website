# DBOGH Website — Implementation Plan

## Overview

Personal website for a software developer. Tagline: **"Dream big or go home"**.
Design theme: **Lovable-inspired** warm cream system with editorial typography and warm gradient atmospherics.

---

## Tech Stack

| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Animations | Framer Motion | 11.x |
| Styling | CSS Modules + CSS Custom Properties | — |
| Fonts | `next/font/google` (Inter, Playfair Display, Geist Mono) | — |
| Language | TypeScript | 5.x |
| Package Manager | npm | — |
| Deployment | Local-first, Vercel when ready | — |

---

## Project Structure

```
dbogh-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, font loading, global CSS import
│   │   ├── globals.css             # Imports platform/tokens/index.css only
│   │   │
│   │   └── (home)/                 # Route group — URL stays /
│   │       ├── page.tsx            # Composes all home sections
│   │       ├── _ui/               # Home-specific components
│   │       │   ├── Hero.tsx            + Hero.module.css
│   │       │   ├── BentoGrid.tsx       + BentoGrid.module.css
│   │       │   ├── BentoTile.tsx       + BentoTile.module.css
│   │       │   ├── Philosophy.tsx      + Philosophy.module.css
│   │       │   ├── CTA.tsx             + CTA.module.css
│   │       │   └── index.ts           # Barrel export
│   │       ├── _data/
│   │       │   └── content.ts      # Page copy, tile data, links
│   │       └── _hooks/
│   │           └── useHeroAnimation.ts
│   │
│   ├── shared/                     # Cross-page components
│   │   ├── Navigation.tsx          + Navigation.module.css
│   │   └── Footer.tsx              + Footer.module.css
│   │
│   └── platform/                   # Reusable infrastructure
│       ├── tokens/                 # CSS custom properties on :root
│       │   ├── colors.css
│       │   ├── typography.css
│       │   ├── spacing.css
│       │   ├── shadows.css
│       │   ├── radii.css
│       │   └── index.css           # Barrel — single @import
│       ├── components/             # Primitive UI components
│       │   ├── Button.tsx          + Button.module.css
│       │   ├── Text.tsx            + Text.module.css
│       │   ├── Container.tsx       + Container.module.css
│       │   ├── Pill.tsx            + Pill.module.css
│       │   ├── Icon.tsx
│       │   └── Divider.tsx         + Divider.module.css
│       ├── hooks/
│       │   └── useScrollReveal.ts  # Intersection Observer + Framer Motion
│       └── lib/
│           └── motion.ts           # Shared Framer Motion variants
│
├── public/
│   └── fonts/                      # Fallback only — next/font handles loading
│
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Dependency Rule

```
app/ → shared/ → platform/
       ↑
app/ → (home)/_ui/ → shared/ → platform/
```

- `platform/` imports nothing outside itself
- `shared/` imports only `platform/`
- `_ui/` imports `shared/` and `platform/`
- `app/` composes everything

---

## Phase 1: Scaffold & Design System Tokens

### 1.1 Project Init

```bash
npx create-next-app@latest dbogh-website \
  --typescript --app --src-dir --no-tailwind --no-eslint \
  --import-alias "@/*"
```

Install dependencies:
```bash
npm install framer-motion
```

### 1.2 Font Loading (layout.tsx)

Use `next/font/google` with CSS variable strategy for maximum flexibility with CSS Modules:

```tsx
import { Inter, Playfair_Display } from 'next/font/google'
import { GeistMono } from 'geist/font/mono' // or next/font/google

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Apply variables to <html> so all CSS Modules can reference them
<html className={`${inter.variable} ${playfair.variable}`}>
```

### 1.3 Design Tokens

All values from the Lovable design system. Every CSS Module references these — no raw values.

**colors.css**
```css
:root {
  /* Surfaces */
  --color-bg:             #f7f4ed;   /* Warm parchment cream */
  --color-surface:        #f7f4ed;   /* Cards — same as bg for seamless */
  --color-surface-subtle: #fafafc;   /* Slight contrast sections */

  /* Text — opacity-based from #1c1c1c */
  --color-text-primary:   #1c1c1c;                  /* Headings */
  --color-text-secondary: #5f5f5d;                   /* Body, descriptions */
  --color-text-muted:     rgba(28, 28, 28, 0.4);    /* Captions, timestamps */
  --color-text-inverse:   #fcfbf8;                   /* On dark surfaces */
  --color-text-inverse-muted: rgba(252, 251, 248, 0.5);

  /* Borders */
  --color-border:         #eceae4;                   /* Passive containment */
  --color-border-interactive: rgba(28, 28, 28, 0.4); /* Buttons, inputs */

  /* Dark surfaces */
  --color-dark:           #1c1c1c;   /* Dark tiles, CTA, footer */

  /* Hero gradient mesh colors */
  --color-gradient-pink:    #fce7f3;
  --color-gradient-peach:   #fed7aa;
  --color-gradient-coral:   #fecaca;
  --color-gradient-lavender:#ddd6fe;
  --color-gradient-blue:    #bfdbfe;
}
```

**typography.css**
```css
:root {
  /* Font families (populated by next/font CSS variables) */
  --font-heading:  var(--font-playfair), 'Georgia', serif;
  --font-body:     var(--font-inter), system-ui, sans-serif;
  --font-mono:     var(--font-geist-mono), 'SF Mono', monospace;

  /* Font sizes */
  --text-xs:    0.75rem;   /* 12px - captions */
  --text-sm:    0.875rem;  /* 14px - small body */
  --text-base:  1rem;      /* 16px - body */
  --text-lg:    1.125rem;  /* 18px - large body */
  --text-xl:    1.25rem;   /* 20px - card titles */
  --text-2xl:   1.5rem;    /* 24px */
  --text-3xl:   2rem;      /* 32px */
  --text-4xl:   2.75rem;   /* 44px - section headings */
  --text-5xl:   3.75rem;   /* 60px - hero display */

  /* Font weights */
  --weight-normal:   400;
  --weight-semibold: 600;

  /* Line heights */
  --leading-tight:   1.1;
  --leading-snug:    1.25;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;

  /* Letter spacing */
  --tracking-tight-xl: -1.5px;  /* 60px display */
  --tracking-tight-lg: -1.2px;  /* 44px section */
  --tracking-tight:    -0.9px;  /* 32px sub */
  --tracking-normal:   0;
  --tracking-wide:     2px;     /* Mono labels */
}
```

**spacing.css**
```css
:root {
  --space-1:  0.25rem;  /* 4px */
  --space-2:  0.5rem;   /* 8px — base unit */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-5:  1.25rem;  /* 20px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-14: 3.5rem;   /* 56px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-30: 7.5rem;   /* 120px */
  --space-36: 9rem;     /* 144px */

  /* Semantic aliases */
  --section-padding-x: var(--space-30);   /* 120px horizontal */
  --section-padding-y: var(--space-30);   /* 120px vertical */
  --tile-padding:      var(--space-9, 2.25rem); /* 36px */
  --tile-gap:          var(--space-4);     /* 16px */
  --content-max-width: 1200px;
}
```

**shadows.css**
```css
:root {
  /* Lovable inset shadow — signature tactile button depth */
  --shadow-inset-button:
    inset 0 0.5px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);

  /* Dark surface inner highlight */
  --shadow-inset-dark:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.06);

  /* Subtle card elevation */
  --shadow-card:
    0 2px 8px 0 rgba(0, 0, 0, 0.05);

  /* Focus state — soft warm emphasis */
  --shadow-focus:
    0 4px 12px 0 rgba(0, 0, 0, 0.1);
}
```

**radii.css**
```css
:root {
  --radius-sm:   4px;    /* Small buttons, interactive elements */
  --radius-md:   6px;    /* Buttons, inputs */
  --radius-lg:   8px;    /* Compact cards */
  --radius-xl:   12px;   /* Standard cards, images */
  --radius-2xl:  16px;   /* Large containers */
  --radius-full: 9999px; /* Pills, toggles */
}
```

**index.css** (barrel)
```css
@import './colors.css';
@import './typography.css';
@import './spacing.css';
@import './shadows.css';
@import './radii.css';
```

---

## Phase 2: Platform Primitives

Reusable components that consume tokens. Each has a `.tsx` + `.module.css` pair.

### Button

Variants: `primary` (dark + inset shadow), `ghost` (outline), `surface` (cream), `pill` (round icon).

```tsx
// platform/components/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'surface' | 'pill'
  size?: 'sm' | 'md'
  children: React.ReactNode
  href?: string
  icon?: React.ReactNode
}
```

Key CSS (Button.module.css):
```css
.primary {
  background: var(--color-dark);
  color: var(--color-text-inverse);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  box-shadow: var(--shadow-inset-button);   /* Lovable signature */
}
.ghost {
  background: transparent;
  border: 1px solid var(--color-border-interactive);
  color: var(--color-text-primary);
}
```

### Text

Variants: `display`, `heading`, `subheading`, `body`, `caption`, `mono`.

### Container

Variants: `section` (max-width + padding), `page` (full-width).

### Pill

Small label component with warm cream or charcoal background.

### Divider

Horizontal line using `--color-border`.

### Icon

Wrapper for Lucide React icons with consistent sizing.

---

## Phase 3: Shared Components

### Navigation
- Sticky on cream background
- Logo ("DBOGH") left — Inter 600
- Links right — Inter 400: About, Work, Contact
- CTA button (primary variant) far right
- Mobile: hamburger at 768px breakpoint

### Footer
- Dark surface (`--color-dark`)
- Copyright text + social icons (GitHub, LinkedIn, Twitter)
- Consistent padding with sections

---

## Phase 4: Home Page Sections

All components in `app/(home)/_ui/`.

### Hero
- **Background**: Warm mesh gradient (pinks, peaches, lavenders, blues over cream)
- **Content**: Tagline pill → Display headline (Playfair 60px 600) → Subtitle (Inter 18px) → CTA button
- **Animation**: Staggered fade-up on load using Framer Motion variants
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, staggerChildren: 0.15 }}
  />
  ```

### BentoGrid
- **Layout**: 2x2 grid with 16px gap
- **Tiles**: Alternating dark/cream diagonal pattern
- **Animation**: `whileInView` fade-up with stagger
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.1 }}
  />
  ```

### BentoTile
- Props: `variant` (dark | light), `icon`, `label`, `heading`, `description`
- Dark: charcoal bg + inset shadow highlight + off-white text
- Light: cream bg + `#eceae4` border + charcoal text

### Philosophy
- Centered italic quote (Playfair Display 400 italic)
- Quote: _"The best code is no code at all. Every line you ship is a line you maintain."_
- Principle pills below: Clean code, Scalable systems, User-first design, Ship fast
- Gradient decorative line accent
- **Animation**: fade-in on scroll

### CTA
- Dark charcoal background with warm atmospheric mesh gradient
- Headline: "Got an idea? Let's make it real."
- Two buttons: "Say hello" (surface/inverted) + "View resume" (ghost)
- **Animation**: scale-up with fade on scroll

### Content Data

All page copy lives in `_data/content.ts`:
```ts
export const tiles = [
  { variant: 'dark', icon: 'palette', label: 'FRONTEND & UI/UX', heading: 'Pixel-perfect\ninterfaces.', description: '...' },
  { variant: 'light', icon: 'server', label: 'BACKEND & INFRA', heading: 'Scalable\nby nature.', description: '...' },
  { variant: 'light', icon: 'lightbulb', label: 'CREATIVE PROBLEM SOLVER', heading: 'Unconventional\nsolutions.', description: '...' },
  { variant: 'dark', icon: 'target', label: 'PRODUCT MINDED', heading: 'Ship what\nmatters.', description: '...' },
] as const
```

---

## Phase 5: Animation Strategy

### Library: Framer Motion 11.x

All animated components must be `'use client'` — Server Components cannot use Framer Motion.

### Shared Variants (`platform/lib/motion.ts`)

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}
```

### Scroll Reveal Hook (`platform/hooks/useScrollReveal.ts`)

Wraps `useInView` from Framer Motion:
```ts
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollReveal(options?: { once?: boolean; amount?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.3,
  })
  return { ref, isInView }
}
```

### Animation Map

| Section | Animation | Trigger |
|---------|-----------|---------|
| Hero | Staggered fade-up (pill → heading → subtitle → CTA) | On page load |
| Navigation | Fade-in | On page load |
| BentoGrid | Staggered fade-up per tile | `whileInView`, once |
| Philosophy | Fade-in with slight scale | `whileInView`, once |
| CTA | Fade-up with scale | `whileInView`, once |
| Footer | Fade-in | `whileInView`, once |

### `'use client'` Boundary Strategy

Only the animated wrappers need `'use client'`. Keep data and content as Server Components where possible.

```
page.tsx (Server Component — composes sections)
├── Navigation.tsx ('use client' — animation on load)
├── Hero.tsx ('use client' — stagger animations)
├── BentoGrid.tsx ('use client' — scroll-triggered)
├── Philosophy.tsx ('use client' — scroll-triggered)
├── CTA.tsx ('use client' — scroll-triggered)
└── Footer.tsx ('use client' — scroll-triggered)
```

---

## Phase 6: Deployment Plan

### Local Development
```bash
npm run dev        # Next.js dev server on localhost:3000
```

### Production Build
```bash
npm run build      # Static export or Node.js server
npm run start      # Preview production build locally
```

### Vercel Deployment (when ready)
1. Push to GitHub repository
2. Connect repo to Vercel
3. Auto-deploys on every push to `main`
4. Preview deployments on PRs
5. Custom domain: configure DNS A/CNAME records

### Vercel Configuration
```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export if no server-side features needed
  // output: 'export',
}

export default nextConfig
```

### Environment
- Node.js 20+ (LTS)
- Vercel free tier covers personal sites
- Edge network for global CDN
- Automatic HTTPS

---

## Build Order

| Phase | What | Depends On |
|-------|------|------------|
| 1 | Scaffold + tokens | Nothing |
| 2 | Platform primitives (Button, Text, Container, etc.) | Phase 1 |
| 3 | Shared components (Navigation, Footer) | Phase 2 |
| 4 | Home sections (Hero, BentoGrid, Philosophy, CTA) | Phase 2 + 3 |
| 5 | Animations (add motion to all sections) | Phase 4 |
| 6 | Polish, responsive, deploy | Phase 5 |

---

## Design Reference

The Pencil design file is at `dbogh-website.pen` in the project root. A 2x PNG export is at `JPLyy.png`.

The design follows the **Lovable design system** theme:
- Warm parchment cream `#f7f4ed` background
- Charcoal `#1c1c1c` text (opacity-based grays)
- Warm borders `#eceae4` for containment
- Inset shadow technique on dark buttons
- Warm gradient mesh on hero (pinks, peaches, lavenders, blues)
- Editorial typography: Playfair Display headings, Inter body, Geist Mono labels
