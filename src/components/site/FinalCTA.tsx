import { motion } from "motion/react";
import { Phone, CalendarCheck, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { AREAS, EMAIL, IMG, LICENSE, MESSENGER_URL, NAV, PHONE_DISPLAY, PHONE_TEL, SMS } from "@/lib/site";
import { MagneticButton, Reveal } from "./ui";

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      <img src={IMG.burst} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full max-h-[900px] w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
      <div className="absolute left-1/2 top-40 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-40">
        <Reveal>
          <p className="eyebrow mb-6 inline-flex items-center gap-2 text-primary"><span className="animate-pulse-ring h-2 w-2 rounded-full bg-primary" />24/7 Emergency</p>
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(3rem,11vw,9rem)] font-extrabold uppercase leading-[0.85] text-on-ink">Got a plumbing <span className="text-primary">emergency?</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-on-ink/80">Need reliable plumbing help? Call or text Titan Plumbing, LLC.</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MagneticButton href={PHONE_TEL} className="text-base"><Phone className="h-5 w-5" />Call now · {PHONE_DISPLAY}</MagneticButton>
          <MagneticButton href={SMS} variant="ghost"><CalendarCheck className="h-5 w-5" />Book a plumber</MagneticButton>
        </Reveal>
        <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-on-ink-muted"><ShieldCheck className="h-4 w-4 text-primary" />Licensed • Insured • Bonded <span className="text-primary">·</span> {LICENSE}</p>
      </div>

      <footer className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-10 border-t border-on-ink/10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold uppercase text-on-ink">Titan Plumbing, LLC</p>
            <p className="mt-3 max-w-xs text-sm text-on-ink-muted">Proudly serving El Paso, IL and surrounding communities with reliable, affordable plumbing solutions.</p>
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-on-ink/20 px-4 py-2.5 text-sm font-bold text-on-ink transition-colors hover:border-primary hover:text-primary"><MessageCircle className="h-4 w-4" />Message us on Facebook</a>
          </div>
          <div className="text-sm text-on-ink-muted">
            <p className="eyebrow mb-4 text-primary">Contact</p>
            <a href={PHONE_TEL} className="flex items-center gap-2 py-1 hover:text-on-ink"><Phone className="h-4 w-4" />+1 {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all py-1 hover:text-on-ink"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a>
            <p className="flex items-center gap-2 py-1"><MapPin className="h-4 w-4" />El Paso, IL 61738</p>
            <p className="mt-3">Licensed • Insured • Bonded<br />{LICENSE}</p>
          </div>
          <div className="text-sm text-on-ink-muted">
            <p className="eyebrow mb-4 text-primary">Service areas</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 lg:grid-cols-1">{AREAS.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <nav className="text-sm text-on-ink-muted">
            <p className="eyebrow mb-4 text-primary">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 lg:grid-cols-1">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}</ul>
          </nav>
        </motion.div>
        <p className="mt-12 text-xs text-on-ink-muted">© {new Date().getFullYear()} Titan Plumbing, LLC. All rights reserved.</p>
      </footer>
    </section>
  );
}
