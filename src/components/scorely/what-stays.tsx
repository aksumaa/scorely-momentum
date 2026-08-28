import { motion } from "motion/react";
import { Target, History, Mic, TrendingUp } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";

const cards = [
  { icon: Target, label: "Target band", value: "7.5", note: "Set once, visible everywhere" },
  { icon: History, label: "Last result", value: "6.5", note: "Writing · Task 2" },
  { icon: Mic, label: "Speaking Part 2", value: "12", note: "Cue cards to rehearse" },
  { icon: TrendingUp, label: "Progress", value: "+1.0", note: "Across recorded attempts" },
];

const points = [
  { x: 0, y: 78 },
  { x: 60, y: 70 },
  { x: 120, y: 60 },
  { x: 180, y: 48 },
  { x: 240, y: 40 },
  { x: 300, y: 24 },
];

const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

export function WhatStays() {
  return (
    <Section id="what-stays" className="bg-secondary/40">
      <SectionHeading
        eyebrow="04 — What stays"
        title="Practice that doesn’t vanish after the tab closes."
        description="Target band, last result, cue cards you can actually rehearse. Phone, tablet, desktop — same desk."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
        <div className="grid gap-4 sm:grid-cols-2" style={{ perspective: "1200px" }}>
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 34, rotateX: 14 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="mt-4 font-display text-2xl font-extrabold text-foreground">{c.value}</p>
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.note}</p>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-lift sm:p-8">
            <div className="flex items-baseline justify-between gap-3">
              <p className="eyebrow">Recorded attempts</p>
              <span className="font-mono text-xs text-muted-foreground">Week by week</span>
            </div>
            <svg viewBox="0 0 300 90" className="mt-6 h-40 w-full" role="img" aria-label="Progress across recorded practice attempts">
              <defs>
                <linearGradient id="stayFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 45, 70].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="var(--border)" strokeWidth="1" />
              ))}
              <motion.path
                d={`${path} L300 90 L0 90 Z`}
                fill="url(#stayFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path
                d={path}
                fill="none"
                stroke="var(--violet)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
              {points.map((p, i) => (
                <motion.circle
                  key={p.x}
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="var(--card)"
                  stroke="var(--violet)"
                  strokeWidth="2.5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.14 }}
                />
              ))}
            </svg>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your target band, your last result and your saved practice stay with your account — so the next session
              starts where the last one stopped.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
