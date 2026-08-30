import { Mic, PenLine, BookOpen, Headphones, Sparkles, LineChart, GraduationCap, Briefcase, Gift } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";

const items = [
  { icon: Mic, title: "Speaking practice", body: "Cue cards and Part 1–3 prompts you can answer out loud, any time." },
  { icon: PenLine, title: "Writing with band criteria", body: "Task 1 and Task 2 responses reviewed against the four IELTS criteria." },
  { icon: BookOpen, title: "Reading passages", body: "Timed passages with the question types the real paper uses." },
  { icon: Headphones, title: "Listening sections", body: "Section audio with notes, maps and form-completion answers." },
  { icon: Sparkles, title: "AI tutor", body: "Ask a question, get one actionable next step instead of a lecture." },
  { icon: LineChart, title: "Progress tracking", body: "Your bands per skill, kept between sessions so you can see movement." },
  { icon: GraduationCap, title: "Academic", body: "Academic tasks and passages for university-bound candidates." },
  { icon: Briefcase, title: "General Training", body: "General Training letters and everyday texts, same tools." },
  { icon: Gift, title: "Free access", body: "Every skill, every tool. No card, no trial clock." },
];

export function WhyScorely() {
  return (
    <Section id="why-scorely" className="scroll-mt-24 bg-secondary/40">
      <SectionHeading
        eyebrow="Why Scorely"
        title="Practice with a purpose."
        description="Everything on the desk exists because the exam asks for it."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
