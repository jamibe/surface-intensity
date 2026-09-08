import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  autografiaDoor,
  home,
  isFullLocale,
  shortPages,
  themes,
  ui,
  type FullLocale,
  type Locale,
} from "@/lib/content";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = params.lang;
    const full = isFullLocale(lang) ? (lang as FullLocale) : "it";
    const title = `Ilinx — ${home[full].title}`;
    const description = home[full].lead;
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
  const t = ui[lang];
  const h = home[lang];

  return (
    <main>
      <section className="sfumato">
        <div className="mx-auto max-w-[1180px] px-6 pt-24 pb-20">
          <h1 className="max-w-[15ch] text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
            {h.title}
          </h1>
          <p className="mt-10 max-w-[48ch] text-xl leading-relaxed text-pretty text-muted-foreground">
            {h.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
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
          <Door
            to="/$lang/autografia"
            params={{ lang }}
            image={autografiaDoor.image}
            width={autografiaDoor.width}
            height={autografiaDoor.height}
            name={autografiaDoor.name[lang]}
            note={t.enter}
            kind="stars"
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[62ch] px-6 py-24">
          {h.body.map((p, i) => (
            <p key={i} className="mb-6 text-[17px] leading-[1.75] text-pretty last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}

type DoorProps = {
  to: string;
  params: Record<string, string>;
  image: string;
  width: number;
  height: number;
  name: string;
  note: string;
  kind: "sky" | "canopy" | "rain" | "stars";
};

function Door({ to, params, image, width, height, name, note, kind }: DoorProps) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
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
