---
version: alpha
name: Oriana Studio
description: Gradient-grain golden-hour identity for Oriana Studio, a private beauty house in Singapore. Thin high-contrast serif over quiet sans; soft grainy gradients of peach, pink, butter gold, eucalyptus green, and powder blue over a warm cream ground; macro imperfection-forward photography of men and women.
colors:
  primary: "#3B2F26"
  surface: "#FAF4EA"
  accent: "#C9963F"
  green: "#7E9C7B"
  coral: "#E8785A"
  secondary: "#E4CDBA"
  gradient-peach: "#F6C9A8"
  gradient-pink: "#EFB7B0"
  gradient-gold: "#EBCE8F"
  gradient-green: "#B7C9AC"
  gradient-blue: "#C3D3DC"
  on-surface: "#3B2F26"
  on-primary: "#FAF4EA"
  muted: "#7A6A5B"
typography:
  headline-display:
    fontFamily: Cormorant Garamond
    fontSize: 72px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.01em
  wordmark:
    fontFamily: Italiana
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.2em
  signature-script:
    fontFamily: Petit Formal Script
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
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
  button-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-gradient:
    backgroundColor: "radial gradient of gradient-peach / gradient-pink / gradient-gold / gradient-green with 6% film-grain overlay"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.xl}"
---

## Overview

Oriana Studio is a private, one-client-at-a-time beauty studio in Singapore — lashes today, with brows, skin, hair, and spa lines reserved for the future — built on the idea of golden-hour light: the hour in which everyone looks like themselves, only more so. Version 2.0 of the identity is **gradient-grain golden hour**: the literary restraint of the original, warmed and brightened with soft grainy gradients and a new green voice. The site should feel like a well-lit room where the light keeps changing beautifully — warm, human, and unretouched. The audience is anyone in Singapore who wants beauty work that enhances rather than announces (the promise: "Noticed, not announced"; the house rule: "beauty, for absolutely anyone"). Nothing on the site may shout: no urgency, no discounts, no emoji, no decorative flourish that a fine bookstore would not permit.

## Colors

Cream Hour (#FAF4EA) is the ground — roughly half of every viewport. Umber (#3B2F26) is the ink and carries all text and line work. The gradient-grain system supplies atmosphere: soft radial or freeform blends drawn from Peach Veil, Petal Pink, Butter Gold, Eucalyptus Mist, and Powder Blue, always overlaid with fine film grain at 4–8% opacity, and always containing green — green in the blend is the signature of v2.0. Solid accents are rationed: Honey Gold (#C9963F) for rules, the glyph, and display numerals; Eucalyptus (#7E9C7B) for labels and secondary actions; Sunset Coral (#E8785A) at most once per surface. Gradients never sit behind dense body copy and never fill the wordmark. Pure white and pure black are forbidden. Umber passes WCAG AA on the cream ground and on every gradient stop.

## Typography

Display duty belongs to a **thin, high-contrast serif**: Cormorant Garamond at Light (300) for headlines, with Italiana carrying the ORIANA wordmark in wide-tracked caps. Headlines are sentence case; a single serif-italic word inside a roman headline is the signature editorial move. Inter owns body, UI, labels, and — always — prices. Petit Formal Script appears only as Chesa's signature and her quoted words. One display headline per viewport section.

## Layout

Generous, editorial, slow: max content width around 1100–1200px, at least 40% negative space per section, single-column reading measures (~65ch) for prose, and an 8px spacing scale with big jumps (48/96/160) between sections. Her-glow-style overlapping is encouraged at hero scale: the thin serif wordmark or headline may overlap the edge of macro photography. The page should scroll like a well-set book with beautiful light falling across it. Mobile first in practice: most visitors arrive from Instagram on a phone.

## Photography

Macro, honest, inclusive. Hero imagery is extreme close-up eye and lash work where freckles, pores, and real skin texture are visible and deliberately kept — never retouched. Men and women are cast as equals across every page. The grade is warm golden with a fine film grain that matches the gradient surfaces. Shot-on-iPhone candidness over studio stiffness.

## Elevation & Depth

Essentially flat. Depth comes from colour-atmosphere shifts (cream → gradient wash → umber) and from macro photography, never from drop shadows. A hairline umber border (1px at 15–20% opacity) may define cards and tables. The only permitted shadow is an extremely soft, warm ambient on lifted imagery, and even that sparingly.

## Shapes

Square and editorial: zero border-radius on buttons, cards, and images. The single exception is the `full` radius for the small circular glyph badge and avatar contexts. The shape language is a printed page, not an app.

## Components

Buttons are rectangular, letterspaced Inter labels: primary is umber with cream text ("Hold your hour" — the WhatsApp CTA), ghost is bordered umber on cream, and a eucalyptus-green secondary exists for quieter actions. Service cards sit on cream with hairline borders: thin serif world-name, sans plain descriptor, sans price stated plainly; a gradient-grain wash may sit behind a card group, never behind the card text itself. The footer is umber with cream text and the gold glyph. Navigation is a quiet top bar: ORIANA · STUDIO lockup left, page links + WhatsApp CTA right.

## Do's and Don'ts

Do put green in every gradient; do grain every gradient; do lead with macro, freckle-forward photography of men and women; do state prices plainly; do route every CTA to WhatsApp; do include the HDB-registered and insured trust line quietly in the footer.

Don't use pure white/black, drop shadows, rounded corners, emoji, urgency mechanics, discount banners, ungrained gradients, gradients behind body text or inside the wordmark, retouched skin, more than the three permitted typefaces, ring-light-blue imagery, or the word "Korean" anywhere in navigation, headlines, or the brand lockup (it lives only in the Studio craft-story paragraph and SEO metadata).
