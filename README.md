# C4 Student Accommodations CC, Website

Official website for **C4 Student Accommodations CC**, safe, secure and fully
furnished accommodation for female students in Khomasdal & Rocky Crest,
Windhoek, Namibia. 2027 bookings now open.

**Live:** https://c4-student-accommodations.vercel.app
**Repo:** https://github.com/tangison/c4-student-accommodations

---

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 with the official C4 brand palette
  (Deep Teal `#044747` · Gold `#A1751F` · Charcoal `#0D1418` · Warm Grey `#F7F6F3`)
- Montserrat (brand typeface) via `next/font`
- shadcn/ui components (accordion, dialog) + Lucide icons
- AI assistant widget (`/api/chat`): LLM-backed where available, with a local
  FAQ knowledge-base fallback that escalates to WhatsApp

## Pages & files

| Route | Purpose |
|-------|---------|
| `/` | Single-page site: hero, pricing banner, amenities, gallery, about, testimonials, FAQ, booking contact |
| `/privacy`, `/terms`, `/cookies`, `/disclaimer`, `/accessibility` | Legal & compliance pages |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | SEO / PWA routes (generated) |
| `/api/chat` | AI assistant endpoint |
| `src/lib/site.ts` | **Single source of truth**, contact details, pricing, FAQs, amenities |

## Customising

All business facts (phone, WhatsApp link, email, price, deposit, locations,
FAQs, amenities, testimonials) live in **`src/lib/site.ts`**, edit one file
and the whole site updates.

To replace the illustrative preview imagery, drop real photos into
`public/images/` using the same file names.

## Develop

```bash
bun install
bun run dev     # http://localhost:3000
bun run lint
```

## Deploy

The site deploys to Vercel from this repository:

```bash
npx vercel deploy --prod --scope tangison-s-projects --token=<VERCEL_TOKEN>
```

(or connect the repo in the Vercel dashboard for automatic deploys on push).

---

Built by [Tangison Agency](https://tangison.com) · Windhoek, Namibia · AI-Powered
