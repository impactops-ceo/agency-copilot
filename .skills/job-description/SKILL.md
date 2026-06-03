---
name: job-description
description: Write a scorecard-style job description from a role's responsibilities, KPIs, and the company values. Triggers on "write a job description", "JD for [role]", "job posting". Saves to 05-operations/roles/<role>/.
---

# job-description

Write a job description that attracts the right person and sets a clear bar — built
from the actual role definition and company values, not a generic posting.

## When to use
- "Write a job description for [role]."
- Opening a new seat or replacing one.

## Process

### Step 1: Load context (RULE 1)
- **The role:** `05-operations/roles/<role>/CONTEXT.md` → responsibilities, KPIs,
  SOPs. If the role folder doesn't exist, create it (copy `_template-role/`) and
  capture the basics first.
- **The company:** `02-company/CONTEXT.md` → mission, vision, values (culture fit),
  and `01-founder/CONTEXT.md` for voice.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/job-description.md`. If present, follow it
(format, comp policy, EEO language). If not, ask: "Any format, comp range, or
must-haves to include?" Save as the SOP, then proceed.

### Step 3: Apply the framework (scorecard style)
1. **Role mission** — one sentence on why this seat exists.
2. **Outcomes** — 3-6 measurable results expected in the first 6-12 months (from
   the role's KPIs), not a vague duties list.
3. **Competencies** — the skills and behaviors that predict success here.
4. **Culture / values fit** — tie to the company values; who thrives here.
5. **Logistics** — location/remote, hours, comp range, reporting line.
6. **About the company** — short, compelling, in the owner's voice.
7. **How to apply** — clear CTA; hint at the assignment stage if used.

### Step 4: Draft to file
Save to `05-operations/roles/<role>/job_description.md`.

### Step 5: Review
Confirm the outcomes match the role's real KPIs and the tone matches the brand.
Offer to build the `hiring-assignment` next.

## Quality check
- [ ] Outcome-based (measurable), not a generic duties list
- [ ] Pulled from the role's real responsibilities + KPIs
- [ ] Values/culture fit included; owner's voice
- [ ] Saved to the role folder
