/*
  ORIANA — Keep the Light (aftercare). Care styled as a short morning-and-evening rite.
  Editorial single-column measures, sand section alternation.
  Round 3: sage accents, Petit Formal Script sizing, witty-classy trims.
*/
import { useReveal } from "@/hooks/useReveal";
import { IMG, waLink } from "@/lib/site";

export default function Aftercare() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Opening */}
      <section className="container pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[65ch] text-center">
          <p className="eyebrow rise text-muted-foreground">Aftercare</p>
          <h1 className="mega rise mt-6 text-6xl md:text-8xl">
            Keep the Light
          </h1>
          <p className="hand rise mt-6 text-xl text-muted-foreground md:text-2xl">
            two tiny habits, thirty seconds each. that's the whole syllabus
          </p>
        </div>
      </section>

      {/* Morning / Evening rites */}
      <section className="container pb-24 md:pb-36">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rise border border-border p-10 md:p-14">
            <p className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
              At first light
            </p>
            <h2 className="font-display mt-3 text-3xl">The morning rite</h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>
                Rinse the lash line with water only — no oil, no rubbing.
              </li>
              <li>Brush once, root to tip, with the spoolie from your kit.</li>
              <li>
                If you wear skincare, keep oils and heavy creams below the
                orbital bone.
              </li>
            </ul>
          </div>
          <div className="rise bg-primary p-10 text-primary-foreground md:p-14">
            <p className="font-display text-lg italic text-primary-foreground/70">
              At day's end
            </p>
            <h2 className="font-display mt-3 text-3xl">The evening rite</h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              <li>
                Cleanse with a lash-safe foam cleanser — every evening you wore
                makeup, every second evening otherwise.
              </li>
              <li>Pat dry with a lint-free tissue; never a towel's rub.</li>
              <li>
                Sleep on your back or side if you can — a silk pillowcase is
                the quiet luxury that pays for itself.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to avoid + the first 24 hours */}
      <section className="border-y border-border bg-[var(--sand)]/40">
        <div className="container grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-6">
            <p className="eyebrow rise text-muted-foreground">
              The first 24 hours
            </p>
            <h2 className="font-display rise mt-5 text-3xl md:text-4xl">
              Let the bond set
            </h2>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              For the first day, keep the lash line dry: no steam rooms, hot
              yoga, swimming, or long hot showers. After that, live normally —
              a well-applied set is for wearing, not guarding.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow rise text-[var(--sage)]">Always avoid</p>
            <ul className="rise mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>Oil-based cleansers and waterproof mascara at the lash line</li>
              <li>Rubbing, picking, or pulling — ever</li>
              <li>Lash curlers — you already paid for the curl</li>
              <li>Cotton pads near the extensions (fibres catch)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Return */}
      <section className="container py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rise aspect-[4/3] w-full">
              <img
                src={IMG.aftercare}
                alt="The Keep the Light aftercare card"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-[var(--sage)]">The Return</p>
            <h2 className="font-display rise mt-5 text-3xl leading-tight md:text-4xl">
              Your window is three weeks
            </h2>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Lashes shed on their own calendar — around a quarter of your set
              every three weeks, extensions or not. Within that window, the
              Return restores first-day fullness at infill pricing. Most
              clients book it before they leave the chair; the reminder comes
              two days before, quietly.
            </p>
            <a
              href={waLink(
                "Hello Oriana — I'd like to book my Return. My name is ",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="press rise mt-10 inline-block bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[oklch(0.26_0.024_60)]"
            >
              Book your Return
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
