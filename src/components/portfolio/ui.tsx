import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/identity/primitives";

/** Image that opens full-size on click / tap. */
export function ZoomImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "group relative block cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-zenith",
            className,
          )}
          aria-label={`открыть: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
              imgClassName,
            )}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92svh] w-auto max-w-[94vw] border-0 bg-transparent p-0 shadow-none sm:max-w-[min(94vw,1200px)]">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <img src={src} alt={alt} className="max-h-[88svh] w-auto rounded-[1.5rem] object-contain" />
      </DialogContent>
    </Dialog>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("type-label text-zenith", className)}>{children}</p>;
}

export function SectionTitle({
  kicker,
  title,
  lead,
  className,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="type-h2 mt-4 text-ink">{title}</h2>
      {lead && <p className="type-body mt-5 text-ink-soft">{lead}</p>}
    </Reveal>
  );
}

export const wrap = "mx-auto w-full max-w-7xl px-5 md:px-10";
