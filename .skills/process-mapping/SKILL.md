---
name: process-mapping
description: Map a business process end to end — trigger, steps, decision points, handoffs, outputs, and owners — and save a visual map. Triggers on "map this process", "process map", "document the workflow". Saves to 05-operations/playbook/process-maps/.
---

# process-mapping

Turn a process the owner runs into a clear visual map showing every step, decision,
and handoff — the backbone for SOPs, delegation, and automation. Not a vague
flowchart.

## When to use
- "Map our [acquisition channel / service delivery] process."
- "Document the workflow for [thing]."

## Process

### Step 1: Load context (RULE 1)
- **Where it fits:** `03-acquisition/CONTEXT.md` or `04-service-delivery/CONTEXT.md`
  (the journey/stages) and `05-operations/CONTEXT.md` (team/roles) so steps map to
  real owners.
- Pull from existing transcripts/SOPs where the process is already described before
  asking.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/process-mapping.md`. If present, follow its
conventions. If not, ask the owner to walk the process once, start to finish. Save
the captured walkthrough as the basis, then proceed.

### Step 3: Apply the framework
Capture, in order:
1. **Trigger** — what starts the process.
2. **Actors / owners** — who does each part (tie to roles).
3. **Steps** — each action in sequence, with the tool used.
4. **Decision points** — branches ("if X → A, else → B").
5. **Handoffs** — where work passes between people/teams (the usual failure
   points).
6. **Outputs** — what's produced at the end and any interim artifacts.
7. **Exceptions** — common edge cases and how they're handled.

### Step 4: Draft the map to file
Save to `05-operations/playbook/process-maps/<process>.md` as a numbered
step-by-step **and** a simple visual (Mermaid `flowchart` or an indented text
flow) showing branches and handoffs. Label each step's owner and tool.

### Step 5: Review
Confirm with the owner that the map matches reality (not the ideal). Offer to spin
each major step into an SOP via `new-sop`, and flag obvious automation candidates.

## Quality check
- [ ] Trigger, steps, decision points, handoffs, outputs all captured
- [ ] Every step has an owner and tool
- [ ] Includes a visual (Mermaid or text flow) with branches
- [ ] Reflects reality; saved to `playbook/process-maps/`
