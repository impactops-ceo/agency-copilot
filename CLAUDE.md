# Agency Copilot

This is your agency's operating system, run from Claude Code. The folder
structure holds everything Claude needs to help you run the business: write
reports, build SOPs, draft sales scripts, brief your team, and more. The better
this is filled in, the better every output gets.

If you're reading this as the agency owner: you don't need to understand any of
the structure below. Just open this folder in Claude Code and say **"get
started."** Claude takes it from there.

---

## Getting started (read this first, every session)

At the **start of every session**, before doing anything else, Claude must check
setup state and act accordingly:

1. Read `.onboarding/progress.md`.
2. Decide which mode you're in:

| If progress shows… | Then… |
|--------------------|-------|
| Onboarding **not started** (all sections `not-started`) | Warmly offer to begin. If the owner agrees (or already said "get started"), run the `onboard-agency` skill from Section 1. |
| Onboarding **in progress** (some sections done, some not) | Tell them where they left off and offer to continue. On "resume", run `onboard-agency` from the first incomplete section. |
| Onboarding **complete** (all sections `complete`) | Skip onboarding. Act as the working copilot using the routing table below. |

Never re-run onboarding over a completed section without asking. Never overwrite
an answer the owner already gave without confirming.

**The owner can pause anytime.** If they say "pause," "stop," or go quiet,
confirm that everything so far is saved, then tell them exactly how to come back:
> You can pick up anytime by opening this folder and saying **"resume,"** or by
> clicking into any folder and typing your answers directly under the headings.
> Nothing is lost.

---

## How this workspace is organized

Six numbered layers, foundational to specific. Each has a `CONTEXT.md` that holds
both the questions to answer and the answers themselves.

| Folder | What lives here |
|--------|-----------------|
| `01-founder/` | You: who you are, your why, how you write and speak |
| `02-company/` | The business: story, brand, services, mission, and your avatars |
| `03-acquisition/` | How you get clients: offer, channels, funnels, sales process |
| `04-service-delivery/` | How you serve clients: onboarding, journey, active clients, reports |
| `05-operations/` | How the business runs: team, roles, playbook, dashboards |
| `06-financials/` | The numbers: P&L, acquisition cost, expenses, per-service margins |

## Routing

| Task | Go to | Read first |
|------|-------|------------|
| Set up the workspace / fill it in / "get started" / "resume" | (skill) | `onboard-agency` |
| Anything about the founder personally | `01-founder/` | `CONTEXT.md` |
| The company, brand, services, mission | `02-company/` | `CONTEXT.md` |
| An avatar / ideal-client worksheet | `02-company/avatars/` | `CONTEXT.md` |
| Offers, channels, funnels, sales | `03-acquisition/` | `CONTEXT.md` |
| Onboarding, client journey, a specific client, reports | `04-service-delivery/` | `CONTEXT.md` |
| Team, roles, KPIs, SOPs, playbook, dashboards | `05-operations/` | `CONTEXT.md` |
| Financials | `06-financials/` | `CONTEXT.md` |
| Add a new avatar worksheet | (skill) | `new-avatar` |
| Write a new SOP | (skill) | `new-sop` |
| Map a process | (skill) | `process-mapping` |
| Write a client report | (skill) | `new-report` |
| Audit a single client | (skill) | `client-audit` |
| Generate a proposal / SOW | (skill) | `proposal-generation` |
| Write a sales script | (skill) | `new-sales-script` |
| Write direct-response ad copy | (skill) | `ad-copywriting` |
| Design a static image ad (SVG mockup) | (skill) | `static-image-ad` |
| Write a video ad script | (skill) | `video-ad-script` |
| Write a VSL script | (skill) | `vsl-script` |
| Write email copy / a sequence | (skill) | `email-copywriting` |
| Write a landing / sales page | (skill) | `landing-page` |
| Write a thank-you / confirmation page | (skill) | `thank-you-page` |
| Write a blog article | (skill) | `blog-article` |
| Run an on-site SEO audit | (skill) | `onsite-seo-audit` |
| Research / analyze competitors | (skill) | `competitor-research` |
| Write a job description | (skill) | `job-description` |
| Create a hiring assignment | (skill) | `hiring-assignment` |

## Skills available

| Skill | What it does | When to use |
|-------|-------------|-------------|
| `onboard-agency` | Interview that fills in the whole workspace, section by section, with pause/resume | First setup, or any time you want to fill in more |
| `new-sop` | Draft a standard operating procedure into `05-operations/playbook/sops/` | Documenting a repeatable process |
| `new-report` | Draft a client report from that client's data | Recurring client updates |
| `new-sales-script` | Draft a sales script in your voice, for a given offer/avatar | Building or refreshing sales assets |
| `new-avatar` | Spin up a fresh avatar worksheet for a new ideal client | Adding an avatar or sub-niche |
| `process-mapping` | Map a process end to end (trigger → steps → handoffs → outputs) | Documenting or delegating a workflow |
| `client-audit` | Deep audit of one client; rolls into the highest-value audit | Health check, QBR, renewal/upsell |
| `proposal-generation` | Proposal/SOW from the prospect's outcome, your offer, and pricing | Closing a deal |
| `ad-copywriting` | DR ad copy in your voice, matched to an avatar's awareness level | Building or refreshing ads |
| `static-image-ad` | On-brand static ad as an SVG mockup + copy/layout spec | Producing ad creative |
| `video-ad-script` | Short-form video/UGC ad script with hook variants | Paid-social video |
| `vsl-script` | Long-form video sales letter following the proven beats | Sales/webinar video |
| `email-copywriting` | Emails or a full sequence in your voice | Cold, nurture, promo, newsletter |
| `landing-page` | DR landing/sales page copy + wireframe by awareness level | Building a funnel step |
| `thank-you-page` | Confirmation page that drives the next step | After an opt-in/checkout page |
| `blog-article` | SEO-aware article matched to search intent, in your voice | Content marketing |
| `onsite-seo-audit` | Prioritized on-site SEO audit of any site | Diagnosing a site for SEO |
| `competitor-research` | Competitive analysis ending in a positioning recommendation | Sizing up a market |
| `job-description` | Scorecard-style JD from a role's outcomes + your values | Opening a seat |
| `hiring-assignment` | Realistic candidate task + scoring rubric | Vetting candidates |

All skills follow `system-docs/skill-standard.md`: load your real context, apply a
named framework, and capture your own approach the first time you use them.

The skills live in `.skills/`. When the owner opens this repo in Claude Code,
install them by copying each `.skills/<name>/` folder into `~/.claude/skills/`.
Claude should offer to do this automatically on the first "get started."

## How to work here

- **Put context where it's true.** A fact about the founder goes in `01-founder/`.
  A fact about one client goes in that client's folder. Don't pile everything
  into one file.
- **Keep the maps honest.** When a folder is created, renamed, or moved, update
  this `CLAUDE.md` and the affected `CONTEXT.md` in the same action.
- **Anything done twice becomes a skill.** If you notice a repeating task, offer
  to turn it into one.
- **Write in the owner's voice.** Once `01-founder/CONTEXT.md` has writing and
  speaking style captured, every drafted output should match it.

## Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Top-level layers | `NN-kebab-case` | `01-founder`, `03-acquisition` |
| Folders | kebab-case | `ad-creative`, `client-journey` |
| Area guides | `CONTEXT.md` | `02-company/CONTEXT.md` |
| Content docs | `snake_case.md` | `sales_script_cold.md` |
| Templates | `_template-*` | `_template-client/` |
