---
name: competitor-research
description: Research and analyze competitors across a defined dimension matrix, then surface gaps and positioning opportunities, grounded in the owner's market and avatar. Triggers on "competitor research", "analyze competitors", "competitive analysis". Saves to 02-company/ or 03-acquisition/.
---

# competitor-research

Produce a competitive analysis that ends in a positioning decision — not a list of
"here are some competitors." Grounded in the owner's market, avatar, and offer.

## When to use
- "Research competitors for [our agency / a client]."
- "Where's the gap in our market?"

## Process

### Step 1: Load context (RULE 1)
- **Us:** `02-company/CONTEXT.md` (industry, services, positioning) and
  `03-acquisition/CONTEXT.md` (offer). For a client, load their folder instead.
- **Avatar:** `02-company/avatars/<avatar>/` → who we're competing for and their
  awareness/sophistication (shapes positioning).
- Get the list of competitors, or identify direct + indirect ones.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/competitor-research.md`. If present, follow it.
If not, ask: "Which competitors matter, and what do you most want to learn?" Save
as the SOP, then proceed.

### Step 3: Apply the framework
1. **Identify competitors** — direct (same offer/avatar), indirect (different
   solution, same problem), and aspirational.
2. **Gather from real sources** — their site & offer pages, **Meta/TikTok ad
   libraries** (active ads, angles, longevity), reviews (G2/Trustpilot/Google),
   SERPs and content, social. Cite what you found; flag what's inferred.
3. **Dimension matrix** — score each competitor on: offer & price, positioning /
   big idea, target avatar, channels, funnel type, core messaging & hooks, proof,
   visible strengths, visible weaknesses.
4. **Gap analysis** — where are they all the same (saturation)? What's
   underserved? What angle is no one using for this avatar?
5. **Positioning recommendation** — how the owner should differentiate (mechanism,
   avatar, offer, or message), with reasoning.

### Step 4: Draft to file
Save to `02-company/competitor-analysis_<date>.md` (or the client folder) with the
matrix as a table, the gap analysis, and a clear positioning recommendation.

### Step 5: Review
Walk the owner through the top 2-3 opportunities. Offer to turn the positioning
into offer/messaging updates in `03-acquisition`.

## Quality check
- [ ] Real sources cited (ad libraries, reviews, SERPs); inferences flagged
- [ ] Matrix covers offer, positioning, channels, messaging, proof, strengths/weaknesses
- [ ] Ends in a specific, reasoned positioning recommendation
- [ ] Grounded in the owner's avatar and market; saved to the right folder
