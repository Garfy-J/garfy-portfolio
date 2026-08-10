"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const POSTS = [
  "UGC Mastery: Rhode's Viral Triumph vs. Fenty's Stumble",
  "Emotional Marketing vs. Vibe Marketing",
  "Why LinkedIn Is Still Undefeated",
  "New Winning Formula of Lufthansa",
  "From One-Off Ads to Ongoing Brand Series: AI as the Storytelling Engine",
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Field notes" title="Writing" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Notes on brand strategy, marketing culture and where AI fits in the
        storytelling stack — published on Medium.
      </p>

      <ul className="mt-12 max-w-3xl divide-y-2 divide-rule border-t-2 border-b-2 border-rule">
        {POSTS.map((title, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <a
              href="https://garfieldwang.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 py-5 group"
            >
              <span className="font-display font-semibold text-xl sm:text-2xl group-hover:text-coral transition-colors">
                {title}
              </span>
              <span className="font-mono text-xs text-ink-soft group-hover:text-coral transition-colors shrink-0">
                Read ↗
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <a
        href="https://garfieldwang.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 font-mono text-sm uppercase tracking-wide text-coral squiggle-underline pb-1"
      >
        All posts on Medium ↗
      </a>
    </section>
  );
}
