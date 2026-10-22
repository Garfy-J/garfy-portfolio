"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import BrandMark, { type Brand } from "./logos/BrandMark";
import Section from "./Section";

const GROUPS: {
  title: string;
  items: { label: string; brand?: Brand }[];
}[] = [
  {
    title: "Strategy & Research",
    items: [
      { label: "Brand strategy" },
      { label: "Integrated campaign planning" },
      { label: "Market entry strategy" },
      { label: "Multi-market brand intelligence" },
      { label: "Data analysis & brand ranking" },
    ],
  },
  {
    title: "Asia Digital Platforms",
    items: [
      { label: "WeChat", brand: "wechat" },
      { label: "Weibo", brand: "weibo" },
      { label: "RED (Xiaohongshu)", brand: "xiaohongshu" },
      { label: "Douyin", brand: "douyin" },
      { label: "Mini Programs" },
    ],
  },
  {
    title: "Content & Creative",
    items: [
      { label: "Filmmaking" },
      { label: "Photography" },
      { label: "Art direction" },
      { label: "Copywriting" },
    ],
  },
  {
    title: "Languages",
    items: [
      { label: "English — fluent" },
      { label: "Mandarin — fluent" },
      { label: "Japanese — limited working proficiency" },
    ],
  },
  {
    title: "Build & Ship",
    items: [
      { label: "AI-assisted product development" },
      { label: "Next.js / Vercel" },
      { label: "Data scraping & automation" },
      { label: "Product Hunt launches" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" bg="paper-2">
      <SectionHeading eyebrow="Toolkit" title="Skills" />
      <div className="mt-14 grid lg:grid-cols-3 gap-10">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-4 font-bold text-yellowDeep">
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 font-display font-semibold text-xl sm:text-2xl leading-snug border-b-2 border-rule pb-2"
                >
                  {item.brand && <BrandMark brand={item.brand} className="w-5 h-5 shrink-0" />}
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
