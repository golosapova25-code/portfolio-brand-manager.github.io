import { brandAssets } from "./assets";
import { Arrow, ButterflyMark, Logo, Ruffle } from "./primitives";

const nav = [
  ["#idea", "идея"],
  ["#logo", "логотип"],
  ["#color", "цвет"],
  ["#type", "шрифты"],
  ["#graphics", "графика"],
  ["#hero", "бабочка"],
  ["#photo", "фото"],
  ["#ui", "интерфейс"],
  ["#voice", "голос"],
] as const;

export function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="наверх">
          <ButterflyMark className="h-7 bg-zenith" />
          <span className="type-label text-ink">айдентика · v0.1</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-cloud/70 px-2 py-1.5 backdrop-blur-md lg:flex">
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
      </div>
    </header>
  );
}

export function Cover() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={brandAssets.sky}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-16 pt-28 md:px-10 md:pt-32">
        <div className="flex items-start justify-between gap-6">
          <p className="type-label max-w-[14rem] text-zenith">
            алёна галанова — бренд-менеджер
            <br />× бренд весёлых вещиц
          </p>
          <p className="type-label hidden text-right text-zenith md:block">
            черновик визуальной системы
            <br />
            для сайта-портфолио
          </p>
        </div>

        {/* the meeting: Alena flies in from the left, the butterfly from the right */}
        <div className="relative mt-10 flex flex-1 items-center justify-center md:mt-4">
          <figure className="animate-fly-left relative z-10 w-[42%] max-w-[300px] -rotate-6 md:w-[26%]">
            <img
              src={brandAssets.alena}
              alt="Алёна в жёлтом платье с оборками на фоне неба"
              width={1000}
              height={1820}
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover object-top shadow-float"
            />
            <figcaption className="type-hand mt-2 text-zenith">это я</figcaption>
          </figure>

          <Arrow className="mx-1 hidden w-24 text-zenith md:block" />

          <div className="animate-fly-right relative z-20 -ml-6 w-[54%] max-w-[420px] md:ml-0 md:w-[34%]">
            <img
              src={brandAssets.mascot}
              alt="Бабочка рюши — маскот бренда"
              width={1200}
              height={1068}
              className="animate-bob w-full drop-shadow-[0_24px_30px_oklch(0.42_0.115_256/0.25)]"
            />
          </div>
        </div>

        <div className="mt-10 grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Logo className="w-full max-w-3xl bg-cloud drop-shadow-[0_6px_0_oklch(0.42_0.115_256/0.18)]" />
          </div>
          <p className="type-body text-ink md:col-span-5 md:pb-3">
            <span className="type-hand mr-1 text-shoe">*</span>
            человек и персонаж летят навстречу друг другу. одна сторона — бизнес и стратегия,
            другая — сказочный мир текстиля. айдентика сшивает их в одну историю.
          </p>
        </div>
      </div>
      <Ruffle className="ruffle-milk ruffle-lg absolute inset-x-0 -bottom-px rotate-180" />
    </section>
  );
}
