import { IMG } from "@/lib/site";
import { SectionHead } from "./ui";

const services = [
  { name: "Residential Plumbing", text: "Repairs and installs for every room of your home.", img: IMG.bathroom },
  { name: "Commercial Plumbing", text: "Dependable service for local businesses.", img: IMG.commercial },
  { name: "Emergency Plumbing", text: "24/7 help when water won’t wait.", img: IMG.burst },
  { name: "Hot Water", text: "Water heater repair and replacement.", img: IMG.heater },
  { name: "Drain & Sewer", text: "Clogs, backups and main line work.", img: IMG.drain },
  { name: "Gas", text: "Careful, professional gas line work.", img: IMG.hero },
];

export function ServicesSlider() {
  const loop = [...services, ...services];
  return (
    <section id="services" className="overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto mb-14 grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:items-end">
        <SectionHead dark eyebrow="Services" title="We fix more than pipes" />
        <p className="max-w-md text-on-ink-muted lg:justify-self-end">From a dripping tap to a full commercial install — one call to Titan Plumbing covers it.</p>
      </div>
      <div className="mask-x group relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <article key={i} aria-hidden={i >= services.length} className="relative h-[380px] w-[280px] shrink-0 overflow-hidden rounded-3xl sm:h-[440px] sm:w-[340px]">
              <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                <span className="mb-3 block h-1 w-10 rounded-full bg-primary" />
                <h3 className="text-3xl font-extrabold uppercase text-on-ink">{s.name}</h3>
                <p className="mt-1 text-sm text-on-ink/75">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
