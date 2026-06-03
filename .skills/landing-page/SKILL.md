---
name: landing-page
description: Write a direct-response landing page (section-by-section copy + wireframe) in the owner's voice, by avatar awareness level, built on the real offer. Triggers on "write a landing page", "sales page", "opt-in page". Saves to 03-acquisition/funnels/.
---

# landing-page

Write a landing page that converts — the full section-by-section copy and a
wireframe — pitched at the avatar's awareness level, in the owner's voice. Not a
generic template with [bracketed] blanks.

## When to use
- "Write a landing / sales / opt-in page for [offer]."
- Building or rebuilding a funnel step.

## Process

### Step 1: Load context (RULE 1)
- **Voice:** `01-founder/CONTEXT.md` → writing style.
- **Offer & page job:** `03-acquisition/CONTEXT.md` → offer, price, guarantee, and
  whether this page **opts in** (lead) or **sells** (closes).
- **Avatar:** `02-company/avatars/<avatar>/` → problems, desires, language, and
  **awareness level** (sets how hard to sell).
- **Brand:** `02-company/brand-kit/` for any visual rules.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/landing-page.md`. If present, follow it. If not,
ask: "Got a page that converts well, or a structure you prefer?" Save as the SOP,
then proceed.

### Step 3: Apply the framework (DR wireframe)
Adjust depth to page type (opt-in = short; sales = long) and awareness level:
1. **Above the fold** — outcome headline + subhead + primary CTA (+ hero/visual
   note). Promise the result in their words.
2. **Problem / agitation** — the pain, named precisely.
3. **Mechanism** — how it works; why it's different.
4. **Offer** — what they get, with a value stack for a sales page.
5. **Proof** — testimonials, results, logos, case studies.
6. **Objections / FAQ** — close the common doubts.
7. **Guarantee / risk reversal** (sales page).
8. **Final CTA** — restate the promise; one clear action. Repeat CTA down the page.

Write real copy for every section in the owner's voice — not placeholders.

### Step 4: Draft to file
Save to `03-acquisition/funnels/landing_<offer>.md` as a section-by-section
wireframe + copy. Note CTA targets and any form fields. Offer to also output an
HTML version if they want to preview it.

### Step 5: Review
Check the headline earns the scroll and the awareness level is right (no hard
pitch to a problem-aware visitor). Confirm offer details match `03-acquisition`.

## Quality check
- [ ] Above-fold promise is sharp and outcome-led
- [ ] Depth/sell matches page type and awareness level
- [ ] Real copy throughout in the owner's voice; CTA repeated
- [ ] Offer/guarantee/price match `03-acquisition`; saved to `funnels/`
