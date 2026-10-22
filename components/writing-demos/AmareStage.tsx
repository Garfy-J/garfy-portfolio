"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DemoStage from "../ai-demos/DemoStage";
import type { AmareArticle } from "./amareArticles";

export default function AmareStage({ articles }: { articles: AmareArticle[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % articles.length), 2600);
    return () => clearInterval(t);
  }, [articles.length]);

  return (
    <DemoStage bg="#F7F4EC">
      <div className="h-full flex flex-col" style={{ color: "#2B2A28" }}>
        <div className="flex items-center justify-between">
          <span className="font-serif italic text-2xl sm:text-3xl" style={{ color: "#3E6D8E" }}>
            Amare
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-50">
            Reading-first
          </span>
        </div>
        <div className="h-px w-full mt-2" style={{ background: "#3E6D8E", opacity: 0.25 }} />

        <div className="flex-1 flex items-center mt-3">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-base sm:text-lg leading-snug"
            >
              {articles[i].title}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1.5">
          {articles.map((_, idx) => (
            <span
              key={idx}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: idx === i ? "16px" : "6px",
                background: "#3E6D8E",
                opacity: idx === i ? 0.8 : 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </DemoStage>
  );
}
