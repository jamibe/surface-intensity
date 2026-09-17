import { createFileRoute, Link, redirect, useParams } from "@tanstack/react-router";
import { isFullLocale, kenoma, type FullLocale } from "@/lib/content";

export const Route = createFileRoute("/$lang/kenoma")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const k = kenoma[lang];
    const title = `${k.title} — Ilinx`;
    return {
      meta: [
        { title },
        { name: "description", content: k.body },
        { property: "og:title", content: title },
        { property: "og:description", content: k.body },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: KenomaPage,
});

function KenomaPage() {
  const { lang } = useParams({ from: "/$lang/kenoma" }) as { lang: FullLocale };
  const k = kenoma[lang];

  return (
    <main className="kenoma-page flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="kenoma-title text-6xl tracking-tight md:text-8xl">{k.title}</h1>
      <p className="kenoma-body mt-10 max-w-[44ch] text-center text-lg leading-relaxed">
        {k.body}
      </p>
      <Link
        to="/$lang"
        params={{ lang }}
        className="kenoma-link label mt-16 border-b border-transparent pb-1 transition-colors hover:border-current"
      >
        Ilinx
      </Link>
    </main>
  );
}
