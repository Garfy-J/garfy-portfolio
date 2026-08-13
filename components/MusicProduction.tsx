"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const SPOTIFY_URL = "https://open.spotify.com/artist/0V5ypbQRfW3GCsjlZez6gs";

export default function MusicProduction() {
  return (
    <section id="music" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <SectionHeading eyebrow="Beyond marketing" title="Digital Music Production" />
        <p className="text-ink-soft max-w-2xl mt-4 leading-relaxed">
          Music production is where strategy takes a back seat — a space for
          pure creative output, released under my own artist profile.
        </p>

        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide font-bold text-ink border-2 border-teal rounded-full px-4 py-2 mt-8 hover:bg-ink hover:text-paper hover:border-ink transition-colors w-fit"
        >
          Listen on Spotify ↗
        </a>
      </motion.div>
    </section>
  );
}
