"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import BrandMark, { type Brand } from "./logos/BrandMark";
import TextLogo from "./logos/TextLogo";

type Block = "sky" | "sage" | "stone" | "orange";

const STUDIES: {
  tag: string;
  title: string;
  client: string;
  body: string;
  keyword: string;
  meta: string;
  block: Block;
  logos?: Brand[];
  textLogo?: string;
  photo?: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    tag: "Report",
    title: "China Brands Going Global 2026",
    client: "Totem Media × Rakuten Insight",
    body:
      "Totem's flagship annual report, co-published with Rakuten Insight and featured in Campaign Asia. Data analysis across 451 Chinese brands, full bilingual translation of a 99-slide report (EN → Simplified Chinese), and a full brand-database re-ranking. Now the primary door-opener for Totem's China-outbound business development.",
    keyword: "Report",
    meta: "Totem Media × Rakuten Insight / 451 Brands / 99 Slides",
    block: "sky",
    logos: ["rakuten"],
    href: "https://www.talktototem.com/insights/reports/china-brands-global-2026",
    linkLabel: "Read the report",
  },
  {
    tag: "Campaign",
    title: "APAC Influencer Program",
    client: "Intel",
    body:
      "Ran strategy and account management across two fronts — B2C (Intel Gaming Alliance and Mobile Go-Getter AI-PC creator content) and B2B (Intel vPro thought-leadership for enterprise and IT audiences) — across five markets: India, China, Korea, Japan and Taiwan.",
    keyword: "5 Markets",
    meta: "Intel / IN · CN · KR · JP · TW / B2B + B2C",
    block: "orange",
    logos: ["intel"],
    photo: "/images/intel.jpg",
    href: "https://www.youtube.com/watch?v=Q_s8BsXPFzs",
    linkLabel: "Watch the work",
  },
  {
    tag: "Result",
    title: "E-Commerce & Marketing",
    client: "Milleporte K.K., Tokyo",
    body:
      "Led the marketing campaign end to end — content marketing, KOC/KOL influencer marketing, and a website revamp paired with a performance marketing strategy — driving results to a 2,299% ROAS.",
    keyword: "2,299%",
    meta: "Milleporte K.K., Tokyo / ROAS",
    block: "sage",
    textLogo: "Milleporte",
  },
  {
    tag: "Proposal",
    title: "Rare by Design",
    client: "Maserati APAC",
    body: "Campaign strategy proposal for Maserati across the APAC region.",
    keyword: "Rare",
    meta: "Maserati APAC / Proposal",
    block: "stone",
    logos: ["maserati"],
  },
  {
    tag: "Advisory",
    title: "Outdoor Market Strategy",
    client: "Gore-Tex China",
    body:
      "An 18-slide market deep-dive on China's outdoor category, distilled into a 1-page executive brief.",
    keyword: "18 Slides",
    meta: "Gore-Tex China / 1-Page Brief",
    block: "sky",
    logos: ["gore-tex"],
  },
  {
    tag: "Pitch",
    title: "Mini Program Media Plan",
    client: "Capella Hotels",
    body:
      "WeChat Mini Program media proposal built around the 618 shopping festival on a CNY 50K budget.",
    keyword: "618",
    meta: "Capella Hotels / WeChat Mini Program / CNY 50K",
    block: "sage",
    logos: ["capella"],
  },
  {
    tag: "Entertainment",
    title: "Studio Partnerships",
    client: "Universal · Sony · Warner Bros.",
    body:
      "Planning and partnership work with major entertainment studios during my time in Beijing.",
    keyword: "3 Studios",
    meta: "Universal · Sony · Warner Bros. / Beijing",
    block: "stone",
    logos: ["universal", "sony", "warnerbros"],
  },
  {
    tag: "Collaboration",
    title: "“Eroded Jupiter” — Daniel Arsham",
    client: "Cabana × Archive Editions × Arsham Studio, 2022",
    body:
      "Project-managed ‘Eroded Jupiter,’ a limited-edition collaboration with artist Daniel Arsham — the Eroded Zeus Candle. Responsible for project management, commercial photography, and merchandising planning.",
    keyword: "Ltd. Edition",
    meta: "Cabana × Arsham Studio / 2022",
    block: "orange",
    textLogo: "Cabana",
    href: "https://www.instagram.com/p/Cf3mKGKMKfa/",
    linkLabel: "See the collab",
  },
  {
    tag: "Collaboration",
    title: "Kvadrat / Raf Simons",
    client: "Cabana — 3rd Anniversary Limited Edition, 2021",
    body:
      "Creative lead on Cabana's 3rd Anniversary Limited Edition release featuring the Kvadrat/Raf Simons collaboration — including the Zanotta Maggiolina Lounge Chair. Responsible for project management, editorial photography, and social content creation for the limited release.",
    keyword: "3rd Anniv.",
    meta: "Cabana / Kvadrat · Raf Simons / 2021",
    block: "sky",
    logos: ["kvadrat"],
  },
];

const BLOCK_BG: Record<Block, string> = {
  sky: "bg-sky",
  sage: "bg-sage",
  stone: "bg-stone",
  orange: "bg-orange",
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="flex flex-col gap-4 group"
          >
            {/* the poster */}
            <div
              className={`relative aspect-[4/5] overflow-hidden ${
                s.photo ? "bg-ink" : BLOCK_BG[s.block]
              }`}
            >
              {s.photo && (
                <Image
                  src={s.photo}
                  alt=""
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              )}

              <div className="absolute top-3 left-3 flex items-center gap-2 text-ink">
                {s.logos?.map((b) => (
                  <BrandMark
                    key={b}
                    brand={b}
                    className={`h-5 w-auto max-w-[3.5rem] ${s.photo ? "text-paper" : ""}`}
                  />
                ))}
                {s.textLogo && (
                  <TextLogo
                    name={s.textLogo}
                    className={`text-sm ${s.photo ? "text-paper" : "text-ink"}`}
                  />
                )}
              </div>

              <span
                className={`poster-meta absolute top-3 right-3 ${
                  s.photo ? "text-paper" : "text-ink/70"
                }`}
              >
                {s.tag}
              </span>

              <h3
                className={`display-tight absolute left-3 right-3 bottom-10 text-4xl sm:text-5xl ${
                  s.photo ? "text-paper" : "text-ink"
                }`}
              >
                {s.keyword}
              </h3>

              <span
                className={`poster-meta absolute left-3 bottom-3 right-3 ${
                  s.photo ? "text-paper/80" : "text-ink/70"
                }`}
              >
                {s.meta}
              </span>
            </div>

            {/* the caption */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xl leading-tight">{s.title}</h4>
              <p className="poster-meta text-ink-soft">{s.client}</p>
              <p className="text-ink-soft leading-relaxed text-sm">{s.body}</p>
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-meta font-bold text-ink hover:text-orange transition-colors w-fit mt-1"
                >
                  {s.linkLabel} ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
