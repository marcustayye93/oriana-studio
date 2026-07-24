/* ORIANA — shared site constants. Golden-hour editorial: quiet, literary, precise. */

// NOTE FOR CHESA: replace with the real studio WhatsApp number (country code, no +, no spaces).
export const WHATSAPP_NUMBER = "6580000000";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hello Oriana — I'd like to hold an hour. My name is ",
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
};

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
} as const;

export const SERVICES = [
  {
    name: "First Light",
    descriptor: "The signature set",
    body: "The set people assume is yours. Mapped to your lash line, applied one lash at a time, calibrated to the exact point where anyone who asks sounds paranoid.",
    duration: "2 hrs",
    price: "S$128",
    note: "Includes consultation & mapping",
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
    descriptor: "The volume set",
    body: "Handmade volume fans for depth that still reads as light. Fuller, never heavier. Think golden hour, not spotlight.",
    duration: "2.5 hrs",
    price: "S$168",
    note: "Recommended after a First Light consultation",
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
    descriptor: "Lash lift & tint",
    body: "Your own lashes, redirected. Curved from the root, tinted dark, and left to get on with it for two months. Nothing added; everything argued upward.",
    duration: "1 hr",
    price: "S$88",
    note: "Ideal first visit if you are extension-hesitant",
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
    descriptor: "The infill",
    body: "Your set, restored to opening night. Book within three weeks and nobody — including you — will remember it ever faded.",
    duration: "1.5 hrs",
    price: "from S$78",
    note: "Book before you leave — your window is held",
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
