import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { CompassMark, Wordmark } from "./brand";
import { CtaButton } from "./cta-button";
import { SCORELY_URL, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section id="start" className="relative scroll-mt-24 overflow-hidden bg-primary px-5 py-24 text-primary-foreground sm:px-8 md:py-32">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <CompassMark className="h-[36rem] w-[36rem] text-primary-foreground" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.08] sm:text-5xl">
            The exam date is coming.
            <br />
            Use the desk.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Create an account and practise speaking, writing, reading, or listening whenever you like. Still free
            tomorrow.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex justify-center">
            <CtaButton href={SCORELY_URL} variant="light" size="lg">
              Start for free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center" aria-label="Scorely home">
          <Wordmark />
        </a>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#ai-tutor" className="hover:text-primary">AI Tutor</a>
          <a href="#how-it-works" className="hover:text-primary">How it works</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href={SCORELY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Start for free
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scorely. IELTS practice for Speaking, Writing, Reading and Listening.
      </p>
    </footer>
  );
}
