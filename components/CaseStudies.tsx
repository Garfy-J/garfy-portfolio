"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import BrandMark, { type Brand } from "./logos/BrandMark";
import TextLogo from "./logos/TextLogo";

type Visual =
  | { kind: "photo"; src: string }
  | { kind: "deck"; srcs: string[] }
  | { kind: "bars" }
  | { kind: "halftone" }
  | { kind: "studio" };

type Study = {
  tag: string;
  title: string;
  client: string;
  body: string;
  pill: string;
  meta: string;
  visual: Visual;
  logos?: Brand[];
  textLogo?: string;
  href?: string;
  linkLabel?: string;
};

const STUDIES: Study[] = [
  {
    tag: "Report",
    title: "China Brands Going Global 2026",
    client: "Totem Media × Rakuten Insight",
    body: "Totem's flagship annual report, co-published with Rakuten Insight and featured in Campaign Asia. Data analysis across 451 Chinese brands, full bilingual translation of a 99-slide report (EN → Simplified Chinese), and a full brand-database re-ranking.",
    pill: "451 brands",
    meta: "Totem Media × Rakuten Insight / 99 Slides",
    visual: {
      kind: "deck",
      srcs: [
        "/images/cgg/page-1.webp",
        "/images/cgg/page-2.webp",
        "/images/cgg/page-3.webp",
        "/images/cgg/page-4.webp",
      ],
    },
    logos: ["rakuten"],
    href: "https://www.talktototem.com/insights/reports/china-brands-global-2026",
    linkLabel: "Read the report",
  },
  {
    tag: "Campaign",
    title: "APAC Influencer Program",
    client: "Intel",
    body: "Ran strategy and account management across two fronts — B2C (Intel Gaming Alliance and Mobile Go-Getter AI-PC creator content) and B2B (Intel vPro thought-leadership) — across five markets: India, China, Korea, Japan and Taiwan.",
    pill: "5 markets",
    meta: "Intel / IN · CN · KR · JP · TW",
    visual: { kind: "photo", src: "/images/intel.jpg" },
    logos: ["intel"],
    href: "https://www.youtube.com/watch?v=Q_s8BsXPFzs",
    linkLabel: "Watch the work",
  },
  {
    tag: "Result",
    title: "E-Commerce & Marketing",
    client: "Milleporte K.K., Tokyo",
    body: "Led the marketing campaign end to end — content marketing, KOC/KOL influencer marketing, and a website revamp paired with a performance marketing strategy — driving results to a 2,299% ROAS.",
    pill: "2,299% ROAS",
    meta: "Milleporte K.K., Tokyo / KOC-KOL",
    visual: { kind: "photo", src: "/images/canva/milleporte-influencers.webp" },
    textLogo: "Milleporte",
  },
  {
    tag: "Proposal",
    title: "Rare by Design",
    client: "Maserati APAC",
    body: "Campaign strategy proposal for Maserati across the APAC region.",
    pill: "Rare",
    meta: "Maserati APAC / APAC Region",
    visual: { kind: "halftone" },
    logos: ["maserati"],
  },
  {
    tag: "Advisory",
    title: "Outdoor Market Strategy",
    client: "Gore-Tex China",
    body: "An 18-slide market deep-dive on China's outdoor category, distilled into a 1-page executive brief.",
    pill: "18 → 1 page",
    meta: "Gore-Tex China / Executive Brief",
    visual: { kind: "bars" },
    logos: ["gore-tex"],
  },
  {
    tag: "Entertainment",
    title: "Studio Partnerships",
    client: "Universal · Sony · Warner Bros.",
    body: "Planning and partnership work with major entertainment studios during my time in Beijing.",
    pill: "3 studios",
    meta: "Universal · Sony · Warner Bros. / Beijing",
    visual: { kind: "studio" },
    logos: ["universal", "sony", "warnerbros"],
  },
  {
    tag: "Collaboration",
    title: "“Eroded Jupiter” — Daniel Arsham",
    client: "Cabana × Archive Editions × Arsham Studio, 2022",
    body: "Project-managed ‘Eroded Jupiter,’ a limited-edition collaboration with artist Daniel Arsham — the Eroded Zeus Candle. Responsible for project management, commercial photography, and merchandising planning.",
    pill: "Ltd. edition",
    meta: "Cabana × Arsham Studio / 2022",
    visual: { kind: "photo", src: "/images/canva/arsham-portrait.webp" },
    textLogo: "Cabana",
    href: "https://www.instagram.com/p/Cf3mKGKMKfa/",
    linkLabel: "See the collab",
  },
  {
    tag: "Collaboration",
    title: "Kvadrat / Raf Simons",
    client: "Cabana — 3rd Anniversary Limited Edition, 2021",
    body: "Creative lead on Cabana's 3rd Anniversary Limited Edition release featuring the Kvadrat/Raf Simons collaboration — including the Zanotta Maggiolina Lounge Chair. Project management, editorial photography, and social content creation.",
    pill: "3rd anniv.",
    meta: "Cabana / Kvadrat · Raf Simons / 2021",
    visual: { kind: "photo", src: "/images/canva/kvadrat-room.webp" },
    logos: ["kvadrat"],
  },
  {
    tag: "Proposal",
    title: "2017 Renault Shanghai F1 Event and Communication",
    client: "Renault",
    body: "Creative proposal for Renault's Shanghai F1 activation, built around the brand's racing heritage — 40 years since Renault's first full works entry in Formula 1, with the R.S.17 presented to the Chinese public.",
    pill: "F1 · 40 yrs",
    meta: "Renault / Shanghai F1 / March 2017",
    visual: { kind: "photo", src: "/images/archive/renault-f1.webp" },
    textLogo: "Renault",
  },
  {
    tag: "Proposal",
    title: "Lenovo Tech World",
    client: "Lenovo",
    body: "Creative proposal for Lenovo Tech World — built around the strategic concept \"AI Enlightens AI\" — to reinvigorate brand awareness in China, claim Lenovo's AI leadership, and support a new product launch.",
    pill: "AI enlightens AI",
    meta: "Lenovo / Tech World / May 2017",
    visual: { kind: "photo", src: "/images/archive/lenovo-techworld.webp" },
    textLogo: "Lenovo",
  },
  {
    tag: "Proposal",
    title: "2017 China Marketing Campaign",
    client: "Kailas (凯乐石)",
    body: "China marketing campaign proposal for outdoor brand Kailas — strategy, design and creative concept built around competition events and the brand philosophy of pushing past self-imposed limits.",
    pill: "Strategy → creative",
    meta: "Kailas / China / 2017",
    visual: { kind: "photo", src: "/images/archive/kailas.webp" },
    textLogo: "Kailas",
  },
  {
    tag: "Pitch",
    title: "Red Bull × Inferno",
    client: "Red Bull, via OLÉ",
    body: "Joint-promotion creative pitch pairing Red Bull with the 2016 film Inferno (但丁密码), the third installment after The Da Vinci Code and Angels & Demons — covering the collaboration concept, partnership rights and the 2017 Hollywood release slate.",
    pill: "2016 · film",
    meta: "Red Bull × Inferno / via OLÉ",
    visual: { kind: "photo", src: "/images/archive/redbull-inferno.webp" },
    textLogo: "Red Bull",
  },
];

function CardVisual({ s }: { s: Study }) {
  if (s.visual.kind === "photo") {
    return (
      <Image
        src={s.visual.src}
        alt=""
        fill
        className="object-cover"
        loading="lazy"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    );
  }

  if (s.visual.kind === "deck") {
    const n = s.visual.srcs.length;
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-paper-2">
        <div className="relative w-[62%] aspect-[4/3]">
          {s.visual.srcs.map((src, i) => {
            const stackX = (n - 1 - i) * 3;
            const stackY = -(n - 1 - i) * 3;
            const fanX = (i - (n - 1) / 2) * 34;
            const fanR = (i - (n - 1) / 2) * 7;
            return (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                loading="lazy"
                sizes="300px"
                className="deck-card object-cover border border-ink/20 shadow-md transition-transform duration-500 ease-out"
                style={
                  {
                    transform: `translate(${stackX}px, ${stackY}px) rotate(0deg)`,
                    zIndex: n - i,
                    "--deck-fan": `translate(${fanX}px, 0) rotate(${fanR}deg)`,
                  } as React.CSSProperties
                }
              />
            );
          })}
        </div>
        <style>{`.group:hover .deck-card { transform: var(--deck-fan) !important; }`}</style>
      </div>
    );
  }

  if (s.visual.kind === "bars") {
    const bars = Array.from({ length: 18 });
    return (
      <div className="absolute inset-0 bg-paper-2 flex items-end justify-center gap-[3px] px-8 pb-10 pt-16">
        {bars.map((_, i) => (
          <div
            key={i}
            className={`w-2 ${i === 17 ? "bg-orange" : "bg-ink/15"}`}
            style={{ height: `${18 + i * 4}%` }}
          />
        ))}
      </div>
    );
  }

  if (s.visual.kind === "halftone") {
    return (
      <div className="absolute inset-0 bg-paper-2 flex items-center justify-center overflow-hidden">
        <div className="halftone absolute inset-0 opacity-[0.12]" />
        <span className="outline-type text-[7rem] select-none">M</span>
      </div>
    );
  }

  // studio fallback — grain + slow Ken Burns zoom on the logo cluster, letterbox bars
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[10%] bg-black z-10" />
      <div className="absolute bottom-0 inset-x-0 h-[10%] bg-black z-10" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-6"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrandMark brand="universal" className="h-10 w-auto text-white" />
        <BrandMark brand="sony" className="h-8 w-auto text-white" />
        <BrandMark brand="warnerbros" className="h-12 w-auto text-white" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Selected engagements" title="Case Studies" />
      <p className="text-ink-soft max-w-2xl mt-4">
        A snapshot of the range: automotive, luxury, entertainment, outdoor,
        hospitality and tech — different brand, different market, same
        rigor. Multi-background by design, not by accident.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {STUDIES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="group flex flex-col gap-4 bg-paper border border-ink/15 hover:border-ink/40 transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
              <CardVisual s={s} />

              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/75 px-2 py-1">
                {s.logos?.map((b) => (
                  <BrandMark key={b} brand={b} className="h-4 w-auto max-w-[3rem] text-white" />
                ))}
                {s.textLogo && <TextLogo name={s.textLogo} className="text-sm text-white" />}
              </div>

              <span className="poster-meta absolute top-3 right-3 z-20 text-white bg-black/75 px-2 py-1">
                {s.tag}
              </span>

              <span className="callout-pill absolute bottom-3 left-3 z-20">{s.pill}</span>

              {i === 0 && (
                <span className="running-label poster-meta absolute top-16 bottom-16 right-3 z-20 text-white/80 hidden sm:block">
                  Totem · Report · 2026
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 px-5 pb-6 flex-1">
              <h4 className="font-display font-bold text-xl leading-[0.98]">{s.title}</h4>
              <p className="poster-meta text-ink-soft whitespace-normal">{s.client}</p>
              <p className="text-ink-soft leading-relaxed text-sm line-clamp-4">{s.body}</p>
              <p className="poster-meta text-ink-soft/70 whitespace-normal">{s.meta}</p>
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-meta font-bold text-orangeDeep hover:text-ink transition-colors w-fit mt-1"
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
