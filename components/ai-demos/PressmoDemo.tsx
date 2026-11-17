"use client";

import { motion } from "framer-motion";
import DemoStage from "./DemoStage";
import useLoopStep from "./useLoopStep";

const CREAM = "#FFF8EF";
const INK = "#1F1B18";
const ORANGE = "#FF6B1F";
const hand = { fontFamily: "'Caveat', 'Comic Sans MS', cursive" };

/* 0 idle · 1 stamp down · 2 done + converted · 3 hold */
export default function PressmoDemo() {
  const { ref, step } = useLoopStep(4, 1300, 2);
  const pressed = step >= 1;
  const done = step >= 2;

  return (
    <div ref={ref}>
      <DemoStage bg={CREAM}>
        <div className="h-full flex flex-col pt-6" style={{ color: INK }}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm" style={{ fontFamily: "Georgia, serif" }}>Pressmo</span>
            <span className="text-base" style={{ ...hand, color: "#D2500C" }}>drop it, press it, done.</span>
          </div>

          <div className="relative flex-1 flex items-end justify-center">
            {/* stamp */}
            <motion.svg
              viewBox="0 0 80 70"
              className="absolute top-0 w-14"
              animate={{ y: pressed && !done ? 44 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              aria-hidden="true"
            >
              <ellipse cx="40" cy="12" rx="12" ry="9" fill={ORANGE} stroke={INK} strokeWidth="2.4" />
              <path d="M33 20h14l2 22H31z" fill={ORANGE} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
              <rect x="14" y="42" width="52" height="16" rx="4" fill={ORANGE} stroke={INK} strokeWidth="2.4" />
              <rect x="11" y="57" width="58" height="7" rx="2" fill={INK} />
            </motion.svg>

            {/* file sheet */}
            <motion.div
              className="relative w-[46%] rounded-md border-2 px-3 pt-3 pb-2"
              style={{ borderColor: INK, background: "#FFFBF4" }}
              animate={{ scaleY: pressed && !done ? 0.94 : 1 }}
            >
              <div className="h-1.5 rounded mb-1.5" style={{ background: "#FFC4D0" }} />
              <div className="h-1.5 rounded mb-1.5 w-4/5" style={{ background: "#F3E8DB" }} />
              <div className="h-1.5 rounded w-3/5" style={{ background: "#F3E8DB" }} />
              <motion.span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-md px-2 text-xl leading-tight"
                style={{ ...hand, color: "#D2500C", borderColor: "#D2500C", background: "#FFFBF4" }}
                initial={false}
                animate={{ opacity: done ? 1 : 0, scale: done ? 1 : 1.8, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                done!
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <motion.span
              key={done ? "jpg" : "heic"}
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              className="text-[10px] font-bold tracking-wider border-[1.5px] rounded px-1.5"
              style={{ borderColor: INK, background: done ? "#C3DDB9" : "#FFE28C" }}
            >
              {done ? "JPG" : "HEIC"}
            </motion.span>
            <div className="flex-1 h-2 rounded-full" style={{ background: "#F3E8DB" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: ORANGE }}
                animate={{ width: done ? "26%" : "100%" }}
                transition={{ duration: 0.9, ease: [0.34, 1.3, 0.64, 1] }}
              />
            </div>
            <span className="font-mono text-[10px] tabular-nums w-[52px] text-right">{done ? "1.1 MB" : "4.2 MB"}</span>
          </div>
          <span className="font-mono text-[8px] mt-1" style={{ color: "#6B625A" }}>
            On your device · no upload · no sign-up
          </span>
        </div>
      </DemoStage>
    </div>
  );
}
