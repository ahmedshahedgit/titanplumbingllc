import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Phone, CalendarCheck, Menu, X, ShieldCheck } from "lucide-react";
import { IMG, HERO_VIDEO_URL, NAV, PHONE_DISPLAY, PHONE_TEL, LICENSE, SMS } from "@/lib/site";
import { MagneticButton } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3 text-on-ink">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary font-display text-xl font-extrabold text-primary-foreground">T</span>
          <span className="truncate font-display text-xl font-bold uppercase tracking-wide">Titan Plumbing</span>
        </a>
        <div className="flex items-center gap-2">
          <a href={PHONE_TEL} className="hidden items-center gap-2 rounded-full bg-on-ink/10 px-4 py-2.5 text-sm font-bold text-on-ink backdrop-blur-md transition-colors hover:bg-primary md:inline-flex">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-on-ink/10 text-on-ink backdrop-blur-md transition-colors hover:bg-primary">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-5 rounded-2xl bg-ink/95 p-3 shadow-soft backdrop-blur-lg sm:mx-8 md:ml-auto md:mr-8 md:w-80">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-display text-lg font-semibold uppercase text-on-ink transition-colors hover:bg-on-ink/10 hover:text-primary">{n.label}</a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-36 pt-32 sm:pb-44">
      <Nav />
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        {HERO_VIDEO_URL ? (
          <video className="h-full w-full object-cover" src={HERO_VIDEO_URL} poster={IMG.hero} autoPlay muted loop playsInline preload="none" />
        ) : (
          <img src={IMG.hero} alt="Plumber tightening copper pipes" width={1920} height={1088} className="animate-slow-zoom h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity }} className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="eyebrow mb-6 flex items-center gap-3 text-primary">
          <span className="h-px w-10 bg-primary" /> Titan Plumbing, LLC
        </motion.p>
        <h1 className="font-display text-[clamp(3.2rem,13vw,10rem)] font-extrabold uppercase leading-[0.82] text-on-ink">
          {["Plumbing,", "without the"].map((l, i) => (
            <span key={l} className="block overflow-hidden">
              <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}>{l}</motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span className="block text-primary" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.39, ease }}>stress.</motion.span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease }} className="max-w-lg">
            <p className="text-lg text-on-ink/85 sm:text-xl">Reliable, affordable plumbing solutions for El Paso, IL and surrounding communities.</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-ink-muted">
              <span className="inline-flex items-center gap-2 font-bold text-on-ink"><ShieldCheck className="h-4 w-4 text-primary" />Licensed • Insured • Bonded</span>
              <span>{LICENSE}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85, ease }} className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton href={PHONE_TEL}>
              <Phone className="h-5 w-5" />
              <span className="flex flex-col items-start leading-tight"><span className="text-[0.65rem] opacity-80">Call or text</span>{PHONE_DISPLAY}</span>
            </MagneticButton>
            <MagneticButton href={SMS} variant="ghost"><CalendarCheck className="h-5 w-5" />Book a plumber</MagneticButton>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="eyebrow mt-10 inline-flex items-center gap-2 text-on-ink-muted">
          <MapPin className="h-4 w-4 text-primary" /> El Paso, IL + surrounding communities
        </motion.p>
      </motion.div>
    </section>
  );
}
