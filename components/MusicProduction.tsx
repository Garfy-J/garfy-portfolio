"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const SPOTIFY_URL = "https://open.spotify.com/artist/0V5ypbQRfW3GCsjlZez6gs";
const CHANNEL_URL = "https://www.youtube.com/@garfieldw1970";

const OSAKA_SHORTS = [
  { id: "0hCBEduVOGY" },
  { id: "0KqgPnp_Gz4" },
  { id: "fjvQyHLzKM0" },
];

export default function MusicProduction() {
  return (
    <section id="music" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeading eyebrow="Beyond marketing" title="Film & Music" />
        <p className="text-ink-soft max-w-2xl mt-4 leading-relaxed">
          Where strategy takes a back seat — filmmaking and music production,
          released under my own name.
        </p>

        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="poster-meta inline-flex items-center font-bold text-ink border border-ink px-3 py-2 mt-6 hover:bg-ink hover:text-paper transition-colors w-fit"
        >
          Listen on Spotify ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-16 max-w-3xl"
      >
        <span className="poster-meta text-orange font-bold">
          YouTube series · Oct 2026
        </span>
        <h3 className="font-bold text-2xl sm:text-3xl mt-2">Osaka 20-Day Challenge</h3>
        <p className="text-ink-soft leading-relaxed mt-3 max-w-2xl">
          Living in Osaka for 20 days on a ¥30,000 budget, shot in Japanese
          travel-TV style — with English and Traditional Chinese subtitles.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm">
          {OSAKA_SHORTS.map((s, i) => (
            <a
              key={s.id}
              href={`https://www.youtube.com/shorts/${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[9/16] overflow-hidden bg-ink block group"
            >
              <Image
                src={`/images/film/osaka-${s.id}.jpg`}
                alt={`Osaka 20-Day Challenge, episode ${i + 1}`}
                fill
                className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                sizes="150px"
              />
            </a>
          ))}
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="poster-meta inline-block mt-5 text-ink-soft hover:text-orange transition-colors"
        >
          @garfieldw1970 on YouTube ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-16 max-w-3xl"
      >
        <span className="poster-meta text-orange font-bold">Brand film · 2019</span>
        <h3 className="font-bold text-2xl sm:text-3xl mt-2">溪涌生活节 · Xichong Life Festival</h3>
        <a
          href="https://www.youtube.com/watch?v=nVHZ1z2JE0Y"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 aspect-video max-w-xl overflow-hidden bg-ink block group"
        >
          <Image
            src="/images/film/xichong.jpg"
            alt="溪涌生活节 · Xichong Life Festival brand film"
            fill
            className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
            sizes="(min-width: 640px) 576px, 100vw"
          />
        </a>
      </motion.div>
    </section>
  );
}
