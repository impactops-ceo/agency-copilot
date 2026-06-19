# TruthOS · Updates Log

Chronological record of product syncs. Newest first. Each entry is the narrative;
the structured items live in `trackers/`.

---

## 2026-06-19 — Jordan ↔ Naveed product sync

**Participants:** Jordan (CEO), Naveed (product/ops lead).
**Purpose:** Weekly updates + plan the next sprint, plus deep-dive on the Slack
agent direction.

### Updates shared
- **Internal TruthOS in use:** Calls are being recorded (as long as the notetaker
  joins) and Naveed is now incorporating those recordings into client updates.
  That's the extent of live usage today.
- **Chat with a collection of calls:** Agreed this is more valuable than chatting
  with a single call. Backend is already done; just needs a frontend agent
  plugged in.
- **Agent framework migration:** Agents moved off Supabase onto the **Mastra
  framework** (rolled out by Cole/Tanner yesterday). Big shift in how everyone
  works with agents — Ahmed, who works on the agents, has no clue yet what to
  change in his approach, so Cole is writing extensive documentation.
- **Dev onboarding docs:** Naveed pushing Tanner to finalize the dev onboarding
  process today (lives in GitHub, links to the onboarding process). Documentation
  is the blocker before onboarding interns, because so much has changed
  technically that Naveed can't always judge a change himself and needs the docs
  to lean on.
- **Documentation direction:** Process now requires devs to update GitHub docs
  when they touch the tool. Jordan wants documentation **interactable inside
  TruthOS** (for non-developers too — onboarding context, train-your-operator),
  not just a GitHub instance. Plan: let Tanner finish collecting the info first,
  then decide format / plug into an agent.
- **Interviews:** 5–6 candidates approved. Notable: a make-automation fan with no
  formal tech background (learned make from Naveed's old videos); a self-taught CS
  student (single mother, in university, strong assignment) whom Naveed approved
  and wants to give a go; several solid CS-student developers. Jordan flagged a
  need for more GHL/make-automation specialists and another setter→closer hire
  (Dominic may have character issues).
- **Notetaker bug:** Notetakers didn't show on Jordan's and Stephen's calls
  yesterday. Recall side looked fine (said the notetaker entered the waiting room)
  but it wasn't in the call. Acknowledged as an issue; Cole investigating today.
  Notetakers have been joining other calls correctly.
- **Mobile:** Mobile optimization + mobile app added to the pipeline (ticket
  created). Aim to bring mobile optimization into product dev next week.
- **Royalty Hero:** Hilmar left updates before leaving and returns Monday. Naveed
  to review his updates + re-prioritize the pending items so there's a plan ready
  for Hilmar Monday.
- **Org onboarding process:** Almost finished; needs touch-ups Naveed already has
  prompts for. He'll finalize this weekend and send to Jordan.
- **Lead management / CRM:** Some progress already built (lead management + dummy
  portals + proposals), not a full CRM yet (no pipelines). Jordan wants pipelines;
  agreed it'd be easy to add from the existing process map. Naveed to send an
  update this weekend / tomorrow.
- **Roadmap:** Client-facing roadmap is very manual today. Plan: connect it to
  ClickUp priorities (with messaging transformation, not 1:1), auto-create
  images/icons, and pull feature + functionality descriptions from tickets. Naveed
  to update it today and send a Loom reviewing the pipeline + next sprint.

### Direction discussed
- **Slack agents (the big topic):** Two layers — (1) *our* Victor running our ops
  (scheduled tasks, ClickUp updates, transcript context); (2) *clients'* own
  Victors. Ideally **multiple custom Slack agents per organization**, one per
  department/channel/function, customizing skills + prompts (not the data source),
  able to execute (images, video, email, Slack, reports). A pre-built agent
  library that clients — and their clients — can build on.
- **Three base capabilities to solve first:** scheduling/triggers; tech-stack
  (MCP) access; multiple skill-trained agents. Naveed to bring this to the Monday
  discussion with Cole/Tanner and prioritize the next few days. Jordan to submit
  the base-feature tickets from this transcript (and noted these should auto-create
  in TruthOS one day).
- **Built-in Victor for the PM product** would be next level. Want auto-created
  tickets (action item · SRP · deadline · context → click accept).
- **Acquisition inside TruthOS:** in-app referral widget; capture operator emails
  from clients' team members (e.g. Cassidy, who works with Hunter/GigaBrand, added
  to the beta — Jordan reached out) to market a future operator course. Goal: make
  the operator experience amazing so they say yes to getting their whole company on
  TruthOS.
- **Mike's "Flywheel":** Recreate Mike (Bone Tempo / Client Accelerators)
  marketing-tracking system for info products inside TruthOS. He's mapped the
  logic; extract first principles. Heavy crossover with AFA, Agency Operators, and
  Royalty Hero (we run a similar funnel for Royalty Hero).
- **Commission tracker:** Recreate first in Supabase for Marco, then duplicate the
  functionality into TruthOS (connect payment processors + CRM, visualize earnings
  over a period). Tentative target end of June; communicate scope to Marco early
  next week.
- **Dev accountability → gamification:** Flag-based system (e.g. ticket moved to
  review with no time tracked = a flag), escalating messages by flag count, tie to
  compensation (≥90% time tracked for bonus), track bugs caused by a PR, then
  gamify with streaks / "perfect days" and a visible dev dashboard — eventually
  rolled out to clients. Frame Cole/Tanner's gap as "better at planning," not "not
  doing anything." Add an error/bug-fix log. Coach adherence as "bigger than
  yourself" — reporting makes everyone's job easier.
- **Video updates with AI voice:** Reuse the dev Looms (already have recording +
  visual), clip them, add an AI voice — ideally Jordan's cloned voice — so
  walkthroughs feel personally delivered (addresses Neo's concern about how
  involved Jordan will be).

### Side items
- **Rohan** (Eric's business partner) wants an invite to Eric's portal with the
  same permissions as Eric — Naveed to look into it.
- **Cassidy** thread — both to reply.
- **Rex** asked to hop on a call to learn how to send Slack messages — reinforces
  the need for short how-to videos.
- **Eleanor / the $10k-mo prospect:** replacing internal ops people; likely
  holding off. Jordan continuing discussions but not pushing a decision; would
  like the prospect to build what they want on TruthOS in the meantime (crossover
  with AFA/Agency Operators tracking).
- **Train your operator:** deferred to the exec call (involve Liam).

### Next sprint / primary outputs
Naveed to send Jordan a Loom today reviewing the pipeline and proposing the next
sprint, update the client-facing roadmap, and finalize the dev onboarding docs so
intern onboarding can begin.
