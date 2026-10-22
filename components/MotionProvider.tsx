"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Makes every framer-motion animation site-wide respect the OS
 * prefers-reduced-motion setting, including scroll reveals and loops. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
