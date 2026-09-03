import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { CtaButton } from "./cta-button";
import { SCORELY_URL } from "./primitives";
import { CompassMark } from "./brand";
import { SpeakingPanel, WritingPanel, ProgressPanel } from "./product-ui";

function FloatCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lift backdrop-blur"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <div id="top" ref={ref} className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-faint [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            IELTS preparation, built around your progress
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance text-[2.6rem] font-extrabold leading-[1.03] sm:text-6xl lg:text-[4.2rem]"
          >
            Know where you are.
            <br />
            Know what to improve.
            <br />
            <span className="text-gradient-violet">Reach your target band.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Practise Speaking, Writing, Reading and Listening with AI guidance and progress tracking built around
            your IELTS preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <CtaButton href={SCORELY_URL} size="lg">
              Start for free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CtaButton>
            <CtaButton href="#how-it-works" variant="ghost" size="lg">
              <Play className="h-4 w-4" />
              See how it works
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <CompassMark className="h-3.5 w-3.5 text-primary" /> Academic · General Training
            </span>
            <span>No paywall</span>
            <span>Phone · Tablet · Desktop</span>
          </motion.div>
        </div>

        <motion.div style={{ y, rotate, scale }} className="relative mx-auto w-full max-w-xl">
          <div className="relative [perspective:1400px]">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 8 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] border border-border bg-card p-3 shadow-lift sm:p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div className="flex min-w-0 items-center gap-2">
                  <CompassMark className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate text-xs font-semibold text-muted-foreground">Your desk</span>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-secondary-foreground">
                  Academic
                </span>
              </div>
              <div className="grid gap-3">
                <SpeakingPanel />
                <div className="grid gap-3 sm:grid-cols-2">
                  <WritingPanel />
                  <ProgressPanel />
                </div>
              </div>
            </motion.div>

            <FloatCard delay={0.5} className="absolute -left-4 top-24 hidden sm:block lg:-left-14">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Writing</p>
              <p className="font-display text-sm font-bold text-foreground">5.5 → 6.5</p>
            </FloatCard>

            <FloatCard delay={0.75} className="absolute -right-3 top-6 hidden sm:block lg:-right-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Target</p>
              <p className="font-display text-lg font-extrabold text-primary">7.5</p>
            </FloatCard>

            <FloatCard delay={1} className="absolute -bottom-6 right-4 hidden sm:block lg:right-0">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> AI feedback ready
              </p>
            </FloatCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
