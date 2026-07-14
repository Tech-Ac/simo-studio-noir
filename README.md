
# SIMO — Studio Noir — Portfolio

Award-winning minimal portfolio for Simo, Graphic Designer based in Bouskoura, Morocco.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS (dark only, black & white, Swiss grid)
- Framer Motion (subtle)
- next/font (Geist)
- SEO: metadata, JSON-LD, OG, sitemap, robots
- i18n: EN / FR / AR with RTL support (custom context, no Google Translate)
- Vercel optimized, 100 Lighthouse target

## Quick Start
```bash
npm install
npm run dev
```

## Structure
- app/ — routes (/, layout)
- components/ — Navbar, Hero, FeaturedWork, Services, Process, Testimonials, Contact, Footer
- lib/ — i18n.tsx, translations.ts

## Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Add domain simo.studio
4. Env: none required

## Features Delivered
- Black & white luxury design, Apple/Linear inspired
- Large typography, whitespace, grid
- Language switcher EN/FR/AR + RTL
- Magnetic CTA, fade-up animations
- Contact form with budget + timeline qualification
- WhatsApp, Email, Instagram links
- Local SEO copy for Morocco
- Performance: no render blocking, next/image remote, font optimization
- Accessibility: semantic HTML, focus states, keyboard nav

## Next Steps
- Add /portfolio/[slug] case study template (data in lib/projects.ts)
- Add /services/[slug] pages
- Generate dynamic OG images with next/og
- Connect form to Resend / Formspree
- Add Vercel Analytics

Crafted for conversion, not just aesthetics.
