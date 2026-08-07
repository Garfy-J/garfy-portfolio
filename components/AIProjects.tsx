import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const PROJECTS = [
  {
    name: "AeroQueue",
    tagline: "Know your queue before you reach it",
    body:
      "A live airport queue checker built for five personas — departing, arriving and transit passengers, escorts, and airport ops staff. Live queue visualizations, connection-safety checks, and a staff heatmap dashboard.",
    rotate: -3,
    tape: "left",
  },
  {
    name: "TABI",
    tagline: "Quick rate and want to keep your spending? We got your back.",
    body:
      "A Japanese city-pop styled travel finance and currency converter app — fast rate checks with a distinct visual identity, launched on Product Hunt.",
    rotate: 2,
    tape: "right",
  },
  {
    name: "LocalPulse",
    tagline: "Hyperlocal event discovery",
    body: "An app for surfacing what's actually happening nearby, right now.",
    rotate: -2,
    tape: "left",
  },
  {
    name: "Meraki",
    tagline: "Curated homeware, chosen with intent",
    body:
      "A self-built Next.js storefront for a curated homeware e-commerce brand — design, build and commerce, end to end.",
    rotate: 3,
    tape: "right",
  },
];

export default function AIProjects() {
  return (
    <section id="ai-projects" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 relative">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Strategist who also ships" title="Self-Built AI Projects" />
        <SealStamp text="built solo, shipped live" rotate={-4} className="hidden sm:inline-flex" />
      </div>
      <p className="text-ink-soft max-w-2xl mt-4">
        Outside client work, I design, build and launch full products myself —
        AI-assisted, end to end, from first commit to a live Product Hunt
        launch day.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-16">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="relative bg-paper border border-rule p-6 pt-8 shadow-[4px_6px_0_rgba(23,19,15,0.08)]"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <span
              className="tape"
              style={{
                top: -14,
                [p.tape === "left" ? "left" : "right"]: 24,
                transform: `rotate(${p.tape === "left" ? -8 : 8}deg)`,
              }}
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-3xl">{p.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-jade border border-jade/40 px-2 py-1 whitespace-nowrap">
                Product Hunt
              </span>
            </div>
            <p className="font-hand text-xl text-seal mt-1">{p.tagline}</p>
            <p className="text-ink-soft leading-relaxed mt-3 text-sm">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
