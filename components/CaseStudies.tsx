"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const STUDIES = [
  {
    tag: "Campaign",
    title: "APAC Influencer Program",
    client: "Intel",
    body:
      "Running strategy, account management and influencer marketing across five markets — India, China, Korea, Japan and Taiwan.",
    stamp: "5 markets",
    color: "cobalt" as const,
  },
  {
    tag: "Result",
    title: "E-Commerce & Marketing",
    client: "Milleporte K.K., Tokyo",
    body:
      "Owned e-commerce and marketing management, driving results to a 2,299% ROAS.",
    stamp: "2,299% ROAS",
    color: "coral" as const,
  },
  {
    tag: "Proposal",
    title: "Rare by Design",
    client: "Maserati APAC",
    body: "Campaign strategy proposal for Maserati across the APAC region.",
    stamp: "proposal",
    color: "yellow" as const,
  },
  {
    tag: "Advisory",
    title: "Outdoor Market Strategy",
    client: "Gore-Tex China",
    body:
      "An 18-slide market deep-dive on China's outdoor category, distilled into a 1-page executive brief.",
    stamp: "18 slides",
    color: "teal" as const,
  },
  {
    tag: "Pitch",
    title: "Mini Program Media Plan",
    client: "Capella Hotels",
    body:
      "WeChat Mini Program media proposal built around the 618 shopping festival on a CNY 50K budget.",
    stamp: "618 festival",
    color: "cobalt" as const,
  },
  {
    tag: "Entertainment",
    title: "Studio Partnerships",
    client: "Universal · Sony · Warner Bros.",
    body:
      "Planning and partnership work with major entertainment studios during my time in Beijing.",
    stamp: "3 studios",
    color: "coral" as const,
  },
];

const CARD_BORDER: Record<string, string> = {
  cobalt: "border-cobalt",
  coral: "border-coral",
  yellow: "border-yellow",
  teal: "border-teal",
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Selected engagements" title="Case Studies" />
      <p className="text-ink-soft max-w-2xl mt-4">
        A snapshot of the range: automotive, luxury, entertainment, outdoor,
        hospitality and tech — different brand, different market, same
        rigor. Multi-background by design, not by accident.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STUDIES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className={`bg-paper border-2 ${CARD_BORDER[s.color]} rounded-2xl p-7 flex flex-col gap-3 relative hover:-translate-y-1.5 hover:shadow-lg transition-all`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink border border-ink/30 px-2 py-1 rounded-full">
                {s.tag}
              </span>
              <SealStamp text={s.stamp} color={s.color} rotate={6} className="text-xs px-3 py-1" />
            </div>
            <h3 className="font-display font-bold text-2xl leading-tight mt-2">{s.title}</h3>
            <p className="font-mono text-xs text-ink-soft uppercase tracking-wide">
              {s.client}
            </p>
            <p className="text-ink-soft leading-relaxed text-sm">{s.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
