# Oriana — Private Lash Studio

> *Light, worn quietly.*

The complete brand and website package for **Oriana**, a private, one-client-at-a-time home lash studio in Singapore. Built from the ground up: strategy, naming, identity, voice, guidelines, visual assets, and a five-page brand website.

## Repository structure

| Path | Contents |
| --- | --- |
| `website/` | The Oriana website — React 19 + Tailwind 4 + Vite. Five pages: Home, The Menu, The Studio, Aftercare, Contact. |
| `brand/strategy/` | The full brand strategy, naming worksheets (three rounds of candidates with verification), market research notes, and archived earlier strategy versions (Gyeol, Vesper). |
| `brand/guidelines/` | The guideline suite: brand identity, voice & messaging, marketing, social media playbook, client experience, photography standards, and a `DESIGN.md` token spec. |
| `assets/` | Generated brand imagery: logotype, glyph, palette card, and the shot-on-iPhone-style photography set used on the site. |

## The brand in one paragraph

Oriana (from Latin roots meaning *the rising golden light*) is a golden-hour world for natural-first lash artistry: not too much, not too little, just right. The voice is quiet, warm, and dry-witted; the palette is ivory, umber, honey-gold, with a muted sage accent; the type system pairs Cormorant Garamond with Inter and Petit Formal Script. Resident greeter: Wubbles the Cavapoo.

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
