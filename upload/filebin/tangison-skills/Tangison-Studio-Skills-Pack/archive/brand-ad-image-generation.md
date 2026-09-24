# Brand Ad Image Generation Skill

## Overview
I help generate polished, on-brand marketing ad images (social ads, promo graphics, service ads) using **Nano Banana Pro**, **Nano Banana 2**, and **GPT Image**. I'm tuned to a specific visual style: bold black headline type, a teal/brand accent color, a 3D-rendered hero object breaking out of a device mockup, and a clean contact footer with logo + WhatsApp + website.

This skill is a router + prompt generator, not a rendering engine — it produces the exact prompt to feed into whichever model you're using, plus layout notes so the output matches your brand template.

---

## Reference Style (extracted from your examples)
Your ads follow a consistent template:

- **Headline**: 3-4 word bold black sans-serif statement, top-left, large (~60-70pt equivalent), tight line-height
- **Subheadline**: 1-2 lines of lighter-weight supporting copy directly below
- **Hero visual**: a 3D-rendered object (megaphone, product) physically emerging from a device screen (laptop or phone), rendered in glossy black/dark material with soft studio lighting
- **Accent shape**: a large soft-edged circle in brand teal (#2FBFBF-ish) sitting behind the hero object for depth/contrast
- **Background**: flat off-white/cream, no texture
- **Footer bar**: logo mark + wordmark on one side, WhatsApp icon + number and globe icon + URL on the other — always bottom of frame, small and clean
- **Device realism**: when a phone/laptop screen shows UI, the UI must be legible and plausible (real app layout, not garbled text)

This is your **house template** — reuse it as the default unless a request calls for something different.

---

## Model Routing

| Need | Best Model | Why |
|---|---|---|
| Clean UI/text on a phone or laptop screen (like Image 3) | **Nano Banana Pro** or **GPT Image** | Both render legible in-image text/UI well; Nano Banana Pro is strongest for multi-element photoreal composites |
| 3D object + brand color + consistent multi-ad series (Images 1 & 2) | **Nano Banana Pro** | Best for holding a consistent object/material/lighting across variants when given a reference image |
| Fast iteration / cheap drafts before locking a concept | **Nano Banana 2** | Lighter/faster, good for exploring 3-4 headline+visual directions quickly |
| Ad has a lot of copy or needs pixel-accurate typography | **GPT Image** | Most reliable for rendering exact headline text without garbling |

Workflow: rough out 2-3 concepts fast in **Nano Banana 2** → pick a direction → finalize hero visual + text in **Nano Banana Pro** or **GPT Image** → if using a reference ad (like your uploads), always attach it as an image reference rather than describing it from scratch — this locks composition, color, and footer layout automatically.

---

## Prompting Framework

**Structure:** `[Layout/Template] + [Headline text] + [Subheadline text] + [Hero object] + [Material/lighting] + [Background/accent] + [Footer/branding] + [Aspect ratio]`

### Template prompt (fill in the brackets)
```
Marketing ad, flat off-white background, bold black sans-serif headline
top-left reading "[HEADLINE]", smaller lighter subheadline below reading
"[SUBHEAD]". Hero visual: a glossy black 3D-rendered [OBJECT] emerging from
the screen of a [laptop/phone] mockup, studio lighting, soft shadows,
photorealistic render. Large soft teal circle (#2FBFBF) behind the hero
object for depth. Bottom footer bar: logo mark "[LOGO/BRAND NAME]" on one
side, WhatsApp icon with "[PHONE]" and globe icon with "[URL]" on the
other side. Clean, professional, minimal, high-end studio ad aesthetic.
Aspect ratio [X:Y].
```

### For GPT Image (best for exact text)
Use the template above verbatim — GPT Image follows literal instructions well and is most accurate for exact headline wording. Explicitly state: *"render the headline text exactly as written, no typos."*

### For Nano Banana Pro (best with a reference image)
Attach one of your existing ads as a reference and prompt:
```
Using the attached ad as the exact style/layout reference (same font
weight, same footer layout, same teal accent, same 3D render lighting),
create a new version with headline "[HEADLINE]", subheadline "[SUBHEAD]",
and hero object "[OBJECT]" instead of the megaphone. Keep all branding,
colors, and footer positioning identical.
```
This reference-locking is the most reliable way to keep a multi-ad series consistent.

### For Nano Banana 2 (fast concepting)
Strip to essentials for speed:
```
Ad concept, headline "[HEADLINE]", 3D [OBJECT] on off-white background,
teal accent circle, bold black typography, minimal footer. Quick draft.
```

---

## When Screen UI Is Involved
If the hero device shows an app/website screen (like Image 3):
- Describe the UI content explicitly (nav bar, section header, one supporting paragraph, one CTA link) — don't leave it to the model to invent, or it will hallucinate garbled UI
- Keep on-screen copy short; long paragraphs are where text rendering breaks down
- Nano Banana Pro and GPT Image handle this best; Nano Banana 2 is more likely to smear small UI text

---

## Output Format
When asked to generate prompts for a new ad, I'll produce:

```
## Ad Concept: [short name]

**Headline:** "..."
**Subheadline:** "..."
**Hero object:** ...
**Device:** laptop / phone / none

### Prompt — Nano Banana Pro (with reference)
[prompt]

### Prompt — GPT Image (exact text)
[prompt]

### Prompt — Nano Banana 2 (fast draft)
[prompt]

**Notes:** [anything model-specific to watch for, e.g. "re-check headline spelling after generation"]
```

---

## A4 Company Profile (Magazine-Style, Multi-Page)

This is a separate workflow from single ad generation. A company profile is a **multi-page A4 document** rendered as a set of high-fidelity page images, produced through brainstorming and planning *before* any image is generated.

### Rule: never generate a page before the plan is agreed
Do not jump to image generation on request. Always run the process below in order.

### Step 1 — Brainstorm & Intake (mandatory, do this first)
Before anything else, work with the user to establish:
- Company name, industry, and positioning (what should the reader feel by the last page?)
- Purpose of the profile (pitch to clients, investor-facing, tender submission, general brand collateral)
- Assets available: logo files, photography, icons, screenshots, brand colors, existing profile to upgrade
- Total page count and what belongs on each page (see typical structure below)
- Font/style: **default to the flyer skill's defaults** — Cabinet Grotesk for headings, Satoshi for body, JetBrains Mono for metadata/URLs/technical labels — unless the user states otherwise
- Visual tone: default is **minimalist** — generous whitespace, restrained color, no clutter — unless told otherwise

Do not proceed to layout until this is confirmed with the user.

### Step 2 — Map Out Every Page
Produce a full page-by-page outline before generating anything, e.g.:

```
## Company Profile Page Map — [Company Name]

Page 1 — Cover: logo centered/large, tagline, minimal background
Page 2 — About / Who We Are: short narrative + supporting image
Page 3 — Mission & Values
Page 4 — Services / What We Do (grid or list layout)
Page 5 — Process / How We Work
Page 6 — Portfolio / Case Studies
Page 7 — Team (if supplied)
Page 8 — Why Choose Us / Differentiators
Page 9 — Contact / Closing page: WhatsApp, website, logo
```

Adjust page count and content to the company and confirm the map with the user before generating a single image.

### Step 3 — Page-by-Page Generation (one page at a time)
For each page, the agent must:
1. **Rewrite the prompt from scratch for that specific page** — do not reuse a generic template prompt across pages; each page's prompt is derived fresh from the agreed page map, that page's specific content, and the locked style rules below.
2. Generate the page as a high-fidelity A4 image (portrait, print-ready proportions).
3. Check the output against the QC checklist (below) before moving to the next page.
4. Carry forward exact brand values (fonts, colors, logo, margins, grid) from page to page — layout *system* stays locked even though content differs per page.

### Locked Style Rules (apply to every page unless the user overrides)
- **Format**: A4 portrait, print-safe margins, consistent grid across all pages
- **Style**: minimalist — one clear focal point per page, generous whitespace, no decorative clutter
- **Typography**: Cabinet Grotesk (headings) / Satoshi (body) / JetBrains Mono (metadata, URLs, labels) — same default as flyer production, unless the user specifies different fonts
- **Color discipline**: brand palette only (e.g. black/white/teal for Tangison-style work) — no stray accent colors introduced page-to-page
- **Logo & imagery**: use exact supplied logo and photography files, never regenerate or reinterpret them
- **Consistency**: same header/footer treatment, page numbering style, and margin system across every page so the document reads as one designed system, not disconnected pages

### Page Prompt Template (rewritten per page, per the plan)
```
A4 portrait page, page [N] of [total] — [page purpose, e.g. "About / Who We Are"].
Minimalist magazine-style layout, generous whitespace, single clear focal point.
Heading: "[PAGE HEADING]" in [heading font], body copy in [body font].
Grid/margins consistent with document system: [describe locked grid].
Imagery: [describe exact supplied image/photo to place, or "none"].
Brand colors only: [palette]. Logo: [placement, exact supplied file].
High-fidelity print-ready rendering, sharp typography, no artifacts,
no broken text, no placeholder content.
```

### Precision Quality Control (run after every single page, not just at the end)
- Text is fully legible, no garbled or broken characters
- Fonts match the locked system (heading/body/metadata roles correct)
- Margins and grid match the rest of the document
- Logo is the exact supplied file, undistorted, correctly placed
- No invented text, no placeholder lorem ipsum, no fabricated contact details
- Colors match brand palette exactly — no drift page to page
- No AI artifacts: no malformed objects, no broken image edges, no rendering glitches
- Page reads clearly at a glance and matches its assigned role in the page map

If any page fails QC, regenerate that page only — do not restart the whole document.

---

## Common Pitfalls (model-specific)
- **Garbled headline text** → switch to GPT Image, or generate the headline as a separate flat design layer/overlay instead of baking it into the AI render
- **Inconsistent teal shade across a series** → always pass a reference image and explicitly state the hex code
- **Hallucinated phone/laptop UI** → spell out every line of on-screen copy; never say "a dashboard" and leave it to imagination
- **Object floating wrong / bad screen integration** → specify "object physically emerging from screen with correct perspective, screen bezel not obscured" — this is the most failure-prone part across all three models
- **Footer icons wrong (wrong app icon, garbled phone number)** → generate footer as a flat overlay in post rather than relying on the model to render logos/icons accurately
