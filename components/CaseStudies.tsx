import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const STUDIES = [
  {
    tag: "Report",
    title: "CGG 2026 — Chinese Brands Going Global",
    client: "Totem Media × Rakuten Insight",
    body:
      "Totem's flagship annual report, co-published with Rakuten Insight and featured in Campaign Asia. Data analysis across 451 Chinese brands, full bilingual translation of a 99-slide report (EN → Simplified Chinese), and a full brand-database re-ranking. Now the primary door-opener for Totem's China-outbound business development.",
    stamp: "flagship",
  },
  {
    tag: "Campaign",
    title: "Intel — APAC Influencer Program",
    client: "Totem Media",
    body:
      "Running strategy, account management and influencer marketing for Intel across five markets — India, China, Korea, Japan and Taiwan.",
    stamp: "5 markets",
  },
  {
    tag: "Result",
    title: "E-Commerce & Marketing",
    client: "Milleporte K.K., Tokyo",
    body:
      "Owned e-commerce and marketing management, driving results to a 2,299% ROAS.",
    stamp: "2,299% ROAS",
  },
  {
    tag: "Proposal",
    title: "Rare by Design",
    client: "Maserati APAC",
    body: "Campaign strategy proposal for Maserati across the APAC region.",
    stamp: "proposal",
  },
  {
    tag: "Advisory",
    title: "Outdoor Market Strategy",
    client: "Gore-Tex China",
    body:
      "An 18-slide market deep-dive on China's outdoor category, distilled into a 1-page executive brief.",
    stamp: "18 slides",
  },
  {
    tag: "Pitch",
    title: "Mini Program Media Plan",
    client: "Capella Hotels",
    body:
      "WeChat Mini Program media proposal built around the 618 shopping festival on a CNY 50K budget.",
    stamp: "618 festival",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Selected engagements" title="Case Studies" />
      <p className="text-ink-soft max-w-2xl mt-4">
        A mix of shipped campaigns, market advisory and active pitches — spanning
        entertainment, luxury automotive, outdoor, hospitality and China&rsquo;s
        going-global brand ecosystem.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STUDIES.map((s) => (
          <article
            key={s.title}
            className="bg-paper border border-rule p-7 flex flex-col gap-3 relative shadow-[3px_3px_0_rgba(23,19,15,0.06)] hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo border border-indigo/40 px-2 py-1">
                {s.tag}
              </span>
              <SealStamp text={s.stamp} rotate={6} className="text-xs px-2 py-0.5" />
            </div>
            <h3 className="font-display text-2xl leading-tight mt-2">{s.title}</h3>
            <p className="font-mono text-xs text-ink-soft uppercase tracking-wide">
              {s.client}
            </p>
            <p className="text-ink-soft leading-relaxed text-sm">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
