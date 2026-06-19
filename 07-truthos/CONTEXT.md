# 07 · TruthOS

The agency's own product — the operating system the business runs on *and* sells.
TruthOS is part internal backbone (call recording, the "Victor" Slack agent,
project management, dashboards) and part SaaS sold to clients (their own portals,
agents, roadmaps, and tracking).

This area holds the **overall direction** for the product plus the running
trackers that keep direction, decisions, and delivery honest between syncs.

> **How this area works:** Every product sync (calls with Naveed, exec calls,
> etc.) gets summarized into `updates-log.md`, and anything actionable or
> decided is pulled into the trackers in `trackers/`. Read the log for the
> narrative; read the trackers for the live state.

---

## What's in here

| File | What it holds |
|------|---------------|
| `CONTEXT.md` (this file) | Overall direction, vision, and the product pillars |
| `updates-log.md` | Chronological updates — one entry per sync |
| `trackers/deliverables.md` | What's being built/shipped: deliverable · SRP · due date · status |
| `trackers/decisions.md` | Decisions made, with date and rationale |
| `trackers/discussion.md` | Open questions and discussion items not yet decided |
| `trackers/data.md` | Key facts, metrics, people, and context surfaced along the way |

---

## What TruthOS is

A platform for purpose-driven coaching founders and agencies to run their
business with AI. Two faces of the same product:

- **Internal** — how ImpactOps runs its own operations: call recording, the
  "Victor" Slack agent (schedule tasks, ClickUp updates, transcript context),
  project management, and dev/team tracking.
- **Client-facing** — TruthOS clients get their own portals, their own Slack
  agents ("their Victor"), client-facing roadmap, lead management, and (coming)
  custom agents per department/function.

The thesis: most people aren't using AI to its full capacity. Victor is the
highest-value AI pattern found so far (chat with it, or Claude co-work). If we
can get people onto TruthOS and help them use AI fully — scheduled/triggered
agents, connected to their tech stack, multiple skill-trained agents — we win.

---

## Overall direction (product pillars)

These are the through-lines the roadmap should ladder up to. Updated as syncs
add to them.

### 1. Agents everywhere ("Victor for everyone")
- Built-in Victor / Slack agent inside every TruthOS project.
- **Multiple custom Slack agents per organization** — one per department,
  channel, or function (e.g. a task chaser with full context, plus specialized
  agents). Customize the *skills and prompts*, not the data source.
- Agents that **execute**: generate images/videos, write emails, send Slack
  messages, generate reports.
- A library of pre-built / canonicalized agents that clients (and their clients)
  can build on.
- **Three base capabilities to solve first** for any of this to work:
  1. **Scheduling & triggers** — agents can create schedules, set reminders, and
     be triggered by events.
  2. **Tech-stack access** — agents reach the org's MCPs (ClickUp, Slack, etc.).
  3. **Multiple skill-trained agents** — offer several agents trained on
     specific skill sets.
  (Transcript / course / workshop access is already solved.)

### 2. Calls → intelligence
- Calls recorded whenever the notetaker joins; recordings already feed client
  updates.
- **Chat with a collection of calls** (prioritized over chat-with-a-single-call —
  backend already done, needs a frontend agent).

### 3. Project management that runs itself
- Auto-create tickets from a transcript: action items, single responsible party,
  deadline, and context — owner just clicks **accept**.
- Built-in Victor / Slack agent inside the PM product (task chasing, updates).

### 4. Client-facing roadmap
- Connect the client-facing roadmap to ClickUp priorities (with a messaging
  transformation — not a 1:1 copy).
- Auto-generate images/icons and pull feature + functionality descriptions from
  tickets so it looks polished and explains how each feature works.

### 5. Acquisition & CRM inside TruthOS
- Lead-management → full CRM with pipelines (build on the existing process map;
  dummy portals + proposals already exist).
- In-app referral widget ("you're having a good experience — know another
  coaching program that'd be a fit?").
- Capture operator emails from clients' team members to market to later (e.g. a
  course on improving life as an operator).

### 6. Tracking & accountability (then gamify it)
- Commission tracker: connect payment processors + CRM to visualize earnings
  over any period.
- Recreate Mike (Bone Tempo / Client Accelerators) "Flywheel" marketing tracking
  for info products inside TruthOS — high crossover with AFA, Agency Operators,
  and Royalty Hero.
- Dev/team accountability: flag-based system, error/bug-fix log, tie to
  compensation (e.g. ≥90% time tracked), then **gamify** — streaks, "perfect
  days," a visible dashboard — and roll the gamified tracking out to clients.

### 7. Platform foundations
- Agents migrated off Supabase onto the **Mastra framework** (rolled out by
  Cole/Tanner) — a large shift in how agents are built; needs extensive docs.
- Documentation lives in **GitHub** (devs must update it when they touch the
  tool) and should also be **interactable inside TruthOS** for non-developers.
- **Mobile optimization + mobile app** added to the pipeline.
- Video updates: clip the dev Looms and add an AI voice — ideally Jordan's
  cloned voice — so feature walkthroughs feel personally delivered.

---

_Last updated: 2026-06-19 (from the Jordan ↔ Naveed product sync)._
