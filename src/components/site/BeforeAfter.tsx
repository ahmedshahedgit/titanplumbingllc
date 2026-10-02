import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { IMG } from "@/lib/site";
import { Reveal, SectionHead } from "./ui";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section id="before-after" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead dark eyebrow="Transformation" title="Before / After" sub="Drag the divider to see the difference." />
        <Reveal delay={0.1} className="mt-12">
          <div
            ref={ref}
            className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl sm:aspect-[16/9]"
            onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); update(e.clientX); }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img src={IMG.after} alt="After: new clean plumbing" loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
            <img src={IMG.before} alt="Before: corroded plumbing" loading="lazy" draggable={false} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} className="absolute inset-0 h-full w-full object-cover" />
            <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 text-on-ink backdrop-blur">Before</span>
            <span className="eyebrow absolute right-4 top-4 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">After</span>
            <div className="absolute inset-y-0 w-1 -translate-x-1/2 bg-primary" style={{ left: `${pos}%` }}>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Before and after comparison"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={(e) => { if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5)); if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5)); }}
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-on-ink bg-primary text-primary-foreground shadow-glow"
              >
                <MoveHorizontal className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
