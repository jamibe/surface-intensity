import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  autografiaDoor,
  isFullLocale,
  shortPages,
  themes,
  type FullLocale,
  type Locale,
  type ThemeSlug,
} from "@/lib/content";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = params.lang;
    const title = "Ilinx — arrampicata, scritti, tracciatura";
    const description = isFullLocale(lang)
      ? "Un archivio visivo di scritti sull'arrampicata, il gesto e la superficie."
      : "Ilinx — climbing, writing and route setting.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Home,
});

function Home() {
  const { lang } = useParams({ from: "/$lang/" }) as { lang: Locale };
  if (!isFullLocale(lang)) return <ShortPage lang={lang as "zh" | "ja"} />;
  return <FullHome lang={lang} />;
}

function ShortPage({ lang }: { lang: "zh" | "ja" }) {
  const { lines } = shortPages[lang];
  return (
    <main className="sfumato flex min-h-screen flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-[46ch]">
        <h1 className="text-6xl tracking-tight">Ilinx</h1>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <Link
          to="/"
          className="label mt-14 inline-block border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-foreground"
        >
          Italiano · English · Español
        </Link>
      </div>
    </main>
  );
}

function FullHome({ lang }: { lang: FullLocale }) {
  return (
    <main>
      <h1 className="sr-only">Ilinx</h1>
      <section className="mx-auto max-w-[1600px] px-3 py-3 md:px-6 md:py-6">
        <div className="landscape overflow-hidden rounded-lg outline outline-border">
          {themes.map((theme) => (
            <Door
              key={theme.slug}
              to="/$lang/tema/$tema"
              params={{ lang, tema: theme.slug }}
              image={theme.image}
              width={theme.width}
              height={theme.height}
              name={theme.name[lang]}
              note={theme.note[lang]}
              kind={theme.door}
              {...(theme.slug === "cielo" ? { secretLabel: autografiaDoor.name[lang] } : {})}
            />
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}

type DoorProps = {
  to: "/$lang/tema/$tema";
  params: { lang: FullLocale; tema: ThemeSlug };
  image: string;
  width: number;
  height: number;
  name: string;
  note: string;
  kind: "sky" | "canopy" | "water" | "rain" | "stars";
  secretLabel?: string;
};

function Door({ to, params, image, width, height, name, note, kind, secretLabel }: DoorProps) {
  return (
    <article className="door group relative aspect-[16/10] overflow-hidden md:aspect-[21/9]" data-kind={kind}>
      <Link to={to} params={params} className="absolute inset-0 block">
        <img
          src={image}
          alt=""
          width={width}
          height={height}
          loading={kind === "sky" ? "eager" : "lazy"}
          className="door-image absolute inset-0 h-full w-full object-cover"
        />
        {kind === "sky" && <span className="cloud" />}
        {kind === "canopy" && <span className="canopy" />}
        {kind === "water" && <span className="water-sheen" />}
        {kind === "rain" && (
          <>
            <span className="drip" style={{ left: "22%" }} />
            <span className="drip" style={{ left: "48%", animationDelay: ".2s" }} />
            <span className="drip" style={{ left: "71%", animationDelay: ".45s" }} />
            <span className="drip" style={{ left: "88%", animationDelay: ".15s" }} />
          </>
        )}
        <span className="reveal absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-background/85 to-transparent p-6 md:p-8">
          <span className="text-3xl tracking-tight md:text-4xl">{name}</span>
          <span className="label">{note}</span>
        </span>
      </Link>
      {secretLabel && (
        <Link
          to="/$lang/autografia"
          params={{ lang: params.lang }}
          aria-label={secretLabel}
          className="hidden-constellation absolute top-[12%] right-[8%] z-10 h-24 w-32 focus-visible:opacity-100"
        >
          <span className="constellation-star constellation-star-a" />
          <span className="constellation-star constellation-star-b" />
          <span className="constellation-star constellation-star-c" />
          <span className="constellation-thread" />
          <span className="sr-only">{secretLabel}</span>
        </Link>
      )}
    </article>
  );
}
