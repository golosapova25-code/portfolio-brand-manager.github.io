import { createFileRoute } from "@tanstack/react-router";
import { Cover, TopBar } from "@/components/identity/Cover";
import {
  Graphics,
  Idea,
  LogoSection,
  Mascot,
  Palette,
  Photo,
  Typography,
  Voice,
} from "@/components/identity/Sections";
import { Footer, Interface } from "@/components/identity/Interface";

export const Route = createFileRoute("/identity")({
  head: () => ({
    meta: [
      { title: "рюша × Алёна Галанова — айдентика" },
      {
        name: "description",
        content:
          "Черновик визуальной системы для портфолио бренд-менеджера Алёны Галановой и текстильного бренда «рюша».",
      },
      { property: "og:title", content: "рюша × Алёна Галанова — айдентика" },
      {
        property: "og:description",
        content: "Цвет, шрифты, логотип-бабочка, рюшка и голос бренда весёлых вещиц.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IdentityPage,
});

function IdentityPage() {
  return (
    <main className="bg-milk">
      <TopBar />
      <Cover />
      <Idea />
      <LogoSection />
      <Palette />
      <Typography />
      <Graphics />
      <Mascot />
      <Photo />
      <Interface />
      <Voice />
      <Footer />
    </main>
  );
}
