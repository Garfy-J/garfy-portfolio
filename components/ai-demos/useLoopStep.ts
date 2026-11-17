"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Steps through 0..count-1 every `ms`, only while the demo is on screen.
 * With reduced motion it holds on `still`, a frame that shows the whole idea. */
export default function useLoopStep(count: number, ms: number, still = count - 1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const t = setInterval(() => setStep((s) => (s + 1) % count), ms);
    return () => clearInterval(t);
  }, [reduce, inView, count, ms]);

  return { ref, step: reduce ? still : step };
}
