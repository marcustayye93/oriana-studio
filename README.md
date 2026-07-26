# Oriana Studio — Private Beauty Studio

> *Light, worn quietly.*

The complete brand and website package for **Oriana Studio**, a private, one-client-at-a-time beauty studio in Singapore — beginning with the lash line, built to grow into a quiet beauty house. Built from the ground up: strategy, naming, identity, voice, guidelines, visual assets, and a five-page brand website.

## Repository structure

| Path | Contents |
| --- | --- |
| `website/` | The Oriana website — React 19 + Tailwind 4 + Vite. Five pages: Home, The Menu, The Studio, Aftercare, Contact. |
| `brand/strategy/` | The full brand strategy, naming worksheets (three rounds of candidates with verification), market research notes, and archived earlier strategy versions (Gyeol, Vesper). |
| `brand/guidelines/` | The guideline suite: brand identity, voice & messaging, marketing, social media playbook, client experience, photography standards, and a `DESIGN.md` token spec. |
| `assets/` | Generated brand imagery: logotype, glyph, palette card, and the shot-on-iPhone-style photography set used on the site. |

## The brand in one paragraph

Oriana Studio (from Latin roots meaning *the rising golden light*) is a golden-hour world for natural-first beauty artistry: not too much, not too little, just right — for absolutely anyone. Version 2.0 of the identity adds the gradient-grain palette (peach, pink, gold, eucalyptus green, and hazy blue, always textured with grain), a thin Cormorant Garamond Light display, the Italiana ORIANA / STUDIO lockup, and imperfection-forward inclusive photography (freckles kept, men and women both). The voice stays quiet, warm, and dry-witted. Resident greeter: Wubbles the Cavapoo.

## Running the website locally

```bash
cd website
pnpm install
pnpm dev
```

The dev server starts on port 3000. Before going live, replace the placeholder WhatsApp number in `website/client/src/lib/site.ts`.

## Reading order for the brand documents

1. `brand/strategy/oriana-brand-strategy.md` — the master strategy
2. `brand/guidelines/00-guide-to-the-guidelines.md` — index to the guideline suite
3. Everything else as needed
