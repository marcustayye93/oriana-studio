/*
  ORIANA STUDIO — Home, round 4 (v2.0 gradient-grain identity).
  Macro freckled-eye hero (imperfection-forward), grain overlay on gradients,
  Cormorant Garamond 300 display, inclusive "for absolutely anyone" section with
  a male client portrait, marquee kept, Wubbles kept. Gradients never behind body copy.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { IMG, SERVICES, VOICE, WA_DEFAULT } from "@/lib/site";

const MARQUEE = [
  "not too much",
  "not too little",
  "just right",
  "what lashes do to me is light",
  "it feels natural",
  "for absolutely anyone",
];

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* ——— Hero: full-bleed image, mega type over it ——— */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src={IMG.macroEyeF}
          alt="Macro portrait — a freckled eye with fine natural lash extensions catching golden light"
          className="kenburns absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.02_60)]/85 via-[oklch(0.22_0.02_60)]/25 to-transparent" />
        <div className="container relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28">
          <p className="eyebrow rise text-white/70">
            A private beauty studio · Singapore
          </p>
          <h1 className="mega rise mt-6 max-w-5xl text-[17vw] text-white sm:text-[13vw] md:text-[9.5rem] lg:text-[11rem]">
            Light,
            <em className="italic text-[oklch(0.85_0.09_80)]"> worn </em>
            quietly.
          </h1>
          <div className="rise mt-8 flex flex-wrap items-end justify-between gap-8">
            <p className="hand max-w-sm text-xl leading-relaxed text-white/90 md:text-2xl">
              "{VOICE.light}" — Chesa
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="press bg-white px-9 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[oklch(0.24_0.02_60)] transition-colors hover:bg-[oklch(0.92_0.03_85)]"
            >
              Hold your hour
            </a>
          </div>
        </div>
      </section>

      {/* ——— Marquee of Chesa's words ——— */}
      <section
        aria-hidden
        className="overflow-hidden border-y border-border bg-background py-5"
      >
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {MARQUEE.map((w) => (
                <span
                  key={`${half}-${w}`}
                  className="font-display mx-8 flex items-center gap-16 text-2xl italic text-muted-foreground/80 md:text-3xl"
                >
                  {w}
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ——— The promise: macro image + seven words ——— */}
      <section className="container grid items-center gap-10 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-7">
          <div className="rise relative aspect-[3/2] w-full overflow-hidden">
            <img
              src={IMG.handsCraft}
              alt="Macro detail — a single lash extension being placed"
              className="h-full w-full object-cover"
            />
            <p className="hand absolute bottom-4 right-5 rotate-[-2deg] text-lg text-white/95 drop-shadow-md md:text-xl">
              one lash at a time. promise.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-6">
          <h2 className="mega rise text-5xl md:text-6xl lg:text-7xl">
            Not too much.
            <br />
            Not too little.
            <br />
            <em className="italic text-[oklch(0.62_0.11_75)]">Just right.</em>
          </h2>
          <p className="rise mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Sets mapped to your eye, not a catalogue. The compliment arrives;
            the question never does.
          </p>
        </div>
      </section>

      {/* ——— For absolutely anyone: inclusive statement, gradient-grain panel ——— */}
      <section className="grad-dawn grain relative overflow-hidden">
        <div className="container relative z-10 grid items-center gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="rise grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={IMG.portraitF}
                  alt="A client with a soft natural lash set, three-quarter portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-10 aspect-[3/4] overflow-hidden">
                <img
                  src={IMG.portraitM}
                  alt="A male client after a lash lift, relaxed in studio light"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-[oklch(0.32_0.026_60)]/70">
              The only door policy
            </p>
            <h2 className="mega rise mt-6 text-5xl text-[oklch(0.28_0.026_60)] md:text-7xl">
              Beauty, for
              <br />
              <em className="italic">absolutely anyone.</em>
            </h2>
            <div className="rise mt-8 max-w-md bg-[oklch(0.966_0.018_88)]/85 p-6 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Women who want their morning back. Men who'd like their eyes
                open in photos. Anyone in between, beyond, or undecided. The
                chair doesn't ask; the mapping is simply done to your face.
              </p>
              <p className="hand mt-4 text-lg text-[var(--sage)]">
                come as you are. that's the whole instruction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The menu: numbers + names, price only ——— */}
      <section className="border-b border-border bg-[var(--sand)]/40">
        <div className="container py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="mega rise text-5xl md:text-7xl">The menu</h2>
            <p className="hand rise text-lg text-muted-foreground md:text-xl">
              start anywhere. we'll talk first
            </p>
          </div>
          <ul className="mt-14 divide-y divide-border border-y border-border">
            {SERVICES.map((s, i) => (
              <li key={s.name} className="rise">
                <Link
                  href="/services"
                  className="group grid gap-2 py-8 transition-colors sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="font-display text-lg italic text-[oklch(0.62_0.11_75)] sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl transition-all duration-200 group-hover:translate-x-2 group-hover:text-[var(--sage)] sm:col-span-6 md:text-4xl">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground sm:col-span-3">
                    {s.descriptor}
                  </p>
                  <p className="text-sm font-medium tracking-wide sm:col-span-2 sm:text-right">
                    {s.price}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="link-grow rise mt-10 inline-block text-sm tracking-wide text-[var(--sage)]"
          >
            Full menu — including what's actually in it
          </Link>
        </div>
      </section>

      {/* ——— The hand: drawing origin, image-led ——— */}
      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-6">
            <div className="rise relative aspect-[3/2] w-full">
              <img
                src={IMG.drawing}
                alt="Chesa's hands drawing an eye study in pencil"
                className="h-full w-full object-cover"
              />
              <img
                src={IMG.sketch}
                alt=""
                className="absolute -bottom-10 -right-6 hidden w-40 rotate-3 border border-[var(--gold)]/40 bg-white shadow-lg md:block"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-primary-foreground/50">
              The same hand
            </p>
            <h2 className="mega rise mt-6 text-5xl text-primary-foreground md:text-6xl">
              First a pencil.
              <br />
              Now a <em className="italic text-[var(--gold)]">lash.</em>
            </h2>
            <p className="hand rise mt-8 max-w-sm text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              "{VOICE.pencil}"
            </p>
            <Link
              href="/studio"
              className="link-grow rise mt-10 inline-block text-sm tracking-wide text-primary-foreground"
            >
              Meet Chesa &amp; the studio
            </Link>
          </div>
        </div>
      </section>

      {/* ——— The room + Wubbles cameo ——— */}
      <section className="container py-24 md:py-36">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="rise md:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={IMG.studioLight}
                alt="The Oriana studio — linen lash bed in warm window light"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <h2 className="mega absolute bottom-6 left-6 max-w-md text-4xl text-white md:bottom-8 md:left-8 md:text-5xl">
                One chair. One hour. Yours.
              </h2>
            </div>
          </div>
          <div className="rise md:col-span-4">
            <div className="relative h-full min-h-[320px] overflow-hidden">
              <img
                src={IMG.wubbles}
                alt="Wubbles the Cavapoo, resident greeter"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="hand absolute bottom-5 left-5 rotate-[-2deg] text-xl leading-snug text-white">
                Wubbles.
                <br />
                <span className="text-sm text-white/85">
                  head of first impressions. banned from the lash room
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="rise mx-auto mt-12 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
          Quiet, calm, a little cheery — never too much. Tea first. Most
          clients fall asleep; we take it as a review. Wubbles waits in the
          lounge, or elsewhere entirely if you ask.
        </p>
      </section>

      {/* ——— Closing CTA ——— */}
      <section className="relative overflow-hidden border-t border-border">
        <img
          src={IMG.macroEyeM}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[oklch(0.22_0.02_60)]/70" />
        <div className="container relative py-28 text-center md:py-40">
          <h2 className="mega rise mx-auto max-w-3xl text-5xl text-white md:text-7xl">
            Come as you are.
          </h2>
          <p className="hand rise mt-6 text-lg text-white/85 md:text-xl">
            leave a little lighter
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="press rise mt-10 inline-block bg-white px-10 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[oklch(0.24_0.02_60)] transition-colors hover:bg-[oklch(0.92_0.03_85)]"
          >
            Hold your hour on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
