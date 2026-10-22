"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoStage from "./DemoStage";

const INK = "#0F1E33";
const MAGENTA = "#AE206D";
const YELLOW = "#F2C200";

const ROLES = ["DEP", "ARR", "TRN", "MEET", "OPS"];

const FRAMES = [
  { clock: "15:37", leave: "16:45", rows: [6, 9, 4], status: ["Smooth", "Smooth", "Smooth"] },
  { clock: "15:38", leave: "16:44", rows: [8, 11, 5], status: ["Smooth", "Busy", "Smooth"] },
  { clock: "15:39", leave: "16:44", rows: [12, 14, 4], status: ["Busy", "Busy", "Smooth"] },
  { clock: "15:40", leave: "16:45", rows: [9, 10, 6], status: ["Smooth", "Busy", "Busy"] },
];

const QUEUE_LABELS = ["Check-in", "Immigration", "Gate security"];

export default function AeroQueueDemo() {
  const [frame, setFrame] = useState(0);
  const [role, setRole] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 1600);
    return () => clearInterval(t);
  }, []);

  const f = FRAMES[frame];

  return (
    <DemoStage bg="#E8EDF2">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,30,51,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,30,51,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex flex-col h-full" style={{ color: INK }}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider">AeroQueue</span>
          <span className="font-mono text-xs font-bold tabular-nums">{f.clock}</span>
        </div>

        <div className="flex gap-1.5 mt-2">
          {ROLES.map((r, i) => (
            <span
              key={r}
              className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-full transition-colors duration-300"
              style={{
                background: i === role ? INK : "transparent",
                color: i === role ? "#E8EDF2" : INK,
                border: `1px solid ${INK}`,
                opacity: i === role ? 1 : 0.45,
              }}
            >
              {r}
            </span>
          ))}
        </div>

        <div
          className="mt-3 rounded-lg px-3 py-2 w-fit"
          style={{ background: YELLOW, color: INK }}
        >
          <span className="font-mono text-[9px] font-bold uppercase tracking-wide block opacity-70">
            Leave home by
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={f.leave}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-lg font-bold block tabular-nums"
            >
              {f.leave}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mt-3 flex flex-col gap-1.5 flex-1 justify-center">
          {QUEUE_LABELS.map((label, i) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-md px-2.5 py-1.5"
              style={{ background: "rgba(255,255,255,0.7)" }}
            >
              <span className="font-mono text-[10px]">{label}</span>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={f.rows[i]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-[10px] font-bold tabular-nums"
                  >
                    {f.rows[i]} min
                  </motion.span>
                </AnimatePresence>
                <span
                  className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full transition-colors duration-500"
                  style={{
                    background: f.status[i] === "Smooth" ? "#1C8C4E" : MAGENTA,
                    color: "#fff",
                  }}
                >
                  {f.status[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoStage>
  );
}
