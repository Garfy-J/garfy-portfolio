"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

type Block = "sky" | "sage" | "stone" | "orange";

const PROJECTS: {
  name: string;
  tagline: string;
  body: string;
  image: string;
  block: Block;
  label?: string;
  phHref?: string;
  demoHref?: string;
}[] = [
  {
    name: "AeroQueue",
    tagline: "Know your queue before you reach it",
    body: "A live airport queue checker built for five personas — departing, arriving and transit passengers, escorts, and airport ops staff. Live queue visualizations, connection-safety checks, and a staff heatmap dashboard.",
    image: "/images/projects/aeroqueue.png",
    block: "sky",
    phHref: "https://www.producthunt.com/products/aeroqueue",
    demoHref: "https://claude.ai/artifact/NGQYpiZoJUUcbB2N4QVf3B",
  },
  {
    name: "TABI (Live Travel Financial Friend)",
    tagline: "Quick rate and want to keep your spending? We got your back.",
    body: "A Japanese city-pop styled travel finance and currency converter app — fast rate checks with a distinct visual identity, launched on Product Hunt.",
    image: "/images/projects/tabi.jpg",
    block: "sage",
    phHref: "https://www.producthunt.com/products/live-travel-financial-friend",
  },
  {
    name: "LocalPulse",
    tagline: "Hyperlocal event discovery",
    body: "An app for surfacing what's actually happening nearby, right now.",
    image: "/images/projects/localpulse.jpg",
    block: "stone",
    phHref: "https://www.producthunt.com/products/localpulse",
  },
  {
    name: "Tomo",
    tagline: "A calm medicine companion for older adults.",
    body: "Pill recognition, dose reminders, a family view with refills and gentle health nudges.",
    image: "/images/projects/tomo.png",
    block: "orange",
    label: "Concept · interactive demo",
    demoHref: "https://claude.ai/artifact/TXTP3reiLDmnPuhFbp1bDa",
  },
  {
    name: "Continuity",
    tagline: "Hand over a business without losing what's in someone's head.",
    body: "Captures an owner's decisions, flags conflicting sources for review, lets the incoming operator practise.",
    image: "/images/projects/continuity.png",
    block: "sky",
    label: "Concept · interactive demo",
    demoHref: "https://claude.ai/artifact/9LbJPnPiH4hCbviA1erM7W",
  },
];

const BLOCK_BG: Record<Block, string> = {
  sky: "bg-sky",
  sage: "bg-sage",
  stone: "bg-stone",
  orange: "bg-orange",
};

export default function AIProjects() {
  return (
    <section id="ai-projects" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 relative">
      <SectionHeading eyebrow="Strategist who also ships" title="Self-Built AI Projects" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Outside client work, I design, build and launch full products myself —
        AI-assisted, end to end, from first commit to a live Product Hunt
        launch day.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="flex flex-col gap-4"
          >
            <div className={`relative aspect-[4/3] overflow-hidden ${BLOCK_BG[p.block]}`}>
              <Image
                src={p.image}
                alt={`${p.name} product screenshot`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              {p.label && (
                <span className="poster-meta absolute top-3 left-3 bg-ink text-paper px-2 py-1">
                  {p.label}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-bold text-2xl leading-tight">{p.name}</h3>
              <p className="text-orange font-semibold text-sm">{p.tagline}</p>
              <p className="text-ink-soft leading-relaxed text-sm flex-1">{p.body}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {p.demoHref && (
                  <a
                    href={p.demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poster-meta font-bold text-ink border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors w-fit"
                  >
                    View live demo ↗
                  </a>
                )}
                {p.phHref && (
                  <a
                    href={p.phHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poster-meta font-bold text-ink-soft hover:text-orange transition-colors w-fit"
                  >
                    Product Hunt ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
