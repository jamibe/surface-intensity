import { createFileRoute, Link, redirect, useParams } from "@tanstack/react-router";
import { autografia, autografiaDoor, email, isFullLocale, ui, type FullLocale } from "@/lib/content";
import { SiteFooter, SiteHeader } from "@/components/site";
import sabbiaOnde from "@/assets/sabbia-onde.jpg";

export const Route = createFileRoute("/$lang/autografia")({
  beforeLoad: ({ params }) => {
    if (!isFullLocale(params.lang)) throw redirect({ to: "/$lang", params: { lang: params.lang } });
  },
  head: ({ params }) => {
    const lang = (isFullLocale(params.lang) ? params.lang : "it") as FullLocale;
    const a = autografia[lang];
    const title = `${a.kicker} — Ilinx`;
    return {
      meta: [
        { title },
        { name: "description", content: a.lead },
        { property: "og:title", content: title },
        { property: "og:description", content: a.lead },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: AutografiaPage,
});

function AutografiaPage() {
  const { lang } = useParams({ from: "/$lang/autografia" }) as { lang: FullLocale };
  const a = autografia[lang];
  const t = ui[lang];

  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={autografiaDoor.image}
            alt=""
            width={autografiaDoor.width}
            height={autografiaDoor.height}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="star" style={{ top: "26%", left: "24%" }} />
          <span className="star" style={{ top: "44%", left: "58%" }} />
          <span className="star" style={{ top: "64%", left: "38%" }} />
        </div>

        <div className="mx-auto max-w-[1180px] px-6 pt-20 pb-8">
          <p className="label">{a.kicker}</p>
          <h1 className="mt-6 max-w-[18ch] text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
            {a.title}
          </h1>
          <p className="mt-8 max-w-[48ch] text-xl leading-relaxed text-pretty text-muted-foreground">
            {a.lead}
          </p>
        </div>

        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <img
              src={sabbiaOnde}
              alt="Onde che raggiungono la sabbia in un disegno ispirato alla stampa giapponese"
              width={1600}
              height={1008}
              loading="lazy"
              className="tide-image w-full rounded-lg object-cover outline outline-border"
            />
          </div>
          <div className="md:col-span-5">
            {a.body.map((p, i) => (
              <p key={i} className="mb-5 text-[17px] leading-[1.75] text-pretty last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[62ch] px-6 pb-24">
          <p className="text-xl leading-relaxed text-pretty">{a.close}</p>
          <Link
            to="/$lang/contatto"
            params={{ lang }}
            className="label mt-8 inline-block border-b border-accent pb-1 text-foreground"
          >
            {t.contact} — {email}
          </Link>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
