"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    title: "Multi-industry brand strategy",
    body:
      "A decade-plus running strategy for automotive, luxury, entertainment, outdoor, hospitality and tech brands — across Greater China, Japan, Taiwan and wider APAC. Trilingual in English, Mandarin and Japanese, which means sitting in the room for the local nuance, not just the market report.",
    color: "coral",
  },
  {
    n: "02",
    title: "Multi-market platform fluency",
    body:
      "Deep, hands-on experience across the platforms that actually move consumers in Asia — WeChat, Weibo, RED (Xiaohongshu) and Douyin — alongside Western channels, giving campaigns real footing in every market they run in.",
    color: "cobalt",
  },
  {
    n: "03",
    title: "Integrated campaign execution",
    body:
      "From strategy deck to live influencer program — managing international clients across five markets at once: strategy, account management and on-the-ground communication, end to end.",
    color: "teal",
  },
  {
    n: "04",
    title: "Builder, not just a strategist",
    body:
      "Ships real, working AI-assisted products solo — from idea to Product Hunt launch. Strategy that's been stress-tested by actually building and shipping something, not just recommending it.",
    color: "yellow",
  },
];

const BORDER: Record<string, string> = {
  coral: "border-coral",
  cobalt: "border-cobalt",
  teal: "border-teal",
  yellow: "border-yellow",
};
const TEXT: Record<string, string> = {
  coral: "text-coral",
  cobalt: "text-cobalt",
  teal: "text-teal",
  yellow: "text-ink",
};

export default function Strengths() {
  return (
    <section id="strengths" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="Why work with me" title="Strengths" />
      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`bg-paper p-8 sm:p-10 flex flex-col gap-4 border-2 border-ink rounded-3xl border-t-8 ${BORDER[p.color]}`}
          >
            <span className={`font-mono text-xs font-bold ${TEXT[p.color]}`}>{p.n}</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
              {p.title}
            </h3>
            <p className="text-ink-soft leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-coral font-bold">
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold text-5xl sm:text-6xl mt-2">{title}</h2>
    </motion.div>
  );
}
