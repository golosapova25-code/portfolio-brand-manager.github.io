import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { brandAssets } from "./assets";

/** Fades/slides children in when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** РЮША wordmark, recolourable through a text/bg colour class (default: небо). */
export function Logo({ className, label = "рюша" }: { className?: string; label?: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("brand-mask block aspect-[1954/536] bg-sky", className)}
      style={{ "--mask": `url(${brandAssets.logo})` } as CSSProperties}
    />
  );
}

/** The butterfly «Ю» on its own — the brand sign. */
export function ButterflyMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="знак рюши — бабочка"
      className={cn("brand-mask block aspect-[472/536] bg-sky", className)}
      style={{ "--mask": `url(${brandAssets.butterfly})` } as CSSProperties}
    />
  );
}

export function Ruffle({ className }: { className?: string }) {
  return <div aria-hidden className={cn("ruffle-edge w-full", className)} />;
}

/** Hand-drawn style arrow. */
export function Arrow({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden
      className={cn("text-ink", flip && "-scale-x-100", className)}
    >
      <path
        d="M4 44 C 30 10, 66 6, 108 26"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M96 16 L109 26 L94 33"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionHead({
  index,
  label,
  title,
  lead,
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-10 grid gap-5 md:mb-14 md:grid-cols-12", className)}>
      <div className="flex items-baseline gap-3 md:col-span-3">
        <span className="type-label text-zenith">{index}</span>
        <span className="type-label text-ink-soft">{label}</span>
      </div>
      <div className="md:col-span-9">
        <h2 className="type-h2 text-ink">{title}</h2>
        {lead && <p className="type-body mt-4 max-w-2xl text-ink-soft">{lead}</p>}
      </div>
    </Reveal>
  );
}

export function Sticker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "type-label inline-flex items-center gap-1.5 rounded-full border border-ink/80 bg-cloud px-3 py-2 text-ink shadow-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
