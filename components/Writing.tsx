"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const POSTS = [
  {
    title: "UGC Mastery: Rhode's Viral Triumph vs. Fenty's Stumble",
    href: "https://garfieldwang.medium.com/ugc-mastery-rhodes-viral-triumph-vs-fenty-s-stumble-a-case-study-in-beauty-brand-resilience-b5a31b73be1f",
  },
  {
    title: "Emotional Marketing vs. Vibe Marketing",
    href: "https://garfieldwang.medium.com/heres-a-draft-linkedin-post-for-you-under-2-000-words-professional-yet-conversational-b385fd5a7311",
  },
  {
    title: "Why LinkedIn Is Still Undefeated",
    href: "https://garfieldwang.medium.com/why-linkedin-is-still-undefeated-a9ed6e9ca073",
    image: "/images/writing/linkedin-undefeated.jpg",
  },
  {
    title: "New Winning Formula of Lufthansa",
    href: "https://garfieldwang.medium.com/new-winning-formula-of-lufthansa-d99e6e0d7966",
    image: "/images/writing/lufthansa.jpg",
  },
  {
    title: "From One-Off Ads to Ongoing Brand Series: AI as the Storytelling Engine",
    href: "https://garfieldwang.medium.com/from-one-off-ads-to-ongoing-brand-series-ai-as-the-storytelling-engine-23de827128c2",
    image: "/images/writing/ai-storytelling.jpg",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Field notes" title="Writing" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Notes on brand strategy, marketing culture and where AI fits in the
        storytelling stack — published on Medium.
      </p>

      <ul className="mt-12 max-w-3xl divide-y divide-rule border-t border-b border-rule">
        {POSTS.map((post, i) => (
          <motion.li
            key={post.href}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 py-5 group"
            >
              {post.image && (
                <div className="relative w-20 h-14 sm:w-28 sm:h-20 shrink-0 overflow-hidden bg-ink">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    sizes="112px"
                  />
                </div>
              )}
              <span className="font-semibold text-lg sm:text-2xl leading-tight group-hover:text-orange transition-colors flex-1">
                {post.title}
              </span>
              <span className="poster-meta text-ink-soft group-hover:text-orange transition-colors shrink-0">
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
        className="poster-meta inline-block mt-8 text-orange hover:text-ink transition-colors"
      >
        All posts on Medium ↗
      </a>

      <motion.a
        href="https://amare.homes"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.35 }}
        className="mt-14 max-w-3xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-sage p-8 group"
      >
        <div className="flex-1">
          <span className="poster-meta text-ink/70 font-bold">Also editing</span>
          <h3 className="font-bold text-2xl sm:text-3xl text-ink mt-1">Amare</h3>
          <p className="text-ink/80 leading-relaxed mt-2 max-w-md">
            Design and creative culture worth stopping for. A calm,
            reading-first blog.
          </p>
        </div>
        <span className="poster-meta font-bold text-ink border border-ink px-3 py-2 w-fit group-hover:bg-ink group-hover:text-paper transition-colors">
          Visit amare.homes ↗
        </span>
      </motion.a>
    </section>
  );
}
