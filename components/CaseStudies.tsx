"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const STUDIES = [
  {
    tag: "Report",
    title: "China Brands Going Global 2026",
    client: "Totem Media × Rakuten Insight",
    body:
      "Totem's flagship annual report, co-published with Rakuten Insight and featured in Campaign Asia. Data analysis across 451 Chinese brands, full bilingual translation of a 99-slide report (EN → Simplified Chinese), and a full brand-database re-ranking. Now the primary door-opener for Totem's China-outbound business development.",
    stamp: "flagship",
    color: "yellow" as const,
    href: "https://www.talktototem.com/insights/reports/china-brands-global-2026",
    linkLabel: "Read the report",
  },
  {
    tag: "Campaign",
    title: "APAC Influencer Program",
    client: "Intel",
    body:
      "Ran strategy and account management across two fronts — B2C (Intel Gaming Alliance and Mobile Go-Getter AI-PC creator content) and B2B (Intel vPro thought-leadership for enterprise and IT audiences) — across five markets: India, China, Korea, Japan and Taiwan.",
    stamp: "5 markets",
    color: "cobalt" as const,
    href: "https://www.youtube.com/watch?v=Q_s8BsXPFzs",
    linkLabel: "Watch the work",
  },
  {
    tag: "Result",
    title: "E-Commerce & Marketing",
    client: "Milleporte K.K., Tokyo",
    body:
      "Led the marketing campaign end to end — content marketing, KOC/KOL influencer marketing, and a website revamp paired with a performance marketing strategy — driving results to a 2,299% ROAS.",
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
  {
    tag: "Collaboration",
    title: "“Eroded Jupiter” — Daniel Arsham",
    client: "Cabana × Archive Editions × Arsham Studio, 2022",
    body:
      "Project-managed ‘Eroded Jupiter,’ a limited-edition collaboration with artist Daniel Arsham — the Eroded Zeus Candle. Responsible for project management, commercial photography, and merchandising planning.",
    stamp: "ltd. edition",
    color: "yellow" as const,
    href: "https://www.instagram.com/p/Cf3mKGKMKfa/",
    linkLabel: "See the collab",
  },
  {
    tag: "Collaboration",
    title: "Kvadrat / Raf Simons",
    client: "Cabana — 3rd Anniversary Limited Edition, 2021",
    body:
      "Creative lead on Cabana's 3rd Anniversary Limited Edition release featuring the Kvadrat/Raf Simons collaboration — including the Zanotta Maggiolina Lounge Chair. Responsible for project management, editorial photography, and social content creation for the limited release.",
    stamp: "3rd anniv.",
    color: "teal" as const,
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
            {"href" in s && s.href && (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide font-bold text-ink border-2 ${CARD_BORDER[s.color]} rounded-full px-4 py-2 mt-1 hover:bg-ink hover:text-paper hover:border-ink transition-colors w-fit`}
              >
                {s.linkLabel} ↗
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
