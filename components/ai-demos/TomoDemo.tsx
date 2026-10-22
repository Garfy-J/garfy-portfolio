"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoStage from "./DemoStage";

const BLUE = "#2F5BEA";

type Step = "alert" | "pressing" | "done" | "family";

const SEQUENCE: Step[] = ["alert", "alert", "pressing", "done", "done", "family", "family"];

export default function TomoDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SEQUENCE.length), 1100);
    return () => clearInterval(t);
  }, []);

  const step = SEQUENCE[i];

  return (
    <DemoStage bg="#EEF1F6">
      <div className="h-full flex items-center justify-center">
        <div
          className="relative w-[62%] h-full rounded-[20px] border-[3px] overflow-hidden flex flex-col"
          style={{ borderColor: BLUE, background: "#fff" }}
        >
          <div className="px-3 pt-2.5 pb-1.5" style={{ background: BLUE }}>
            <span className="font-mono text-[8px] text-white/80 block">Tomo</span>
            <span className="font-mono text-[10px] text-white font-bold">8:00 · Morning pills</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-2 px-3">
            <AnimatePresence mode="wait">
              {(step === "alert" || step === "pressing") && (
                <motion.div
                  key="btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: step === "pressing" ? 0.92 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-full px-4 py-2 text-white font-mono text-[10px] font-bold text-center"
                  style={{ background: BLUE }}
                >
                  I&rsquo;ve taken them
                </motion.div>
              )}

              {step === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full px-4 py-2 font-mono text-[10px] font-bold text-center"
                  style={{ background: "#1C8C4E", color: "#fff" }}
                >
                  ✓ Done · 8:04
                </motion.div>
              )}

              {step === "family" && (
                <motion.div
                  key="family"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div
                    className="rounded-full px-4 py-2 font-mono text-[10px] font-bold text-center mb-1.5"
                    style={{ background: "#1C8C4E", color: "#fff" }}
                  >
                    ✓ Done · 8:04
                  </div>
                  <span className="font-mono text-[9px]" style={{ color: BLUE }}>
                    Lily can see this
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </DemoStage>
  );
}
