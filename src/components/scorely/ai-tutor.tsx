import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const steps = ["Improve task response", "Add specific examples", "Practise another Task 2"];

function Bubble({
  children,
  side,
  delay,
}: {
  children: React.ReactNode;
  side: "user" | "ai";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex", side === "user" ? "justify-end" : "justify-start")}
    >
      <p
        className={cn(
          "max-w-[88%] rounded-3xl px-5 py-3.5 text-[0.95rem] leading-relaxed",
          side === "user"
            ? "rounded-br-md bg-muted text-foreground"
            : "rounded-bl-md bg-primary text-primary-foreground shadow-soft",
        )}
      >
        {children}
      </p>
    </motion.div>
  );
}

export function AITutor() {
  return (
    <Section id="ai-tutor" className="scroll-mt-24 bg-secondary/40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="02 — The tutor"
          title={
            <>
              Your next step,
              <br />
              not another lecture.
            </>
          }
          description="Ask about band descriptors, task types, timing or a weak skill. You get plain-language coaching you can use in your next practice session — and progress sits beside it, week by week."
        />

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-border bg-card p-5 shadow-lift sm:p-7">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Scorely AI tutor
              </span>
            </div>

            <div className="space-y-3">
              <Bubble side="user" delay={0}>
                How do I get from 6.5 to 7 in Writing?
              </Bubble>
              <Bubble side="ai" delay={0.35}>
                Write one extra example in body paragraph 2 — most 6.5 scripts stall on task response.
              </Bubble>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 rounded-2xl border border-primary/25 bg-secondary/70 p-4"
            >
              <p className="eyebrow mb-3">Next step</p>
              <ul className="space-y-2">
                {steps.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.85 + i * 0.12 }}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="min-w-0 truncate">{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
