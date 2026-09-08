import { createFileRoute, Link } from "@tanstack/react-router";
import { LOCALES, localeNames } from "@/lib/content";
import { Grain } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilinx" },
      {
        name: "description",
        content:
          "Ilinx — scritti sull'arrampicata, tracciatura e Autografia di un gesto. Italiano, English, Español, 中文, 日本語.",
      },
      { property: "og:title", content: "Ilinx" },
      {
        property: "og:description",
        content: "Scritti sull'arrampicata, tracciatura e Autografia di un gesto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Threshold,
});

function Threshold() {
  return (
    <>
      <Grain />
      <main className="sfumato flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-7xl tracking-tight md:text-8xl">Ilinx</h1>
        <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {LOCALES.map((l) => (
            <Link
              key={l}
              to="/$lang"
              params={{ lang: l }}
              className="label border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-foreground"
            >
              {localeNames[l]}
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}
