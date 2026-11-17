"use client";

import { motion } from "framer-motion";
import DemoStage from "./DemoStage";
import useLoopStep from "./useLoopStep";

const SOFT = "#E8ECE5";
const PINE = "#2D5A4E";
const MARI = "#EE9F33";
const ALERT = "#BF3F38";
const INK = "#1C2A26";

const TILES = [
  { zh: "喝水", en: "Water", bg: "#DAE1F0" },
  { zh: "上厕所", en: "Toilet", bg: "#D5E4DC" },
  { zh: "疼痛", en: "Pain", bg: "#F2D8D3" },
];

/* 0 idle · 1 tap Water · 2 nurse queue · 3 family timeline */
export default function EaseDemo() {
  const { ref, step } = useLoopStep(4, 1600, 3);

  return (
    <div ref={ref}>
      <DemoStage bg={SOFT}>
        <div className="h-full grid grid-cols-2 gap-2.5 pt-6" style={{ color: INK }}>
          {/* patient phone */}
          <div className="rounded-xl bg-[#FAFBF7] p-2.5 flex flex-col gap-1.5">
            <div className="flex items-baseline gap-1">
              <span className="font-black text-base leading-none">心安</span>
              <span className="text-[10px] font-bold" style={{ color: PINE }}>Ease</span>
            </div>
            <span className="text-[9px]" style={{ color: "#5B6863" }}>Bed 1207·3 · patient</span>
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              {TILES.map((t, i) => (
                <motion.div
                  key={t.en}
                  className="rounded-lg p-1.5 flex flex-col justify-end"
                  style={{ background: t.bg }}
                  animate={{ scale: step === 1 && i === 0 ? 0.92 : 1, boxShadow: step >= 1 && i === 0 ? `inset 0 0 0 2px ${PINE}` : "none" }}
                >
                  <span className="text-[11px] font-bold leading-tight">{t.zh}</span>
                  <span className="text-[8px]" style={{ color: "#5B6863" }}>{t.en}</span>
                </motion.div>
              ))}
              <div className="rounded-lg p-1.5 flex flex-col justify-end text-white" style={{ background: ALERT }}>
                <span className="text-[11px] font-bold leading-tight">叫护士</span>
                <span className="text-[8px] opacity-90">Call a nurse</span>
              </div>
            </div>
          </div>

          {/* hospital + family */}
          <div className="flex flex-col gap-2 min-w-0">
            <div className="rounded-xl bg-[#FAFBF7] p-2 flex flex-col gap-1">
              <span className="font-mono text-[8px] font-bold uppercase tracking-wide" style={{ color: "#5B6863" }}>Nurse station</span>
              <motion.div
                initial={false}
                animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : 12 }}
                className="rounded-md bg-[#F0F3EC] px-1.5 py-1 text-[9px] border-l-[3px]"
                style={{ borderColor: MARI }}
              >
                <b>1207·3 · Water</b>
                <span className="ml-1 rounded-full px-1 text-[7px] font-bold" style={{ background: MARI, color: "#2A1C05" }}>New</span>
              </motion.div>
              <div className="rounded-md bg-[#F0F3EC] px-1.5 py-1 text-[9px] border-l-[3px] opacity-60" style={{ borderColor: "transparent" }}>
                1203·1 · Turn over
              </div>
            </div>
            <div className="rounded-xl p-2 flex-1 flex flex-col gap-1" style={{ background: "#FBE5BF" }}>
              <span className="font-mono text-[8px] font-bold uppercase tracking-wide" style={{ color: "#5B6863" }}>Family · Mei</span>
              <motion.p
                initial={false}
                animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 6 }}
                className="text-[10px] font-bold leading-snug"
              >
                10:40 Mum asked for water · aide on the way
              </motion.p>
              <p className="text-[9px] leading-snug" style={{ color: "#5B6863" }}>09:00 Blood pressure 128/82</p>
            </div>
          </div>
        </div>
      </DemoStage>
    </div>
  );
}
