# Anantariva Global Private Limited

> Where Abundance Meets Vision

Corporate website for Anantariva - an independent consulting and conformity-assessment firm delivering technical advisory, monitoring & evaluation, certification readiness, and sustainability solutions.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **UI Components**: Custom component library (shadcn/ui inspired)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── careers/           # Careers page
│   ├── clients-partnerships/  # Clients & Partnerships
│   ├── contact/           # Contact page with form
│   ├── footprints/        # Global presence
│   ├── insights/          # Blog/Articles
│   │   └── [slug]/        # Dynamic article pages
│   ├── investors/         # Investor relations
│   ├── knowledge/         # Knowledge repository
│   ├── newsroom/          # News & Press
│   ├── portfolio/         # Video portfolio
│   └── services/          # Services page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, Section)
│   ├── shared/            # Shared components (Icon, FeatureCard, CTA)
│   └── ui/                # UI primitives (Button, Card, Input, etc.)
├── content/               # Content management (all site content)
│   ├── site.ts           # Site config & navigation
│   ├── home.ts           # Home page content
│   ├── about.ts          # About page content
│   └── ...               # Other page content files
└── lib/
    └── utils.ts          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Animations**: Smooth scroll animations and micro-interactions using Framer Motion
- **Content Management**: Centralized content in `/src/content` for easy updates
- **Form Validation**: Contact form with Zod schema validation
- **SEO Ready**: Metadata configuration for all pages
- **Type Safe**: Full TypeScript support throughout

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, and CTAs |
| About | `/about` | Company information, values, and team |
| Services | `/services` | Service offerings and industries |
| Clients | `/clients-partnerships` | Client logos and partnerships |
| Insights | `/insights` | Blog articles and thought leadership |
| Insights Article | `/insights/[slug]` | Individual article pages |
| Careers | `/careers` | Job openings and culture |
| Newsroom | `/newsroom` | Press releases and news |
| Investors | `/investors` | Investor relations information |
| Footprints | `/footprints` | Global presence and locations |
| Knowledge | `/knowledge` | Downloadable resources and publications |
| Portfolio | `/portfolio` | Video portfolio and case studies |
| Contact | `/contact` | Contact form and information |

## Content Management

All website content is managed through TypeScript files in `/src/content`. To update content:

1. Navigate to the relevant content file (e.g., `src/content/home.ts`)
2. Update the exported content object
3. Changes will reflect immediately in development

## Styling

The project uses Tailwind CSS with a custom color palette:

- **Navy**: Primary brand color (`#1a365d`)
- **Gold**: Accent color (`#d69e2e`)
- **Emerald**: Secondary accent (`#059669`)

## License

Proprietary - Anantariva Global Private Limited
