"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DemoStage from "./DemoStage";

const GREEN = "#0D3A2A";
const SAGE = "#6FA98A";

const DECISIONS = [
  { label: "Discount approvals", state: "Conflict" },
  { label: "Supplier terms", state: "Reviewed" },
  { label: "Refund policy", state: "Reviewed" },
];

const DOT_COUNT = 10;

export default function ContinuityDemo() {
  const [filled, setFilled] = useState(3);
  const [conflictOn, setConflictOn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFilled((n) => (n >= DOT_COUNT ? 0 : n + 1));
    }, 700);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setConflictOn((c) => !c), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <DemoStage bg={GREEN}>
      <div className="h-full flex flex-col text-white">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wide">Continuity</span>
          <span className="font-mono text-[9px] text-white/60">Helen → Alex</span>
        </div>

        <div className="flex items-center gap-1 mt-3">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full"
              animate={{ background: i < filled ? "#fff" : "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <span className="font-mono text-[8px] text-white/50 mt-1">Draft → Reviewed → Practised</span>

        <div className="mt-4 flex flex-col gap-2 flex-1 justify-center">
          {DECISIONS.map((d) => {
            const isConflict = d.state === "Conflict";
            const show = isConflict ? conflictOn : true;
            return (
              <div
                key={d.label}
                className="flex items-center justify-between rounded-md px-2.5 py-1.5"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <span className="font-mono text-[10px]">{d.label}</span>
                <motion.span
                  animate={{ opacity: isConflict ? (show ? 1 : 0.3) : 1 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isConflict ? "#C9561C" : SAGE,
                    color: GREEN,
                  }}
                >
                  {d.state}
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </DemoStage>
  );
}
