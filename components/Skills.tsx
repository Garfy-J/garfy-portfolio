"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const GROUPS = [
  {
    title: "Strategy & Research",
    color: "text-coral",
    items: [
      "Brand strategy",
      "Integrated campaign planning",
      "Market entry strategy",
      "Multi-market brand intelligence",
      "Data analysis & brand ranking",
    ],
  },
  {
    title: "Asia Digital Platforms",
    color: "text-cobalt",
    items: ["WeChat", "Weibo", "RED (Xiaohongshu)", "Douyin", "Mini Programs"],
  },
  {
    title: "Content & Creative",
    color: "text-teal",
    items: ["Filmmaking", "Photography", "Art direction", "Copywriting"],
  },
  {
    title: "Languages",
    color: "text-coral",
    items: ["English — fluent", "Mandarin — fluent", "Japanese — working proficiency (client-facing use)"],
  },
  {
    title: "Build & Ship",
    color: "text-cobalt",
    items: [
      "AI-assisted product development",
      "Next.js / Vercel",
      "Data scraping & automation",
      "Product Hunt launches",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Toolkit" title="Skills" />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <h3 className={`font-mono text-xs uppercase tracking-[0.2em] mb-4 font-bold ${g.color}`}>
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-display font-semibold text-xl sm:text-2xl leading-snug border-b-2 border-rule pb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
