import { brandAssets } from "@/components/identity/assets";
import { Reveal, Ruffle, Sticker } from "@/components/identity/primitives";
import { media, type MediaKey } from "@/content/media";
import { cases, marqueeStories, nomnom, nomnomStories, partners, type Case } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Kicker, SectionTitle, ZoomImage, wrap } from "./ui";

function Phone({ image, alt }: { image: MediaKey; alt: string }) {
  return (
    <div className="rounded-[1.8rem] border-[5px] border-ink bg-ink shadow-float">
      <ZoomImage src={media[image]} alt={alt} className="aspect-[9/16] w-full rounded-[1.4rem]" />
    </div>
  );
}

export function NomnomCase() {
  return (
    <section id="nomnom" className="relative scroll-mt-16 bg-sky">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Kicker>кейс 01 · главная коллаборация</Kicker>
            <h2 className="type-hero mt-4 text-ink">{nomnom.title}</h2>
            <p className="type-hand mt-3 text-zenith">{nomnom.dates}</p>
            <p className="type-body mt-6 max-w-xl text-ink">{nomnom.lead}</p>
          </Reveal>
          <Reveal delay={150} className="relative md:col-span-5">
            <div className="grid grid-cols-5 items-end gap-3">
              <ZoomImage
                src={media["nomnom-illustration"]}
                alt="иллюстрации коллаборации номном × рюша"
                className="col-span-2 aspect-[2/5] rounded-[1.25rem]"
              />
              <ZoomImage
                src={media["nomnom-blue-bag"]}
                alt="голубая сумочка для стакана номном × рюша"
                className="col-span-3 aspect-[4/7] rounded-[1.25rem] bg-cloud"
                imgClassName="object-contain"
              />
            </div>
          </Reveal>
        </div>

        {/* task + role */}
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <Reveal className="rounded-[2rem] bg-cloud p-7 md:col-span-5 md:p-9">
            <Kicker>задача</Kicker>
            <p className="type-body mt-4 text-ink">{nomnom.task}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] bg-cloud p-7 md:col-span-7 md:p-9">
            <Kicker>моя роль</Kicker>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {nomnom.role.map((r) => (
                <li key={r} className="type-body flex gap-2 text-ink">
                  <span className="text-shoe">*</span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* numbers */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {nomnom.numbers.map((n, i) => (
            <Reveal key={n.value} delay={i * 140} className="rounded-[2rem] bg-zenith p-8 text-milk">
              <p className="font-display text-6xl font-extrabold leading-none tracking-tight md:text-7xl">
                {n.value}
              </p>
              <p className="type-caption mt-4 opacity-85">{n.label}</p>
            </Reveal>
          ))}
        </div>

        {/* drop + stories */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <ZoomImage
              src={media["nomnom-pink-look"]}
              alt="розовая сумочка номном × рюша в образе"
              className="aspect-[3/5] w-full rounded-[2rem]"
            />
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <p className="type-h3 text-ink">{nomnom.drop}</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-3 gap-3 md:gap-5">
              {nomnomStories.map((s, i) => (
                <Reveal key={s} delay={i * 120}>
                  <Phone image={s} alt="сторис коллаборации номном × рюша" />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 rounded-[1.5rem] bg-cloud p-6">
              <Kicker>итоги</Kicker>
              <ul className="mt-3 space-y-2">
                {nomnom.outcomes.map((o) => (
                  <li key={o} className="type-body flex gap-2 text-ink">
                    <span className="text-zenith">→</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse, duration }: { items: MediaKey[]; reverse?: boolean; duration: number }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee marquee-fade overflow-hidden">
      <div
        className={cn("marquee-track gap-4 py-2", reverse && "marquee-reverse")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {loop.map((s, i) => (
          <div key={`${s}-${i}`} className="w-36 shrink-0 md:w-48" aria-hidden={i >= items.length}>
            <ZoomImage
              src={media[s]}
              alt="сторис покупателей коллаборации"
              className="aspect-[9/16] w-full rounded-[1.25rem] bg-cloud shadow-soft"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StoriesMarquee() {
  return (
    <section className="relative overflow-hidden bg-sky pb-24">
      <div className={cn(wrap, "flex items-end justify-between gap-6 pb-10")}>
        <SectionTitle
          kicker="коллаборация глазами покупателей"
          title={<>месяц сторис,<br />очередей и sold out</>}
        />
        <img
          src={brandAssets.mascot}
          alt=""
          loading="lazy"
          className="animate-bob hidden w-40 drop-float md:block"
        />
      </div>
      <div className="space-y-4">
        <MarqueeRow items={marqueeStories[0]} duration={70} />
        <MarqueeRow items={marqueeStories[1]} duration={80} reverse />
      </div>
      <p className={cn(wrap, "type-caption mt-6 text-ink/70")}>
        нажмите на сторис, чтобы рассмотреть · наведите, чтобы остановить
      </p>
      <Ruffle className="ruffle-sky ruffle-lg absolute inset-x-0 -bottom-px translate-y-full" />
    </section>
  );
}

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section id="partners" className="scroll-mt-16 overflow-hidden pb-16 pt-28">
      <div className={wrap}>
        <SectionTitle
          kicker="с кем мы уже работали"
          title="партнёры и бизнесы"
          lead="кофейни, салоны, магазины, бары и блогеры — список растёт с каждой коллаборацией."
        />
      </div>
      <div className="marquee mt-12 overflow-hidden border-y border-ink/15 bg-butter py-6">
        <div className="marquee-track items-center" style={{ "--marquee-duration": "40s" } as React.CSSProperties}>
          {loop.map((p, i) => (
            <span key={`${p}-${i}`} className="flex shrink-0 items-center" aria-hidden={i >= partners.length}>
              <span className="type-h2 whitespace-nowrap px-6 text-ink md:px-10">{p}</span>
              <span className="font-display text-4xl text-shoe">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ c, index }: { c: Case; index: number }) {
  const tone = { sky: "bg-sky", ruffle: "bg-ruffle", butter: "bg-butter" }[c.tone];
  const flip = index % 2 === 1;
  return (
    <article id={c.id} className="scroll-mt-20 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-12">
        <Reveal className={cn("md:col-span-4", flip && "md:order-2")}>
          <div className={cn("h-full rounded-[2rem] p-7 md:p-9", tone)}>
            <p className="type-label text-ink/70">{c.label}</p>
            <h3 className="type-h2 mt-4 text-ink">{c.title}</h3>
            <p className="type-body mt-5 text-ink">{c.lead}</p>
            <ul className="mt-6 space-y-2">
              {c.points.map((p) => (
                <li key={p} className="type-body flex gap-2 text-ink">
                  <span className="text-shoe">*</span>
                  {p}
                </li>
              ))}
            </ul>
            {c.note && <p className="type-caption mt-6 text-ink/75">*{c.note}</p>}
          </div>
        </Reveal>
        <div className={cn("grid grid-cols-2 gap-3 md:col-span-8 md:grid-cols-3 md:gap-4", flip && "md:order-1")}>
          {c.images.map((img, i) => (
            <Reveal
              key={img}
              delay={i * 110}
              className={cn(i === 0 && "col-span-2 md:col-span-1", c.id === "decor" && i === 0 && "md:col-span-2")}
            >
              <ZoomImage
                src={media[img]}
                alt={`${c.title} — фото ${i + 1}`}
                className={cn(
                  "w-full rounded-[1.5rem] bg-cloud",
                  c.id === "decor" && i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[9/14]",
                )}
                imgClassName={img === "decor-couvert" || img === "homa-object" ? "object-contain" : undefined}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}

export function MoreCases() {
  return (
    <section id="cases" className={cn(wrap, "py-12 md:py-16")}>
      <SectionTitle
        kicker="ещё проекты"
        title="коллаборации, декор и подарки"
        lead="каждый проект — отдельный продукт, придуманный под задачу партнёра: от упаковки для блогерской рассылки до оформления целой кофейни."
      />
      <div className="mt-6 divide-y divide-ink/10">
        {cases.map((c, i) => (
          <CaseBlock key={c.id} c={c} index={i} />
        ))}
      </div>
      <Reveal className="mt-4 flex flex-wrap items-center gap-3">
        <Sticker className="border-dashed bg-transparent">здесь появятся новые кейсы</Sticker>
      </Reveal>
    </section>
  );
}
