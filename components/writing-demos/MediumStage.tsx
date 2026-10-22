"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import DemoStage from "../ai-demos/DemoStage";
import SimpleIcon from "../logos/SimpleIcon";
import { siMedium } from "simple-icons";

const ARTICLES = [
  { title: "UGC Mastery: Rhode's Viral Triumph vs. Fenty's Stumble" },
  { title: "Emotional Marketing vs. Vibe Marketing" },
  { title: "Why LinkedIn Is Still Undefeated", image: "/images/writing/linkedin-undefeated.jpg" },
  { title: "New Winning Formula of Lufthansa", image: "/images/writing/lufthansa.jpg" },
  { title: "From One-Off Ads to Ongoing Brand Series: AI as the Storytelling Engine", image: "/images/writing/ai-storytelling.jpg" },
];

export default function MediumStage() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ARTICLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const current = ARTICLES[i];

  return (
    <DemoStage bg="var(--paper-2)">
      <div className="h-full flex flex-col text-ink">
        <div className="flex items-center gap-1.5">
          <SimpleIcon icon={siMedium} className="w-4 h-4 text-ink" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
            Field notes
          </span>
        </div>

        <div className="flex-1 flex items-center gap-3 mt-3">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-md overflow-hidden bg-paper">
            <AnimatePresence mode="wait">
              {current.image ? (
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image src={current.image} alt="" fill className="object-cover" sizes="80px" />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <SimpleIcon icon={siMedium} className="w-6 h-6 text-ink/30" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="font-semibold text-sm sm:text-base leading-snug"
            >
              {current.title}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1.5">
          {ARTICLES.map((_, idx) => (
            <span
              key={idx}
              className="h-1 rounded-full bg-ink transition-all duration-300"
              style={{ width: idx === i ? "16px" : "6px", opacity: idx === i ? 0.8 : 0.25 }}
            />
          ))}
        </div>
      </div>
    </DemoStage>
  );
}
