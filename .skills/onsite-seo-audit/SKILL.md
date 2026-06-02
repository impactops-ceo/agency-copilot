---
name: onsite-seo-audit
description: Run an on-site (on-page + technical) SEO audit of a website and produce a prioritized, fix-ready findings report. Triggers on "SEO audit", "audit my site", "on-page SEO for [client/site]". Saves to the relevant client folder or 03-acquisition/.
---

# onsite-seo-audit

Produce an on-site SEO audit a developer or content lead could act on Monday
morning — specific findings, why each matters, and a fix, ranked by impact. Not a
generic "improve your SEO" list.

## When to use
- "Run an SEO audit on [our site / a client's site]."
- "What's wrong with this site's on-page SEO?"
- Pre-engagement diagnostic for an SEO/web client.

## Process

### Step 1: Load context (RULE 1)
- **Whose site & goal:** if it's a client, read
  `04-service-delivery/clients/<client>/CONTEXT.md` for their business, avatar, and
  what they're trying to rank/convert for. If it's the owner's own site, read
  `02-company/CONTEXT.md`.
- **Get the URL(s)** and the target keywords / topics. An audit without intent is
  just a checklist — anchor findings to what they want to rank for.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/onsite-seo-audit.md`. If it exists, follow the
owner's method and reporting format. If not, ask: "Any specific framework, tools,
or report format you use for SEO audits?" Save the answer as the SOP, then proceed.

### Step 3: Audit against the framework
Fetch/inspect the page(s) and assess each area. Current best practice (2026):

**A. Crawlability & indexation**
- robots.txt, XML sitemap present and clean; no important pages blocked
- Canonical tags consistent; no accidental `noindex`; no duplicate-content splits
- JavaScript-rendered content is actually crawlable (critical content not hidden
  behind client-side JS)

**B. On-page**
- One clear `<title>` per page (~50-60 chars), unique, keyword-led
- Meta description present and compelling (CTR, not ranking)
- Single `<h1>`; logical `<h2>/<h3>` hierarchy matching search intent
- Content matches **search intent** for the target keyword; covers the topic vs.
  competitors; no thin/duplicate pages
- Descriptive image `alt` text; images compressed

**C. Internal linking & structure**
- Logical URL structure; important pages within a few clicks
- Internal links with descriptive anchors pointing to priority pages
- No orphan pages; broken links fixed

**D. Structured data (rising importance for AI overviews)**
- JSON-LD schema appropriate to the page (Organization, Article, Product,
  FAQ, LocalBusiness) — increases rich-result and AI-answer eligibility

**E. Core Web Vitals & mobile** (measured at the 75th percentile of real users)
- **LCP < 2.5s** — don't lazy-load the LCP image
- **INP < 200ms** (replaced FID) — defer non-critical JS, cut render-blocking
  scripts
- **CLS < 0.1** — set image/embed dimensions; reserve space for dynamic content
- Mobile-friendly, responsive, legible without zoom
- Tools to cite: Google Search Console, PageSpeed Insights, Lighthouse (free, cover
  most of this)

### Step 4: Draft the prioritized report
Save to the client folder (or `03-acquisition/`) as `seo_audit_<site>_<date>.md`:

```markdown
# On-Site SEO Audit · <site> · <date>
**Target keywords/intent:** ...
**Summary:** <3-5 sentence verdict — biggest levers>

## Prioritized findings
| # | Finding | Area | Why it matters | Fix | Impact | Effort |
|---|---------|------|----------------|-----|--------|--------|
| 1 | ... | CWV | ... | ... | High | Low |

## Quick wins (high impact / low effort)
## Bigger projects
## What's already good
```
Rank by **impact, then effort** — lead with high-impact / low-effort.

### Step 5: Review
Walk the owner through the top 3 levers. Offer to turn fixes into tasks, write the
improved titles/meta, or brief a developer.

## Quality check
- [ ] Findings tied to specific pages and the target intent (not generic)
- [ ] CWV assessed with current thresholds (LCP 2.5s / INP 200ms / CLS 0.1)
- [ ] Structured-data and crawlability checked, not just content
- [ ] Every finding has a concrete fix + impact/effort rating
- [ ] Saved to the right folder; top levers summarized for the owner
