"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const PROJECTS = [
  {
    name: "AeroQueue",
    tagline: "Know your queue before you reach it",
    body:
      "A live airport queue checker built for five personas — departing, arriving and transit passengers, escorts, and airport ops staff. Live queue visualizations, connection-safety checks, and a staff heatmap dashboard.",
    href: "https://www.producthunt.com/products/aeroqueue",
    color: "cobalt" as const,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <path d="M50 8 L58 40 L88 46 L58 52 L50 84 L42 52 L12 46 L42 40 Z" fill="var(--cobalt)" />
      </svg>
    ),
  },
  {
    name: "Live Travel Financial Friend",
    tagline: "Quick rate and want to keep your spending? We got your back.",
    body:
      "A Japanese city-pop styled travel finance and currency converter app (TABI) — fast rate checks with a distinct visual identity, launched on Product Hunt.",
    href: "https://www.producthunt.com/products/live-travel-financial-friend",
    color: "coral" as const,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <circle cx="50" cy="42" r="26" fill="var(--coral)" />
        <path d="M8 82 Q 30 62, 50 82 T 92 82" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "LocalPulse",
    tagline: "Hyperlocal event discovery",
    body: "An app for surfacing what's actually happening nearby, right now.",
    href: "https://www.producthunt.com/products/localpulse",
    color: "teal" as const,
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <path d="M50 12 C 30 12 18 28 18 46 C 18 68 50 90 50 90 C 50 90 82 68 82 46 C 82 28 70 12 50 12 Z" fill="var(--teal)" />
        <circle cx="50" cy="46" r="12" fill="var(--paper)" />
      </svg>
    ),
  },
];

const CARD_BORDER: Record<string, string> = {
  cobalt: "border-cobalt",
  coral: "border-coral",
  teal: "border-teal",
};
const CARD_BG: Record<string, string> = {
  cobalt: "bg-cobalt/10",
  coral: "bg-coral/10",
  teal: "bg-teal/10",
};

export default function AIProjects() {
  return (
    <section id="ai-projects" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 relative">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Strategist who also ships" title="Self-Built AI Projects" />
        <SealStamp text="built solo, shipped live" color="yellow" rotate={-4} className="hidden sm:inline-flex" />
      </div>
      <p className="text-ink-soft max-w-2xl mt-4">
        Outside client work, I design, build and launch full products myself —
        AI-assisted, end to end, from first commit to a live Product Hunt
        launch day.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative bg-paper border-2 ${CARD_BORDER[p.color]} rounded-3xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${CARD_BG[p.color]}`}>
              {p.icon}
            </div>
            <h3 className="font-display font-bold text-2xl mt-2">{p.name}</h3>
            <p className="font-hand text-xl text-coral -mt-1">{p.tagline}</p>
            <p className="text-ink-soft leading-relaxed text-sm flex-1">{p.body}</p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide font-bold text-ink border-2 border-ink rounded-full px-4 py-2 mt-2 hover:bg-ink hover:text-paper transition-colors w-fit"
            >
              View on Product Hunt ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
