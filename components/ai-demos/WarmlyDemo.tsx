"use client";

import { motion } from "framer-motion";
import DemoStage from "./DemoStage";
import useLoopStep from "./useLoopStep";

const CREAM = "#F4EDE1";
const COBALT = "#1D3BB3";
const TOMATO = "#C93A1C";
const INK = "#17171A";
const serif = { fontFamily: "Gloock, Georgia, serif" };

const REPLY = "Hi Chen, thank you so much for applying. We'd love to get to know you better…";

/* 0 CVs in · 1 score fills · 2 reply types · 3 sent */
export default function WarmlyDemo() {
  const { ref, step } = useLoopStep(4, 1800, 2);
  const typed = step >= 2 ? REPLY : "";

  return (
    <div ref={ref}>
      <DemoStage bg={CREAM}>
        <div className="h-full flex flex-col gap-2 pt-6" style={{ color: INK }}>
          <div className="flex items-center justify-between">
            <span className="text-base" style={{ ...serif, color: COBALT }}>Warmly</span>
            <span className="text-[13px]" style={{ fontFamily: "Caveat, cursive", color: TOMATO }}>
              every candidate deserves a reply
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { n: "Chen Yuting", s: 82, v: "Interview", bg: "#CFE1C4" },
              { n: "Marcus Hale", s: 64, v: "Consider", bg: "#F5E2A8" },
            ].map((c, i) => (
              <motion.div
                key={c.n}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl p-2 flex items-center gap-2"
                style={{ background: c.bg }}
              >
                <svg viewBox="0 0 36 36" className="w-9 h-9 shrink-0" aria-hidden="true">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="4" />
                  <motion.circle
                    cx="18" cy="18" r="15" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                    initial={false}
                    animate={{ pathLength: step >= 1 ? c.s / 100 : 0 }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                  />
                  <text x="18" y="22" textAnchor="middle" fontSize="11" style={serif}>{step >= 1 ? c.s : ""}</text>
                </svg>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold truncate">{c.n}</div>
                  <span className="text-[8px] font-bold rounded-full px-1.5 py-0.5 bg-white/75">{c.v}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex-1 rounded-xl border-[1.5px] px-2.5 py-2 bg-[#FFFDF8]" style={{ borderColor: "#E3D9C8" }}>
            <span className="absolute -top-2 right-3 w-7 h-4 rounded-sm rotate-6" style={{ background: TOMATO, boxShadow: "inset 0 0 0 2px #FFFDF8" }} />
            <motion.p
              key={typed}
              className="text-[10px] leading-relaxed"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.4, ease: "linear" }}
            >
              {typed || <span style={{ color: "#57524B" }}>Drafting a warm reply…</span>}
            </motion.p>
            <motion.svg
              viewBox="0 0 24 24"
              className="absolute bottom-1.5 right-2 w-6 h-6"
              initial={false}
              animate={step === 3 ? { x: 60, y: -40, opacity: 0, rotate: -12 } : { x: 0, y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              aria-hidden="true"
            >
              <path d="M2 11l20-8-6 18-4-7z" fill={COBALT} />
              <path d="M12 14l10-11" stroke={CREAM} strokeWidth="1.2" />
            </motion.svg>
          </div>
          <span className="font-mono text-[8px]" style={{ color: "#57524B" }}>CVs stay in your browser · EN / 中文</span>
        </div>
      </DemoStage>
    </div>
  );
}
