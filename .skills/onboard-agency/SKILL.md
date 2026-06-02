---
name: onboard-agency
description: Interview the agency owner section by section and fill in the workspace. Triggers on "get started", "resume", "set up", or any request to fill in the agency details. Supports pausing and resuming. Writes answers into the CONTEXT.md files and tracks progress in .onboarding/progress.md.
---

# onboard-agency

Set up the agency owner's workspace by interviewing them one section at a time and
writing their answers into the right files. They can pause anytime and resume
later, or fill files in by hand — this skill meets them wherever they are.

## When to use

- The owner says "get started," "set up," "onboard," or similar.
- The owner says "resume" or "continue."
- Onboarding is incomplete and they want to keep going.
- They want to fill in or revisit a specific section.

## Core idea

**The questions already live in the workspace.** Each section's `CONTEXT.md` (and
the avatar/client/role templates) holds the questions as headings with
`— not yet answered —` placeholders. This skill does not invent a separate
questionnaire — it reads those files, asks what's unanswered conversationally, and
writes the owner's answers back in place. The files are the single source of
truth, which is exactly why a person can also just type answers directly.

## Tone

Warm, plain, efficient. You're a sharp operator helping a peer set up, not a form.
No jargon — don't say "scaffold," "schema," "context window," or "populate."
Say "set up," "fill in," "what I can see." One question or one small cluster at a
time. React to answers before moving on. Never dump all the questions at once.

## Process

### Step 0: Orient

1. Read `.onboarding/progress.md`. Determine state from the section statuses:
   - **All `not-started`** → fresh start. Go to Step 1.
   - **Mixed** → resuming. Skip to the first `in-progress` or `not-started`
     section. Briefly remind them what's done and what's left, then continue.
   - **All `complete`/`skipped`** → nothing to do. Tell them the workspace is set
     up and point them at what they can now do (reports, SOPs, scripts). Offer to
     revisit any section.
2. On a fresh start only: install the skills if not already installed — copy each
   `.skills/<name>/` folder into `~/.claude/skills/` so commands work in future
   sessions. Mention you did it, briefly.

### Step 1: Welcome (fresh start only)

Short. Something like:
> I'm going to set this up as a copilot for your agency. I'll ask about your
> business a section at a time and write it all down in the right places. We don't
> have to finish in one sitting — say "pause" whenever and "resume" to pick back
> up. Ready?

Get their name and company name first (you'll write these into
`progress.md` and `CLAUDE.md`). Then begin Section 1.

### Step 2: Work through the sections in order

Go in this order, one section per pass. For each:

1. **Open the section's `CONTEXT.md`** and read its headings — those are your
   questions.
2. **Set the section to `in-progress`** in `progress.md`.
3. **Ask conversationally**, heading by heading or in small natural clusters.
   Don't read the placeholder text robotically — turn each heading into a real
   question. React, follow up where an answer is thin, move on when it's enough.
4. **Write answers in immediately** — replace `— not yet answered —` under each
   heading with what they said, lightly cleaned up (their voice, not corporate
   rewrite). If they skip a heading, leave the placeholder.
5. **Handle uploads:** when a heading is best served by examples (writing samples,
   speaking transcripts, brand kit, transcripts, contracts, reports), point them
   to the right folder and offer to study whatever they drop in. If files are
   already there, read them and summarize into the CONTEXT.md heading.
6. **Mark the section `complete`** (or `skipped`) in `progress.md`, update "Last
   updated," and log anything useful in the Notes section.
7. Briefly confirm what you captured, then move to the next section.

**Section order and special handling:**

1. **`01-founder/`** — Personal. If `writing-samples/` or `speaking-transcripts/`
   have files, read them and write a voice summary under Writing/Speaking Style.
   This section is what makes everything else sound like them — get the voice
   right.
2. **`02-company/`** — The business. When you reach **Avatars**, don't cram a full
   avatar into this file. For each avatar they name, create a folder under
   `avatars/` (copy `_template-avatar/`) and offer to fill its worksheet now or
   later. Update the `2a Avatars` row in progress separately.
3. **`02-company/avatars/`** — For each avatar, walk the worksheet
   (`avatar-worksheet.md`). This is high-leverage for copy — use their exact
   language for problems, fears, and desires. It's fine to do one avatar now and
   others later.
4. **`03-acquisition/`** — Offer, channels, funnels, sales. Capture the offer as
   "We help [X] do [Y] without [Z]." Point assets to `channels/`, `funnels/`,
   `ad-creative/`, `sales/scripts/`, `sales/contracts/`.
5. **`04-service-delivery/`** — Onboarding, journey, clients, reports. For each
   active client, copy `clients/_template-client/` to a named folder and capture
   what they know. Offer to study any transcripts/reports they drop in. Walk the
   highest-value client audit if they're game.
6. **`05-operations/`** — Team, roles, playbook, dashboards. Create a folder per
   role under `roles/`. For dashboards: if they don't have one for an area, just
   ask how they track success there and record that — don't force it.
7. **`06-financials/`** — The numbers. Remind them ranges are fine and the repo
   should stay private. Easy to skip and return to.

### Step 3: Pause handling (can happen anytime)

If they say "pause," "stop," "later," or trail off:
1. Make sure the current section's answers so far are written and `progress.md` is
   updated (current section `in-progress`, "Last updated" set).
2. Confirm it's saved and tell them how to return:
   > Saved. Come back anytime — open this folder and say **"resume,"** or just
   > click into any folder and type answers under the headings yourself. We're on
   > [section X], [what's left].
3. Stop cleanly. Don't keep asking.

### Step 4: Completion

When all sections are `complete` or deliberately `skipped`:
1. Update `progress.md` (owner name/company, all statuses, last updated).
2. Make sure `CLAUDE.md` top reflects their name/company if useful.
3. Give a short tour of what they can now do, with concrete examples tied to what
   they told you:
   > You're set up. Try: "Draft this month's report for [their client]," "Write an
   > SOP for [their process]," or "Write a [channel] script for [their avatar]
   > selling [their offer]."
4. Mention they can always run "resume" to add more, and that the more complete
   the workspace, the better every output.

## Rules

- **Never overwrite a real answer without asking.** Placeholders are free to fill;
  filled answers are confirmed before changing.
- **Keep the maps honest.** If you create a client/avatar/role folder, it's
  already routed via the section CONTEXT.md — but if you add anything structural,
  reflect it there.
- **Write in their voice**, not corporate boilerplate. Clean up grammar, keep
  their words.
- **One pass, one section.** Don't bounce around unless they ask to.
- **Always leave `progress.md` accurate** before ending any turn — it's the only
  thing that makes resume work.

## Quality check

- [ ] `progress.md` reflects reality (statuses, owner, last updated)
- [ ] Answers written into the correct CONTEXT.md headings, in the owner's voice
- [ ] Avatars/clients/roles got their own folders from the templates
- [ ] Uploaded files (samples, transcripts) were actually read and summarized
- [ ] Owner knows how to pause and resume
