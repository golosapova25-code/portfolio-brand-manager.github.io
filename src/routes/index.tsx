import { createFileRoute } from "@tanstack/react-router";
import { Brand, Header, Hero } from "@/components/portfolio/Top";
import { MoreCases, NomnomCase, Partners, StoriesMarquee } from "@/components/portfolio/Cases";
import { Concepts, Final, Product, Workshops } from "@/components/portfolio/Bottom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алёна Галанова — бренд-менеджер · портфолио «рюша»" },
      {
        name: "description",
        content:
          "Портфолио бренд-менеджера Алёны Галановой: текстильный бренд «рюша», коллаборация с НОМНОМ (sold out за 2 дня, +250% выручки), разработка продуктов, мастер-классы и эксперименты.",
      },
      { property: "og:title", content: "Алёна Галанова — бренд-менеджер" },
      {
        property: "og:description",
        content: "Бренд «рюша», коммерческие коллаборации, мастер-классы и текстильные концепции.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip bg-milk">
      <Header />
      <Hero />
      <Brand />
      <NomnomCase />
      <StoriesMarquee />
      <Partners />
      <MoreCases />
      <Product />
      <Workshops />
      <Concepts />
      <Final />
    </main>
  );
}
