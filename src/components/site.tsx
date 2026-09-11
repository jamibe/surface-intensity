import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { type FullLocale, ui } from "@/lib/content";

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}

export function SiteHeader({ lang }: { lang: FullLocale }) {
  const t = ui[lang];
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1180px] items-baseline justify-between px-6 py-5">
        <Link to="/$lang" params={{ lang }} className="text-2xl tracking-wide">
          Ilinx
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/$lang"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {t.archive}
          </Link>
          <Link
            to="/$lang/chi-sono"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {t.about}
          </Link>
          <Link
            to="/$lang/rizoma"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {rhizome[lang].title}
          </Link>
          <Link
            to="/$lang/contatto"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {t.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: { lang: FullLocale }) {
  const t = ui[lang];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <Link to="/$lang" params={{ lang }} className="text-2xl tracking-wide">
          Ilinx
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            to="/$lang/chi-sono"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {t.about}
          </Link>
          <Link
            to="/$lang/contatto"
            params={{ lang }}
            className="label transition-colors hover:text-foreground"
          >
            {t.contact}
          </Link>
          <Link to="/" className="label transition-colors hover:text-foreground">
            {t.languages}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
