---
name: email-copywriting
description: Write email copy (cold, nurture, promo, newsletter, or a full sequence) in the owner's voice, for a specific avatar and offer. Triggers on "write an email", "email sequence", "nurture email", "promo email". Saves to 03-acquisition/email/.
---

# email-copywriting

Write emails that get opened, read, and clicked — in the owner's voice, built on
the real offer, speaking the avatar's language. Not a generic "here's an email."

## When to use
- "Write a [cold / nurture / promo / newsletter] email for [avatar/offer]."
- "Build a [N]-email sequence for [campaign]."

## Process

### Step 1: Load context (RULE 1)
- **Voice:** `01-founder/CONTEXT.md` → writing style. Email is the owner's written
  voice, conversational.
- **Offer & job:** `03-acquisition/CONTEXT.md` → the offer and what this email must
  do (book a call, click to a VSL, reply, buy).
- **Avatar:** `02-company/avatars/<avatar>/` → problems, desires, language,
  awareness level.
- If it's for a client campaign, load `04-service-delivery/clients/<client>/`.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/email-copywriting.md`. If present, follow it. If
not, ask: "Paste an email that's performed well, or tell me the tone and structure
you like." Save as the SOP, then proceed.

### Step 3: Apply the framework
1. **Define the email's job and type** — one goal, one CTA.
2. **Subject-line battery** — write 5+: curiosity, benefit, specificity, pattern
   interrupt, personal. Plus **preview text** that extends (not repeats) the
   subject.
3. **One idea per email.** Open with a hook (story, callout, or bold line) in the
   first sentence — the inbox shows it.
4. **Body** on **PAS** (Problem-Agitate-Solve) or **value-first**, in their voice.
   Short paragraphs. Conversational. Avatar's language.
5. **Single CTA**, repeated naturally; add a **P.S.** that restates the benefit or
   adds urgency.
6. **For a sequence:** map the arc first (e.g. hook → story → mechanism → proof →
   offer → urgency → last call), one job per email, then write each.

### Step 4: Draft to file
Save to `03-acquisition/email/<campaign>.md` (create the folder if needed). For a
sequence, one file with each email numbered and labeled by job + send timing.

### Step 5: Review
Read in the owner's voice. Cut anything corporate. Confirm the CTA matches the
funnel step.

## Quality check
- [ ] Subject + preview earn the open; first line earns the read
- [ ] One idea, one CTA; built on the real offer and avatar language
- [ ] Sounds like the owner; sequence has a deliberate arc
- [ ] Saved to `03-acquisition/email/`
