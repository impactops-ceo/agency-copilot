---
name: new-sop
description: Draft a standard operating procedure for a repeatable agency process and save it into 05-operations/playbook/sops/. Triggers on "write an SOP", "document this process", "create a standard operating procedure".
---

# new-sop

Turn a process the owner runs into a clean, followable SOP — written so a team
member could execute it without asking questions.

## When to use

- "Write an SOP for [process]."
- "Document how we do [thing]."
- The owner describes a repeatable process and wants it captured.

## Process

### Step 1: Identify the process
Ask what process this is and which stage it belongs to (acquisition or service
delivery), and who runs it. Check `05-operations/CONTEXT.md` and the relevant
section for context you already have.

### Step 2: Walk the steps
Get the steps in order — trigger, each action, tools used, the output, and how you
know it's done. Typically 3-10 steps. Pull from existing context and transcripts
where possible so you're not asking what you can already see.

### Step 3: Draft the SOP
Write to `05-operations/playbook/sops/<process_name>.md` using this shape:

```markdown
# SOP · {Process Name}

**Owner / role:** {who runs this}
**Trigger:** {what kicks it off}
**Outcome:** {what "done" looks like}

## Steps
1. {action} — {tool/detail}
2. ...

## Checklist
- [ ] {key quality gate}

## Notes
{edge cases, gotchas, links}
```

### Step 4: Link it
Reference the SOP from the relevant role in `05-operations/roles/` and the
playbook. Confirm with the owner and adjust.

## Quality check
- [ ] A new hire could follow it without asking
- [ ] Steps are concrete and in order, with tools named
- [ ] Saved in the right place and linked from the role/playbook
