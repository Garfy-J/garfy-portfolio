"use client";

import { motion } from "framer-motion";
import ClientsStrip from "./ClientsStrip";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juchingw" },
  { label: "Medium", href: "https://garfieldwang.medium.com/" },
  { label: "Instagram", href: "https://www.instagram.com/port_garfy/" },
  { label: "YouTube", href: "https://www.youtube.com/@garfieldw1970" },
  {
    label: "Work Archive",
    href: "https://www.dropbox.com/sh/1wrr3vj67d7lyf7/AACyJUDhpVKjNXo5TNTLWyB_a?dl=0",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-28 pb-16"
    >
      {/* poster corner metadata */}
      <span className="poster-meta hidden sm:block absolute top-8 left-6 sm:left-12 lg:left-24">
        Garfield &ldquo;Garfy&rdquo; Wang
      </span>
      <span className="poster-meta hidden sm:block absolute top-8 right-6 sm:right-12 lg:right-24 text-right">
        Remote · EN / 中文 / 日本語
        <br />
        10+ Yrs
      </span>

      <div className="relative max-w-5xl">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <span className="poster-meta text-orange font-bold">
            Remote · Multi-Discipline Strategist
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="display-tight text-[16vw] sm:text-[9vw] lg:text-[7vw] mt-3"
        >
          Garfield
          <br />
          Wang
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="poster-meta text-base normal-case tracking-normal text-ink-soft mt-4 mb-8"
        >
          everyone calls me Garfy
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed mb-10"
        >
          A <span className="font-semibold text-ink">multi-background brand &amp; integrated marketing strategist</span> —{" "}
          <span className="font-semibold text-ink">10+ years across Greater China, Japan, Taiwan and APAC</span>,
          fluent in English and Mandarin, with working Japanese for client-facing work. I&rsquo;ve worked{" "}
          <span className="font-semibold text-ink">auto, luxury, entertainment, outdoor, hospitality and tech</span>{" "}
          accounts across a dozen roles — plus a growing shelf of self-shipped
          AI products on the side. Fully remote, working with teams across time zones.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-14"
        >
          <a
            href="#case-studies"
            className="bg-orange text-ink font-display uppercase tracking-wide text-sm px-6 py-3.5 hover:bg-ink hover:text-paper transition-colors"
          >
            View case studies
          </a>
          <a
            href="#ai-projects"
            className="border-2 border-ink font-display uppercase tracking-wide text-sm px-6 py-3.5 hover:border-orange hover:text-orange transition-colors"
          >
            Self-built AI products
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={5}
          variants={fadeUp}
          className="flex flex-wrap gap-x-6 gap-y-2 mb-16"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="poster-meta text-ink-soft hover:text-orange transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </motion.div>

        <motion.div initial="hidden" animate="show" custom={6} variants={fadeUp}>
          <ClientsStrip />
        </motion.div>
      </div>
    </section>
  );
}
