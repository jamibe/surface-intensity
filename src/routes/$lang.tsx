import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isLocale } from "@/lib/content";
import { Grain } from "@/components/site";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  return (
    <>
      <Grain />
      <Outlet />
    </>
  );
}
