import { cn } from "@/lib/utils";

export function CompassMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-6 w-6", className)} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="3" opacity="0.35" />
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="3" opacity="0.7" />
      <path
        d="M31.5 16.5 26.8 26.8 16.5 31.5l4.7-10.3z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className, tone = "ink" }: { className?: string; tone?: "ink" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display text-[1.35rem] font-extrabold tracking-[-0.04em]",
        tone === "light" ? "text-primary-foreground" : "text-foreground",
        className,
      )}
    >
      SC
      <span className="relative mx-[0.02em] inline-flex h-[0.78em] w-[0.78em] translate-y-[0.02em] items-center justify-center">
        <CompassMark className={cn("h-full w-full", tone === "light" ? "text-primary-foreground" : "text-primary")} />
      </span>
      RELY
    </span>
  );
}
