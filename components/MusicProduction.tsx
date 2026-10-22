"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import AlpinePeaks from "./AlpinePeaks";

const SPOTIFY_URL = "https://open.spotify.com/artist/0V5ypbQRfW3GCsjlZez6gs";
const CHANNEL_URL = "https://www.youtube.com/@garfieldw1970";

const THRILLER_SHORTS = [
  { id: "VeRMZuDf8lI", caption: "Always step ahead, the time is ticking" },
  { id: "ML0P_XdlEq4", caption: "Myth hidden in the history" },
  { id: "UVYxi445Q64", caption: "The text tells the truth" },
  { id: "14iU9fhNJA4", caption: "Chasing by the dark" },
];

const titleLines = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const lineUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function MusicProduction() {
  return (
    <section id="music" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="Beyond marketing" title="Film & Music" />
      <p className="text-ink-soft max-w-2xl mt-4 leading-relaxed">
        Where strategy takes a back seat — filmmaking and music production,
        released under my own name.
      </p>

      {/* feature brand film */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mt-14 max-w-3xl"
      >
        <span className="poster-meta text-yellowDeep font-bold">Brand film · 2019</span>
        <a
          href="https://www.youtube.com/watch?v=nVHZ1z2JE0Y"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-3 block aspect-video overflow-hidden rounded-xl bg-black"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/film/xichong.webp"
              alt="溪涌生活节 · Xichong Life Festival brand film"
              fill
              className="object-cover animate-ken-burns opacity-80 group-hover:opacity-95 transition-opacity"
              sizes="(min-width: 640px) 768px, 100vw"
            />
          </div>
          <div className="grain absolute inset-0" />
          <div className="absolute top-0 inset-x-0 h-[8%] bg-black" />
          <div className="absolute bottom-0 inset-x-0 h-[8%] bg-black" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={titleLines}
            className="absolute left-5 sm:left-8 bottom-10 sm:bottom-12"
          >
            <motion.h3 variants={lineUp} className="font-display font-bold text-2xl sm:text-4xl text-white leading-[0.98]">
              溪涌生活节
            </motion.h3>
            <motion.span variants={lineUp} className="poster-meta text-white/80 block mt-1">
              Xichong Life Festival
            </motion.span>
          </motion.div>
        </a>
      </motion.div>

      {/* thriller shorts */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-16 max-w-3xl"
      >
        <span className="poster-meta text-yellowDeep font-bold">AI-directed · Sora</span>
        <h3 className="font-bold text-xl sm:text-2xl mt-2">
          AI-directed visual-script thriller shorts, ten seconds at a time.
        </h3>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {THRILLER_SHORTS.map((s, i) => (
            <motion.a
              key={s.id}
              href={`https://www.youtube.com/shorts/${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-black block"
            >
              <Image
                src={`/images/film/thriller-${s.id}.webp`}
                alt={s.caption}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition-opacity animate-ken-burns"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
              <div className="grain absolute inset-0" />
              <span className="absolute bottom-2 left-2 right-2 poster-meta text-white text-[9px] leading-tight whitespace-normal">
                {s.caption}
              </span>
            </motion.a>
          ))}
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="poster-meta inline-block mt-5 text-ink-soft hover:text-yellowDeep transition-colors"
        >
          @garfieldw1970 on YouTube ↗
        </a>
      </motion.div>

      {/* music */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-16 max-w-3xl"
      >
        <span className="poster-meta text-yellowDeep font-bold">Music</span>
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-3 block aspect-[21/9] overflow-hidden rounded-xl bg-paper-2"
        >
          <AlpinePeaks className="absolute inset-0 w-full h-full" />
          <div className="absolute bottom-0 inset-x-0 flex items-end justify-center gap-1 h-10 px-6 pb-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="animate-eq w-1.5 bg-paper/80"
                style={{
                  height: `${30 + ((i * 37) % 60)}%`,
                  animationDelay: `${(i % 6) * 0.15}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute top-4 left-5 sm:left-8">
            <span className="font-display font-bold text-xl sm:text-2xl text-ink block">
              Released as GARFY
            </span>
            <span className="poster-meta text-ink-soft group-hover:text-yellowDeep transition-colors">
              on Spotify ↗
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
