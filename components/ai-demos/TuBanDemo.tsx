"use client";

import { AnimatePresence, motion } from "framer-motion";
import DemoStage from "./DemoStage";
import useLoopStep from "./useLoopStep";

const PAGE = "#F3F5EF";
const GREEN = "#3D6A4B";
const INK = "#1E2A22";

/* 0 autopilot · 1 reminder · 2 route draws · 3 translator */
export default function TuBanDemo() {
  const { ref, step } = useLoopStep(4, 1900, 3);

  return (
    <div ref={ref}>
      <DemoStage bg={PAGE}>
        <div className="h-full flex flex-col gap-2 pt-6" style={{ color: INK }}>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md grid place-items-center text-white text-xs font-black" style={{ background: GREEN }}>途</span>
            <span className="text-xs font-black">TuBan 途伴</span>
            <span className="ml-auto font-mono text-[9px]" style={{ color: "#4A5B4F" }}>Osaka &amp; Kyoto · Day 2</span>
          </div>

          <div className="rounded-xl px-3 py-2 text-white" style={{ background: INK }}>
            <div className="flex items-center gap-1.5 text-[10px] font-bold">
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#8FD3A4" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              Autopilot · watching your trip for you
            </div>
            <AnimatePresence mode="wait">
              {step >= 1 && (
                <motion.div
                  key="rem"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 rounded-lg bg-white px-2 py-1.5 text-[10px] font-bold"
                  style={{ color: INK }}
                >
                  Platform 3 · car 5 stops by the lift
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 grid grid-cols-[1.1fr_1fr] gap-2 min-h-0">
            <svg viewBox="0 0 160 100" className="w-full h-full rounded-lg" style={{ background: "#E9EEE5" }} aria-hidden="true">
              <path d="M0 62 C20 60 36 56 46 64 C58 72 52 90 38 100 L0 100 Z" fill="#CFDFE3" />
              <path d="M54 12 L150 92 M10 34 L158 66" stroke="#DCE3D7" strokeWidth="4" fill="none" />
              <motion.path
                d="M30 86 C50 74 66 60 78 50 C96 36 116 26 136 18"
                stroke={GREEN}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                initial={false}
                animate={{ pathLength: step >= 2 ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <circle cx="30" cy="86" r="4" fill={GREEN} stroke="#fff" strokeWidth="1.5" />
              <circle cx="136" cy="18" r="4" fill="#F04E23" stroke="#fff" strokeWidth="1.5" />
              <text x="70" y="62" fontSize="9" fontWeight="700" fill={INK}>Osaka</text>
              <text x="108" y="36" fontSize="9" fontWeight="700" fill={INK}>Kyoto</text>
            </svg>

            <div className="flex flex-col justify-center gap-1.5">
              <motion.div
                initial={false}
                animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : -8 }}
                className="self-start rounded-lg rounded-bl-sm px-2 py-1 text-[10px] leading-snug"
                style={{ background: "#fff" }}
              >
                <span className="font-bold block">すみません、駅はどこ？</span>
                <span style={{ color: "#5A6B5F" }}>请问车站在哪里？</span>
              </motion.div>
              <motion.div
                initial={false}
                animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : 8 }}
                transition={{ delay: 0.4 }}
                className="self-end rounded-lg rounded-br-sm px-2 py-1 text-[10px] leading-snug text-white"
                style={{ background: GREEN }}
              >
                <span className="font-bold block">右に曲がってすぐです</span>
                <span className="opacity-80">右转就到</span>
              </motion.div>
            </div>
          </div>
        </div>
      </DemoStage>
    </div>
  );
}
