---
name: new-report
description: Draft a client report from that client's data and history, in the owner's voice. Triggers on "write a report", "draft this month's update for [client]", "client report".
---

# new-report

Produce a client-ready report that reflects real work, real numbers, and the
owner's voice.

## When to use

- "Draft this month's report for [client]."
- "Write an update for [client]."
- Any recurring client reporting.

## Process

### Step 1: Load the client
Read the client's folder in `04-service-delivery/clients/<client>/` — their goals,
engagement details, history, and any transcripts. Read past reports in
`04-service-delivery/reports/` to match format. Read `01-founder/CONTEXT.md` for
the owner's writing voice.

### Step 2: Gather the period's inputs
Ask for (or pull from context) what happened this period: work delivered, metrics,
wins, blockers, and next steps. If a past report format exists, mirror it.

### Step 3: Draft
Write the report in the owner's voice — tied to the client's stated goals, honest
about results, clear on what's next. Lead with outcomes, not activity. Save to
`04-service-delivery/reports/<client>_<period>.md`.

### Step 4: Review
Show the owner. Tighten anything that overstates or understates. Confirm numbers.

## Quality check
- [ ] Tied to the client's actual goals
- [ ] Honest about results; numbers verified with the owner
- [ ] Sounds like the owner wrote it
- [ ] Matches the established report format
