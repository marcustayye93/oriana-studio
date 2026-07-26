/*
  ORIANA — The Menu. Editorial price list: serif world-names, sans descriptors & prices,
  hairline borders, gold for metallic details, sage accent for interactive/labels, zero radius.
  Round 3: each service carries an "anatomy" breakdown (what's applied, materials, mapping, lasts, for who).
*/
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";
import { IMG, SERVICES, waLink } from "@/lib/site";
import { Link } from "wouter";

const ANATOMY_LABELS: Record<string, string> = {
  applied: "What goes on",
  materials: "What it's made of",
  mapping: "How it's mapped",
  lasts: "How long it lasts",
  forWho: "Who it suits",
};

export default function Services() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Page opening */}
      <section className="container pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow rise text-muted-foreground">The menu</p>
            <h1 className="mega rise mt-6 text-6xl md:text-8xl">
              The menu
            </h1>
            <p className="hand rise mt-6 text-2xl text-muted-foreground md:text-3xl">
              undecided? say so. the tea exists for exactly this
            </p>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              One lash line, four ways in — for women, for men, for absolutely
              anyone. Every set starts with tea and a conversation, not a
              catalogue.
            </p>
          </div>
          <div className="hidden items-end justify-end md:col-span-5 md:flex">
            <div className="gold-rule rise w-24" />
          </div>
        </div>
      </section>

      {/* The services, long-form */}
      <section className="container pb-24 md:pb-36">
        <div className="divide-y divide-border border-y border-border">
          {SERVICES.map((s, i) => (
            <article
              key={s.name}
              className="rise grid gap-6 py-12 md:grid-cols-12 md:py-16"
            >
              <div className="md:col-span-1">
                <span className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl">{s.name}</h2>
                <p className="eyebrow mt-3 text-muted-foreground">
                  {s.descriptor}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.body}
                </p>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground/80">
                  {s.note}
                </p>
                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="anatomy" className="border-b-0">
                    <AccordionTrigger className="py-2 text-xs uppercase tracking-[0.16em] text-[var(--sage)] hover:no-underline">
                      What's actually in it
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <dl className="space-y-4">
                        {Object.entries(s.anatomy).map(([key, value]) => (
                          <div key={key}>
                            <dt className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--sage)]">
                              {ANATOMY_LABELS[key]}
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex flex-row items-baseline gap-6 md:col-span-2 md:flex-col md:items-end md:gap-2 md:text-right">
                <p className="text-base font-medium tracking-wide">{s.price}</p>
                <p className="text-xs text-muted-foreground">{s.duration}</p>
                <a
                  href={waLink(
                    `Hello Oriana — I'd like to hold an hour for ${s.name}. My name is `,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow mt-0 text-xs uppercase tracking-[0.14em] md:mt-4"
                >
                  Book this
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Keepsake kit + policies */}
      <section className="border-t border-border bg-[var(--sand)]/40">
        <div className="container grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="rise aspect-[4/3] w-full max-w-[480px]">
              <img
                src={IMG.aftercare}
                alt="The Keep the Light aftercare card on ivory linen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow rise text-muted-foreground">
              The Keepsake Kit
            </p>
            <h2 className="mega rise mt-5 text-4xl md:text-5xl">
              What you take home
            </h2>
            <p className="rise mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Every first set leaves with the Keep the Light card. The Keepsake
              Kit — cleanser, soft brush, S$38 — is for people who intend to
              follow it.
            </p>
            <div className="rise mt-10 border-t border-border pt-8">
              <h3 className="eyebrow text-muted-foreground">Quiet policies</h3>
              <ul className="mt-5 max-w-md space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Your hour is held for you alone — please give 24 hours'
                  notice to move it.
                </li>
                <li>
                  The Return window is three weeks; after that, a new set
                  serves you better and we will say so honestly.
                </li>
                <li>
                  Arrive with clean lashes if you can; if you cannot, the
                  cleanse is part of the hour.
                </li>
              </ul>
            </div>
            <Link
              href="/aftercare"
              className="link-grow rise mt-8 inline-block text-sm tracking-wide"
            >
              Read Keep the Light
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
