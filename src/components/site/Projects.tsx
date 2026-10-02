import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IMG } from "@/lib/site";
import { SectionHead } from "./ui";

// Replace images with real Titan Plumbing project photos.
const projects = [
  { img: IMG.heater, cat: "Hot Water", title: "Water heater installation", text: "Clean, code-minded install with neat supply lines." },
  { img: IMG.bathroom, cat: "Residential", title: "Bathroom plumbing", text: "Fixtures set and lines run for a finished space." },
  { img: IMG.commercial, cat: "Commercial", title: "Mechanical room piping", text: "Organized lines built for long-term reliability." },
];

function ProjectCard({ p, big, i }: { p: (typeof projects)[number]; big?: boolean; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.8 }} className={`group relative overflow-hidden rounded-3xl bg-ink ${big ? "min-h-[420px] lg:row-span-2 lg:min-h-[640px]" : "min-h-[300px]"}`}>
      <motion.img style={{ y }} src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-[116%] w-full -translate-y-[8%] object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="eyebrow rounded-full bg-primary px-3 py-1 text-primary-foreground">{p.cat}</span>
        <h3 className={`mt-4 font-extrabold uppercase text-on-ink ${big ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{p.title}</h3>
        <p className="mt-2 max-w-sm text-sm text-on-ink/75">{p.text}</p>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <SectionHead eyebrow="Projects" title="Plumbing in action" sub="A look at the kind of work we do every week." />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} big={i === 0} i={i} />)}
      </div>
    </section>
  );
}
