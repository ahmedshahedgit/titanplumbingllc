import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { IMG, PHONE_TEL } from "@/lib/site";
import { SectionHead } from "./ui";
import { cn } from "@/lib/utils";

const problems = [
  { name: "Blocked Drain", img: IMG.drain, text: "Slow sinks, standing water or gurgling drains. We clear the blockage and find what caused it." },
  { name: "Burst Pipe", img: IMG.burst, text: "Water where it shouldn’t be. Shut off your main valve if you can, then call or text us right away." },
  { name: "No Hot Water", img: IMG.heater, text: "Cold showers and odd heater noises. We assess, repair or replace your water heater." },
  { name: "Leaking Tap", img: IMG.after, text: "Drips, worn valves and tired faucets. Clean repairs and quality replacements." },
  { name: "Toilet Problems", img: IMG.bathroom, text: "Running, clogged or not flushing. We get your bathroom working properly again." },
  { name: "Water Leaks", img: IMG.before, text: "Hidden leaks, stains and rising bills. We track down the source and fix it." },
  { name: "Sewer / Drain Problems", img: IMG.commercial, text: "Main line backups and septic line issues, handled with care from diagnosis to repair." },
  { name: "Low Water Pressure", img: IMG.hero, text: "Weak flow at taps or showers. We trace the cause through your lines and fixtures." },
];

export function ProblemSelector() {
  const [active, setActive] = useState(0);
  const p = problems[active] ?? problems[0]!;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead eyebrow="Diagnose" title="What’s going wrong?" sub="Tell us what’s happening and find the right plumbing service." />

      {/* Desktop */}
      <div className="mt-14 hidden gap-8 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <ul className="flex flex-col gap-2">
          {problems.map((pr, i) => (
            <li key={pr.name}>
              <button onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} className={cn("relative flex w-full items-center justify-between rounded-2xl px-6 py-4 text-left transition-colors", active === i ? "text-primary-foreground" : "text-ink hover:bg-card")}>
                {active === i && <motion.span layoutId="problem-pill" className="absolute inset-0 rounded-2xl bg-gradient-primary shadow-glow" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative flex items-center gap-4">
                  <span className={cn("font-mono text-xs", active === i ? "opacity-80" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl font-bold uppercase">{pr.name}</span>
                </span>
                <ArrowUpRight className={cn("relative h-5 w-5 transition-transform", active === i && "rotate-45")} />
              </button>
            </li>
          ))}
        </ul>
        <div className="relative min-h-[560px] overflow-hidden rounded-3xl bg-ink shadow-soft">
          <AnimatePresence mode="popLayout">
            <motion.img key={p.name} src={p.img} alt={p.name} loading="lazy" initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 h-full w-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-10">
            <AnimatePresence mode="wait">
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                <p className="eyebrow text-primary">Problem {String(active + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-5xl font-extrabold uppercase text-on-ink">{p.name}</h3>
                <p className="mt-3 max-w-md text-on-ink/80">{p.text}</p>
              </motion.div>
            </AnimatePresence>
            <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"><Phone className="h-4 w-4" />Talk to Titan Plumbing</a>
          </div>
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="mt-10 flex flex-col gap-3 lg:hidden">
        {problems.map((pr, i) => {
          const open = active === i;
          return (
            <div key={pr.name} className={cn("overflow-hidden rounded-2xl border bg-card transition-colors", open && "border-primary")}>
              <button onClick={() => setActive(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left">
                <span className="flex min-w-0 items-center gap-3">
                  <span className={cn("font-mono text-xs", open ? "text-primary" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate font-display text-xl font-bold uppercase text-ink">{pr.name}</span>
                </span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform", open && "rotate-180")} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="px-5 pb-5">
                      <img src={pr.img} alt={pr.name} loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover" />
                      <p className="mt-4 text-sm text-muted-foreground">{pr.text}</p>
                      <a href={PHONE_TEL} className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-primary-foreground"><Phone className="h-4 w-4" />Talk to Titan Plumbing</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
