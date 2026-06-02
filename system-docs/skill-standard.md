# Skill Standard

How every skill in this repo is built so it's genuinely useful — not generic AI
advice wearing a command name. If a skill doesn't meet this bar, it doesn't ship.

## The generic-skill problem

A skill called "email copywriting" that says "write a compelling email" is useless
— the owner could get that from any chatbot. The whole point of this workspace is
that skills draw on the owner's *specific* business and encode *real* craft.

## The three rules (a skill must do all three)

1. **Load the owner's context first.** Step 1 of every skill reads the relevant
   filled-in files before producing anything:
   - Voice → `01-founder/CONTEXT.md` (writing/speaking style)
   - Offer, brand, avatars → `02-company/`, `03-acquisition/`
   - The specific client → `04-service-delivery/clients/<client>/`
   The output is specific because it's built from their data.

2. **Apply a named craft framework — not vibes.** The skill carries the actual
   method a senior practitioner uses (structure, sequence, decision points), not
   "make it good." This is the moat.

3. **Prefer — and actively capture — the owner's own approach.** Check
   `05-operations/playbook/sops/` for an existing SOP on this task.
   - **If one exists:** follow it; treat the built-in framework as fallback.
   - **If none exists:** before drafting, briefly offer to capture how *they* like
     to do this — 2-4 targeted questions about their method, preferences, and any
     example they can point to or upload. Save the result as an SOP in
     `05-operations/playbook/sops/<task>.md` (the `new-sop` shape), then use it.
   This is the compounding mechanism: the built-in framework is the smart default,
   but every use teaches the workspace the owner's actual methodology, so skills
   get more custom over time. Keep the capture light — never block the work behind
   a long interview; one good example beats ten questions.

## Required skill shape

```markdown
---
name: <skill-name>
description: <what it does + trigger phrases + where output lands>
---

# <skill-name>

## When to use
- <trigger phrases>

## Process
### Step 1: Load context           # RULE 1 — name the exact files to read
### Step 2: SOP — follow or capture # RULE 3 — use existing SOP, or capture theirs now
### Step 3: <apply framework>       # RULE 2 — the named method, step by step
### Step 4: Draft to <path>         # concrete output location
### Step 5: Review with owner

## Quality check
- [ ] Built from the owner's real context (not generic)
- [ ] Followed the named framework
- [ ] Saved to the right place and linked from the relevant CONTEXT.md
```

## The non-generic test

Before shipping a skill, ask: **"Could the owner get this same output from a blank
chatbot?"** If yes, it's missing rule 1 or rule 2. Fix it or don't ship it.

## Skill catalog

Each planned skill, the context it must load, the framework it encodes, and where
its output lands. Frameworks marked ⊕ benefit from a current-best-practice pass.

| Skill | Loads context from | Framework it encodes | Output to |
|-------|--------------------|----------------------|-----------|
| email-copywriting | voice, offer, avatar | Angle → subject-line battery → PAS/QUEST body → single CTA | `03-acquisition/` asset folder |
| ad-copywriting | voice, offer, avatar | Awareness-level lead type (Schwartz) → big idea → hook matrix → DR body | `03-acquisition/ad-creative/` |
| static-image-ad | brand-kit, offer, avatar | Message hierarchy → one-glance test → DR layout, on-brand | `03-acquisition/ad-creative/` |
| onsite-seo-audit ⊕ | company, website | Crawl checklist: titles/meta/headings/internal links/schema/Core Web Vitals/content gaps → prioritized findings | `03-acquisition/` or client folder |
| blog-article | voice, avatar, offer | Search intent → outline → brief → draft in voice → internal links | client folder / `03-acquisition/` |
| landing-page | voice, offer, avatar, brand | DR wireframe: promise → mechanism → proof → offer → CTA, by awareness level | `03-acquisition/funnels/` |
| thank-you-page | offer, funnel | Confirm → set expectations → next step (book/ascend) → tracking note | `03-acquisition/funnels/` |
| video-ad-script | voice, offer, avatar | 3-sec hook → problem → mechanism → proof → CTA, multi-hook variants | `03-acquisition/ad-creative/` |
| vsl-script | voice, offer, avatar | VSL beats: lead → unique mechanism → story → offer → stack → guarantee → scarcity → close | `03-acquisition/funnels/` |
| competitor-research ⊕ | company, avatar, offer | Dimensions matrix → sources → gap/opportunity analysis | `02-company/` or `03-acquisition/` |
| job-description | role folder, company values | Scorecard (Topgrading): mission → outcomes → competencies | `05-operations/roles/<role>/` |
| hiring-assignment | role folder, JD | Real task mirroring role outcomes + scoring rubric | `05-operations/roles/<role>/` |
| process-mapping | the process owner describes | Trigger → steps → decision points → outputs → owners | `05-operations/playbook/process-maps/` |
| sales-script *(exists)* | voice, offer, avatar | Format-specific (DM/call/follow-up) by awareness level | `03-acquisition/sales/scripts/` |
| proposal-generation | client folder, offer, pricing | Problem → desired outcome → scope → investment → terms → CTA | client folder |
| client-audit | client folder, audit template | Per-client deep audit + roll into highest-value audit | `04-service-delivery/` |

### Overlaps to resolve before building
- `sales-script` already exists — keep it; don't duplicate.
- `ad-copywriting`, `static-image-ad`, `video-ad-script` overlap. Keep separate
  (copy vs. image vs. script are different crafts) but cross-reference so they
  share the avatar/offer load step.
- `email-copywriting` and `blog-article` both need voice + avatar — same load step.
