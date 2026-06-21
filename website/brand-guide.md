# truthOS brand guide (v1, marketing site)

A working brand guide derived from the rebuild brief and the current assets. It is
enough to keep the site consistent now. A formal guide (commissioned alongside the
rebuild) should supersede it. Every token here is implemented in `styles.css` under
`:root`, so design and code stay in one place.

## 1. Name and casing (non-negotiable)

Always write `truthOS`: lowercase `t`, capital `OS`. Never TruthOS, Truthos, or
TruthOs, even at the start of a sentence. It behaves like iPhone.

In the logo lockup, the `OS` carries the blue-to-cyan gradient on a dark background.

## 2. Voice

Direct, plain, certain, founder to colleague. Short sentences. Concrete over
abstract. Lead with the mechanism (why other tools failed, why this works). No
hype-stacking, no jargon.

Hard rules (from `WRITING.md`), enforced across every page:

- No em dashes. Use a period, a comma, or "and".
- No AI-vocabulary or filler.
- Sentence-case headings (not Title Case).

## 3. Color

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#060912` | Page background (deep navy, near black) |
| `--bg-1` | `#0a0f1d` | Lower panel gradient |
| `--panel` | `#0d1426` | Cards, panels |
| `--panel-2` | `#111a30` | Raised surfaces, mockups |
| `--panel-3` | `#16213b` | Inset elements |
| `--text` | `#eef2fb` | Primary text |
| `--muted` | `#9aa6c2` | Body / secondary text |
| `--faint` | `#61708f` | Captions, meta |
| `--blue` | `#4f8cff` | truthOS blue (primary accent) |
| `--cyan` | `#2fe1e6` | Cyan accent / eyebrows |
| `--good` | `#46d9a0` | Positive / guarantee |
| `--warn` | `#f5b452` | At-risk |
| `--bad` | `#ff6b7a` | Negative |

The signature gradient ("truthOS blue") is
`linear-gradient(120deg, #5b8cff 0%, #2fe1e6 100%)`, used on the wordmark `OS`,
primary buttons, key numbers, and icon wells. Use it sparingly so it stays premium.

Lines and borders are white at low alpha: `rgba(255,255,255,0.08)` and `0.14`.

Client-facing portals are themed per client (for example, Royalty Hero is gold on
black). The marketing site itself always stays in this navy-and-blue system.

## 4. Typography

- Typeface: **Inter** (loaded from Google Fonts), with a system-sans fallback.
- Weights: 400, 500, 600, 700, 800.
- Headings: 700, tight tracking (`-0.02em`), sentence case.
- Body: 17px base, 1.6 line height, `--muted` for most paragraphs.
- Eyebrows: 13px, 600, uppercase, `0.14em` tracking, cyan, with a short rule.

## 5. Layout and spacing

- Max content width: 1180px, 24px gutters.
- Section rhythm: 96px (`.section`), 64px (`.section-sm`).
- Radii: 10 / 16 / 22 / 28px. Cards use 22px, statements and bands 28px.
- Generous whitespace. Authority first. Flat surfaces, no heavy shadows except a
  single soft glow on hero mockups.

## 6. Motion

- Calm and minimal. Reveal-on-scroll fades content up 18px over 0.6s.
- Buttons lift 2px on hover. Arrows nudge 3px. Nothing bouncy.
- Respect the macro.com reference: restraint over spectacle.

## 7. Components (in `styles.css`)

`.btn` (primary / ghost / lg), `.card`, `.cc` (command-center tile), `.mock`
(CSS-built product chrome), `.split` (text + visual), `.statement` (big line),
`.avatar`, `.price`, `.funnel`, `.guarantee`, `.statband`, `.quote`, `.cta-band`,
`.form`. Reuse these rather than adding one-off styles.

## 8. Product visuals

The site ships with CSS-built mockups (no image dependencies) standing in for real
screenshots: the operator command center, the founder AI chat, the client journey,
and the financial model. Replace these with the real product mockups from the
product folder (command-center dashboards, the system map, the finance model) when
wiring up the production build.

## 9. Logo lockup

`truth` in `--text`, `OS` in the gradient, preceded by a 22px rounded gradient mark.
Implemented as `.brand`. On dark only. A light-background variant still needs design.
