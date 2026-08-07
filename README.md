# Garfield "Garfy" Wang — Portfolio

A single-page portfolio built with Next.js 16 (App Router) + Tailwind CSS v4.

Design concept: a strategist's notebook — bone-paper background, ruled lines,
a hand-inked red chop/seal stamp as the recurring signature motif (nodding to
Garfy's China-market practice), Polaroid-style cards with washi tape for the
self-built AI projects section.

## Structure

```
app/
  layout.tsx       # fonts (Fraunces, Caveat, Inter, IBM Plex Mono) + metadata
  page.tsx          # assembles all sections
  globals.css       # palette tokens, paper grain, stamp, tape, squiggle utilities
components/
  Nav.tsx           # sticky notebook-tab side nav with scroll-spy
  Hero.tsx
  Strengths.tsx      # also exports <SectionHeading />
  Experience.tsx
  Skills.tsx
  Education.tsx
  CaseStudies.tsx
  AIProjects.tsx     # the emphasized self-built AI products section
  Writing.tsx        # pulls real Medium post titles
  Contact.tsx
  SealStamp.tsx      # the signature chop-stamp component
```

## Editing content

All copy lives directly in the section components as typed arrays
(`PILLARS`, `ROLES`, `STUDIES`, `PROJECTS`, `POSTS`, etc.) — edit those
arrays directly, no CMS involved.

Things you'll likely want to fill in yourself:
- **Email** — `components/Contact.tsx` currently routes people to LinkedIn only.
  Add a `mailto:` link once you're ready to publish an address.
- **Project screenshots** — `AIProjects.tsx` cards are currently text-only.
  Drop images into `/public` and swap in an `<Image />` per card.
- **Photos/video** — the brief asked for visuals and video. Add hero/case-study
  imagery to `/public`, then use `next/image` for optimized loading, or embed
  a YouTube video with a lightweight `<iframe>` in `AIProjects.tsx` or `Hero.tsx`.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy: GitHub + Vercel

1. **Push to GitHub**

   ```bash
   cd garfy-portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/garfy-portfolio.git
   git push -u origin main
   ```

   (Create the empty `garfy-portfolio` repo on GitHub first, or use
   `gh repo create garfy-portfolio --public --source=. --push` if you have the
   GitHub CLI installed.)

2. **Deploy on Vercel**

   - Go to https://vercel.com/new
   - Import the `garfy-portfolio` GitHub repo
   - Framework preset: Next.js (auto-detected) — no config needed
   - Click **Deploy**

   Every future `git push` to `main` auto-deploys. Vercel also gives you a
   preview URL for every branch/PR.

3. **Custom domain (optional)**

   In the Vercel project → Settings → Domains, add your own domain (e.g.
   `garfy.design` or `garfieldwang.com`) and follow the DNS instructions shown.

## Notes on fonts

Fonts are loaded via `next/font/google` at build time, which requires network
access to `fonts.googleapis.com`. This works automatically on Vercel and in
any normal dev environment — the only place it won't work is a fully
network-isolated sandbox.
