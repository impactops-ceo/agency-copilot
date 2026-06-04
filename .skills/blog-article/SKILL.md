---
name: blog-article
description: Write an SEO-aware blog article in the owner's voice, matched to search intent for a target keyword, with outline, internal links, and meta. Triggers on "write a blog post", "article on [topic]", "SEO content". Saves to a client folder or 03-acquisition/.
---

# blog-article

Write an article that ranks and reads well — matched to real search intent, in the
owner's voice, tied to the offer. Not a generic 1,000-word filler piece.

## When to use
- "Write a blog article on [topic/keyword]."
- "We need SEO content for [our site / a client]."

## Process

### Step 1: Load context (RULE 1)
- **Voice:** `01-founder/CONTEXT.md` → writing style.
- **Who & intent:** if for a client, `04-service-delivery/clients/<client>/`; else
  `02-company/CONTEXT.md`. Get the **target keyword** and **search intent**
  (informational / commercial / transactional).
- **Avatar & offer:** `02-company/avatars/<avatar>/` and `03-acquisition/` — so the
  article speaks to the right reader and points to the right next step.

### Step 2: SOP — follow or capture (RULE 3)
Check `05-operations/playbook/sops/blog-article.md`. If present, follow it
(structure, length, brand rules). If not, ask: "Any content style guide, word
count, or example article you want to match?" Save as the SOP, then proceed.

### Step 3: Apply the framework
1. **Confirm search intent** — what does someone searching this keyword actually
   want? Match the format (how-to, listicle, comparison, guide).
2. **Outline** — H1 + H2/H3 that cover the topic better than what currently ranks;
   answer the question fast, then go deep.
3. **Brief** — target keyword, secondary keywords, angle, internal links to
   include, CTA.
4. **Draft** in the owner's voice — clear, skimmable, genuinely useful. Lead with
   the answer. No fluff to hit a word count.
5. **On-page SEO** — keyword in title/H1/intro naturally; descriptive subheads;
   internal links to relevant pages; **meta title (~55 chars) + meta description**;
   image alt suggestions.
6. **CTA** — a natural next step tied to the offer.

### Step 4: Draft to file
Save to the client folder or `03-acquisition/content/<keyword-slug>.md` (create
`content/` if needed), with the brief and meta at the top.

### Step 5: Review
Check it satisfies intent and reads in the owner's voice. Offer to run
`onsite-seo-audit` on where it'll live.

## Quality check
- [ ] Matches search intent and beats current ranking pages on usefulness
- [ ] Owner's voice; skimmable structure; leads with the answer
- [ ] Keyword, internal links, meta title/description included
- [ ] Natural CTA to the offer; saved to the right folder
