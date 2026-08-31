import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { Mic, PenLine, BookOpen, Headphones, Sparkles, Phone, ArrowRight } from "lucide-react";
import { CompassMark } from "./brand";
import { cn } from "@/lib/utils";

const stages = [
  {
    n: "01",
    title: "Make a free account",
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

/** Bell curve: 0 outside [a,c], 1 at b. */
function useStageOpacity(p: MotionValue<number>, a: number, b: number, c: number) {
  return useTransform(p, [a, b, c], [0, 1, 0]);
}

function SignupCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
      <div className="border-b border-border bg-muted/60 px-4 py-2.5 text-xs font-semibold text-muted-foreground">
        Create your Scorely account
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary font-display text-[0.7rem] text-primary">
            G
          </span>
          Continue with Google
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold">
          <Phone className="h-4 w-4 text-primary" />
          Continue with phone
        </div>
        <div className="flex items-center justify-between rounded-xl bg-secondary px-3 py-2.5 text-xs font-semibold text-secondary-foreground">
          <span>No card required</span>
          <span className="font-mono">~1 min</span>
        </div>
      </div>
    </div>
  );
}

const skillCards = [
  { icon: Mic, label: "Speaking", meta: "Part 2 · cue card" },
  { icon: PenLine, label: "Writing", meta: "Task 2 · band view" },
  { icon: BookOpen, label: "Reading", meta: "Passage 2 · timed" },
  { icon: Headphones, label: "Listening", meta: "Section 3 · notes" },
];

function SkillCard({ icon: Icon, label, meta, hero }: { icon: typeof Mic; label: string; meta: string; hero?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-4 shadow-soft",
        hero ? "border-primary/50 shadow-lift" : "border-border",
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-xl",
          hero ? "bg-primary text-primary-foreground" : "bg-secondary text-primary",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 font-display text-sm font-bold">{label}</p>
      <p className="mt-1 text-[0.7rem] text-muted-foreground">{meta}</p>
    </div>
  );
}

function TutorScene({ p }: { p: MotionValue<number> }) {
  const line1 = useTransform(p, [0.72, 0.79], [0, 1]);
  const line2 = useTransform(p, [0.8, 0.87], [0, 1]);
  const line3 = useTransform(p, [0.88, 0.96], [0, 1]);
  const y1 = useTransform(line1, [0, 1], [14, 0]);
  const y2 = useTransform(line2, [0, 1], [14, 0]);
  const y3 = useTransform(line3, [0, 1], [14, 0]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
      <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2.5">
        <span className="text-xs font-semibold text-muted-foreground">AI tutor</span>
        <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-secondary-foreground">
          Next step
        </span>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <motion.p
          style={{ opacity: line1, y: y1 }}
          className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-muted px-3.5 py-2.5 text-sm text-foreground"
        >
          How do I get from 6.5 to 7 in Writing?
        </motion.p>
        <motion.p
          style={{ opacity: line2, y: y2 }}
          className="max-w-[94%] rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2.5 text-sm text-secondary-foreground"
        >
          Write one extra example in body paragraph 2 — most 6.5 scripts stall on task response.
        </motion.p>
        <motion.div style={{ opacity: line3, y: y3 }} className="rounded-xl border border-primary/25 bg-card p-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Next step</p>
          <ul className="mt-2 space-y-1.5 text-xs font-semibold text-foreground">
            {["Improve task response", "Add specific examples", "Practise another Task 2"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  const s1 = useStageOpacity(p, 0.0, 0.12, 0.34);
  const s2 = useStageOpacity(p, 0.3, 0.5, 0.68);
  const s3 = useStageOpacity(p, 0.64, 0.84, 1.2);

  // signup panel
  const signupY = useTransform(p, [0, 0.34], ["0%", "-60%"]);
  const signupRot = useTransform(p, [0, 0.34], [0, -10]);
  // skills
  const skillsY = useTransform(p, [0.3, 0.5, 0.68], ["30%", "0%", "-45%"]);
  const heroScale = useTransform(p, [0.34, 0.55], [0.9, 1]);
  // tutor
  const tutorY = useTransform(p, [0.64, 0.84], ["40%", "0%"]);
  // desk + compass
  const deskRotate = useTransform(p, [0, 1], [9, -4]);
  const compassRotate = useTransform(p, [0, 1], [0, 220]);
  const compassX = useTransform(p, [0, 1], ["18%", "-6%"]);
  const glow = useTransform(p, [0, 0.5, 1], [0.14, 0.26, 0.2]);

  const stageStyle = (o: MotionValue<number>, extra: Record<string, unknown>) =>
    reduced ? { opacity: 1 } : { opacity: o, ...extra };

  return (
    <section id="how-it-works" className="relative scroll-mt-0">
      <div ref={ref} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-5 sm:px-8">
          <motion.div
            aria-hidden="true"
            style={{ opacity: reduced ? 0.16 : glow }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[120px]"
          />
          <motion.div
            aria-hidden="true"
            style={reduced ? undefined : { rotate: compassRotate, x: compassX }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          >
            <CompassMark className="h-[30rem] w-[30rem] text-primary" />
          </motion.div>

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            {/* narrative */}
            <div className="relative min-h-[13rem] sm:min-h-[15rem]">
              <p className="eyebrow mb-4">Three marks in the margin</p>
              {stages.map((st, i) => {
                const o = [s1, s2, s3][i]!;
                return (
                  <motion.div
                    key={st.n}
                    style={reduced ? { position: "relative", opacity: 1, marginBottom: 24 } : { opacity: o }}
                    className={reduced ? "" : "absolute inset-x-0 top-10"}
                  >
                    <span className="block font-display text-[4.5rem] font-extrabold leading-none tracking-[-0.06em] text-primary/20 sm:text-[7rem]">
                      {st.n}
                    </span>
                    <h3 className="mt-2 text-balance font-display text-2xl font-extrabold leading-tight sm:text-4xl">
                      {st.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {st.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* desk */}
            <div className="relative [perspective:1500px]">
              <motion.div
                style={reduced ? undefined : { rotateY: deskRotate }}
                className="relative mx-auto aspect-[4/3.4] w-full max-w-md rounded-[28px] border border-border bg-card/70 p-3 shadow-lift backdrop-blur sm:aspect-[4/3] sm:p-4"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <CompassMark className="h-4 w-4 text-primary" /> Your desk
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-secondary-foreground">
                    Academic
                  </span>
                </div>

                <div className="relative h-[calc(100%-2.25rem)]">
                  <motion.div
                    style={stageStyle(s1, { y: signupY, rotate: signupRot })}
                    className="absolute inset-x-0 top-0"
                  >
                    <SignupCard />
                  </motion.div>

                  <motion.div style={stageStyle(s2, { y: skillsY })} className="absolute inset-x-0 top-0">
                    <div className="grid grid-cols-2 gap-3">
                      {skillCards.map((c, i) => (
                        <motion.div
                          key={c.label}
                          style={reduced || i > 1 ? undefined : { scale: heroScale }}
                          className={i > 1 ? "opacity-60" : undefined}
                        >
                          <SkillCard {...c} hero={i === 0} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div style={stageStyle(s3, { y: tutorY })} className="absolute inset-x-0 top-0">
                    <TutorScene p={p} />
                  </motion.div>
                </div>
              </motion.div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {stages.map((st, i) => (
                  <motion.span
                    key={st.n}
                    style={reduced ? undefined : { opacity: [s1, s2, s3][i]! }}
                    className="h-1.5 w-10 rounded-full bg-primary"
                  />
                ))}
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                Scroll the desk <ArrowRight className="h-3 w-3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
