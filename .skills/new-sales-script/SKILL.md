---
name: new-sales-script
description: Write a sales script (call, DM, or follow-up) in the owner's voice for a given offer and avatar, using that avatar's language. Triggers on "write a sales script", "DM script", "cold script", "call script".
---

# new-sales-script

Write a sales script that sounds like the owner and speaks the avatar's language —
grounded in the real offer and the avatar's real problems and desires.

## When to use

- "Write a [cold DM / call / follow-up] script for [avatar] selling [offer]."
- Building or refreshing sales assets.

## Process

### Step 1: Load the inputs
- **Offer:** `03-acquisition/CONTEXT.md` (the "We help X do Y without Z" offer and
  sales process).
- **Avatar:** the avatar's worksheet in `02-company/avatars/<avatar>/` — use their
  exact problems, fears, desires, and language. Note their awareness level; it
  changes the angle.
- **Voice:** `01-founder/CONTEXT.md` writing/speaking style. A call/DM script
  should match how they *talk*, not how they write.

### Step 2: Pick the format
Confirm: cold DM, cold call, discovery call, follow-up, or objection handling.
Each has a different shape.

### Step 3: Draft
Write the script using the avatar's language for the hook and problem, the offer
for the solution, and the owner's voice throughout. Match the avatar's awareness
level (don't pitch product to a problem-aware lead). Save to
`03-acquisition/sales/scripts/<type>_<avatar>.md`.

### Step 4: Review
Read it back in the owner's voice. Cut anything that sounds canned. Confirm it
fits the actual sales process.

## Quality check
- [ ] Uses the avatar's real language and meets their awareness level
- [ ] Built on the real offer
- [ ] Sounds like the owner talking, not a template
- [ ] Saved in `sales/scripts/`
