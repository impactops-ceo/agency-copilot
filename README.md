# Agency Copilot

A ready-made workspace that turns Claude Code into a copilot for running your
agency. It already knows the shape of an agency — founder, company, how you get
clients, how you serve them, how the business runs, and the numbers. You bring
the details about *your* agency, and from then on Claude can write your reports,
build your SOPs, draft sales scripts, brief your team, and more — all in your
voice.

You do not need to be technical to use this. If you can have a conversation, you
can set this up.

---

## Setup (about 5 minutes)

1. **Download this folder.** On GitHub, click the green **Code** button →
   **Download ZIP**. Unzip it and put the folder somewhere easy, like your
   Desktop.
2. **Open it in Claude Code.** (Or open the folder in VS Code / Cursor with the
   Claude Code extension.)
3. **Type `get started`.** Claude will offer to install a few helper skills, then
   begin asking you about your agency.

That's it. Claude walks you through the rest.

---

## How it works

Claude asks you about your agency one section at a time and writes your answers
into the right files. There are six sections:

1. **Founder** — you, your why, how you write and speak
2. **Company** — your story, brand, services, mission, and ideal clients
3. **Acquisition** — your offer, channels, funnels, and sales process
4. **Service Delivery** — onboarding, the client journey, your clients, reports
5. **Operations** — your team, roles, playbook, and dashboards
6. **Financials** — the numbers

You don't have to do it all at once.

### Pausing and resuming

- **To pause:** just say "pause" or close the window. Everything you've answered
  is already saved.
- **To come back:** open the folder in Claude Code and say **`resume`**. Claude
  picks up exactly where you left off.
- **To fill things in yourself:** open any folder, find its `CONTEXT.md`, and type
  your answer directly under the heading — right where the question is. Claude
  reads it the same way next time.

### Uploading things

A few sections work best with examples:

- **Writing samples** → drop emails, posts, or docs into `01-founder/writing-samples/`
- **Speaking transcripts** → drop video/podcast transcripts into `01-founder/speaking-transcripts/`
- **Brand kit** → drop logos, colors, and fonts into `02-company/brand-kit/`
- **Call transcripts, reports, contracts** → there's a labeled folder for each

Claude reads whatever you give it and uses it to sound like you and understand
your business.

---

## After setup

Once you've filled in even a few sections, Claude becomes genuinely useful. Try:

- "Write an SOP for how we onboard a new client."
- "Draft this month's report for [client]."
- "Write a cold DM script for [avatar] selling [offer]."
- "Build out a new avatar worksheet for [new ideal client]."

The more complete your workspace, the sharper everything Claude produces.

---

## What's in here

| Folder | What it's for |
|--------|---------------|
| `CLAUDE.md` | The map Claude reads to navigate your workspace |
| `01-founder/` … `06-financials/` | Your six sections (questions + your answers) |
| `.skills/` | Helper commands Claude installs (`new-sop`, `new-report`, etc.) |
| `.onboarding/` | Tracks how far you've gotten, so `resume` always works |

Blank worksheets Claude copies when you add a client, avatar, or role live inside
the structure as `_template-*` folders (e.g. `_template-client/`). You won't need
to touch `.skills` or `.onboarding` — Claude handles those.
