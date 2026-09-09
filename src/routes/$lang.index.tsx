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
      <section className="mx-auto max-w-[1600px] px-3 py-3 md:px-6 md:py-6">
        <div className="flex flex-col gap-6">
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
            />
          ))}
        </div>
      </section>

      <Link
        to="/$lang/autografia"
        params={{ lang }}
        aria-label={autografiaDoor.name[lang]}
        className="autografia-mark group relative mx-auto my-24 block h-20 w-20 overflow-hidden rounded-full opacity-[0.12] transition-all duration-700 hover:h-28 hover:w-28 hover:opacity-70 focus-visible:h-28 focus-visible:w-28 focus-visible:opacity-70"
      >
        <img
          src={autografiaDoor.image}
          alt=""
          width={autografiaDoor.width}
          height={autografiaDoor.height}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="streak-line absolute top-1/2 left-0" />
        <span className="sr-only">{autografiaDoor.name[lang]}</span>
      </Link>

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
};

function Door({ to, params, image, width, height, name, note, kind }: DoorProps) {
  return (
    <Link
      to={to}
      params={params}
      className="door group relative block aspect-[16/10] overflow-hidden rounded-lg outline outline-border md:aspect-[21/9]"
    >
      <img
        src={image}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
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
      {kind === "stars" && (
        <>
          <span className="star" style={{ top: "22%", left: "30%" }} />
          <span className="star" style={{ top: "38%", left: "66%" }} />
          <span className="star" style={{ top: "60%", left: "44%" }} />
          <span className="streak-line" style={{ top: "30%", left: "20%" }} />
        </>
      )}
      <span className="reveal absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-background/85 to-transparent p-6 md:p-8">
        <span className="text-3xl tracking-tight md:text-4xl">{name}</span>
        <span className="label">{note}</span>
      </span>
    </Link>
  );
}
