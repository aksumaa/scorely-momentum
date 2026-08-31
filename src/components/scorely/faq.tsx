import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is Scorely really free?",
    a: "Yes. Every skill and every tool is free to use — no card, no trial clock, no locked sections.",
  },
  {
    q: "Do you run mock tests?",
    a: "You practise with realistic IELTS tasks in each skill — speaking cue cards, writing tasks, timed reading passages and listening sections — rather than a single scored sitting.",
  },
  {
    q: "Which exam is this for?",
    a: "IELTS, both Academic and General Training. The tasks change with the paper you choose; the tools stay the same.",
  },
  {
    q: "How does the AI tutor help?",
    a: "Ask it a question about your practice and it gives one concrete next step — what to change and what to practise next — instead of a general explanation.",
  },
  {
    q: "Can I use Scorely on my phone?",
    a: "Yes. Scorely runs in the browser and is built to work on a phone, so you can practise speaking or reading wherever you are.",
  },
  {
    q: "Do I need an account?",
    a: "You need a free account so your practice and progress are saved between sessions. Signing up takes about a minute with Google or a phone number.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="scroll-mt-24 bg-secondary/40">
      <SectionHeading eyebrow="FAQ" title="Questions in the margin." />
      <div className="mt-12 grid gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card transition-colors duration-300",
                  isOpen ? "border-primary/40 shadow-soft" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors",
                      isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                        {f.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
