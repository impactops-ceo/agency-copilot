---
name: hiring-assignment
description: Design a practical hiring assignment that mirrors the role's real outcomes, plus a scoring rubric. Triggers on "hiring assignment", "test project for candidates", "interview task". Saves to 05-operations/roles/<role>/.
---

# hiring-assignment

Design a candidate assignment that actually predicts on-the-job performance — a
real slice of the work plus a rubric to score it fairly. Not a generic brain-teaser.

## When to use
- "Create a hiring assignment for [role]."
- Adding a practical stage to the hiring process.

## Process

### Step 1: Load context (RULE 1)
- **The role:** `05-operations/roles/<role>/CONTEXT.md` → responsibilities, KPIs,
  and especially the **outcomes** from the job description (`job_description.md` if
  it exists).
- **The work:** the relevant SOPs/process maps in `05-operations/playbook/` so the
  task mirrors how the work is really done.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/hiring-assignment.md`. If present, follow it. If
not, ask: "What's the single most important thing this hire must be able to do?"
Save as the SOP, then proceed.

### Step 3: Apply the framework
1. **Pick the core outcome** — the one or two results that most predict success in
   this seat.
2. **Design a realistic task** — a scoped slice of actual work (e.g. "audit this
   sample account and propose 3 fixes," "write a cold email for this offer"). Real,
   not hypothetical.
3. **Set constraints** — clear deliverable, time box (respect their time —
   60-120 min), and any inputs you provide.
4. **Write the brief** — context, the task, what to submit, and how it'll be
   evaluated (transparency improves quality).
5. **Scoring rubric** — 4-6 criteria tied to the role's competencies, each with
   what "weak / solid / exceptional" looks like.

### Step 4: Draft to file
Save to `05-operations/roles/<role>/hiring_assignment.md` (brief) and include the
rubric in the same file or alongside.

### Step 5: Review
Check the task genuinely mirrors the job and the time box is fair. Confirm the
rubric is objective enough that two reviewers would score similarly.

## Quality check
- [ ] Task is a real slice of the role's actual work
- [ ] Tied to the role's core outcomes/competencies
- [ ] Fair time box; clear brief and deliverable
- [ ] Objective scoring rubric; saved to the role folder
