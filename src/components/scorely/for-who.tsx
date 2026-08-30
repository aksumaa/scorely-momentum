import { Compass, Target, CalendarClock, UserRound } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";

const people = [
  {
    icon: Compass,
    title: "Starting your IELTS journey",
    body: "Meet all four skills in their real format before the exam does it for you.",
  },
  {
    icon: Target,
    title: "Chasing Band 7+",
    body: "Work the criteria that hold your writing and speaking back, one at a time.",
  },
  {
    icon: CalendarClock,
    title: "Exam date is getting closer",
    body: "Short, timed sessions that fit into the weeks you actually have left.",
  },
  {
    icon: UserRound,
    title: "Studying without a teacher",
    body: "The AI tutor answers your question and hands you the next thing to practise.",
  },
];

export function ForWho() {
  return (
    <Section id="for-who" className="scroll-mt-24">
      <SectionHeading
        eyebrow="For who"
        title="Built for every IELTS learner."
        description="Wherever you are on the way to your target band, the desk is the same."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {people.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift sm:p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
