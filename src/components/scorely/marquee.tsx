const items = [
  "Speaking",
  "Writing",
  "Reading",
  "Listening",
  "Academic",
  "General Training",
  "AI tutor",
  "Progress tracking",
  "Always free",
];

export function StatementStrip() {
  return (
    <div className="border-y border-border bg-secondary/50 py-6">
      <p className="mb-5 px-5 text-center font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
        Four skills. One focused preparation experience.
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-8 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {item}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
