# truthOS website

A static rebuild of the truthOS marketing site, modeled on the macro.com aesthetic
(dark, premium, flat, lots of whitespace) in the truthOS navy-and-blue system.
Self-contained: pure HTML + CSS with a small vanilla-JS layer, no build step, no
framework, no external images (product visuals are CSS-built mockups).

## View it

Open `index.html` in a browser, or serve the folder:

```bash
cd website
python3 -m http.server 8000   # then open http://localhost:8000
```

The `preview/` folder holds single-file copies (CSS/JS inlined) for sharing via a
render proxy. Regenerate them after edits with the inliner (see "Updating preview").

## Pages

| File | Page | Purpose |
|------|------|---------|
| `index.html` | Home | The full story, with the interactive command-center console |
| `platform.html` | The platform | Org data layer, four parts, six command centers, founder AI, dynamic journey, agent layer |
| `who-its-for.html` | Who it's for | The three avatars, each in their own words |
| `proof.html` | Proof | Case studies, transparency angle, "the demo sells the program" |
| `pricing.html` | Work with us | Audit-first path, productized-coaching offer, the two partnership tracks. No pricing shown. |
| `about.html` | Our truth | The thesis, the flywheel, the Impact Ops story, plus testimonials |
| `book-a-call.html` | Book a call | Primary conversion page: application form + scheduler placeholder |

Shared: `styles.css` (design system, see `brand-guide.md`), `script.js` (mobile nav,
scroll reveal, the interactive console, form handler).

Note: `pricing.html` keeps its filename to avoid breaking links, but reads as
"Work with us" everywhere in the UI.

## The interactive command-center console

The home hero has a clickable console: the left rail switches between the six command
centers (Operator, Client acquisition, Client success, Hiring, Project management,
Financial), each with its own realistic KPIs, chart, action feed, and a founder-AI
("Neo AI") line. Driven by `script.js` (the `.console` handler) and styled in
`styles.css` (the console block). The dollar figures inside are illustrative dashboard
data, not pricing.

## Writing rules applied

`truthOS` casing always, no em dashes, sentence-case headings, plain and direct voice.

## Decisions locked in this round

- "You won't scale what you don't trust" (was "can't") everywhere.
- "A dashboard shows you the data. A command center lets you use AI to act on it."
- "Make the product so good, growth is inevitable."
- Trust strip reads "Current partners": Royalty Hero, AFA, Agency Operators, Impact
  Ops, Selling to Closing, Mega Events.
- No pricing on the site. Everything pushes to the audit and booking a call.
- No 60-day guarantee, no delivery variants, no enterprise pricing tier.
- About renamed to "Our truth" (About + testimonials).

## Internal only — partnership terms (NOT shown on the public site)

Kept off the page per the "no dollar amounts" decision. For internal reference:

- **Impact Incubator:** apply for a $25,000 scholarship. We evaluate the
  vertical-integration software opportunity in the founder's market and build truthOS
  out for selected founders, who are grandfathered into a 12.5% of profit deal.
- **Visionary Impact Partnership (VIP):** a $50,000 investment for 1% of truthOS. We
  build it out over six months, then either train their team to run it or run it for
  them.

If you want these figures on the page later, add them to the two cards in
`pricing.html`.

## Still pending from the owner

- **New logo** for the top-left wordmark (currently the `truthOS` gradient lockup,
  built in `.brand`). Drop in the asset and swap the `.brand` markup.
- **New hero sub-headline copy** (current line is a placeholder to be replaced).
- **New copy for the problem section** on the home page.

## Wire up before launch

- The apply form (`book-a-call.html`) confirms client-side only. Connect it to a real
  backend + scheduler (Calendly / SavvyCal / the truthOS intake).
- Replace the CSS-built mockups and console with real product screenshots where
  wanted.
- Set the real contact email, domain, and legal pages (privacy, terms).
- Confirm permission to name partners and any proof figures before they go live
  (Royalty Hero, AFA, Agency Operators, Selling to Closing, Mega Events).

## Not yet built (intentionally out of the main site)

- The low-ticket funnel landing pages (AI readiness assessment, the setup guide, the
  platform) as standalone pages for paid traffic. "Work with us" summarizes the path.
- Per-avatar sub-pages for paid traffic.
- The VSL(s) per avatar.

## Updating preview

After editing the source files, regenerate the self-contained `preview/` copies:

```bash
cd website
python3 - <<'PY'
import re, glob, pathlib
css = open('styles.css').read(); js = open('script.js').read()
for f in glob.glob('*.html'):
    s = open(f).read()
    s = re.sub(r'\s*<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>', '', s)
    s = s.replace('<link rel="stylesheet" href="styles.css" />', '<style>\n'+css+'\n</style>')
    s = s.replace('<script src="script.js"></script>', '<script>\n'+js+'\n</script>')
    pathlib.Path('preview', f).write_text(s)
PY
```
