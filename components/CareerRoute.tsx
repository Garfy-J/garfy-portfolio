"use client";

import { useId, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useReducedMotion, motion } from "framer-motion";

const STOPS = [
  { city: "Taipei", y: 8 },
  { city: "Beijing", y: 29 },
  { city: "Shanghai", y: 50 },
  { city: "Tokyo", y: 71 },
  { city: "Remote", y: 92 },
];

const STROKE = "var(--ink)";
const STROKE_OPACITY = 0.18;

function Taipei101({ y }: { y: number }) {
  return (
    <g transform={`translate(10, ${y})`} opacity={STROKE_OPACITY}>
      <path
        d="M-6,16 L-6,10 L-4.5,10 L-4.5,7.5 L-3,7.5 L-3,5.5 L-4,5.5 L-4,3.5 L-2,3.5 L-2,1.5 L-3,1.5 L-3,0 L3,0 L3,1.5 L2,1.5 L2,3.5 L4,3.5 L4,5.5 L3,5.5 L3,7.5 L4.5,7.5 L4.5,10 L6,10 L6,16 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <line x1="0" y1="-5" x2="0" y2="0" stroke={STROKE} strokeWidth="1.25" />
    </g>
  );
}

function TempleOfHeaven({ y }: { y: number }) {
  return (
    <g transform={`translate(10, ${y})`} opacity={STROKE_OPACITY}>
      <circle cx="0" cy="-13" r="1.4" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <path d="M0,-11.5 L0,-8" stroke={STROKE} strokeWidth="1.1" />
      <path d="M-6,-8 L0,-14 L6,-8 Z" fill="none" stroke={STROKE} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M-7,-4 Q0,-8 7,-4" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <path d="M-7.5,0 Q0,-4.5 7.5,0" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <line x1="-5" y1="0" x2="-5" y2="3" stroke={STROKE} strokeWidth="1.1" />
      <line x1="5" y1="0" x2="5" y2="3" stroke={STROKE} strokeWidth="1.1" />
      <line x1="-8" y1="3" x2="8" y2="3" stroke={STROKE} strokeWidth="1.1" />
    </g>
  );
}

function PearlTower({ y }: { y: number }) {
  return (
    <g transform={`translate(10, ${y})`} opacity={STROKE_OPACITY}>
      <line x1="0" y1="-16" x2="0" y2="2" stroke={STROKE} strokeWidth="1.1" />
      <circle cx="0" cy="-5" r="3.2" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <circle cx="0" cy="-13" r="1.6" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <line x1="0" y1="-17.5" x2="0" y2="-20" stroke={STROKE} strokeWidth="1.1" />
      <circle cx="0" cy="-20.5" r="0.7" fill={STROKE} stroke="none" />
      <path d="M-3,2 L-6,6 M3,2 L6,6 M0,2 L0,6.5" stroke={STROKE} strokeWidth="1.1" />
    </g>
  );
}

function TokyoTower({ y }: { y: number }) {
  return (
    <g transform={`translate(10, ${y})`} opacity={STROKE_OPACITY}>
      <path d="M0,-18 L-6,4 M0,-18 L6,4" fill="none" stroke={STROKE} strokeWidth="1.1" strokeLinecap="round" />
      <line x1="-4.3" y1="-3" x2="4.3" y2="-3" stroke={STROKE} strokeWidth="1" />
      <line x1="-2.7" y1="-9" x2="2.7" y2="-9" stroke={STROKE} strokeWidth="1" />
      <line x1="-1.3" y1="-14" x2="1.3" y2="-14" stroke={STROKE} strokeWidth="1" />
      <line x1="0" y1="-18" x2="0" y2="-21" stroke={STROKE} strokeWidth="1.1" />
    </g>
  );
}

function RemoteLaptop({ y }: { y: number }) {
  return (
    <g transform={`translate(10, ${y})`} opacity={STROKE_OPACITY}>
      <path d="M-7,4 L-6,-2 L2,-2 L3,4 Z" fill="none" stroke={STROKE} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M-6,-2 L-5.3,-8 L1.3,-8 L2,-2" fill="none" stroke={STROKE} strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="9" cy="1" r="2.6" fill="none" stroke={STROKE} strokeWidth="1.1" />
      <path d="M11.4,0.3 Q14,0.3 14,2 Q14,3.5 11.8,3" fill="none" stroke={STROKE} strokeWidth="1" />
      <path d="M8,-3.5 Q7.3,-5 8,-6" fill="none" stroke={STROKE} strokeWidth="0.9" />
      <path d="M10,-3.5 Q10.7,-5 10,-6" fill="none" stroke={STROKE} strokeWidth="0.9" />
    </g>
  );
}

const LANDMARKS = [Taipei101, TempleOfHeaven, PearlTower, TokyoTower, RemoteLaptop];

export default function CareerRoute({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [lit, setLit] = useState(0);
  const clipId = useId();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const revealHeight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STOPS.length - 1, Math.max(0, Math.floor(v * STOPS.length)));
    setLit(idx);
  });

  const routeD = `M10,0 ${STOPS.map((s) => `L10,${s.y}`).join(" ")} L10,100`;

  const content = (
    <>
      <path
        d={routeD}
        fill="none"
        stroke="var(--ink)"
        strokeOpacity={STROKE_OPACITY}
        strokeWidth="1.25"
        strokeDasharray="0.6 2.6"
        strokeLinecap="round"
      />
      {STOPS.map((s, i) => {
        const Landmark = LANDMARKS[i];
        const isLit = !reduceMotion && lit === i;
        return (
          <g key={s.city}>
            <Landmark y={s.y} />
            <circle
              cx="10"
              cy={s.y}
              r={isLit ? 1.6 : 1}
              fill="var(--yellow)"
              opacity={isLit ? 1 : 0.5}
              style={isLit ? { filter: "drop-shadow(0 0 2.5px var(--lamp-glow))" } : undefined}
            />
          </g>
        );
      })}
    </>
  );

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg viewBox="0 0 20 100" preserveAspectRatio="none" className="w-full h-full">
        {reduceMotion ? (
          content
        ) : (
          <>
            <clipPath id={clipId}>
              <motion.rect x="0" y="0" width="20" height={revealHeight} />
            </clipPath>
            <g clipPath={`url(#${clipId})`}>{content}</g>
          </>
        )}
      </svg>
    </div>
  );
}
