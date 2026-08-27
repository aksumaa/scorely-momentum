import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  size?: "md" | "lg";
  className?: string;
};

export function CtaButton({ href, children, variant = "primary", size = "md", className }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-[0.95rem]",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-lift",
    ghost:
      "border border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
    light:
      "bg-background text-primary shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  };
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}
