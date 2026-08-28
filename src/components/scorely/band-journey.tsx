import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const bands = ["5.0", "5.5", "6.0", "6.5", "7.0", "7.5+"];

export function BandJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 40%"] });
  const draw = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const drift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Section>
      <SectionHeading
        eyebrow="The journey"
        title="From where you are to where you are heading."
        description="A preparation path, not a promise. You practise, the tutor points at the next step, and the band you record moves because the work moved."
        align="center"
      />

      <div ref={ref} className="relative mt-16" style={{ perspective: "1400px" }}>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-56 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* particles */}
        {[12, 28, 44, 62, 78, 91].map((left, i) => (
          <motion.span
            key={left}
            className="pointer-events-none absolute top-1/2 h-1.5 w-1.5 rounded-full bg-primary/40"
            style={{ left: `${left}%` }}
            animate={{ y: [0, -26, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}

        <motion.div style={{ x: drift }} className="relative">
          <svg viewBox="0 0 1000 160" className="h-40 w-full sm:h-48" aria-hidden="true">
            <path
              d="M20 120 C 200 120, 240 70, 400 70 S 640 40, 760 40 S 940 20, 980 20"
              fill="none"
              stroke="var(--border)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <motion.path
              d="M20 120 C 200 120, 240 70, 400 70 S 640 40, 760 40 S 940 20, 980 20"
              fill="none"
              stroke="var(--violet)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: draw }}
            />
          </svg>

          <div className="-mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {bands.map((b, i) => {
              const isFirst = i === 0;
              const isLast = i === bands.length - 1;
              return (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <span
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl border font-display text-base font-extrabold transition-transform duration-300 hover:-translate-y-1",
                      isLast
                        ? "border-primary bg-primary text-primary-foreground shadow-lift"
                        : isFirst
                          ? "border-primary/50 bg-card text-primary shadow-soft"
                          : "border-border bg-card text-foreground shadow-soft",
                    )}
                  >
                    {b}
                  </span>
                  <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                    {isFirst ? "Now" : isLast ? "Target" : "\u00A0"}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
