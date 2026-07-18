# my-portfolio

Personal site — [sidp24.github.io/my-portfolio](https://sidp24.github.io/my-portfolio) is the old address; the current build deploys on Vercel.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 — design tokens live in [`app/globals.css`](app/globals.css), nothing declares its own colors
- Framer Motion, used sparingly ([`components/Reveal.tsx`](components/Reveal.tsx) is the only scroll animation)
- All copy/data lives in [`content/`](content/) as typed arrays — no CMS

## Run it

```bash
npm install
npm run dev
```

## Edit content

Projects, experience, skills, and awards are plain typed arrays in `content/*.ts`. The résumé PDF is `public/SiddharthPaulResume.pdf`. Contact/social links are in `content/site.ts`.
