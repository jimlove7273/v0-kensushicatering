# 🍣 Ken's Sushi Catering

A luxury private chef catering website for Chef Ken — one of Southern California's most highly rated private sushi catering services. The site showcases Chef Ken's story, menu offerings, client reviews, and allows prospective clients to submit booking requests directly online.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, about, chef bio, process, gallery, and CTA |
| `/menu` | Sample menu with signature rolls, sashimi, hot appetizers & omakase |
| `/testimonials` | Client reviews from real events across Southern California |
| `/book` | Multi-section event booking request form |
| `/contact` | General contact form with business hours and service areas |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Google Fonts — Playfair Display (serif) + Inter (sans-serif) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Forms | React Hook Form + Zod |
| Animations | tw-animate-css |

---

## Design

- **Dark-first aesthetic** built around a near-black `oklch` background with warm gold (`oklch(0.82 0.16 85)`) accents — evoking an upscale omakase atmosphere
- Sharp, square-cornered UI elements for a clean, editorial feel
- Dual typeface system: Playfair Display for headings, Inter for body copy
- Fully responsive across mobile, tablet, and desktop

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build   # production build
npm run lint    # run ESLint
```

---

## Project Structure

```
app/
├── page.tsx              # Home
├── book/page.tsx         # Booking form
├── contact/page.tsx      # Contact form
├── menu/page.tsx         # Menu showcase
├── testimonials/page.tsx # Client reviews
└── globals.css           # Global styles & CSS variables

components/
├── ui/                   # shadcn/ui component library
├── header.tsx
├── footer.tsx
├── hero.tsx
├── about.tsx
├── chef.tsx
├── process.tsx
├── gallery.tsx
└── reserve-section.tsx

public/
└── images/               # Chef photos and hero imagery
```

---

## Contact

📞 [323-621-8185](tel:323-621-8185) · Available Monday – Sunday, 11:00 am – 11:00 pm

Serving Los Angeles, Santa Monica, Beverly Hills, Malibu, Newport Beach, and Laguna Niguel.