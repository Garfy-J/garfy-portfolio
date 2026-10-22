"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function WritingCard({
  href,
  buttonLabel,
  name,
  tagline,
  body,
  children,
}: {
  href: string;
  buttonLabel: string;
  name: string;
  tagline: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col gap-4"
    >
      {children}

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-display font-bold text-2xl sm:text-3xl leading-[0.98]">{name}</h3>
        <p className="text-yellowDeep font-semibold text-sm">{tagline}</p>
        {body && <p className="text-ink-soft leading-relaxed text-sm flex-1">{body}</p>}
        <span className="poster-meta font-bold text-ink border border-ink px-3 py-2 mt-2 group-hover:bg-ink group-hover:text-paper transition-colors w-fit">
          {buttonLabel}
        </span>
      </div>
    </motion.a>
  );
}
