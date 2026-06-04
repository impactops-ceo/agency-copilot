---
name: client-audit
description: Run a deep audit of a single client — acquisition, delivery, results, profitability, satisfaction, risk, and growth opportunities — and roll the summary into the highest-value client audit. Triggers on "audit [client]", "client health check", "QBR prep". Saves to the client folder.
---

# client-audit

Produce a full health-and-opportunity audit of one client — where they came from,
what they cost, what they're worth, how happy they are, and what to do next. Not a
generic "review the account."

## When to use
- "Audit [client]." / "Do a health check on [client]."
- Prepping a QBR or a renewal/upsell conversation.

## Process

### Step 1: Load context (RULE 1)
- **The client:** `04-service-delivery/clients/<client>/CONTEXT.md` + any
  transcripts and reports in that folder → goals, history, deliverables, cadence.
- **Our economics:** `04-service-delivery/CONTEXT.md` (cost of delivery) and
  `06-financials/` if relevant.
- **The audit frame:** `04-service-delivery/highest_value_client_audit.md` columns.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/client-audit.md`. If present, follow it. If not,
ask: "What do you most want this audit to answer — retention risk, upsell, or
profitability?" Save as the SOP, then proceed.

### Step 3: Apply the framework
Assess and score across:
1. **Acquisition** — source, cost to acquire, fit.
2. **Delivery** — are we hitting cadence, scope, and SLAs? Delivery cost vs. plan.
3. **Results** — are we hitting *their* stated goals? Evidence.
4. **Profitability** — revenue − delivery cost = margin. Trending which way?
5. **Satisfaction & relationship** — sentiment from calls/reports; NPS if known;
   referral behavior.
6. **Risk** — churn signals (quiet, missed goals, payment, single-threaded
   contact).
7. **Growth** — upsell/cross-sell/expansion opportunities tied to their goals.

### Step 4: Draft to file
Save to `04-service-delivery/clients/<client>/audit_<date>.md`: a scored summary,
the key risks, and a prioritized action list. **Then update the client's row in
`highest_value_client_audit.md`** so the portfolio view stays current.

### Step 5: Review
Give the owner the verdict in 3 lines (health, biggest risk, biggest opportunity)
and the recommended next move. Offer to draft the QBR or the upsell proposal.

## Quality check
- [ ] Tied to the client's actual goals and real numbers
- [ ] Covers profitability, results, satisfaction, risk, and growth
- [ ] Ends in a prioritized action list; risk and opportunity called out
- [ ] Highest-value audit row updated; saved to the client folder
