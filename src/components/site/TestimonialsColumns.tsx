import { motion } from "motion/react";
import { REVIEWS } from "@/lib/site";
import { SectionHead } from "./ui";

type R = (typeof REVIEWS)[number];
const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

function Column({ items, duration, className }: { items: R[]; duration: number; className?: string }) {
  return (
    <div className={className}>
      <motion.ul animate={{ translateY: "-50%" }} transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }} className="flex flex-col gap-5 pb-5">
        {[0, 1].map((k) =>
          items.map((r) => (
            <li key={`${k}-${r.name}`} aria-hidden={k === 1} className="rounded-3xl border bg-card p-6 shadow-soft">
              <p className="text-[0.95rem] leading-relaxed text-foreground">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-primary text-sm font-extrabold text-primary-foreground">{initials(r.name)}</span>
                <span className="min-w-0 truncate font-bold text-ink">{r.name}</span>
              </div>
            </li>
          )),
        )}
      </motion.ul>
    </div>
  );
}

export function TestimonialsColumns() {
  const cols = [REVIEWS.filter((_, i) => i % 3 === 0), REVIEWS.filter((_, i) => i % 3 === 1), REVIEWS.filter((_, i) => i % 3 === 2)];
  return (
    <section id="stories" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead eyebrow="16 reviews" title="Customer stories" sub="Real experiences from customers who called Titan Plumbing." className="mx-auto text-center [&_p]:mx-auto [&_p]:justify-center" />
      <div className="mask-y mt-14 grid max-h-[740px] gap-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        <Column items={cols[0]!} duration={38} />
        <Column items={cols[1]!} duration={46} className="hidden md:block" />
        <Column items={cols[2]!} duration={42} className="hidden lg:block" />
      </div>
    </section>
  );
}
