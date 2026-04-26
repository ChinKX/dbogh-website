# DBOGH — Dream Big or Go Home

Personal website for a software developer who crafts with intent.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Animations | [Framer Motion 12](https://motion.dev/) |
| Styling | CSS Modules + CSS Custom Properties |
| Icons | [Lucide React](https://lucide.dev/) |
| Language | TypeScript 5 |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout + font loading
│   ├── globals.css               # Token imports + base reset
│   └── (home)/                   # Home route group (URL: /)
│       ├── page.tsx              # Composes all sections
│       ├── _ui/                  # Page-specific components
│       ├── _data/                # Content & constants
│       └── _hooks/               # Page-specific hooks
│
├── shared/                       # Cross-page components
│   ├── Navigation.tsx
│   └── Footer.tsx
│
└── platform/                     # Reusable infrastructure
    ├── tokens/                   # Design system (CSS custom properties)
    │   ├── colors.css
    │   ├── typography.css
    │   ├── spacing.css
    │   ├── shadows.css
    │   └── radii.css
    ├── components/               # Primitive UI components
    │   ├── Button.tsx
    │   ├── Text.tsx
    │   ├── Pill.tsx
    │   ├── Divider.tsx
    │   └── Icon.tsx
    └── lib/
        └── motion.ts             # Shared Framer Motion variants
```

### Architecture

```
app/ → shared/ → platform/
```

| Layer | Responsibility | Imports |
|-------|---------------|---------|
| `platform/` | Design tokens, primitives, shared utils | Nothing external |
| `shared/` | Cross-page UI (nav, footer) | `platform/` only |
| `app/(home)/_ui/` | Page sections (Hero, BentoGrid, etc.) | `shared/` + `platform/` |
| `app/` | Routing, page composition | Everything above |

## Design System

Built on the [Lovable](https://lovable.dev) warm cream design system.

### Tokens

All styles are driven by CSS custom properties — no hardcoded values in component CSS.

| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#f7f4ed` | Warm parchment cream background |
| `--color-dark` | `#1c1c1c` | Charcoal — dark surfaces, primary text |
| `--color-text-secondary` | `#5f5f5d` | Muted body text |
| `--color-border` | `#eceae4` | Warm borders for containment |
| `--color-text-inverse` | `#fcfbf8` | Text on dark surfaces |
| `--shadow-inset-button` | inset shadow stack | Lovable's signature tactile button |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Playfair Display | 600 |
| Body | Inter | 400 |
| Labels | Geist Mono | 500 |

### Spacing

8px base grid. Semantic aliases: `--section-padding-x` (120px), `--tile-gap` (16px), `--tile-padding` (36px).

## Deployment

The site is built as a static export (`output: "export"` in `next.config.ts`) and deployed to **GitHub Pages** via `.github/workflows/deploy.yml`. The custom domain `dbogh.com` is pinned via `public/CNAME`.

### How it works

- Pushes to `main` (touching `src/`, `public/`, config, or the workflow itself) trigger the deploy workflow.
- `actions/configure-pages` provides `base_path`, which is passed as `NEXT_PUBLIC_BASE_PATH` and consumed by `next.config.ts` for `basePath` / `assetPrefix`.
- `next build` produces a static site in `out/`, which is uploaded as a Pages artifact and deployed.

### Local production preview

Static export does not run via `next start`. To preview the built output:

```bash
npm run build
npx serve out  # or any static file server
```

### Manual deploy from local

Not needed — pushes to `main` redeploy automatically. The workflow can also be triggered via `workflow_dispatch` from the Actions tab.

## License

Private project.
