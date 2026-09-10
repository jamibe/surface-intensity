import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { about, isFullLocale, type FullLocale } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/$lang/chi-sono")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const page = about[lang];
    const title = `${page.title} — Ilinx`;
    return {
      meta: [
        { title },
        { name: "description", content: page.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: page.intro },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useParams({ from: "/$lang/chi-sono" }) as { lang: FullLocale };
  const page = about[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="sfumato">
        <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
          <h1 className="text-5xl tracking-tight md:text-7xl">{page.title}</h1>
          <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-pretty text-muted-foreground">
            {page.intro}
          </p>

          <ol className="mt-20 border-t border-border">
            {page.stages.map((stage, index) => (
              <li
                key={stage.title}
                className="grid gap-4 border-b border-border py-9 md:grid-cols-[5rem_minmax(0,14rem)_minmax(0,1fr)] md:gap-8"
              >
                <span className="label">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="text-3xl tracking-tight">{stage.title}</h2>
                <p className="max-w-[56ch] text-[17px] leading-[1.75] text-pretty">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}