import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Wordmark } from "./brand";
import { CtaButton } from "./cta-button";
import { SCORELY_URL } from "./primitives";
import { cn } from "@/lib/utils";

const links = [
  { label: "Practice", href: "#practice" },
  { label: "Skills", href: "#skills" },
  { label: "AI Tutor", href: "#ai-tutor" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-300 sm:px-8 lg:grid-cols-[auto_1fr_auto]",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <a href="#top" className="flex min-w-0 items-center" aria-label="Scorely home">
          <Wordmark />
        </a>

        <ul className="hidden justify-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={SCORELY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Log in
          </a>
          <CtaButton href={SCORELY_URL}>Start for free</CtaButton>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <CtaButton href={SCORELY_URL} className="hidden sm:inline-flex">
            Start for free
          </CtaButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 grid gap-2">
                <CtaButton href={SCORELY_URL} variant="ghost" size="lg">
                  Log in
                </CtaButton>
                <CtaButton href={SCORELY_URL} size="lg">
                  Start for free
                </CtaButton>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
