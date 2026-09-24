# Skills Ledger

TASK: Redesign the C4 Student Accommodations site (rated 2/10 by client) to modern awwwards-level design taste, audit it, apply Vercel best practices, and deploy. Use real brand assets supplied by client. Find at least 12 skills.

## Capabilities (each with a "covered" test)

| # | Capability | Covered when... | Skill | Source | Evidence | Runner-up |
|---|-----------|-----------------|-------|--------|----------|-----------|
| 1 | Web design taste / awwwards-level UI direction | A skill with concrete design principles guides the redesign | | | | |
| 2 | Next.js + React performance best practices | Vercel-engineering-backed perf rules applied to the build | | | | |
| 3 | Accessibility craft (WCAG) | A11y checklist skill consulted and findings fixed | | | | |
| 4 | Typography craft | A typography skill informs the type system | | | | |
| 5 | Motion / animation craft | A motion skill governs animations | | | | |
| 6 | Color / design systems | A color skill informs palette usage | | | | |
| 7 | Tailwind / CSS mastery | Tailwind-specific best practices applied | | | | |
| 8 | SEO / metadata | SEO skill informs metadata + structured data | | | | |
| 9 | Vercel deployment best practices | Vercel skill guides production deploy config | | | | |
| 10 | Copywriting quality | Copy skill shapes headlines and CTAs | | | | |
| 11 | Code quality / review | A review skill checks the final code | | | | |
| 12 | Testing / verification | A browser-testing skill verifies the result | | | | |

## Installed skills (proof: command output + folder listing)

Install output (per skill): "Added skill" via `npx skills add ... -g -y` (batch 1, 5 skills) and git shallow-clone + folder copy into ~/.claude/skills (batch 2, 11 skills, after CLI timeouts against rate-limited GitHub).

Folder listing of ~/.claude/skills:
accessibility, animation-vocabulary, code-review, color-palette, copywriting,
core-web-vitals, deploy-to-vercel, frontend-design, performance,
react-best-practices, review-animations, seo, typography-scale, vercel-optimize,
wcag-audit-patterns, web-design-guidelines

| # | Capability | Skill | Source | Installs | Vet | Runner-up |
|---|-----------|-------|--------|----------|-----|-----------|
| 1 | Design taste / awwwards UI | frontend-design | anthropics/skills | 908.1K | PASS | pbakaus/impeccable@frontend-design (54.5K) |
| 2 | Web design guidelines | web-design-guidelines | vercel-labs/agent-skills | 661.4K | PASS | antfu/skills (19.4K) |
| 3 | Code review | code-review | mattpocock/skills | 592K | PASS | coderabbitai/skills (12.4K) |
| 4 | Motion review | review-animations | emilkowalski/skills | 175.1K | PASS | daffy0208 (1.8K) |
| 5 | Motion vocabulary | animation-vocabulary | emilkowalski/skills | 157.2K | PASS | owl-listener (1.8K) |
| 6 | Copywriting | copywriting | coreyhaines31/marketingskills | 204.9K | PASS* | nexu-io/open-design (2.8K) |
| 7 | Tailwind/CSS craft | (covered by web-design-guidelines + typography-scale + color-palette) | vercel-labs | 661.4K | PASS | heygen hyperframes@tailwind (72.7K) |
| 8 | Accessibility | accessibility | addyosmani/web-quality-skills | 54.6K | PASS | wshobson a11y-compliance (13.4K) |
| 9 | WCAG audit patterns | wcag-audit-patterns | wshobson/agents | 13.4K | PASS | accesslint/skills (665) |
| 10 | SEO | seo | addyosmani/web-quality-skills | 47K | PASS | affaan-m/ecc (8.4K) |
| 11 | Performance | performance + core-web-vitals | addyosmani/web-quality-skills | 47K/47K | PASS | sickn33 web-perf (2.9K) |
| 12 | Browser testing | (agent-browser skill already loaded in session) | vercel-labs agent-browser | n/a | PASS | addyosmani browser-testing-with-devtools (36.2K) |
| 13 | Typography | typography-scale | owl-listener/designer-skills | 2.1K | PASS | mblode typography-audit (807) |
| 14 | Color | color-palette | jezweb/claude-skills | 3.1K | PASS | gnurio refactoring-ui (197) |
| 15 | Vercel deploy | deploy-to-vercel + vercel-optimize | vercel-labs/agent-skills | 577+ | PASS | openai/skills@vercel-deploy (2.9K) |
| 16 | React/Next.js perf | react-best-practices | vercel-labs/agent-skills | 185K+ | PASS | alleneubank (3.1K) |

*copywriting: Tangison copywriting rules (tangison-copywriting skill, loaded in session) take precedence over any external copy guidance per Tangison rules.

Vet findings: no remote script execution, no credential harvesting, no data exfiltration, no Tangison rule overrides. deploy-to-vercel ships a no-auth fallback shell script (inspected, benign). vercel-optimize explicitly forbids typing tokens into commands (good).

16 skills installed, 12 minimum exceeded.

## Critic round 1 + gap fill (round 2)

Critic verdict: 12 of 16 genuinely useful; 10/12 capabilities owned. Flagged gaps: Tailwind v4 architecture (no dedicated skill) and testing/verification. Gap hunt round 2 keywords: "tailwind v4", "playwright e2e testing". Installed:
- tailwind-v4-shadcn (secondsky/claude-skills, 7.8K) — @theme inline pattern, v4 gotchas. Vet: PASS.
- playwright-testing (alinaqi/maggy, 3.3K) — E2E verification. Vet: PASS.

Asset-pipeline gap noted by critic is already satisfied in-session: real brand assets supplied by client (upload/C4-Brand-Assets.zip: SVG logos light/dark, icon set 32-1024px, favicon.ico, official palette sheet) and unzipped to upload/brand-assets/.

Final count: 18 skills installed. Coverage: 12/12 capabilities.
