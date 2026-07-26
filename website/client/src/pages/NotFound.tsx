/* ORIANA STUDIO — 404, on brand: cream ground, thin serif, quiet humour, one way home. */
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-muted-foreground">Four-oh-four</p>
      <h1 className="mega mt-6 text-6xl md:text-8xl">
        This page is
        <br />
        <em className="italic text-[oklch(0.62_0.11_75)]">not on the menu.</em>
      </h1>
      <p className="hand mt-8 text-lg text-muted-foreground md:text-xl">
        wubbles ate the link, probably. he denies everything
      </p>
      <Link
        href="/"
        className="press mt-10 inline-block bg-primary px-10 py-4 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[oklch(0.26_0.024_60)]"
      >
        Back to the studio
      </Link>
    </div>
  );
}
