# Caitlin Weingarden — UX Portfolio

A modern, sophisticated UX portfolio with a soft art-inspired aesthetic. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive**: Mobile-first breakpoints (375px, 768px, 1024px, 1440px)
- **Accessible**: WCAG 2.1 AA–oriented (semantic HTML, focus states, skip link, reduced motion)
- **Theme**: Light/dark mode with system preference and `localStorage` persistence
- **Pages**: Home, Work (case studies), Art (masonry gallery + lightbox), About, Resume

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Customization

- **Content**: Edit `lib/projects.ts` (case studies) and `lib/art.ts` (gallery). Replace placeholder images in `public/`.
- **Contact**: Update email and social links in `components/Footer.tsx` and `app/resume/page.tsx`.
- **Resume**: Add a PDF to `public/resume.pdf` and link it from `app/resume/page.tsx`.
- **About**: Add a photo and tweak copy in `app/about/page.tsx`.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Playfair Display, Manrope)
- next/image

## Deploy (e.g. Vercel)

Connect the repo to Vercel; build command `npm run build`, output directory `.next`. No extra config needed.
