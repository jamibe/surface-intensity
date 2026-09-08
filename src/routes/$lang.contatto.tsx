import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { contact, email, isFullLocale, type FullLocale } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/$lang/contatto")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const c = contact[lang];
    const title = `${c.title} — Ilinx`;
    return {
      meta: [
        { title },
        { name: "description", content: c.body },
        { property: "og:title", content: title },
        { property: "og:description", content: c.body },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useParams({ from: "/$lang/contatto" }) as { lang: FullLocale };
  const c = contact[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="sfumato">
        <div className="mx-auto max-w-[62ch] px-6 py-32">
          <h1 className="text-5xl tracking-tight md:text-6xl">{c.title}</h1>
          <p className="mt-8 text-lg leading-relaxed text-pretty text-muted-foreground">{c.body}</p>
          <a
            href={`mailto:${email}`}
            className="mt-12 inline-block border-b border-accent pb-1 text-3xl tracking-tight transition-colors hover:text-accent"
          >
            {email}
          </a>
          <p className="mt-10 max-w-[42ch] text-[17px] leading-[1.75] text-pretty">{c.hint}</p>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
