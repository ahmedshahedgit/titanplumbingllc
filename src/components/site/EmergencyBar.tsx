import { motion } from "motion/react";
import { Siren, Zap, BadgeCheck, Receipt } from "lucide-react";

const items = [
  { icon: Siren, title: "24/7 Emergency", text: "Call or text any time." },
  { icon: Zap, title: "Fast Response", text: "Prompt help when it matters." },
  { icon: BadgeCheck, title: "Licensed Plumbers", text: "Licensed • Insured • Bonded." },
  { icon: Receipt, title: "Upfront Pricing", text: "Clear before work begins." },
];

export function EmergencyBar() {
  return (
    <section aria-label="Service highlights" className="relative z-10 mx-auto -mt-24 max-w-7xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
        <div className="flex items-center gap-3 border-b bg-ink px-6 py-3 text-on-ink">
          <span className="animate-pulse-ring h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="eyebrow">Emergency plumbing line open</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative border-b p-6 last:border-b-0 sm:p-7 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
              <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold uppercase text-ink">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
