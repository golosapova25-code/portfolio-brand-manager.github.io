import { ArrowUpRight, ChevronLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { brandAssets } from "./assets";
import { ButterflyMark, Logo, Reveal, Ruffle, SectionHead, Sticker } from "./primitives";

const wrap = "mx-auto max-w-7xl px-5 md:px-10";

export function Interface() {
  return (
    <section id="ui" className="relative bg-cloud">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <SectionHead
          index="08"
          label="интерфейс"
          title="кнопки, карточки, сторис"
          lead="мягкие скругления, пилюли и рамки-рюшки. интерфейс выглядит как немного игрушечный рабочий стол — но остаётся удобным."
        />

        <div className="grid gap-6 md:grid-cols-12">
          {/* buttons */}
          <Reveal className="rounded-[2rem] border bg-milk p-8 md:col-span-5">
            <p className="type-label text-zenith">кнопки</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="sky" size="pill">
                смотреть кейс <ArrowUpRight />
              </Button>
              <Button variant="ruffle" size="pill">
                коллаборация
              </Button>
              <Button variant="ink" size="pill">
                написать в telegram
              </Button>
              <Button variant="line" size="pill">
                <ChevronLeft /> назад
              </Button>
            </div>
            <p className="type-label mt-10 text-zenith">метки</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Sticker className="bg-sky">b2c</Sticker>
              <Sticker className="bg-butter">мастер-класс</Sticker>
              <Sticker className="bg-ruffle">коллаборация</Sticker>
            </div>
          </Reveal>

          {/* case card */}
          <Reveal delay={100} className="md:col-span-4">
            <article className="group h-full cursor-pointer overflow-hidden rounded-[2rem] bg-sky shadow-soft transition-transform duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-ruffle">
                <div className="flex h-full items-center justify-center">
                  <span className="type-caption rounded-full border border-dashed border-ink/50 px-4 py-2 text-ink/70">
                    здесь будет фото кейса
                  </span>
                </div>
                <img
                  src={brandAssets.mascot}
                  alt=""
                  loading="lazy"
                  className="absolute -bottom-4 -right-6 w-28 transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-6"
                />
              </div>
              <Ruffle className="ruffle-pink" />
              <div className="p-6 pt-3">
                <p className="type-label text-ink/70">кейс 01 · коллаборация</p>
                <h3 className="type-h3 mt-2 text-ink">рюша × номном</h3>
                <div className="mt-5 flex gap-6">
                  <div>
                    <p className="font-display text-3xl font-extrabold text-zenith">2 дня</p>
                    <p className="type-caption text-ink/70">sold out</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-extrabold text-zenith">+250%</p>
                    <p className="type-caption text-ink/70">выручка</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* stories phone */}
          <Reveal delay={200} className="flex justify-center md:col-span-3">
            <div className="relative w-full max-w-[220px] rounded-[2.2rem] border-[6px] border-ink bg-sky-gradient p-3">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={cn("h-0.5 flex-1 rounded-full", i === 0 ? "bg-ink" : "bg-ink/25")}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-cloud">
                  <ButterflyMark className="h-3.5 bg-sky" />
                </span>
                <span className="type-caption text-ink">brand.ryusha</span>
              </div>
              <div className="mt-6 flex aspect-[9/12] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/40">
                <span className="flex size-12 items-center justify-center rounded-full bg-cloud">
                  <Play className="size-5 text-ink" />
                </span>
                <span className="type-caption px-3 text-center text-ink/70">
                  место для реальных сторис покупателей
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* first screen preview */}
        <Reveal className="mt-10">
          <p className="type-label mb-4 text-ink-soft">как может выглядеть первый экран</p>
          <div className="relative overflow-hidden rounded-[2rem] border">
            <img
              src={brandAssets.sky}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative flex min-h-[420px] flex-col justify-between p-6 md:p-10">
              <div className="flex items-center justify-between">
                <ButterflyMark className="h-7 bg-zenith" />
                <span className="type-label text-zenith">кейсы · партнёры · контакты</span>
              </div>
              <div className="flex items-center justify-center gap-4 py-6">
                <img
                  src={brandAssets.alena}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] w-24 -rotate-6 rounded-2xl object-cover object-top shadow-float md:w-36"
                />
                <img
                  src={brandAssets.mascot}
                  alt=""
                  loading="lazy"
                  className="animate-bob w-32 drop-float md:w-48"
                />
              </div>
              <div className="grid items-end gap-4 md:grid-cols-2">
                <p className="type-h3 text-ink">
                  привет! я алёна —<br />
                  бренд-менеджер.
                </p>
                <Logo className="w-full max-w-sm bg-cloud md:ml-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <Ruffle className="ruffle-cloud -mb-px translate-y-full" />
    </section>
  );
}

const contacts = [
  { label: "instagram рюши", href: "https://www.instagram.com/brand.ryusha" },
  { label: "instagram алёны", href: "https://www.instagram.com/galanova.a.v" },
  { label: "telegram", href: "https://t.me/galanova_av" },
  { label: "algoloshapova@yandex.ru", href: "mailto:algoloshapova@yandex.ru" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sky">
      <Ruffle className="ruffle-milk ruffle-lg" />
      <div className={cn(wrap, "py-20 md:py-24")}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="type-h2 text-ink">
              кажется, это
              <br />
              только начало!
            </p>
            <p className="type-body mt-4 max-w-md text-ink">
              это черновик айдентики. дальше — собираем на нём сам сайт-портфолио.
            </p>
          </div>
          <ul className="flex flex-col gap-2 md:col-span-5 md:items-end">
            {contacts.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="type-body inline-flex items-center gap-2 rounded-full bg-cloud px-4 py-2 text-ink transition-colors hover:bg-butter"
                >
                  {c.label} <ArrowUpRight className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Logo className="mt-16 w-full bg-cloud" />
      </div>
    </footer>
  );
}
