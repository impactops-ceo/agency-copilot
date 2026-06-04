---
name: video-ad-script
description: Write short-form video ad scripts (paid social / UGC) in the owner's spoken voice, for a specific avatar and offer, with hook variants and visual direction. Triggers on "video ad script", "UGC script", "reel ad". Saves to 03-acquisition/ad-creative/.
---

# video-ad-script

Write a shootable short-form video ad — spoken lines plus visual direction — that
hooks in 3 seconds and drives one action. Built on the real offer and avatar.

## When to use
- "Write a video ad script for [avatar] selling [offer]."
- "I need a UGC / reel / paid-social video script."

## Process

### Step 1: Load context (RULE 1)
- **Voice:** `01-founder/CONTEXT.md` → **speaking** style (this is spoken, not
  written). If `01-founder/speaking-transcripts/` has files, draw on them.
- **Offer & action:** `03-acquisition/CONTEXT.md` → offer + the funnel step this
  ad feeds.
- **Avatar:** `02-company/avatars/<avatar>/` → problems, desires, language,
  awareness level.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/video-ad-script.md`. If present, follow it. If
not, ask: "Got a video ad that worked, or a creator style you want to match?" Save
as the SOP, then proceed.

### Step 3: Apply the framework
Structure (short-form, ~30-60s):
1. **Hook (0-3s)** — write **5+ variants**: callout, bold claim, problem,
   curiosity, visual pattern-interrupt. Hook is the whole ballgame.
2. **Problem / relate** — name the avatar's pain in their words.
3. **Mechanism** — what's different about this solution.
4. **Proof** — result, demo, or credibility, fast.
5. **Offer + CTA** — one clear action.

Format the script as a two-column flow: **spoken line** | **on-screen / visual
direction** (shot, text overlay, b-roll). Keep lines tight and speakable; match
how the owner actually talks. Match the hook angle to awareness level.

### Step 4: Draft to file
Save to `03-acquisition/ad-creative/<offer>_<avatar>_video.md`, with the hook
variants listed up top so they can be tested.

### Step 5: Review
Read it aloud in the owner's voice — does it sound like them, and can it be shot
simply? Offer to adapt the winner into `ad-copywriting` or `vsl-script`.

## Quality check
- [ ] 5+ testable hooks; first 3 seconds earn the watch
- [ ] Spoken voice matches the owner; lines are sayable
- [ ] Visual direction included; one CTA; built on real offer + avatar
- [ ] Saved to `03-acquisition/ad-creative/`
