# HSE Brand Website — Starter Build

A premium, production-quality React starter for a Health, Safety & Environment
(HSE) educator / trainer brand, built with Vite, Tailwind CSS, React Router,
Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Replacing placeholder content

Everything editable lives in `src/data/` — no component code needs to change
to update real content:

- `site.js` — brand name, director bio, hero stats, credentials, contact info
- `courses.js` — the course catalogue
- `services.js` — corporate training & consultancy service lists
- `journeyData.js` — the company timeline
- `testimonials.js` — student testimonials & partner organisations (both
  ship empty — do not add anything here until it's real and consented)
- `resources.js` — the HSE knowledge hub articles
- `faq.js`, `quiz.js` — FAQ and safety quiz content
- `siteImages.js` — every image path on the site, in one place

## Images

Real photography was not available for this build (the connected image
generator was out of credits), so every image slot currently renders an
`ImagePlaceholder` component instead of a photo. To swap in real images:

1. Drop image files into `public/images/`.
2. The paths in `src/data/siteImages.js` already point to the expected
   filenames — once a file exists at that path, swap the corresponding
   `<ImagePlaceholder ... />` in the component for a standard `<img>` tag
   pointing at the matching `siteImages` entry.

## Before showing this to the client

Every bracketed placeholder like `[XX]` or `[to be confirmed]` in
`src/data/*.js` needs real information — course details, the director's
real bio and photo, actual statistics, credentials, contact details and at
least a few consented testimonials. Do not present placeholder statistics,
credentials or testimonials as real.
