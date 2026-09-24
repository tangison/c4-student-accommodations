# Tangison Studio Skills Pack

Version 1.0 · September 2026 · Tangison Studio, Windhoek, Namibia

One folder holding every Tangison skill, ready to install. Each skill lives in its own folder under `skills/` with a single `SKILL.md`. One-click `.skill` files for each skill are in `installable/`.

## What is inside (20 skills)

### Client delivery
| Skill | What it does |
|---|---|
| `tangison-client-handover` | The complimentary Digital Foundation Pack: signed reference letter, closeout, brand kit, hosting notes, renewals in N$, 90-day plan. Startup and Refresh tracks. |
| `tangison-market-audit` | Competitor audit plus local SEO baseline. Feeds the Refresh track and the baseline scorecard. |
| `company-profile-code` | Company profile as hand-coded HTML/CSS rendered to pixel-precise PDF. |
| `company-profile` | Company profile as AI-generated editorial pages. |
| `tangison-documents` | Quotations, invoices, proposals, letters, NDAs, reports. Entity routing for Technologies, Studio, Labs. |
| `tangison-tendering` | Tenders, RFPs, RFQs, compliance matrix, evidence, commercial review. |

### Marketing and creative
| Skill | What it does |
|---|---|
| `tangison-copywriting` | Persuasive copy: AIDA, PAS, BAB, FAB, headlines, CTAs. |
| `tangison-flyer` | Tangison flyers. 4:5 default, Signal Teal, exact logos. |
| `universal-flyer` | Flyers for any client brand. |
| `social-image-generator` | Social images and Namibia-aware content calendars. |

### Web
| Skill | What it does |
|---|---|
| `web-agency-complete` | Full website scaffold with every standard page. See known issues below. |
| `tangison-webmaster-checklist` | Pre-launch checklist. wearecollins.com is the quality bar. |
| `tangison-web-audit` | Performance, accessibility, SEO, security audit plus complexity pass. |
| `tangison-scraping` | Scrapling-based scrapers and crawlers. |
| `tangison-systematic-debugging` | Root-cause debugging method. No fixes before investigation. |

### Agent workflow
| Skill | What it does |
|---|---|
| `tangison-find-skills` | Wraps Vercel find-skills with ranking, vetting, a blind critic and proof. |
| `tangison-super-skills` | One-command version: find skills, vet, install, then do the task. |
| `tangison-gauntlet-loop` | Turns a goal into a loop prompt judged by a blind critic. |
| `tangison-research` | Cited deep research, plus repo reproduction mode. |
| `tangison-full-output-enforcement` | No truncation, no placeholders, complete deliverables. |

`archive/` holds `brand-ad-image-generation.md`, the original brand-ad skill. It is kept for reference and is not installed. See known issues.

## How to install

**Claude.ai:** Settings, then Capabilities, then Skills, then upload a `.skill` file from `installable/`. One file per skill.

**Claude Code:** copy the folders inside `skills/` into `~/.claude/skills/` (all projects) or `.claude/skills/` (one project).

## Known issues to decide on

1. **brand-ad-image-generation contradicts tangison-flyer.** It uses cream backgrounds and teal `#2FBFBF`. The flyer skill requires pure white `#FFFFFF` and Signal Teal `#2CB5B4`. It is archived, not installed. Delete it, or update its colours before reviving it.
2. **Flyer overlap.** `tangison-flyer`, `universal-flyer` and `social-image-generator` overlap. Consider one router skill that picks between them.
3. **web-agency-complete conflicts with the Studio stack.** It signs sites "Tangison Agency" (Studio rules say "Made by Tangison Studio") and embeds an AI agent that needs an API key, which clashes with static sites under 500KB. Review before relying on it.
4. **Skills referenced but not in this pack:** `tangison-web-ecosystem`, `tangison-web-content`, `tangison-web-create`, `tech-stack`, `html-to-pdf`. Several skills point to them. Add them or remove the references.
5. **tangison-documents:** this is the complete condensed version. A longer version exists in your files but is cut off mid-word, so it was left out. It had two extras worth merging: the Technologies colour anchor `#2B6B5E` and a fuller six-question editorial interview.
6. **social-image-generator** needs an `EACHLABS_API_KEY` (eachsense image API). Three frontmatter fields (`version`, `user-invocable`, `disable-model-invocation`) were removed from this copy so it uploads cleanly. The skill text is unchanged.
7. **The `npx skills use` command** in the find-skills skills is tried first with `npx skills add` as fallback. Confirm which the installer supports with `npx skills --help`.

## Standing rules across the pack

Namibian context (N$, +264, local regulators). Data first: every figure sourced or labelled assumption. Never fabricate registration numbers, testimonials, prices, awards or client logos. Client brand leads on client work. No em dashes. Complete output only.
