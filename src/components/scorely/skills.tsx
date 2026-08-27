import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mic, PenLine, BookOpen, Headphones } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { SpeakingPanel, WritingPanel, ReadingPanel, ListeningPanel } from "./product-ui";
import { cn } from "@/lib/utils";

const skills = [
  {
    key: "Speaking",
    icon: Mic,
    line: "Cue card, live.",
    body: "Part 1, 2 and 3. You talk, the clock runs. Fluency is the point — not a script.",
    panel: <SpeakingPanel />,
  },
  {
    key: "Writing",
    icon: PenLine,
    line: "A band. Not a vibe.",
    body: "Task 1 and Task 2 against the criteria the examiner actually uses.",
    panel: <WritingPanel />,
  },
  {
    key: "Reading",
    icon: BookOpen,
    line: "Minutes you can feel.",
    body: "Skim, match, True / False / Not Given — with a clock that matches the room.",
    panel: <ReadingPanel />,
  },
  {
    key: "Listening",
    icon: Headphones,
    line: "Maps, notes, accents.",
    body: "Section 3 the way it lands in the headphones — not a transcript dump.",
    panel: <ListeningPanel />,
  },
];

export function Skills() {
  const [active, setActive] = useState(0);
  const current = skills[active];

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="01 — The desk"
        title="Train for the exam you will actually take."
        description="Practise all four IELTS skills in realistic environments designed around the way the exam works."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
        <Reveal>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible">
            {skills.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex min-w-[13rem] shrink-0 items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:w-full",
                    isActive
                      ? "border-primary/40 bg-card shadow-soft"
                      : "border-border bg-card/40 hover:border-primary/25 hover:bg-card",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors",
                      isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base font-bold text-foreground">{s.key}</span>
                    <span className="block text-sm text-muted-foreground">{s.line}</span>
                    <span
                      className={cn(
                        "mt-1 hidden text-sm leading-relaxed text-muted-foreground lg:block",
                        isActive ? "opacity-100" : "opacity-0 lg:h-0 lg:overflow-hidden",
                      )}
                    >
                      {s.body}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[28px] border border-border bg-secondary/40 p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.panel}
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 px-1 text-sm leading-relaxed text-muted-foreground lg:hidden">{current.body}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
