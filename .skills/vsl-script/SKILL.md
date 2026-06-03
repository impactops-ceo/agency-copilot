---
name: vsl-script
description: Write a long-form video sales letter (VSL) script in the owner's voice, built on the real offer and avatar, following the proven VSL beats. Triggers on "VSL script", "video sales letter", "webinar pitch script". Saves to 03-acquisition/funnels/.
---

# vsl-script

Write a full VSL that takes a cold-to-warm viewer from hook to purchase decision,
following the proven beats — in the owner's voice, on the real offer.

## When to use
- "Write a VSL for [offer]."
- "I need a video sales letter / webinar close script."

## Process

### Step 1: Load context (RULE 1)
- **Voice:** `01-founder/CONTEXT.md` → speaking style; draw on
  `speaking-transcripts/` if present.
- **Offer (deep):** `03-acquisition/CONTEXT.md` → the full offer, price, guarantee,
  and the sales process this VSL supports.
- **Avatar:** `02-company/avatars/<avatar>/` → problems, fears, desires, false
  solutions they've tried, awareness level.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/vsl-script.md`. If present, follow it. If not,
ask: "Do you have a VSL or pitch that converts? Paste it." Save as the SOP, then
proceed.

### Step 3: Apply the framework (VSL beats)
1. **Hook / pattern interrupt** — bold promise + callout to the avatar.
2. **Promise & stakes** — what they'll learn/get and why now.
3. **Story / origin** — the relatable struggle (owner's or a client's).
4. **The problem & false solutions** — why what they've tried failed (not their
   fault).
5. **Unique mechanism** — the new opportunity; why this works when others don't.
6. **The offer** — exactly what they get.
7. **Value stack** — components + value, anchored above price.
8. **Proof** — testimonials, results, credibility.
9. **Guarantee** — reverse the risk.
10. **Scarcity / urgency** — real reason to act now.
11. **CTA** — clear, repeated; tell them exactly what to do next.
12. **FAQ / objection handling** — close the common doubts.

Write it as spoken script with light delivery/visual cues. Use the avatar's
language for problems and the owner's cadence throughout.

### Step 4: Draft to file
Save to `03-acquisition/funnels/vsl_<offer>.md`, beats labeled so sections can be
edited independently.

### Step 5: Review
Pressure-test: does each beat earn the next? Is every claim provable? Confirm price,
guarantee, and CTA match the real offer.

## Quality check
- [ ] All beats present and in order; each transitions cleanly
- [ ] Unique mechanism is clear and differentiated
- [ ] Offer, stack, guarantee, price match `03-acquisition`
- [ ] Owner's spoken voice; avatar's language
- [ ] Saved to `03-acquisition/funnels/`
