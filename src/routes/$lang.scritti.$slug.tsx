import { createFileRoute, Link, notFound, redirect, useParams } from "@tanstack/react-router";
import { isFullLocale, texts, themes, ui, type FullLocale } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/$lang/scritti/$slug")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
    if (!texts.some((t) => t.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const text = texts.find((t) => t.slug === params.slug);
    const title = `${text ? text.title[lang] : "Ilinx"} — Ilinx`;
    const description = text ? text.body[lang][0].slice(0, 155) : "Ilinx";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TextPage,
});

function TextPage() {
  const { lang, slug } = useParams({ from: "/$lang/scritti/$slug" }) as {
    lang: FullLocale;
    slug: string;
  };
  const text = texts.find((t) => t.slug === slug)!;
  const theme = themes.find((t) => t.slug === text.theme)!;
  const t = ui[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="mx-auto max-w-[62ch] px-6 py-24">
        <p className="label text-accent">
          {t.read} — ({text.index})
        </p>
        <h1 className="mt-10 text-4xl tracking-tight text-balance md:text-5xl">
          {text.title[lang]}
        </h1>
        <div className="mt-10">
          {text.body[lang].map((p, i) => (
            <p key={i} className="mb-6 text-[17px] leading-[1.75] text-pretty last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <Link
          to="/$lang/tema/$tema"
          params={{ lang, tema: theme.slug }}
          className="label mt-16 inline-block border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-foreground"
        >
          {t.back} — {theme.name[lang]}
        </Link>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
