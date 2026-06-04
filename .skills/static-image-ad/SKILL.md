---
name: static-image-ad
description: Design a static image ad as an on-brand SVG mockup (plus copy + layout spec) for paid social, reading colors/fonts/logo from the brand kit, for a specific avatar and offer. Triggers on "make a static ad", "image ad", "ad creative mockup". Saves SVGs to 03-acquisition/ad-creative/.
---

# static-image-ad

Produce a ready-to-review **SVG mockup** of a direct-response static ad — on-brand,
one message, passes the one-glance test — plus the copy and a layout spec a designer
could finalize. Not a vague "make a nice graphic."

## When to use
- "Make a static image ad for [avatar] selling [offer]."
- "I need ad creative mockups for [channel]."

## Process

### Step 1: Load context (RULE 1)
- **Brand:** `02-company/CONTEXT.md` + `02-company/brand-kit/` → colors (hex),
  fonts, logo, and any brand rules. If colors/fonts aren't recorded, ask for them
  or read assets in `brand-kit/` before designing.
- **Offer & avatar:** `03-acquisition/CONTEXT.md` and
  `02-company/avatars/<avatar>/` → the one message and who it's for.
- **Copy:** if an `ad-copywriting` output exists for this offer/avatar, pull the
  winning headline/angle from it instead of starting cold.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/static-image-ad.md`. If present, follow it
(layout preferences, do's/don'ts). If not, ask: "Got a static ad you love the look
of? Share it." Save as the SOP, then proceed.

### Step 3: Apply the framework
1. **One message.** Pick the single strongest benefit/angle for this avatar. Not
   three.
2. **Message hierarchy** — decide the visual order: what the eye hits 1st (hook
   headline), 2nd (supporting line / proof), 3rd (CTA). Logo small, not hero.
3. **One-glance test** — the core promise must land in under a second.
4. **DR layout** — headline + optional kicker, focal area for a product/photo
   placeholder, proof element (badge/stat/star rating), CTA button. Generous
   contrast and whitespace.
5. **On-brand** — use the brand-kit colors and fonts exactly; respect logo rules.

### Step 4: Produce the SVG mockup(s)
Generate actual `.svg` files at standard paid-social sizes:
- **1080×1080** (square feed) — always
- **1080×1350** (portrait feed) — if requested
- **1080×1920** (story/reel) — if requested

In the SVG: use brand hex colors for fills, brand font-family names (with safe
fallbacks), real headline/CTA text as `<text>`, a clearly labeled rectangle
placeholder for the hero image/photo, and a CTA "button" (rounded rect + label).
Keep text inside safe margins. Make it look like a finished ad, not a wireframe.

Save SVGs to `03-acquisition/ad-creative/<offer>_<avatar>_<size>.svg`, plus a
sibling `..._spec.md` with: the copy, color/font used, the layout rationale, and a
note that SVG converts to PNG/JPG for upload (offer to export).

### Step 5: Review
Show the owner. Confirm brand accuracy and the one-glance message. Offer 1-2 angle
variants if the first doesn't land.

## Quality check
- [ ] Real SVG file(s) at correct ad dimensions, text inside safe margins
- [ ] Uses brand-kit colors and fonts; logo handled per rules
- [ ] One message; passes the one-glance test; clear CTA
- [ ] Spec file with copy + export note saved alongside
