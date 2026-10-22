"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./Strengths";
import SimpleIcon from "./logos/SimpleIcon";
import { siMedium } from "simple-icons";

type Source = "medium" | "amare";

type Post = {
  source: Source;
  title: string;
  href: string;
  image?: string;
  date?: string;
};

const POSTS: Post[] = [
  {
    source: "medium",
    title: "UGC Mastery: Rhode's Viral Triumph vs. Fenty's Stumble",
    href: "https://garfieldwang.medium.com/ugc-mastery-rhodes-viral-triumph-vs-fenty-s-stumble-a-case-study-in-beauty-brand-resilience-b5a31b73be1f",
  },
  {
    source: "amare",
    title: "A Headphone With Real Dials: Why Retro Controls Feel Like the Future",
    href: "https://amare.homes/posts/tune-x3-retro-headphones-physical-dials-heritage-tech",
    date: "Oct 22, 2026",
  },
  {
    source: "medium",
    title: "Emotional Marketing vs. Vibe Marketing",
    href: "https://garfieldwang.medium.com/heres-a-draft-linkedin-post-for-you-under-2-000-words-professional-yet-conversational-b385fd5a7311",
  },
  {
    source: "amare",
    title: "Tesla's Flying Roadster Is Real-ish. Here's What It Means for Cars, Brands and Parking Spots.",
    href: "https://amare.homes/posts/tesla-roadster-flying-car-auto-industry-brand-partners",
    date: "Oct 19, 2026",
  },
  {
    source: "medium",
    title: "Why LinkedIn Is Still Undefeated",
    href: "https://garfieldwang.medium.com/why-linkedin-is-still-undefeated-a9ed6e9ca073",
    image: "/images/writing/linkedin-undefeated.jpg",
  },
  {
    source: "amare",
    title: "Fiat's Multiplay Is a Family Car That Becomes a Pickup. The Real Lesson Is About Care.",
    href: "https://amare.homes/posts/fiat-multiplay-concept-brand-partnership-strategy",
    date: "Oct 13, 2026",
  },
  {
    source: "medium",
    title: "New Winning Formula of Lufthansa",
    href: "https://garfieldwang.medium.com/new-winning-formula-of-lufthansa-d99e6e0d7966",
    image: "/images/writing/lufthansa.jpg",
  },
  {
    source: "amare",
    title: "The NBA Is Testing a Smart Basketball. Does AI Make the Game Fairer or Just Flatter?",
    href: "https://amare.homes/posts/nba-smart-basketball-ai-sports-pros-cons",
    date: "Oct 12, 2026",
  },
  {
    source: "medium",
    title: "From One-Off Ads to Ongoing Brand Series: AI as the Storytelling Engine",
    href: "https://garfieldwang.medium.com/from-one-off-ads-to-ongoing-brand-series-ai-as-the-storytelling-engine-23de827128c2",
    image: "/images/writing/ai-storytelling.jpg",
  },
  {
    source: "amare",
    title: "One Table, Three Games: The Dining Table Is Finally Learning to Play",
    href: "https://amare.homes/posts/sannes-3-in-1-table-dining-pool-ping-pong",
    date: "Oct 7, 2026",
  },
  {
    source: "amare",
    title: "Apple Music Built a Concert Hall. The Real Product Is the Story It Tells.",
    href: "https://amare.homes/posts/apple-music-hall-battersea-brand-strategy",
    date: "Oct 5, 2026",
  },
];

const TABS: { key: "all" | Source; label: string }[] = [
  { key: "all", label: "All" },
  { key: "medium", label: "Medium" },
  { key: "amare", label: "Amare" },
];

export default function Writing() {
  const [tab, setTab] = useState<"all" | Source>("all");
  const posts = POSTS.filter((p) => tab === "all" || p.source === tab);

  return (
    <section id="writing" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Field notes" title="Writing" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Notes on brand strategy, marketing culture and where AI fits in the
        storytelling stack — published on Medium, and over at Amare, the
        design blog I built and edit.
      </p>

      <div className="flex gap-2 mt-8">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`poster-meta font-bold px-3 py-2 border transition-colors ${
              tab === t.key
                ? "bg-ink text-paper border-ink"
                : "border-ink/20 text-ink-soft hover:text-ink hover:border-ink/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence mode="popLayout">
          {posts.map((post) => (
            <motion.a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                post.source === "amare"
                  ? "group flex flex-col justify-between p-6 border border-[#3E6D8E]/25"
                  : "group flex flex-col gap-3 bg-paper border border-ink/10 hover:border-ink/30 transition-colors p-4"
              }
              style={post.source === "amare" ? { background: "#F7F4EC", color: "#2B2A28" } : undefined}
            >
              {post.source === "medium" ? (
                <>
                  {post.image && (
                    <div className="relative aspect-video overflow-hidden bg-ink">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <SimpleIcon icon={siMedium} className="w-3.5 h-3.5 text-ink-soft" />
                    <span className="poster-meta text-ink-soft">Medium</span>
                  </div>
                  <span className="font-semibold text-lg leading-snug group-hover:text-orangeDeep transition-colors">
                    {post.title}
                  </span>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-serif italic text-sm tracking-wide"
                      style={{ color: "#3E6D8E" }}
                    >
                      Amare
                    </span>
                    {post.date && (
                      <span className="poster-meta" style={{ color: "#2B2A28", opacity: 0.55 }}>
                        {post.date}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-xl leading-snug mt-3 block group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </span>
                </>
              )}
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      <a
        href="https://garfieldwang.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="poster-meta inline-block mt-8 text-orangeDeep hover:text-ink transition-colors"
      >
        All posts on Medium ↗
      </a>
      <span className="mx-3 text-ink-soft">·</span>
      <a
        href="https://amare.homes"
        target="_blank"
        rel="noopener noreferrer"
        className="poster-meta inline-block text-orangeDeep hover:text-ink transition-colors"
      >
        Visit amare.homes ↗
      </a>
    </section>
  );
}
