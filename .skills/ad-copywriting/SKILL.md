---
name: ad-copywriting
description: Write direct-response ad copy (Facebook/Instagram/Google/native) in the owner's voice, matched to a specific avatar's awareness level and built on the real offer. Triggers on "write ad copy", "ad copy for [avatar/offer]", "primary text for an ad". Saves to 03-acquisition/ad-creative/.
---

# ad-copywriting

Write ad copy that a direct-response media buyer would actually run — grounded in
the owner's offer, speaking the avatar's language, and pitched at the right
awareness level. Not "here are 5 generic ad ideas."

## When to use
- "Write ad copy for [avatar] selling [offer]."
- "I need primary text / headlines for a [channel] ad."
- Refreshing creative that's fatiguing.

## Process

### Step 1: Load context (RULE 1 — do this first, always)
- **Voice:** `01-founder/CONTEXT.md` → writing style. Ad copy leans on the owner's
  *written* voice but punchier.
- **Offer:** `03-acquisition/CONTEXT.md` → the "We help [X] do [Y] without [Z]"
  offer, funnel it points to, and what the ad's job is (book a call, opt-in, etc.).
- **Avatar:** `02-company/avatars/<avatar>/avatar-worksheet.md` → problems, fears,
  desires in their *exact words*, plus **market sophistication** and **awareness
  level**. These two fields decide everything below.
- **Brand:** `02-company/CONTEXT.md` → any claims/compliance limits to respect.

If the avatar or offer isn't filled in, ask which one this ad is for and capture
the essentials before writing — don't invent them.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/ad-copywriting.md`.
- **If it exists:** follow the owner's process; use the framework below only to
  fill gaps.
- **If not:** ask briefly — "Got a winning ad or a style you want these to match?
  Paste it or point me to it, and tell me the angle that's worked best." Save what
  they give as `05-operations/playbook/sops/ad-copywriting.md` (new-sop shape), then
  proceed. Keep it to one example + one or two questions.

### Step 3: Apply the framework
1. **Choose the lead type from awareness level** (Schwartz):
   - *Unaware / Problem-aware* → lead with the problem or a story; no product talk
     yet.
   - *Solution-aware* → lead with the **unique mechanism** (why your way is
     different).
   - *Product-aware / Most-aware* → lead with the **offer, proof, and urgency**.
2. **Set sophistication** — if the market is saturated, don't make a bigger claim;
   differentiate the mechanism or identify with the avatar instead.
3. **Find the big idea / angle** — one sharp angle per ad, drawn from the avatar's
   top problem or desire. Don't blend three.
4. **Write a hook battery** — 5+ first lines using distinct structures: callout
   ("Agency owners doing $50k/mo:"), bold claim, pattern interrupt, question,
   story open, us-vs-them. The hook is 80% of the job.
5. **Body on PAS or value-stack** — Problem → Agitate → Solution, or
   promise → mechanism → proof → offer. Use the avatar's language verbatim. Short
   lines. One idea per line.
6. **Single CTA** matched to the funnel step. One ask.
7. **Variants** — deliver 3 full ad variants (different angles/hooks), each with
   primary text + 3 headline options + a description line.

### Step 4: Draft to file
Save to `03-acquisition/ad-creative/<offer>_<avatar>_ads.md`, labeled by angle and
awareness level. Note which funnel each points to.

### Step 5: Review
Read it back in the owner's voice. Flag any claim that needs proof or could trip
ad-platform compliance. Offer to adapt for `static-image-ad` or `video-ad-script`.

## Quality check
- [ ] Lead type matches the avatar's awareness level
- [ ] Uses the avatar's real language; built on the real offer
- [ ] Sounds like the owner; one clear angle per variant; single CTA
- [ ] Saved to `03-acquisition/ad-creative/` and tied to a funnel
- [ ] Could a media buyer run this today? If not, tighten it.
