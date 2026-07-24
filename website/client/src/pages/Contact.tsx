/*
  ORIANA — Hold Your Hour (contact). WhatsApp-first booking, conversation not form.
  Editorial layout, FAQ as quiet accordion-free list.
  Round 3: sage accent for interactive/labels, Petit Formal Script sizing, witty-classy copy.
*/
import { useReveal } from "@/hooks/useReveal";
import { waLink, WA_DEFAULT } from "@/lib/site";

const FAQS = [
  {
    q: "Where exactly is the studio?",
    a: "In Serangoon, a short walk from the MRT. The full address and door directions are shared on WhatsApp once your appointment is held — a private studio keeps its address private.",
  },
  {
    q: "How far ahead should I book?",
    a: "Appointments open week by week and seats are few on purpose. A few days' notice usually finds you an hour; weekends prefer a week.",
  },
  {
    q: "I've never had extensions. Where do I start?",
    a: "Say exactly that in your message. Most first-timers begin with First Light or, if extension-hesitant, The Lift — the consultation will settle it honestly.",
  },
  {
    q: "What if I'm allergic or sensitive?",
    a: "Tell us before your hour. A patch test can be arranged 48 hours ahead, and sensitive-eye adhesive is stocked as standard.",
  },
  {
    q: "Can I request a dog-free visit?",
    a: "One sentence at booking and Wubbles (resident Cavapoo, chief greeter) is elsewhere for the afternoon. The lash room itself is dog-free for everyone, always — he has accepted this with grace.",
  },
  {
    q: "Do you take walk-ins?",
    a: "No. One client at a time is the entire premise — every hour is an appointment, and that is what keeps the room quiet.",
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Opening + WhatsApp */}
      <section className="container pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow rise text-muted-foreground">Contact</p>
            <h1 className="mega rise mt-6 text-6xl md:text-8xl">
              Hold your hour
            </h1>
            <p className="rise mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              A conversation, not a form. Write with your name and what you
              have in mind — Chesa replies herself, within the day.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="press rise mt-10 inline-block bg-primary px-10 py-4 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[oklch(0.26_0.024_60)]"
            >
              Message on WhatsApp
            </a>
            <p className="rise mt-6 text-xs tracking-wide text-muted-foreground">
              Or follow the work first:{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-grow text-[var(--sage)]"
              >
                @oriana.studio.sg
              </a>
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="rise border border-border p-8 md:p-10">
              <p className="eyebrow text-muted-foreground">How it works</p>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    n: "I",
                    d: "Write with your name, the set you're curious about (or 'not sure'), and two or three times that suit you.",
                  },
                  {
                    n: "II",
                    d: "You'll receive a held hour, the address, and anything worth knowing before you come.",
                  },
                  {
                    n: "III",
                    d: "Arrive as you are. Tea first, consultation second, the hour third.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-display text-lg italic text-[oklch(0.62_0.11_75)]">
                      {s.n}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                <p>By appointment only · Tue–Sat</p>
                <p className="mt-1">Serangoon, Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[var(--sand)]/40">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow rise text-[var(--sage)]">
                Asked quietly
              </p>
              <h2 className="font-display rise mt-5 text-4xl leading-tight">
                Questions, answered plainly
              </h2>
              <div className="gold-rule rise mt-8" />
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-border border-y border-border">
                {FAQS.map((f) => (
                  <div key={f.q} className="rise py-8">
                    <dt className="font-display text-xl md:text-2xl">{f.q}</dt>
                    <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Final line */}
      <section className="container py-24 text-center md:py-32">
        <p className="hand rise mx-auto max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          "your hour is held — see you (and maybe Wubbles) soon"
        </p>
        <a
          href={waLink("Hello Oriana — I'd like to hold an hour. My name is ")}
          target="_blank"
          rel="noopener noreferrer"
          className="press rise mt-10 inline-block bg-primary px-10 py-4 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[oklch(0.26_0.024_60)]"
        >
          Hold your hour
        </a>
      </section>
    </div>
  );
}
