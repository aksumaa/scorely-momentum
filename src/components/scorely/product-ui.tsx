import { motion } from "motion/react";
import { Mic, PenLine, BookOpen, Headphones, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function DeskChrome({
  label,
  meta,
  children,
  className,
}: {
  label: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-card shadow-soft", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
        <span className="truncate text-xs font-semibold tracking-wide text-muted-foreground">{label}</span>
        {meta ? (
          <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-secondary-foreground">
            {meta}
          </span>
        ) : null}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

export function BandBar({ label, value, max = 9 }: { label: string; value: number; max?: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="truncate text-xs font-medium text-muted-foreground">{label}</span>
        <span className="shrink-0 font-mono text-sm font-bold text-foreground">{value.toFixed(1)}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}

export function SpeakingPanel() {
  return (
    <DeskChrome label="Speaking · Part 2" meta="1:24">
      <p className="font-display text-lg font-bold leading-snug text-foreground">
        Describe a place you would like to visit again.
      </p>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        <li>· where it is</li>
        <li>· when you went there</li>
        <li>· why you would return</li>
      </ul>
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-secondary px-3 py-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
          <Mic className="h-4 w-4" />
        </span>
        <div className="flex h-8 min-w-0 flex-1 items-center gap-[3px]">
          {Array.from({ length: 34 }).map((_, i) => (
            <motion.span
              key={i}
              className="w-full rounded-full bg-primary/50"
              animate={{ height: [6, 6 + ((i * 7) % 22), 6] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.045, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </DeskChrome>
  );
}

export function WritingPanel() {
  return (
    <DeskChrome label="Writing · Task 2" meta="Band view">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Some people think universities should accept equal numbers of male and female students in every subject.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <div className="rounded-2xl bg-secondary px-4 py-3 text-center">
          <p className="font-display text-3xl font-extrabold text-primary">7.5</p>
          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">Predicted</p>
        </div>
        <div className="grid gap-2.5">
          <BandBar label="Task response" value={7.0} />
          <BandBar label="Coherence" value={7.5} />
          <BandBar label="Lexical resource" value={8.0} />
          <BandBar label="Grammar" value={7.0} />
        </div>
      </div>
    </DeskChrome>
  );
}

export function ReadingPanel() {
  return (
    <DeskChrome label="Reading · Passage 2" meta="08:40 left">
      <p className="text-sm leading-relaxed text-muted-foreground">
        The survey team recorded the migration route for three consecutive seasons before publishing.
      </p>
      <div className="mt-4 space-y-2">
        {["True", "False", "Not Given"].map((opt, i) => (
          <div
            key={opt}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors",
              i === 1 ? "border-primary bg-secondary font-semibold text-secondary-foreground" : "border-border",
            )}
          >
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[0.65rem] font-bold",
                i === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground",
              )}
            >
              {String.fromCharCode(65 + i)}
            </span>
            {opt}
          </div>
        ))}
      </div>
    </DeskChrome>
  );
}

export function ListeningPanel() {
  const rows = [
    ["Library", "North entrance"],
    ["Station", "Platform 2"],
    ["Cafe", "Beside the park"],
    ["Museum", "West wing"],
  ];
  return (
    <DeskChrome label="Listening · Section 3" meta="Map / notes">
      <div className="flex items-center gap-3 rounded-xl bg-secondary px-3 py-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
          <Headphones className="h-4 w-4" />
        </span>
        <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-primary/20">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: ["12%", "78%"] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">02:14</span>
      </div>
      <dl className="mt-4 divide-y divide-border">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-3 py-2.5 text-sm">
            <dt className="truncate text-muted-foreground">{k}</dt>
            <dd className="shrink-0 font-medium text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </DeskChrome>
  );
}

export function TutorPanel() {
  return (
    <DeskChrome label="AI tutor" meta="Next step">
      <div className="space-y-3">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-muted px-3.5 py-2.5 text-sm text-foreground">
          How do I get from 6.5 to 7 in Writing?
        </p>
        <p className="max-w-[92%] rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2.5 text-sm text-secondary-foreground">
          Write one extra example in body paragraph 2 — most 6.5 scripts stall on task response.
        </p>
        <div className="flex items-center gap-2 rounded-xl border border-primary/25 bg-card px-3 py-2.5">
          <Sparkles className="h-4 w-4 shrink-0 text-primary" />
          <span className="truncate text-xs font-semibold text-foreground">Practise another Task 2</span>
        </div>
      </div>
    </DeskChrome>
  );
}

export function ProgressPanel() {
  return (
    <DeskChrome label="Progress" meta="Week by week">
      <div className="grid gap-2.5">
        <BandBar label="Listening" value={7.0} />
        <BandBar label="Reading" value={6.5} />
        <BandBar label="Writing" value={5.5} />
        <BandBar label="Speaking" value={6.0} />
      </div>
    </DeskChrome>
  );
}

export const skillIcons = { Speaking: Mic, Writing: PenLine, Reading: BookOpen, Listening: Headphones };
