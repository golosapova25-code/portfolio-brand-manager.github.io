import { brandAssets } from "./assets";
import { Arrow, ButterflyMark, Logo, Reveal, Ruffle, SectionHead, Sticker } from "./primitives";
import { cn } from "@/lib/utils";

const wrap = "mx-auto max-w-7xl px-5 md:px-10";

/* ——— 01 идея ——— */
export function Idea() {
  const rhymes = [
    { a: "голубое небо", b: "голубые крылья", swatch: "bg-sky" },
    { a: "платье с оборками", b: "платье с рюшей", swatch: "bg-butter" },
    { a: "красные туфли", b: "красные туфельки", swatch: "bg-shoe" },
  ];
  return (
    <section id="idea" className={cn(wrap, "py-20 md:py-28")}>
      <SectionHead
        index="01"
        label="идея"
        title={
          <>
            два героя —<br />
            одна история
          </>
        }
        lead="на фото алёна и нарисованная бабочка уже рифмуются между собой. эту рифму мы и делаем основой айдентики: реальный человек отвечает за дело, персонаж — за эмоцию."
      />

      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-zenith p-6 md:col-span-5">
          <img
            src={brandAssets.alena}
            alt="Алёна на фоне глубокого синего неба"
            loading="lazy"
            width={1000}
            height={1820}
            className="mx-auto aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
          />
          <div className="mt-5 flex items-end justify-between gap-4 text-milk">
            <div>
              <p className="type-label opacity-70">герой 1 · реальность</p>
              <p className="type-h3 mt-2">алёна</p>
            </div>
            <p className="type-caption max-w-[12rem] text-right opacity-80">
              стратегия, продукт, партнёры, цифры
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-4 md:col-span-2">
          {rhymes.map((r, i) => (
            <Reveal key={r.a} delay={i * 120} className="text-center">
              <span className={cn("mx-auto block size-5 rounded-full", r.swatch)} />
              <p className="type-caption mt-2 text-ink-soft">
                {r.a}
                <br />
                <span className="text-ink">=</span>
                <br />
                {r.b}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={150}
          className="relative overflow-hidden rounded-[2rem] bg-sky-gradient p-6 md:col-span-5"
        >
          <img
            src={brandAssets.mascot}
            alt="Бабочка рюши"
            loading="lazy"
            width={1200}
            height={1068}
            className="animate-bob mx-auto aspect-[4/5] w-full object-contain drop-float"
          />
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="type-label text-zenith">герой 2 · сказка</p>
              <p className="type-h3 mt-2 text-ink">бабочка рюши</p>
            </div>
            <p className="type-caption max-w-[12rem] text-right text-ink-soft">
              проводник по сайту, голос бренда
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— 02 логотип ——— */
export function LogoSection() {
  const variants = [
    { bg: "bg-milk border", logo: "bg-sky", name: "основной", note: "небо на молоке" },
    { bg: "bg-sky", logo: "bg-cloud", name: "на небе", note: "белый на голубом" },
    { bg: "bg-ruffle", logo: "bg-milk", name: "на рюшке", note: "молоко на розовом" },
    { bg: "bg-zenith", logo: "bg-sky", name: "ночной", note: "небо на зените" },
  ];
  return (
    <section id="logo" className="bg-cloud">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <SectionHead
          index="02"
          label="логотип"
          title="бабочка вместо «ю»"
          lead="в логотипе буква «ю» превращается в крылья — это и есть самый узнаваемый элемент. логотип пишется капсом, а в любом тексте название — только строчными: «рюша»."
        />

        <Reveal className="rounded-[2rem] border bg-milk px-6 py-16 md:px-16 md:py-24">
          <div className="relative mx-auto max-w-3xl">
            <Logo className="w-full" />
            <span className="type-hand absolute -top-10 left-[36%] text-zenith md:-top-12">
              крылья!
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {variants.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <div
                className={cn(
                  "flex aspect-[4/3] items-center justify-center rounded-[1.5rem] px-6",
                  v.bg,
                )}
              >
                <Logo className={cn("w-full", v.logo)} />
              </div>
              <p className="type-caption mt-3 text-ink">
                {v.name} <span className="text-ink-soft">— {v.note}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal className="flex flex-col items-center justify-center gap-6 rounded-[1.5rem] bg-sky-gradient p-8">
            <div className="flex items-end gap-5">
              <ButterflyMark className="h-24 bg-cloud" />
              <ButterflyMark className="h-14 bg-ruffle" />
              <ButterflyMark className="h-8 bg-zenith" />
            </div>
            <p className="type-caption text-center text-ink">
              знак-бабочка — для иконки сайта, аватарок, бирок и вышивки
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-[1.5rem] border p-8">
            <p className="type-label text-zenith">можно</p>
            <ul className="type-body mt-4 space-y-2 text-ink">
              <li>— менять цвет логотипа внутри палитры</li>
              <li>— использовать знак-бабочку отдельно</li>
              <li>— оставлять вокруг воздух шириной с бабочку</li>
            </ul>
          </Reveal>
          <Reveal delay={200} className="rounded-[1.5rem] border p-8">
            <p className="type-label text-shoe">нельзя</p>
            <ul className="type-body mt-4 space-y-2 text-ink">
              <li>— растягивать и наклонять</li>
              <li>— перерисовывать крылья</li>
              <li>— ставить на пёстрое фото без подложки</li>
              <li>— писать «Рюша» или «РЮША» в тексте</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ——— 03 цвет ——— */
const palette = [
  { name: "небо", role: "основной", hex: "#B5DCFB", cls: "bg-sky", share: 40, dark: false },
  { name: "молоко", role: "фон", hex: "#FBF7EE", cls: "bg-milk border", share: 22, dark: false },
  { name: "облако", role: "воздух", hex: "#FFFFFF", cls: "bg-cloud border", share: 14, dark: false },
  { name: "рюшка", role: "второй голос", hex: "#FFA7C0", cls: "bg-ruffle", share: 11, dark: false },
  { name: "масло", role: "подсветка", hex: "#F5F3B8", cls: "bg-butter", share: 8, dark: false },
];
const accents = [
  { name: "зенит", role: "заголовки, ссылки", hex: "#1E4A86", cls: "bg-zenith" },
  { name: "чернила", role: "основной текст", hex: "#2A2C33", cls: "bg-ink" },
  { name: "туфелька", role: "микродоза: звёздочки, точки", hex: "#B80000", cls: "bg-shoe" },
];

export function Palette() {
  return (
    <section id="color" className={cn(wrap, "py-20 md:py-28")}>
      <SectionHead
        index="03"
        label="цвет"
        title="светлое, воздушное, сливочное"
        lead="цвета взяты прямо с бабочки и с фотосессии: крылья, платье, оборка, туфельки и глубокое небо. пастель работает как одна система, а не набор случайных оттенков."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {palette.map((c, i) => (
          <Reveal key={c.name} delay={i * 70} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
            <div
              className={cn(
                "flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] p-5",
                c.cls,
                i === 0 && "aspect-[16/9] md:aspect-[3/4]",
              )}
            >
              <span className="type-label text-ink/70">{c.role}</span>
              <div>
                <p className="type-h3 text-ink">{c.name}</p>
                <p className="type-caption mt-1 text-ink/70">{c.hex}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {accents.map((c, i) => (
          <Reveal key={c.name} delay={i * 70}>
            <div className="flex items-center gap-4 rounded-[1.25rem] border bg-cloud p-4">
              <span className={cn("size-12 shrink-0 rounded-full", c.cls)} />
              <div>
                <p className="type-body text-ink">
                  {c.name} <span className="text-ink-soft">{c.hex}</span>
                </p>
                <p className="type-caption text-ink-soft">{c.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="type-label mb-3 text-ink-soft">пропорции на экране</p>
        <div className="flex h-14 overflow-hidden rounded-full border">
          {palette.map((c) => (
            <div
              key={c.name}
              className={cn("flex items-center justify-center", c.cls.replace(" border", ""))}
              style={{ width: `${c.share}%` }}
            >
              <span className="type-caption hidden text-ink/70 sm:inline">{c.share}%</span>
            </div>
          ))}
          <div className="flex w-[5%] items-center justify-center bg-zenith" />
        </div>
        <p className="type-caption mt-3 text-ink-soft">
          + зенит и чернила для текста, туфелька — не больше пары точек на экран
        </p>
      </Reveal>
    </section>
  );
}

/* ——— 04 шрифты ——— */
export function Typography() {
  const scale = [
    { tag: "заголовок 1", cls: "type-hero", sample: "рюша", spec: "Unbounded 800 · 72–120" },
    { tag: "заголовок 2", cls: "type-h2", sample: "коллаборации", spec: "Unbounded 700 · 32–60" },
    { tag: "подзаголовок", cls: "type-h3", sample: "рюша × номном", spec: "Unbounded 600 · 18–26" },
    {
      tag: "текст",
      cls: "type-body",
      sample: "создаю и развиваю бренды, продукты и коллаборации.",
      spec: "MatrianMono · 15/24",
    },
    {
      tag: "подпись",
      cls: "type-caption",
      sample: "сумочки в интерьере кофейни, август",
      spec: "MatrianMono · 12–13",
    },
    { tag: "метка", cls: "type-label", sample: "кейс 01 · b2b", spec: "MatrianMono · 11 · капс" },
    { tag: "пометка", cls: "type-hand", sample: "это я!", spec: "Caveat · только акценты" },
  ];
  return (
    <section id="type" className="bg-butter">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <SectionHead
          index="04"
          label="шрифты"
          title="моно + характер"
          lead="matrianmono — фирменный шрифт для текста, навигации и подписей. для крупных заголовков — широкий, чуть мультяшный гротеск, который держит характер, но не уходит в детскость."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-cloud p-8">
            <p className="type-label text-zenith">заголовки · Unbounded</p>
            <p className="mt-6 font-display text-6xl font-extrabold leading-none text-ink md:text-7xl">
              Аа Юю
            </p>
            <p className="mt-4 font-display text-xl font-semibold text-ink">
              весёлые вещицы из ткани
            </p>
            <p className="type-caption mt-6 text-ink-soft">
              альтернатива — Yeseva One, если захочется больше «редакционности»:
            </p>
            <p className="mt-2 font-display-alt text-3xl text-ink">весёлые вещицы из ткани</p>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] bg-ink p-8 text-milk">
            <p className="type-label opacity-70">текст · MatrianMono</p>
            <p className="mt-6 font-mono text-6xl leading-none md:text-7xl">Аа 01</p>
            <p className="type-body mt-4 opacity-90">
              абвгдеёжзийклмнопрстуфхцчшщъыьэюя
              <br />
              0123456789 → * × % «» —
            </p>
            <p className="type-caption mt-6 rounded-xl border border-milk/30 p-3 opacity-80">
              файлы matrianmono пока не загружены — сейчас на его месте похожий моноширинный
              шрифт. пришлёшь файлы — подключу настоящий.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-ink/15 rounded-[2rem] bg-cloud px-6 md:px-10">
          {scale.map((s, i) => (
            <Reveal
              key={s.tag}
              delay={i * 50}
              className="grid items-baseline gap-2 py-5 md:grid-cols-12 md:gap-6"
            >
              <span className="type-label text-ink-soft md:col-span-2">{s.tag}</span>
              <span className={cn(s.cls, "text-ink md:col-span-7")}>{s.sample}</span>
              <span className="type-caption text-ink-soft md:col-span-3 md:text-right">
                {s.spec}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
      <Ruffle className="ruffle-butter -mb-px translate-y-full" />
    </section>
  );
}

/* ——— 05 графика ——— */
export function Graphics() {
  return (
    <section id="graphics" className={cn(wrap, "py-24 md:py-32")}>
      <SectionHead
        index="05"
        label="графика"
        title="рюшка — главный приём"
        lead="«рюша» — это и есть оборка. волнистый край с подола бабочки становится фирменным элементом: им сшиваются секции, обрамляются фото и стикеры."
      />

      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="overflow-hidden rounded-[2rem] border bg-cloud md:col-span-7">
          <div className="bg-sky p-8 pb-4">
            <p className="type-label text-ink">край-рюшка между секциями</p>
          </div>
          <Ruffle className="ruffle-sky ruffle-lg" />
          <div className="p-8 pt-6">
            <Ruffle className="ruffle-pink" />
            <div className="h-6" />
            <Ruffle className="ruffle-butter ruffle-lg" />
            <div className="h-6" />
            <Ruffle className="ruffle-zenith" />
            <p className="type-caption mt-6 text-ink-soft">
              три размера: мелкая (подписи, кнопки), средняя (карточки), крупная (секции)
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-6 md:col-span-5">
          <div className="flex flex-1 items-center justify-center rounded-[2rem] bg-ruffle p-8">
            <div className="scallop-frame bg-cloud px-8 py-10 text-center">
              <p className="type-label text-ink-soft">рамка-рюшка</p>
              <p className="type-h3 mt-2 text-ink">sold out</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex aspect-square flex-col items-center justify-center rounded-[2rem] border bg-cloud p-4">
              <span className="font-display text-7xl font-extrabold leading-none text-shoe">*</span>
              <p className="type-caption mt-2 text-center text-ink-soft">звёздочка-сноска</p>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-[2rem] border bg-cloud p-4">
              <Arrow className="w-20 text-zenith" />
              <Arrow className="mt-1 w-16 rotate-12 text-ink" flip />
              <p className="type-caption mt-2 text-center text-ink-soft">тонкие стрелки</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6 flex flex-wrap items-center gap-3 rounded-[2rem] bg-sky-gradient p-8">
        <p className="type-label w-full text-zenith">стикеры и пометки</p>
        <Sticker>click me</Sticker>
        <Sticker className="bg-butter">новинка</Sticker>
        <Sticker className="bg-ruffle">sold out</Sticker>
        <Sticker className="bg-sky">b2b</Sticker>
        <Sticker className="border-dashed bg-transparent">концепция / визуализация</Sticker>
        <span className="type-hand ml-2 text-zenith">← от руки — только акцентами</span>
      </Reveal>
    </section>
  );
}

/* ——— 06 бабочка ——— */
export function Mascot() {
  const keep = [
    "чёрные кудри и усики-шарики",
    "розовое платье с волнистым подолом",
    "кремовая рюша-перевязь",
    "чёрная сумочка с зелёной кнопкой",
    "красные туфельки и белые носочки",
    "голубые крылья, как в логотипе",
  ];
  const moves = [
    "летит навстречу алёне",
    "покачивается в воздухе",
    "садится на край фото",
    "показывает рукой на кейс",
    "перелетает между секциями",
    "машет и улетает вверх",
  ];
  return (
    <section id="hero" className="relative overflow-hidden bg-sky-gradient">
      <Ruffle className="ruffle-milk" />
      <div className={cn(wrap, "py-20 md:py-28")}>
        <SectionHead
          index="06"
          label="персонаж"
          title="бабочка рюши"
          lead="маскот — полноценный участник истории. дружелюбная, любопытная, немного озорная. появляется в ключевых местах, а не висит на экране постоянно. в 3d — как будто сшита из гладкой ткани, без пластика и пушистости."
        />
        <div className="grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="group relative mx-auto max-w-sm">
              <img
                src={brandAssets.mascot}
                alt="Бабочка рюши в полный рост"
                loading="lazy"
                width={1200}
                height={1068}
                className="animate-bob w-full drop-float transition-transform duration-500 group-hover:scale-105"
              />
              <span className="type-hand absolute -right-2 top-4 rotate-6 text-zenith">
                привет!
              </span>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-7">
            <Reveal className="rounded-[1.5rem] bg-cloud p-6 shadow-soft">
              <p className="type-label text-zenith">сохраняем всегда</p>
              <ul className="type-caption mt-4 space-y-2 text-ink">
                {keep.map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-shoe">*</span>
                    {k}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="rounded-[1.5rem] bg-cloud p-6 shadow-soft">
              <p className="type-label text-zenith">как двигается</p>
              <ol className="type-caption mt-4 space-y-2 text-ink">
                {moves.map((m, i) => (
                  <li key={m} className="flex gap-3">
                    <span className="text-ink-soft">0{i + 1}</span>
                    {m}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 07 фото ——— */
export function Photo() {
  const rules = [
    ["ракурс", "снизу вверх, много неба над головой"],
    ["движение", "прыжок, полёт, развевающаяся ткань"],
    ["цвет", "одежда и предметы — из палитры, небо — естественное"],
    ["товары", "только реальные вещи рюши; концепции подписываем"],
  ];
  const mood = [
    { t: "облака и холмы", d: "сказочный, но настоящий пейзаж", cls: "bg-sky" },
    { t: "плюшевое 3d", d: "объёмные мягкие предметы", cls: "bg-ruffle" },
    { t: "интерфейс-игрушка", d: "папки, кнопки «назад», статус-бар", cls: "bg-butter" },
    { t: "надписи от руки", d: "мелкие живые пометки", cls: "bg-cloud border" },
  ];
  return (
    <section id="photo" className={cn(wrap, "py-20 md:py-28")}>
      <SectionHead
        index="07"
        label="фото и настроение"
        title="в небе, в движении"
        lead="фото из портфолио задаёт тон всему сайту: глубокое небо, лёгкая ткань, яркие акценты. рядом — то, что берём из мудборда."
      />
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="relative md:col-span-5">
          <img
            src={brandAssets.alena}
            alt="Алёна в прыжке на фоне неба"
            loading="lazy"
            width={1000}
            height={1820}
            className="aspect-[3/4] w-full rotate-180 rounded-[2rem] object-cover"
          />
          <span className="type-label absolute bottom-5 left-5 rounded-full bg-cloud px-3 py-2 text-ink">
            можно переворачивать — как в слайде «я это»
          </span>
        </Reveal>
        <div className="flex flex-col gap-6 md:col-span-7">
          <Reveal className="rounded-[2rem] border bg-cloud p-6 md:p-8">
            <dl className="divide-y divide-ink/10">
              {rules.map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 py-3">
                  <dt className="type-label pt-0.5 text-zenith">{k}</dt>
                  <dd className="type-body col-span-2 text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {mood.map((m, i) => (
              <Reveal key={m.t} delay={i * 80} className={cn("rounded-[1.5rem] p-5", m.cls)}>
                <p className="type-h3 text-ink">{m.t}</p>
                <p className="type-caption mt-2 text-ink/70">{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 09 голос ——— */
export function Voice() {
  return (
    <section id="voice" className={cn(wrap, "py-20 md:py-28")}>
      <SectionHead
        index="09"
        label="голос"
        title="двое говорят по-разному"
        lead="у сайта два рассказчика, и это слышно в текстах."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-[2rem] bg-zenith p-8 text-milk">
          <p className="type-label opacity-70">алёна · уверенно и по делу</p>
          <p className="type-h3 mt-6">
            «привет! я алёна — бренд-менеджер. создаю и развиваю бренды, продукты и
            коллаборации.»
          </p>
          <p className="type-caption mt-6 opacity-80">
            короткие фразы, конкретика, цифры только подтверждённые
          </p>
        </Reveal>
        <Reveal delay={120} className="relative rounded-[2rem] bg-ruffle p-8">
          <ButterflyMark className="absolute right-6 top-6 h-10 bg-cloud" />
          <p className="type-label text-ink/70">бабочка · дружелюбно и с восклицаниями</p>
          <p className="type-h3 mt-6 text-ink">
            «привет! а теперь немного обо мне. рюша — бренд весёлых вещиц!»
          </p>
          <p className="type-caption mt-6 text-ink/70">
            строчные буквы, тепло, немного озорства — но без сюсюканья
          </p>
        </Reveal>
      </div>
    </section>
  );
}
