import type { MediaKey } from "./media";

/** All real content of the portfolio. Add a new case by adding an object here. */

export const intro = {
  hello: "привет! я алёна —\nбренд-менеджер.",
  text: "создаю и развиваю бренды, продукты и коллаборации. в этом портфолио расскажу о главном проекте — «рюше», где я отвечаю за айдентику, стратегию, новые коллекции и развитие b2b- и b2c-направлений.",
};

export const brandSpeech = [
  "привет! а теперь немного обо мне.",
  "«рюша» — бренд весёлых вещиц!",
  "мы не ограничиваем себя рамками и создаём уникальные текстильные изделия: от единичных продаж до больших корпоративных проектов.",
  "а ещё мы очень любим коллаборации! вот несколько примеров ↓",
];

export const directions: { title: string; tag: string; image: MediaKey; href: string }[] = [
  { title: "коллаборации с брендами", tag: "b2b", image: "nomnom-pink-look", href: "#nomnom" },
  { title: "корпоративные заказы и мерч", tag: "b2b", image: "clair-3", href: "#clair" },
  { title: "текстильный декор заведений", tag: "b2b", image: "decor-table", href: "#decor" },
  { title: "мастер-классы и события", tag: "b2c", image: "mk-spring", href: "#workshops" },
  { title: "эксперименты и концепции", tag: "r&d", image: "benedict-parts", href: "#concepts" },
];

export const nomnom = {
  title: "рюша × номном",
  dates: "25 августа — 25 сентября",
  lead: "совместная лимитированная коллекция текстильных сумок для кофейни номном.",
  task: "разработать уникальный дизайн текстильных сумок и организовать запуск совместной лимитированной коллекции, которая станет дополнительным продуктом кофейни и частью её визуальной коммуникации с аудиторией.",
  role: [
    "концепция совместной коллекции",
    "дизайн текстильных сумок",
    "организация производства",
    "работа с иллюстраторами",
    "типография и другие подрядчики",
    "контент-план на месяц коллаборации",
    "продвижение коллекции",
    "координация запуска и всех участников",
  ],
  numbers: [
    { value: "2 дня", label: "полный sold out стартовой партии" },
    { value: "+4 партии", label: "дошили после успешного запуска" },
    { value: "+250%", label: "средний рост выручки кофейни" },
  ],
  outcomes: [
    "очереди перед открытием кофейни",
    "рост аудитории на 10%",
    "запросы на коллаборацию от сети липецких кофеен и воронежской булочной",
    "ещё одно сотрудничество с номном, запланированное на зиму",
  ],
  drop: "дроп лимитированной коллекции внутри коллаборации + ещё одна волна ажиотажа",
};

export const nomnomStories: MediaKey[] = ["nomnom-day2", "nomnom-stock", "nomnom-pink-drop"];

export const marqueeStories: MediaKey[][] = [
  ["story-b1", "story-b2", "story-b3", "story-b4", "story-b5", "story-b6", "story-b7", "story-b8", "story-b9", "story-a1", "story-a2", "story-a3"],
  ["story-b10", "story-b11", "story-b12", "story-b13", "story-b14", "story-b15", "story-b16", "story-b17", "story-b18", "story-a4", "story-a5", "story-a6"],
];

export const partners = ["кофейня номном", "салон красоты clair", "only pro", "кафе «кружок»", "хомашенька", "сеть кофеен соул", "бар салют"];

export type Case = {
  id: string;
  label: string;
  title: string;
  lead: string;
  points: string[];
  note?: string;
  images: MediaKey[];
  tone: "sky" | "ruffle" | "butter";
};

export const cases: Case[] = [
  {
    id: "clair",
    label: "кейс 02 · коллаборация",
    title: "рюша × clair",
    lead: "коллаборация с топовым салоном красоты clair в рамках блогерской рассылки.",
    points: [
      "создание ощущения «гостинца от бабули»",
      "дизайн текстильного оформления корзинок",
      "пошив 30 наборов с вышивкой",
    ],
    images: ["clair-1", "clair-2", "clair-3"],
    tone: "ruffle",
  },
  {
    id: "decor",
    label: "кейс 03 · декор заведения",
    title: "текстильный декор номном",
    lead: "оформление кофейни номном текстильным декором.",
    points: [
      "дизайн и пошив скатертей-пирожных",
      "текстильные букеты на столиках",
      "розовые куверты с ручной вышивкой",
    ],
    note: "текстильные цветы на столиках, в том числе, служили рекламой для предстоящего весеннего мастер-класса по букетам от рюши",
    images: ["decor-hall", "decor-couvert", "decor-table"],
    tone: "butter",
  },
  {
    id: "homa",
    label: "кейс 04 · подарок блогеру",
    title: "рюша × хомашенька",
    lead: "подарок блогерке-владелице бренда брелоков — двухметровая подушка-обвес со съёмными элементами.",
    points: ["дизайн изделия", "пошив"],
    images: ["homa-object", "homa-room", "homa-hand"],
    tone: "sky",
  },
];

export const workshops: { title: string; image: MediaKey }[] = [
  { title: "«весенний букет»", image: "mk-spring" },
  { title: "«дофаминовый»", image: "mk-dopamine" },
  { title: "«ёлочные игрушки»", image: "mk-xmas" },
];

export const brioche = {
  title: "кофе.бриошь × рюша",
  lead: "разработка коллаборации с воронежской булочной — сумочка в виде их фирменной булочки смородина-маскарпоне.",
  start: "старт — осень 2026",
  composition: ["блестящий атлас", "нежная молочная рюшка", "ярко-смородиновая подкладка", "регулируемый ремешок", "вышивка"],
  note: "визуализация сгенерирована ии по моему эскизу",
  images: ["brioche-poster", "brioche-bags", "brioche-bun"] as MediaKey[],
};

export const benedict = {
  title: "eggsellent рюша",
  subtitle: "текстильный бенедикт",
  lead: "разработка визуализации коллаборации: брелок-бенедикт и вариант запуска через мастер-класс — вовлечение аудитории, участие в процессе, причастность к бренду.",
  slides: [
    { image: "benedict-cover" as MediaKey, caption: "концепция коллаборации" },
    { image: "benedict-parts" as MediaKey, caption: "состав: мягкая бриошь, атласный лосось, 2 смешных яйца, одеялко-голландез" },
    { image: "benedict-recipe" as MediaKey, caption: "«рецепт» — сценарий мастер-класса" },
    { image: "benedict-bag" as MediaKey, caption: "финал: брелок на сумке" },
    { image: "benedict-mk" as MediaKey, caption: "как могла бы выглядеть афиша для соцсетей" },
  ],
};

export const contacts = [
  { label: "instagram рюши", value: "@brand.ryusha", href: "https://www.instagram.com/brand.ryusha?vrfl=Nmc2ZGZlZXJ3dGR1" },
  { label: "мой instagram", value: "@galanova.a.v", href: "https://www.instagram.com/galanova.a.v?cplk=MXF4MHMwbWZ5MHVl&utm_source=qr" },
  { label: "telegram", value: "@galanova_av", href: "https://t.me/galanova_av" },
  { label: "почта", value: "algoloshapova@yandex.ru", href: "mailto:algoloshapova@yandex.ru" },
];
