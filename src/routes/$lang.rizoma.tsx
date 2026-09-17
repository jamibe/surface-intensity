import { createFileRoute, redirect, useParams, Link } from "@tanstack/react-router";
import { isFullLocale, rhizome, type FullLocale } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";
import onde from "@/assets/sabbia-onde.jpg";

export const Route = createFileRoute("/$lang/rizoma")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const page = rhizome[lang];
    const title = `${page.title} — Ilinx`;
    return {
      meta: [
        { title },
        { name: "description", content: page.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: page.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RhizomePage,
});

function RhizomePage() {
  const { lang } = useParams({ from: "/$lang/rizoma" }) as { lang: FullLocale };
  const page = rhizome[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="sfumato">
        <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
          <h1 className="text-5xl tracking-tight md:text-7xl">{page.title}</h1>
          <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-pretty text-muted-foreground">
            {page.intro}
          </p>

          <div
            className="relative mt-16 overflow-hidden rounded-lg outline outline-border"
            style={{ aspectRatio: "21 / 9" }}
          >
            <img
              src={onde}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-70"
            />
            <svg
              viewBox="0 0 1000 420"
              className="absolute inset-0 size-full"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              {[
                [90, 300, 320, 120],
                [320, 120, 560, 260],
                [560, 260, 820, 110],
                [90, 300, 560, 260],
                [320, 120, 820, 110],
                [560, 260, 930, 330],
              ].map(([x1, y1, x2, y2]) => (
                <line
                  key={`${x1}-${y1}-${x2}-${y2}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={1}
                  className="text-foreground/35"
                />
              ))}
              {[
                [90, 300],
                [320, 120],
                [560, 260],
                [820, 110],
                [930, 330],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} className="fill-foreground/60" />
              ))}
            </svg>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {page.body.map((paragraph) => (
              <p key={paragraph} className="max-w-[58ch] text-[17px] leading-[1.75] text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="label mt-20">{page.nodesLabel}</h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-lg bg-border outline outline-border sm:grid-cols-2 lg:grid-cols-3">
            {page.nodes.map((node) => (
              <li key={node.title} className="bg-background p-7 transition-colors hover:bg-muted">
                <h3 className="text-2xl tracking-tight">{node.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-pretty text-muted-foreground">
                  {node.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <Link to="/$lang/contatto" params={{ lang }} className="label hover:text-foreground">
              {page.note}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
