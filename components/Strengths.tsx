"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    title: "Multi-industry brand strategy",
    body:
      "A decade-plus running strategy for automotive, luxury, entertainment, outdoor, hospitality and tech brands — across Greater China, Japan, Taiwan and wider APAC. Fluent in English and Mandarin, with limited working proficiency in Japanese for client-facing work, which means sitting in the room for the local nuance, not just the market report.",
  },
  {
    n: "02",
    title: "Multi-market platform fluency",
    body:
      "Deep, hands-on experience across the platforms that actually move consumers in Asia — WeChat, Weibo, RED (Xiaohongshu) and Douyin — alongside Western channels, giving campaigns real footing in every market they run in.",
  },
  {
    n: "03",
    title: "Integrated campaign execution",
    body:
      "From strategy deck to live influencer program — managing international clients across five markets at once: strategy, account management and on-the-ground communication, end to end.",
  },
  {
    n: "04",
    title: "Builder, not just a strategist",
    body:
      "Ships real, working AI-assisted products solo — from idea to Product Hunt launch. Strategy that's been stress-tested by actually building and shipping something, not just recommending it.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="relative px-6 sm:px-12 lg:px-24 py-24 sm:py-32 overflow-hidden">
      <span
        className="outline-type absolute -top-4 right-0 sm:right-8 text-[30vw] sm:text-[18vw] select-none"
        aria-hidden="true"
      >
        10+
      </span>

      <SectionHeading eyebrow="Why work with me" title="Strengths" />
      <div className="relative grid sm:grid-cols-2 gap-6 mt-12">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-paper p-8 sm:p-10 flex flex-col gap-4 border-2 border-ink rounded-3xl border-t-8 border-t-orange"
          >
            <span className="font-mono text-xs font-bold text-orangeDeep">{p.n}</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl leading-[0.98]">
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-orangeDeep font-bold">
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold text-5xl sm:text-6xl leading-[0.98] mt-2">{title}</h2>
    </motion.div>
  );
}
