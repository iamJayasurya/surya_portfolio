# Jaya Surya J — Portfolio

A Next.js (App Router) portfolio built from resume content, with a black
"terminal / code editor" theme, JetBrains Mono + Space Grotesk type,
scroll-reveal animation (Framer Motion), and a typed-out terminal hero.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — composes all sections
- `components/Hero.tsx` — typed-terminal hero (signature element)
- `components/Experience.tsx` — work history styled as a git commit log
- `components/Skills.tsx` — skills grouped like a stack directory
- `lib/data.ts` — all resume content in one place; edit this to update copy

## Customize

- Colors/fonts: `tailwind.config.ts` and `app/layout.tsx`
- Content: `lib/data.ts`
- Add a real GitHub/LinkedIn link, resume PDF download, or project screenshots
  as needed — the About/Contact sections are good places to extend.

## Deploy

Push to GitHub and import into Vercel (zero-config for Next.js), or run
`npm run build && npm run start`.
