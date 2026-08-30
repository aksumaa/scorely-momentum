import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Mail } from "lucide-react";
import { Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const papers = [
  {
    key: "Academic",
    icon: GraduationCap,
    meta: "Discuss both views · Task 2",
    body: "Some people think universities should accept equal numbers of male and female students in every subject.",
    notes: ["Discuss both views", "Give your own opinion", "40 minutes"],
  },
  {
    key: "General Training",
    icon: Mail,
    meta: "Letter · Task 1",
    body: "Write a letter to your neighbour about noise from late-night work.",
    notes: ["Explain the situation", "How it affects you", "Suggest a time"],
  },
];

export function Papers() {
  const [active, setActive] = useState(0);

  return (
    <Section id="practice" className="scroll-mt-24">
      <SectionHeading
        eyebrow="03 — The paper"
        title="Academic or General. Same tools."
        description="Pick the paper you are actually sitting. The tasks change; the tutor, the band criteria and the progress tracking stay exactly where they were."
        align="center"
      />

      <div
        className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8"
        style={{ perspective: "1600px" }}
      >
        {papers.map((p, i) => {
          const Icon = p.icon;
          const isActive = i === active;
          return (
            <motion.button
              key={p.key}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 60, rotateY: i === 0 ? 16 : -16, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: isActive ? 0 : i === 0 ? 7 : -7, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative text-left [transform-style:preserve-3d]",
                isActive ? "z-10" : "z-0",
              )}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.02 : 0.98,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative rounded-[28px] border bg-card p-6 sm:p-8",
                  isActive ? "border-primary/40 shadow-lift" : "border-border shadow-soft",
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-primary/10 blur-2xl transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
                {/* stacked paper depth */}
                <span className="pointer-events-none absolute inset-x-5 -bottom-2 -z-10 h-8 rounded-b-3xl border border-border bg-card/70" />
                <span className="pointer-events-none absolute inset-x-9 -bottom-4 -z-20 h-8 rounded-b-3xl border border-border bg-card/40" />

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-display text-lg font-bold text-foreground">{p.key}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-[0.7rem] font-semibold text-muted-foreground">
                    {p.meta}
                  </span>
                </div>

                <p className="mt-6 font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">
                  {p.body}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.notes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
}
