# Changelog

## v0.1.0 — 2026-06-02

Initial build of **Agency Copilot** — a downloadable Claude Code workspace that
onboards an agency owner and becomes a copilot for running their agency.

- Six-layer structure: `01-founder` … `06-financials`, each with a `CONTEXT.md`
  that holds both the questions and the owner's answers.
- `onboard-agency` interview skill: section-by-section, writes answers in place,
  tracks state in `.onboarding/progress.md`, supports pause/resume and
  fill-by-hand.
- Bootstrap `CLAUDE.md`: state-aware (start / resume / skip), routing table, skill
  registry.
- Copilot skills: `new-sop`, `new-report`, `new-sales-script`, `new-avatar`.
- Templates inline as `_template-*`: avatar worksheet (from the "Understanding Your
  Avatar" framework), client context, role context.
- Asset drop-zones with READMEs: writing samples, speaking transcripts, brand kit,
  channels, funnels, ad creative, scripts, contracts, onboarding, reports.
- Highest-value client audit template.
