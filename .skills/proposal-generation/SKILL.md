---
name: proposal-generation
description: Generate a client proposal from the prospect/client context, the offer, and pricing — problem, outcome, scope, investment, terms, CTA — in the owner's voice. Triggers on "write a proposal", "proposal for [prospect]", "SOW". Saves to the client folder.
---

# proposal-generation

Write a proposal that closes — anchored on the prospect's own desired outcome, with
clear scope, investment, and next step. Not a generic template with the name
swapped in.

## When to use
- "Write a proposal for [prospect/client]."
- "I need an SOW / scope doc for [deal]."

## Process

### Step 1: Load context (RULE 1)
- **The prospect/client:** `04-service-delivery/clients/<client>/CONTEXT.md` (or
  notes/transcripts from the sales call) → their problem, desired outcome, and
  goals **in their words**.
- **The offer & price:** `03-acquisition/CONTEXT.md` → offer, scope options, and
  pricing; `04-service-delivery/CONTEXT.md` → delivery/journey for accurate scope;
  `03-acquisition/sales/contracts/` for terms.
- **Voice:** `01-founder/CONTEXT.md`.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/proposal-generation.md`. If present, follow it
(structure, pricing presentation, terms). If not, ask: "Got a proposal that's
closed well, or a structure you use?" Save as the SOP, then proceed.

### Step 3: Apply the framework
1. **Open** — restate **their** problem and desired outcome in their language
   (shows you listened).
2. **Proposed solution** — the approach, tied to that outcome.
3. **Scope & deliverables** — exactly what's included (and what's not), with a
   timeline/milestones.
4. **Proof** — relevant case studies / results.
5. **Investment** — pricing, presented with options/tiers where it helps; anchor
   value above price.
6. **Guarantee / risk reversal** — if offered.
7. **Terms** — key contract points (from `contracts/`).
8. **Next step** — one clear CTA (sign, deposit, kickoff date).

### Step 4: Draft to file
Save to `04-service-delivery/clients/<client>/proposal_<date>.md`. Offer to export
to a polished PDF/Word doc.

### Step 5: Review
Confirm scope, pricing, and terms are accurate and the outcome is stated in the
prospect's words. Tighten anything that over-promises.

## Quality check
- [ ] Opens on the prospect's own problem/outcome in their language
- [ ] Scope, timeline, pricing, and terms accurate and specific
- [ ] Proof included; one clear next step
- [ ] Owner's voice; saved to the client folder
