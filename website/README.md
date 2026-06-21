# truthOS website

A static rebuild of the truthOS marketing site, modeled on the macro.com aesthetic
(dark, premium, flat, lots of whitespace) in the truthOS navy-and-blue system. Built
from the rebuild brief and the canonical positioning. Self-contained: pure
HTML + CSS with a small vanilla-JS layer, no build step, no framework, no external
images (product visuals are CSS-built mockups).

## View it

Open `index.html` in a browser, or serve the folder:

```bash
cd website
python3 -m http.server 8000
# then open http://localhost:8000
```

## Pages

| File | Page | Purpose |
|------|------|---------|
| `index.html` | Home | Carries the whole story end to end |
| `platform.html` | The platform | Org data layer, four parts, six command centers, founder AI, dynamic journey, agent layer |
| `who-its-for.html` | Who it's for | The three avatars, each in their own words |
| `proof.html` | Proof | Case studies, transparency angle, "the demo sells the program" |
| `pricing.html` | Pricing | The build offer, two variants, what's included, guarantee, low-ticket funnel, enterprise |
| `about.html` | About | The thesis, the truth-to-trust flywheel, the Impact Ops story |
| `book-a-call.html` | Book a call | The primary conversion page: application form + scheduler placeholder |

Shared: `styles.css` (design system, see `brand-guide.md`), `script.js` (mobile nav,
scroll reveal, form handler).

## Writing rules applied

Every word follows the brief and `WRITING.md`: `truthOS` casing always, no em dashes,
sentence-case headings, plain and direct voice.

## What still needs doing before this goes live

**Confirm before publishing** (brief section 11). These are marked with
`CONFIRM BEFORE PUBLISHING` comments in the HTML where they appear:

1. Exact proof numbers and permission to name clients (Royalty Hero recurring
   revenue, AFA, the Limitless 30k-to-175k result). `proof.html` currently uses only
   the qualitative, ready-to-ship claims; swap in verified figures once confirmed.
2. One reconciled outcomes list (deck version vs positioning-notes version).
3. Whether the $297/mo platform fee is separate or folded into the $3k/mo (not shown
   on the site yet, pending the decision).
4. Final enterprise / partnership pricing (`pricing.html` keeps it as "talk to us").
5. Any bracketed or uncertain names in the positioning notes.
6. Whether all proposals are standardized on the $25k build.

**Wire up before launch:**

- The apply form (`book-a-call.html`) confirms client-side only. Connect it to a real
  backend + scheduler (Calendly / SavvyCal / truthOS intake). Marked with an
  `INTEGRATION NOTE` comment.
- Replace the CSS-built mockups with the real product screenshots/mockups from the
  product folder.
- Set real contact email, domain, and legal pages (privacy, terms).

**Not yet built (intentionally out of the main site):**

- The low-ticket funnel landing pages ($7 audit, $27 database, $97 build) as
  standalone pages for paid traffic. The pricing page summarizes the funnel; the
  dedicated landers are a separate build so they don't dilute the main site.
- Per-avatar sub-pages for paid traffic.
- The VSL(s) per avatar.
