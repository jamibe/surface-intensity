import { createFileRoute, Link, notFound, redirect, useParams } from "@tanstack/react-router";
import {
  isFullLocale,
  textsByTheme,
  themes,
  ui,
  type FullLocale,
  type ThemeSlug,
} from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/$lang/tema/$tema")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
    if (!themes.some((t) => t.slug === params.tema)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const theme = themes.find((t) => t.slug === params.tema);
    const title = `${theme ? theme.name[lang] : "Ilinx"} — Ilinx`;
    const description = theme ? theme.note[lang] : "Ilinx";
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
  component: ThemePage,
});

function ThemePage() {
  const { lang, tema } = useParams({ from: "/$lang/tema/$tema" }) as {
    lang: FullLocale;
    tema: ThemeSlug;
  };
  const theme = themes.find((item) => item.slug === tema);
  if (!theme) return null;
  const list = textsByTheme(tema);
  const t = ui[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={theme.image}
            alt=""
            width={theme.width}
            height={theme.height}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-[1180px] px-6 py-20">
          <p className="label">{t.texts}</p>
          <h1 className="mt-6 text-6xl tracking-tight md:text-7xl">{theme.name[lang]}</h1>
          <p className="mt-6 max-w-[46ch] text-lg text-muted-foreground">{theme.note[lang]}</p>

          <ul className="mt-16 border-t border-border">
            {list.map((text) => (
              <li key={text.slug} className="border-b border-border">
                <Link
                  to="/$lang/scritti/$slug"
                  params={{ lang, slug: text.slug }}
                  className="group flex items-baseline gap-6 py-7 transition-colors hover:text-accent"
                >
                  <span className="label w-8 shrink-0">{text.index}</span>
                  <span className="text-3xl tracking-tight">{text.title[lang]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
