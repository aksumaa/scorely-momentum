import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Section, SectionHeading } from "./primitives";

const marks = [
  {
    n: "01",
    title: "Create your free account",
    body: "Google or phone. About a minute. No card, no trial clock.",
  },
  {
    n: "02",
    title: "Open the skill that’s leaking",
    body: "Speaking if you freeze. Writing if you stall. Reading if the clock wins.",
  },
  {
    n: "03",
    title: "Ask, then go again",
    body: "The tutor gives one next step. You practise it. Repeat until the band feels honest.",
  },
];

function Mark({ index, total }: { index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const opacity = useTransform(p, [0, 1], [0.15, 1]);
  const y = useTransform(p, [0, 1], [70, 0]);
  const rotateX = useTransform(p, [0, 1], [12, 0]);
  const scale = useTransform(p, [0, 1], [0.94, 1]);
  const mark = marks[index]!;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, rotateX, scale, transformPerspective: 1200 }}
      className="relative grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
    >
      <div className="relative">
        <span className="pointer-events-none block select-none font-display text-[4.5rem] font-extrabold leading-none tracking-[-0.06em] text-primary/15 sm:text-[7rem]">
          {mark.n}
        </span>
        <span className="absolute inset-0 -z-10 blur-3xl" aria-hidden="true">
          <span className="block h-full w-full rounded-full bg-primary/20" />
        </span>
      </div>
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
        <h3 className="text-balance font-display text-xl font-extrabold leading-snug sm:text-2xl">
          {mark.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{mark.body}</p>
      </div>
      {index < total - 1 ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 left-6 h-8 w-px bg-gradient-to-b from-primary/50 to-transparent sm:left-10"
        />
      ) : null}
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <Section id="how-it-works" className="scroll-mt-24 overflow-hidden">
      <SectionHeading
        eyebrow="How it works"
        title="Three marks in the margin."
        description="No onboarding maze. Three moves, then you are practising."
      />
      <div ref={ref} className="relative mt-14 grid gap-16 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12">
        <div className="relative hidden w-px bg-border lg:block">
          <motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute inset-0 w-px bg-gradient-to-b from-primary via-primary/70 to-primary/10"
          />
        </div>
        <div className="grid gap-16">
          {marks.map((m, i) => (
            <Mark key={m.n} index={i} total={marks.length} />
          ))}
        </div>
      </div>
    </Section>
  );
}
