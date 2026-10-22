"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoStage from "./DemoStage";

const STARS = Array.from({ length: 18 }, (_, i) => ({
  x: (i * 53) % 100,
  y: (i * 29) % 55,
  d: 1.5 + (i % 4) * 0.6,
}));

const RATES = [
  { label: "NT$", value: "208" },
  { label: "US$", value: "6.50" },
  { label: "€", value: "6.05" },
];

const LETTERS = [
  { ch: "T", color: "#FF5C8A" },
  { ch: "A", color: "#C9A6FF" },
  { ch: "B", color: "#6FC6FF" },
  { ch: "I", color: "#3FE3E0" },
];

export default function TabiDemo() {
  const [rateIndex, setRateIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRateIndex((i) => (i + 1) % RATES.length), 2200);
    return () => clearInterval(t);
  }, []);

  const rate = RATES[rateIndex];

  return (
    <DemoStage bg="#14102A">
      <div className="absolute inset-0">
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: s.d, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
        {/* pixel moon */}
        <div
          className="absolute top-3 right-4 w-7 h-7"
          style={{ background: "#F2D94E", clipPath: "polygon(20% 0,80% 0,100% 20%,100% 80%,80% 100%,20% 100%,0 80%,0 20%)" }}
        />
        {/* pixel Fuji */}
        <svg viewBox="0 0 100 40" className="absolute bottom-16 left-0 w-full h-10" preserveAspectRatio="none">
          <polygon points="0,40 35,8 45,20 55,8 65,20 100,40" fill="#241B4A" />
          <polygon points="35,8 40,14 30,14" fill="#D9D3EC" />
        </svg>
        <span className="absolute bottom-[4.2rem] left-[38%] text-[#C9A6FF] text-lg leading-none">旅</span>
      </div>

      <div className="relative flex flex-col items-center justify-end h-full pb-2">
        <div className="flex gap-0.5 mb-1">
          {LETTERS.map((l) => (
            <span
              key={l.ch}
              className="font-mono text-2xl sm:text-3xl font-bold"
              style={{ color: l.color }}
            >
              {l.ch}
            </span>
          ))}
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/70 mb-3">
          Travel Finance
        </span>

        <div className="bg-white/10 rounded-lg px-3 py-2 w-full max-w-[200px] text-center">
          <span className="font-mono text-[8px] uppercase tracking-wide text-white/50 block">
            Sample rate · ¥1,000 →
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={rate.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-base font-bold block"
              style={{ color: "#3FE3E0" }}
            >
              {rate.label} {rate.value}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </DemoStage>
  );
}
