import { motion } from "motion/react";
import { Play } from "lucide-react";
import { IMG, REELS } from "@/lib/site";
import { SectionHead } from "./ui";

const posters = [IMG.drain, IMG.heater, IMG.commercial];

export function ReelCards() {
  return (
    <section id="how-we-work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Facebook Reels" title="How we work" sub="See Titan Plumbing in action." />
      </div>
      <div className="no-scrollbar mx-auto mt-12 flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 md:grid md:grid-cols-3 md:overflow-visible">
        {REELS.map((url, i) => {
          const Tag = url ? "a" : "div";
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }} className="w-[78%] shrink-0 snap-center sm:w-[55%] md:w-auto">
              <Tag {...(url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})} className="group relative block aspect-[9/16] overflow-hidden rounded-3xl border-2 border-transparent bg-ink shadow-soft transition-colors hover:border-primary">
                <img src={posters[i]} alt="" loading="lazy" className="h-full w-full object-cover opacity-50 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
                <span className="eyebrow absolute left-5 top-5 rounded-full bg-on-ink/10 px-3 py-1.5 text-on-ink backdrop-blur">Reel {String(i + 1).padStart(2, "0")}</span>
                <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </span>
                <p className="absolute inset-x-5 bottom-5 text-sm text-on-ink/80">{url ? "Watch on Facebook" : "Video coming soon"}</p>
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
