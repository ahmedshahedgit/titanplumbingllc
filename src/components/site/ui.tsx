import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, sub, className, dark }: { eyebrow?: string; title: string; sub?: string; className?: string; dark?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="eyebrow mb-4 flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" />{eyebrow}</p>}
      <h2 className={cn("text-5xl font-extrabold uppercase leading-[0.9] sm:text-6xl lg:text-7xl", dark ? "text-on-ink" : "text-ink")}>{title}</h2>
      {sub && <p className={cn("mt-5 max-w-xl text-base sm:text-lg", dark ? "text-on-ink-muted" : "text-muted-foreground")}>{sub}</p>}
    </Reveal>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "outline"; className?: string; external?: boolean };

export function MagneticButton({ href, children, variant = "primary", className, external }: BtnProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const styles = {
    primary: "bg-gradient-primary text-primary-foreground shadow-glow",
    ghost: "border border-on-ink/30 bg-on-ink/5 text-on-ink backdrop-blur-md hover:bg-on-ink/10",
    outline: "border border-ink/15 bg-card text-ink hover:border-primary",
  }[variant];
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.18);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.97 }}
      className={cn("group inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-extrabold uppercase tracking-wider transition-colors sm:px-7", styles, className)}
    >
      {children}
    </motion.a>
  );
}
