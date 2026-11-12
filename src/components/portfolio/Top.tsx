import { useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/components/identity/assets";
import { ButterflyMark, Logo, Reveal, Ruffle } from "@/components/identity/primitives";
import { media } from "@/content/media";
import { brandSpeech, directions, intro } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Kicker, wrap } from "./ui";

const nav = [
  ["#brand", "рюша"],
  ["#nomnom", "кейсы"],
  ["#partners", "партнёры"],
  ["#workshops", "мастер-классы"],
  ["#concepts", "концепции"],
  ["#contacts", "контакты"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn(wrap, "flex items-center justify-between gap-4 py-4")}>
        <a href="#top" className="flex items-center gap-2.5 rounded-full bg-cloud/70 py-1.5 pl-2 pr-4 backdrop-blur-md">
          <ButterflyMark className="h-6 bg-zenith" />
          <span className="type-label text-ink">алёна галанова</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-cloud/70 px-2 py-1.5 backdrop-blur-md md:flex">
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="type-caption rounded-full px-3 py-1 text-ink-soft transition-colors hover:bg-butter hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full bg-cloud/80 text-ink backdrop-blur-md md:hidden"
          aria-label={open ? "закрыть меню" : "открыть меню"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="mx-5 rounded-[1.5rem] bg-cloud p-3 shadow-float md:hidden">
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="type-body block rounded-xl px-4 py-3 text-ink hover:bg-butter"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  const [hello1, hello2] = intro.hello.split("\n");
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={brandAssets.sky}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={cn(wrap, "relative flex min-h-[100svh] flex-col pb-20 pt-24 md:pt-28")}>
        {/* the meeting */}
        <div className="relative flex flex-1 items-center justify-center py-6">
          <figure className="animate-fly-left relative z-10 w-[44%] max-w-[300px] -rotate-6 md:w-[24%]">
            <img
              src={brandAssets.alena}
              alt="Алёна Галанова в жёлтом платье на фоне неба"
              width={1000}
              height={1820}
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover object-top shadow-float"
            />
          </figure>
          <div className="animate-fly-right relative z-20 -ml-4 w-[52%] max-w-[400px] md:ml-6 md:w-[30%]">
            <img
              src={brandAssets.mascot}
              alt="Бабочка рюши"
              width={1200}
              height={1068}
              className="animate-bob w-full drop-float"
            />
          </div>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal delay={1600} className="md:col-span-7">
            <h1 className="type-hero text-ink">
              {hello1}
              <br />
              <span className="text-zenith">{hello2}</span>
            </h1>
          </Reveal>
          <Reveal delay={1900} className="md:col-span-5">
            <p className="type-body text-ink">{intro.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="pill">
                <a href="#nomnom">
                  смотреть кейсы <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="line" size="pill" className="bg-cloud/60">
                <a href="#contacts">написать мне</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
      <Ruffle className="ruffle-milk ruffle-lg absolute inset-x-0 -bottom-px rotate-180" />
    </section>
  );
}

export function Brand() {
  return (
    <section id="brand" className={cn(wrap, "scroll-mt-20 py-20 md:py-28")}>
      <div className="grid items-center gap-10 md:grid-cols-12">
        <Reveal className="relative md:col-span-5">
          <img
            src={brandAssets.mascot}
            alt="Бабочка рюши рассказывает о бренде"
            loading="lazy"
            width={1200}
            height={1068}
            className="animate-bob mx-auto w-4/5 drop-float"
          />
          <Logo className="mx-auto mt-6 w-3/4" />
        </Reveal>
        <div className="md:col-span-7">
          <Kicker>слово бабочке</Kicker>
          <div className="relative mt-5 rounded-[2rem] rounded-tl-md bg-cloud p-7 shadow-soft md:p-10">
            {brandSpeech.map((line, i) => (
              <Reveal key={line} delay={i * 220}>
                <p className={cn(i === 1 ? "type-h3 my-3 text-zenith" : "type-body mt-2 text-ink")}>
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {directions.map((d, i) => (
          <Reveal key={d.title} delay={i * 90} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
            <a href={d.href} className="group block">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-sky">
                <img
                  src={media[d.image]}
                  alt={d.title}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                    i === 0 ? "aspect-[16/10] md:aspect-[3/4]" : "aspect-[3/4]",
                  )}
                />
                <span className="type-label absolute left-3 top-3 rounded-full bg-cloud px-2.5 py-1.5 text-ink">
                  {d.tag}
                </span>
                <span className="type-caption absolute bottom-3 right-3 rounded-full bg-ink px-3 py-1.5 text-milk opacity-0 transition-opacity group-hover:opacity-100">
                  открыть →
                </span>
              </div>
              <p className="type-caption mt-3 text-ink">{d.title}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
