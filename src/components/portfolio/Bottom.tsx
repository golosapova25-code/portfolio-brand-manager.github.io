import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { brandAssets } from "@/components/identity/assets";
import { Logo, Reveal, Ruffle, Sticker } from "@/components/identity/primitives";
import { media } from "@/content/media";
import { benedict, contacts, experiments, product, workshops } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Kicker, SectionTitle, ZoomImage, wrap } from "./ui";

export function Workshops() {
  return (
    <section id="workshops" className="relative scroll-mt-16 bg-ruffle">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <SectionTitle
          kicker="мастер-классы и события"
          title={<>регулярные мастер-классы, собирающие sold out</>}
          lead="идея, реализация, проведение. для каждого мастер-класса я разрабатываю отдельный продукт — его участники создают своими руками — и визуал: афишу, анонсы, упаковку."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 130}>
              <div className="relative">
                <ZoomImage
                  src={media[w.image]}
                  alt={`мастер-класс ${w.title}: афиша и готовое изделие`}
                  className="aspect-[4/5] w-full rounded-[2rem] bg-cloud"
                  imgClassName="object-contain"
                />
                <Sticker className="absolute -right-2 -top-3 rotate-6 bg-butter">sold out</Sticker>
              </div>
              <p className="type-h3 mt-4 text-ink">{w.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Ruffle className="ruffle-pink -mb-px translate-y-full" />
    </section>
  );
}

export function Product() {
  return (
    <section id="product" className={cn(wrap, "scroll-mt-16 py-20 md:py-28")}>
      <SectionTitle kicker="разработка продукта" title={product.title} lead={product.lead} />
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {product.steps.map((st, i) => (
          <Reveal key={st.n} delay={i * 100} className="rounded-[1.5rem] border bg-cloud p-5 md:p-6">
            <p className="type-label text-zenith">{st.n}</p>
            <p className="type-h3 mt-6 text-ink">{st.t}</p>
            <p className="type-caption mt-2 text-ink-soft">{st.d}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-12">
        <Reveal className="rounded-[2rem] bg-sky p-7 md:col-span-5 md:p-9">
          <Sticker className="bg-butter">{product.case.label}</Sticker>
          <h3 className="type-h2 mt-6 text-ink">{product.case.title}</h3>
          <p className="type-body mt-5 text-ink">{product.case.lead}</p>
          <ul className="mt-6 space-y-2">
            {product.case.points.map((pt) => (
              <li key={pt} className="type-body flex gap-2 text-ink">
                <span className="text-shoe">*</span>
                {pt}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:col-span-7 md:gap-4">
          {product.case.images.map((img, i) => (
            <Reveal key={img} delay={i * 120}>
              <ZoomImage
                src={media[img]}
                alt={`${product.case.title} — фото ${i + 1}`}
                className="aspect-[4/5] w-full rounded-[1.5rem] bg-cloud"
                imgClassName="object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Concepts() {
  const loop = [...benedict.slides, ...benedict.slides];
  return (
    <section id="concepts" className="scroll-mt-16 py-24 md:py-32">
      <div className={wrap}>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <Kicker>эксперименты и концепции</Kicker>
            <h2 className="type-h2 mt-4 text-ink">
              мы можем сделать абсолютно <span className="text-zenith">любое</span> текстильное
              изделие
            </h2>
            <p className="type-body mt-5 max-w-2xl text-ink-soft">
              от идеи и первого эскиза до готового продукта. мы любим сложные задачи, необычные формы
              и проекты, которые выходят за пределы привычного представления о текстиле.
            </p>
          </Reveal>
          <Reveal delay={150} className="hidden md:col-span-4 md:block">
            <img src={brandAssets.mascot} alt="" loading="lazy" className="animate-bob ml-auto w-48 drop-float" />
          </Reveal>
        </div>

        {/* experiments */}
        <div className="mt-14 space-y-6">
          {experiments.map((ex, idx) => (
            <div key={ex.id} id={ex.id} className="grid scroll-mt-20 gap-6 md:grid-cols-12">
              <Reveal className={cn("rounded-[2rem] p-7 md:col-span-5 md:p-9", idx % 2 ? "bg-ruffle" : "bg-sky")}>
                <Sticker className="bg-cloud">эксперимент</Sticker>
                <h3 className="type-h2 mt-6 text-ink">{ex.title}</h3>
                <p className="type-body mt-5 text-ink">{ex.lead}</p>
                <ul className="mt-6 space-y-2">
                  {ex.points.map((pt) => (
                    <li key={pt} className="type-body flex gap-2 text-ink">
                      <span className="text-shoe">*</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div
                className={cn(
                  "grid gap-3 md:col-span-7 md:gap-4",
                  ex.images.length > 1 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1",
                )}
              >
                {ex.images.map((img, i) => (
                  <Reveal key={img} delay={i * 110} className={cn(ex.images.length > 1 && i === 0 && "col-span-2 md:col-span-1")}>
                    <ZoomImage
                      src={media[img]}
                      alt={`${ex.title} — фото ${i + 1}`}
                      className={cn(
                        "w-full rounded-[1.5rem] bg-cloud",
                        ex.images.length > 1 ? (i === 0 ? "aspect-[4/5] md:aspect-[9/14]" : "aspect-[9/14]") : "aspect-[4/3]",
                      )}
                      imgClassName={img === "homa-object" || img === "dj-pillow" ? "object-contain" : undefined}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* benedict */}
        <div className="mt-20">
          <Reveal className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <Sticker className="border-dashed bg-transparent">концепция / визуализация</Sticker>
              <h3 className="type-h2 mt-6 text-ink">{benedict.title}</h3>
              <p className="type-hand mt-2 text-zenith">{benedict.subtitle}</p>
            </div>
            <div className="md:col-span-7 md:pt-14">
              <p className="type-body text-ink">{benedict.lead}</p>
              <div className="mt-5 rounded-[1.25rem] border border-dashed border-ink/30 p-5">
                <p className="type-caption text-ink-soft">*{benedict.benefitsTitle}:</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {benedict.benefits.map((b) => (
                    <li key={b} className="type-caption rounded-full bg-butter px-3 py-1.5 text-ink">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="marquee marquee-fade mt-10 overflow-hidden">
        <div className="marquee-track gap-4 px-2 py-2" style={{ "--marquee-duration": "70s" } as CSSProperties}>
          {loop.map((sl, i) => (
            <div key={`${sl.image}-${i}`} className="w-[78vw] max-w-[560px] shrink-0" aria-hidden={i >= benedict.slides.length}>
              <ZoomImage src={media[sl.image]} alt={sl.caption} className="aspect-[1950/1080] w-full rounded-[1.5rem] border bg-cloud" />
              <p className="type-caption mt-3 text-ink-soft">
                <span className="text-zenith">0{(i % benedict.slides.length) + 1}</span> · {sl.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Final() {
  return (
    <section id="contacts" className="relative overflow-hidden">
      <img src={brandAssets.sky} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <Ruffle className="ruffle-milk ruffle-lg relative" />
      <div className={cn(wrap, "relative py-20 md:py-28")}>
        <Reveal className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="type-hero text-ink">
              кажется, это
              <br />
              <span className="text-zenith">только начало!</span>
            </h2>
            <p className="type-body mt-6 max-w-lg text-ink">
              открыта к новым проектам, сотрудничеству и интересным задачам. давайте создадим
              что-нибудь необычное вместе!
            </p>
          </div>
          <div className="relative flex justify-center md:col-span-5">
            <img
              src={brandAssets.mascot}
              alt="Бабочка рюши машет на прощание"
              loading="lazy"
              className="fly-away w-56 drop-float md:w-72"
            />
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-6 rounded-[1.5rem] bg-cloud p-5 shadow-soft transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-zenith"
              >
                <span className="type-label text-ink-soft">{c.label}</span>
                <span className="type-body flex items-center justify-between gap-2 break-all text-ink">
                  {c.value}
                  <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <Logo className="mt-16 w-full bg-cloud drop-press" />
        <p className="type-caption mt-6 text-ink/70">© алёна галанова · бренд-менеджер</p>
      </div>
    </section>
  );
}
