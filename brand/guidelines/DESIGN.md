---
version: alpha
name: Oriana
description: Golden-hour editorial identity for Oriana, a private lash studio in Singapore. Aesop-level restraint, warmed. Literary serif authority over quiet sans utility.
colors:
  primary: "#3B2F26"
  surface: "#F6F0E6"
  accent: "#C9963F"
  secondary: "#E4CDBA"
  on-surface: "#3B2F26"
  on-primary: "#F6F0E6"
  muted: "#7A6A5B"
typography:
  headline-display:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.01em
  wordmark:
    fontFamily: Cormorant Garamond
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.16em
  eyebrow-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.22em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  price:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
  xxl: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#2A211A"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-sand:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.xl}"
---

## Overview

Oriana is a private, one-client-at-a-time lash studio in Singapore built on the idea of golden-hour light — the hour in which everyone looks like themselves, only more so. The identity is golden-hour editorial: Aesop's restraint, warmed. The site should feel like a quiet, warm, well-lit room with a bookshelf in it — literary, unhurried, precise. The audience is women in Singapore who want lashes that enhance rather than announce (the brand promise: "Noticed, not announced"). Nothing on the site may shout: no urgency, no discounts, no emoji, no decorative flourish that a fine bookstore would not permit.

## Colors

Ivory Hour (#F6F0E6) is the ground — roughly 60% of every viewport. Umber (#3B2F26) is the ink and carries all text and line work. Honey Gold (#C9963F) is strictly rationed: one accent per section — a rule line, a glyph, a single italic word — never large fills and never body text (contrast fails). Blush Sand (#E4CDBA) provides secondary surfaces and gentle section alternation. Pure white and pure black are forbidden. Umber-on-ivory passes WCAG AA for all sizes; gold is decorative-scale only.

## Typography

Cormorant Garamond (high-contrast literary serif) owns display and headline duty in sentence case; all-caps with wide letterspacing is reserved for the ORIANA wordmark and small eyebrow labels. Inter (quiet grotesque sans) owns body, UI, labels, and — always — prices, because prices are information, not poetry. One display headline per viewport section. Serif italics are reserved for the world-words (*the hour*, *first light*) and quoted client speech.

## Layout

Generous, editorial, slow: a max content width around 1100–1200px, at least 40% negative space per section, single-column reading measures (~65ch) for prose, and an 8px spacing scale with big jumps (48/96/160) between sections. The page should scroll like a well-set book, not a dashboard. Mobile first in practice: most visitors arrive from Instagram on a phone.

## Elevation & Depth

Essentially flat. Depth comes from colour-plane shifts (ivory → sand → umber) and photography, never from drop shadows. A hairline umber border (1px at 15–20% opacity) may define cards and tables. The only permitted shadow is an extremely soft, warm ambient on lifted imagery, and even that sparingly.

## Shapes

Square and editorial: zero border-radius on buttons, cards, and images (rounded: none). The single exception is the `full` radius for the small circular glyph badge and avatar contexts. The shape language is a printed page, not an app.

## Components

Buttons are rectangular, letterspaced Inter labels: primary is umber with ivory text ("Hold your hour" — the WhatsApp CTA), ghost is bordered umber on ivory. Service cards sit on ivory with hairline borders: serif service world-name, sans plain descriptor, sans price stated plainly. The footer is umber with ivory text and the gold glyph. Navigation is a quiet top bar: wordmark left, four links + WhatsApp CTA right, no hamburger theatrics on desktop. Section eyebrows use the letterspaced label style in muted umber or gold.

## Do's and Don'ts

Do keep one gold accent per section; do state prices plainly; do use real photography with the golden grade once available (until then, warm editorial placeholders in-palette); do route every CTA to WhatsApp; do include the HDB-registered and insured trust line quietly in the footer.

Don't use pure white/black, drop shadows, rounded corners, emoji, urgency mechanics, discount banners, more than two typefaces, ring-light-blue imagery, or the word "Korean" anywhere in navigation, headlines, or the brand lockup (it lives only in the About craft-story paragraph and SEO metadata).
