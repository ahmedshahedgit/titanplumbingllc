import { motion } from "motion/react";
import { ShieldCheck, Check } from "lucide-react";
import { IMG, LICENSE } from "@/lib/site";
import { Reveal } from "./ui";

const values = [
  { word: "Fast", text: "Prompt response and efficient work." },
  { word: "Clean", text: "Tidy job sites and clean repairs." },
  { word: "Honest", text: "Straight answers, no upselling." },
];
const themes = ["Reliable service", "Affordable plumbing solutions", "Transparent communication", "Professional workmanship", "Customer-first service"];

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" />Why choose us</p>
            <h2 className="text-6xl font-extrabold uppercase leading-[0.85] text-ink sm:text-8xl">Built<br />on <span className="text-primary">trust.</span></h2>
          </Reveal>
          <div className="mt-10 flex flex-col">
            {values.map((v, i) => (
              <motion.div key={v.word} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} className="group flex items-baseline justify-between gap-4 border-t py-5">
                <span className="font-display text-5xl font-extrabold uppercase text-ink transition-colors group-hover:text-primary sm:text-6xl">{v.word}</span>
                <span className="max-w-[12rem] text-right text-sm text-muted-foreground">{v.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden rounded-3xl">
            <img src={IMG.after} alt="Clean professional pipe installation" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </motion.div>
          <Reveal delay={0.1}>
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl bg-ink p-7 text-on-ink shadow-soft sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary"><ShieldCheck className="h-7 w-7 text-primary-foreground" /></span>
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold uppercase sm:text-3xl">Licensed • Insured • Bonded</p>
                  <p className="font-mono text-sm text-primary">{LICENSE}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {themes.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-on-ink/85"><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
