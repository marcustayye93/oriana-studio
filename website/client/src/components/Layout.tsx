/* ORIANA layout — quiet top bar (wordmark left, links + WhatsApp CTA right), umber footer with gold glyph. */
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { NAV_LINKS, WA_DEFAULT, IMG } from "@/lib/site";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col items-start leading-none">
      <span
        className={`wordmark text-[1.15rem] md:text-[1.3rem] ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        Oriana
      </span>
      <span
        className={`eyebrow mt-1 text-[0.5rem] tracking-[0.3em] ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}
      >
        Private Lash Studio
      </span>
    </div>
  );
}

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" aria-label="Oriana — home">
          <span className="flex items-center gap-3">
            <img
              src={IMG.glyph}
              alt=""
              className="h-5 w-auto hidden sm:block"
            />
            <Wordmark />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-grow text-sm tracking-wide text-foreground/80 hover:text-[var(--sage)]"
              data-active={location === l.href}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="press bg-primary text-primary-foreground px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase hover:bg-[oklch(0.26_0.024_60)] transition-colors"
          >
            Hold your hour
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 pb-8 pt-4 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-2xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="press mt-2 bg-primary text-primary-foreground px-6 py-4 text-center text-xs font-medium tracking-[0.14em] uppercase"
          >
            Hold your hour
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Wordmark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A private, one-client-at-a-time lash studio in Singapore.
              <br />
              <em className="font-display italic">Noticed, not announced.</em>
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/50">The Menu</p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>First Light — the signature set</li>
              <li>Full Gold — the volume set</li>
              <li>The Lift — lash lift &amp; tint</li>
              <li>The Return — the infill</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/50">Visit</p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>By appointment only</li>
              <li>Serangoon, Singapore</li>
              <li>Resident greeter: Wubbles the Cavapoo</li>
              <li>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  WhatsApp — hold your hour
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  Instagram @oriana.studio.sg
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/50">
            HDB home-based business · Certified &amp; insured lash artist
          </p>
          <p className="hand text-base text-primary-foreground/60">
            not too much, not too little — just right
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Oriana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
