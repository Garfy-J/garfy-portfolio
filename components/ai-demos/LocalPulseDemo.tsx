"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoStage from "./DemoStage";

const PINS = [
  { x: 28, y: 32 },
  { x: 62, y: 22 },
  { x: 48, y: 58 },
  { x: 75, y: 62 },
  { x: 18, y: 65 },
];

const CHIPS = ["Jazz on the rooftop · 8 min walk", "Night market · until 23:00"];

export default function LocalPulseDemo() {
  const [activePins, setActivePins] = useState(0);
  const [chipIndex, setChipIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActivePins((n) => (n >= PINS.length ? 0 : n + 1));
    }, 900);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setChipIndex((i) => (i + 1) % CHIPS.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <DemoStage bg="#2E2117">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,112,74,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(232,112,74,0.25) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative h-full">
        <span className="poster-meta text-[#E8704A] font-bold">LocalPulse</span>

        <div className="absolute inset-0 top-6">
          {PINS.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-3.5 h-3.5 rounded-[4px]"
              style={{ left: `${p.x}%`, top: `${p.y}%`, background: "#E8704A" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                i < activePins
                  ? { scale: [0, 1.3, 1], opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={chipIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F3E9DE] text-[#2E2117] rounded-full px-3 py-1.5 text-[11px] font-semibold w-fit"
            >
              {CHIPS[chipIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DemoStage>
  );
}
