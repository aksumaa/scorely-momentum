import { Section, SectionHeading, Reveal } from "./primitives";
import { CompassMark } from "./brand";

const included = [
  "Speaking",
  "Writing",
  "Reading",
  "Listening",
  "AI tutor",
  "Writing notes on band criteria",
  "Progress tracking",
  "Academic and General Training",
  "Phone, tablet and desktop",
];

export function FreeAccess() {
  return (
    <Section id="free" className="scroll-mt-24 overflow-hidden">
      <div className="relative rounded-[32px] border border-border bg-card p-8 shadow-soft sm:p-12">
        <CompassMark
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-primary opacity-[0.07]"
        />
        <SectionHeading
          eyebrow="Free access"
          title="Every feature. Zero invoice."
          description="Nothing on the desk sits behind a plan. You practise, you get feedback, you keep your progress."
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {included.map((item, i) => (
            <Reveal key={item} delay={i * 0.04} y={12}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
