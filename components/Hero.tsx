"use client";

import { motion } from "framer-motion";
import SealStamp from "./SealStamp";

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
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-28 pb-20 overflow-hidden"
    >
      {/* decorative flat shapes */}
      <div
        className="animate-float absolute top-24 right-[6%] w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-yellow hidden sm:block"
        style={{ ["--r" as string]: "8deg" }}
        aria-hidden="true"
      />
      <div
        className="animate-float absolute bottom-16 right-[18%] w-16 h-16 sm:w-24 sm:h-24 bg-teal hidden sm:block"
        style={{ ["--r" as string]: "-10deg", animationDelay: "1.2s" }}
        aria-hidden="true"
      />
      <svg
        className="absolute top-40 right-[28%] w-20 h-20 hidden lg:block animate-float"
        style={{ ["--r" as string]: "0deg", animationDelay: "0.6s" }}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M50 5 L61 39 H97 L68 60 L79 94 L50 73 L21 94 L32 60 L3 39 H39 Z" fill="var(--cobalt)" />
      </svg>

      <div className="relative max-w-5xl">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Remote · Multi-Discipline Strategist
          </span>
          <SealStamp text="10+ yrs" color="yellow" rotate={-5} />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="font-display font-extrabold text-[15vw] sm:text-[8vw] lg:text-[6.4vw] leading-[0.9] tracking-tight"
        >
          Garfield Wang
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="font-hand text-3xl sm:text-4xl text-coral mt-2 mb-8 -rotate-1"
        >
          — everyone calls me Garfy
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed mb-10"
        >
          A <span className="highlight-coral font-semibold text-ink">multi-background brand &amp; integrated marketing strategist</span> —{" "}
          <span className="font-semibold text-ink">10+ years across Greater China, Japan, Taiwan and APAC</span>,
          fluent in English and Mandarin, with working Japanese for client-facing work. I&rsquo;ve worked
          <span className="highlight-yellow font-semibold text-ink"> auto, luxury, entertainment, outdoor, hospitality and tech</span>{" "}
          accounts across a dozen roles — plus a growing shelf of self-shipped
          AI products on the side. Fully remote, working with teams across time zones.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#case-studies"
            className="bg-ink text-paper font-display font-bold text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-coral transition-colors"
          >
            View case studies
          </a>
          <a
            href="#ai-projects"
            className="border-2 border-ink font-display font-bold text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:border-cobalt hover:text-cobalt transition-colors"
          >
            Self-built AI products
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={5}
          variants={fadeUp}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-coral squiggle-underline pb-1 transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
