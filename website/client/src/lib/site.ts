/* ORIANA STUDIO — shared site constants. v2.0 gradient-grain identity: quiet, literary, inclusive. */

// Business WhatsApp — bookings are handled here (WhatsApp AI assisted).
export const WHATSAPP_NUMBER = "6580252620";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hello Oriana — I'd like to hold an hour. My name is ",
);

/* Per-service booking links — structured so the WhatsApp AI can parse
   service, price, and intent from the first message. */
export const waServiceLink = (serviceName: string, price: string) =>
  waLink(
    `Hello Oriana — I'd like to book ${serviceName} (${price}). My name is `,
  );

export const IMG = {
  hero: "/manus-storage/hero-golden-hour_09e1276e.jpg",
  studio: "/manus-storage/iphone-studio-room_79d998e6.jpg",
  craft: "/manus-storage/craft-hands_1cfeb779.jpg",
  reveal: "/manus-storage/reveal-mirror_b6de2d9d.jpg",
  artist: "/manus-storage/artist-portrait_3d1f7853.jpg",
  aftercare: "/manus-storage/aftercare-card_e1f57fec.jpg",
  glyph: "/manus-storage/glyph-crop_1d5a5a7a.png",
  // Round-3 iPhone-realism assets
  wubbles: "/manus-storage/iphone-wubbles_178a0362.jpg",
  sketch: "/manus-storage/pencil-sketch-eye_7aed8257.png",
  macro: "/manus-storage/iphone-lash-macro_9fe71271.jpg",
  drawing: "/manus-storage/iphone-hands-drawing_7dc84a76.jpg",
  eyes: "/manus-storage/iphone-hero-portrait_4ac055a8.jpg",
  stillLife: "/manus-storage/iphone-still-life_ad604089.jpg",
  // Round-4 v2.0 assets — imperfection-forward, inclusive, gradient-grain
  macroEyeF: "/manus-storage/oriana-v2-macro-eye-female_04cb66c1.png",
  macroEyeM: "/manus-storage/oriana-v2-macro-eye-male_b1dc91a5.png",
  gradHero: "/manus-storage/oriana-v2-gradient-hero_18f41c14.png",
  gradSoft: "/manus-storage/oriana-v2-gradient-soft_c613524d.png",
  handsCraft: "/manus-storage/oriana-v2-hands-craft_cf9b3dce.png",
  portraitF: "/manus-storage/oriana-v2-portrait-female_f7b0fe36.png",
  portraitM: "/manus-storage/oriana-v2-portrait-male_2872847a.png",
  studioLight: "/manus-storage/oriana-v2-studio-light_6d0c9657.png",
  // Round-7 authentic service result photos — real-client look, one per menu item
  svcClassic: "/manus-storage/oriana-v3-service-classic_88c866d1.png",
  svcVolume: "/manus-storage/oriana-v3-service-volume_c2a89060.png",
  svcLift: "/manus-storage/oriana-v3-service-lift_9f33f050.png",
  svcInfill: "/manus-storage/oriana-v3-service-infill_edbee0eb.png",
};

/* Location — Woodlands South. Short form for footers/cards, long form for directions. */
export const LOCATION = {
  short: "Woodlands South, Singapore",
  block: "Block 587, Woodlands",
  directions:
    "From Woodlands South MRT it's a short walk — through the garden, past the tennis court, and up to Block 587.",
} as const;

/* Chesa's own words — the voice bank. Use verbatim or lightly shaped. */
export const VOICE = {
  light: "Even without makeup, what lashes do to me is light.",
  justRight: "Not too much, not too little. Just right.",
  natural: "It feels natural.",
  pencil:
    "I've loved beauty since I was young — drawing, colour, the mechanical pencil across the flow of paper. Lashes are the same hand, a finer line.",
  room: "Quiet, calm, a little cheery. Never too much.",
  wubbles:
    "Wubbles, resident Cavapoo. Professional greeter, terrible receptionist.",
  anyone: "Beauty, for absolutely anyone.",
  house:
    "Today, the lash line. The house will grow — quietly, one craft at a time.",
} as const;

/* Opening pricing — new-studio rates. Entry set starts at S$60; the ladder steps up from there. */
export const SERVICES = [
  {
    name: "First Light",
    descriptor: "Classic extensions — one per natural lash",
    body: "Classic extensions, one per natural lash. A natural set mapped to your eye shape — fuller lash line, no makeup look. Best first set.",
    duration: "2 hrs",
    price: "S$60",
    note: "Opening rate — includes consultation & mapping",
    photo: "/manus-storage/oriana-v3-service-classic_88c866d1.png",
    photoAlt: "Result of First Light — a natural classic lash set, eyes open",
    anatomy: {
      applied:
        "Single classic extensions — one extension per natural lash, never clusters. Around 80–120 per eye depending on what you grew yourself.",
      materials:
        "Featherweight PBT silk fibres, 0.10–0.12mm diameter, matte black. Light enough that your natural lash never notices the passenger.",
      mapping:
        "Custom-mapped in consultation: C or CC curl, 8–12mm lengths graduated to follow your eye shape — longer where your eye opens, shorter where it rests.",
      lasts:
        "3–4 weeks before an infill, moving with your natural lash cycle.",
      forWho:
        "First-timers, minimalists, and anyone whose office has opinions.",
    },
  },
  {
    name: "Full Gold",
    descriptor: "Volume — handmade fans, 3–5 per lash",
    body: "Volume extensions: handmade fans of 3–5 ultra-fine lashes per natural lash. Noticeably fuller and darker, still lightweight. For sparse lashes or more impact.",
    duration: "2.5 hrs",
    price: "S$98",
    note: "Opening rate — recommended after a First Light consultation",
    photo: "/manus-storage/oriana-v3-service-volume_c2a89060.png",
    photoAlt: "Result of Full Gold — a fuller, darker volume lash set",
    anatomy: {
      applied:
        "Hand-crafted volume fans — 3 to 5 ultra-fine extensions fanned per natural lash, made on the spot, not pre-glued from a packet.",
      materials:
        "0.05–0.07mm PBT fibres — so fine that a 4-fan weighs about the same as one classic extension. Matte finish; shine is for cars.",
      mapping:
        "Density-mapped: fuller through the outer two-thirds, softer at the inner corner. C/CC curls, 8–13mm graduated lengths.",
      lasts:
        "4 weeks before an infill; fans hold their shape as they grow out.",
      forWho:
        "Sparse natural lashes, event seasons, and people done pretending mascara does this.",
    },
  },
  {
    name: "The Lift",
    descriptor: "Lash lift & tint — no extensions",
    body: "Lash lift and tint. Your own lashes curled from the root and tinted dark — no extensions, no adhesive. Lasts 6–8 weeks, zero upkeep.",
    duration: "1 hr",
    price: "S$68",
    note: "Opening rate — best first visit if you're unsure about extensions",
    photo: "/manus-storage/oriana-v3-service-lift_9f33f050.png",
    photoAlt: "Result of The Lift — natural lashes curled and tinted, no extensions",
    anatomy: {
      applied:
        "A keratin lift — your natural lashes set over a silicone shield at the root — followed by a tint several shades deeper than your own.",
      materials:
        "Low-tension keratin lifting lotion and a gentle oxidative tint. No extensions, no adhesive, no fibre in sight.",
      mapping:
        "Shield size chosen to your lash length: smaller for a dramatic curl, larger for a soft bend. Decided together, not by default.",
      lasts:
        "6–8 weeks, then your lashes quietly return to their old opinions.",
      forWho:
        "Extension-hesitant, swimmers, and owners of already-long lashes that point stubbornly down.",
    },
  },
  {
    name: "The Return",
    descriptor: "Infill — refresh an existing set",
    body: "The infill. Outgrown extensions replaced, your set restored to day one. Book within three weeks of your last visit.",
    duration: "1.5 hrs",
    price: "from S$45",
    note: "Within 3 weeks of your last set",
    photo: "/manus-storage/oriana-v3-service-infill_edbee0eb.png",
    photoAlt: "Result of The Return — an infilled set restored to day one",
    anatomy: {
      applied:
        "Outgrown extensions removed, new ones placed on the lashes that have grown in since. Typically 40–60% of the set refreshed.",
      materials:
        "Matched exactly to your original set — same fibre, curl, and map. Your card on file remembers so you don't have to.",
      mapping:
        "Your original map, re-balanced for how your lashes actually grew. Small edits welcome; this is the appointment to go slightly bolder.",
      lasts:
        "Resets the 3–4 week clock. Kept on schedule, a set lasts indefinitely.",
      forWho:
        "Anyone with an Oriana set less than three weeks old. Past three weeks, we start fresh — honestly, it's better work.",
    },
  },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "The Menu" },
  { href: "/studio", label: "The Studio" },
  { href: "/aftercare", label: "Aftercare" },
  { href: "/contact", label: "Contact" },
] as const;
