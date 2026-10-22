"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharacterCanvas from "./contact-character/CharacterCanvas";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juchingw" },
  { label: "Medium", href: "https://garfieldwang.medium.com/" },
  { label: "Instagram", href: "https://www.instagram.com/port_garfy/" },
  { label: "YouTube", href: "https://www.youtube.com/@garfieldw1970" },
  {
    label: "Work Archive",
    href: "https://www.dropbox.com/sh/1wrr3vj67d7lyf7/AACyJUDhpVKjNXo5TNTLWyB_a?dl=0",
  },
];

export default function Contact() {
  const [linkedInHover, setLinkedInHover] = useState(false);

  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-36">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl flex-1"
        >
          <span className="poster-meta text-yellowDeep font-bold">Let&rsquo;s talk</span>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl leading-[0.98] mt-3">
            Remote-first.
            <br />
            Working with teams everywhere.
          </h2>
          <p className="text-ink-soft text-lg mt-6 max-w-xl leading-relaxed">
            Open to brand strategy engagements, multi-market advisory, and
            conversations about building AI-assisted products. Reach out through
            LinkedIn — that&rsquo;s the fastest way to find me.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => l.label === "LinkedIn" && setLinkedInHover(true)}
                onMouseLeave={() => l.label === "LinkedIn" && setLinkedInHover(false)}
                className="poster-meta text-base text-ink hover:text-yellowDeep transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <div className="relative shrink-0 w-full max-w-xs sm:max-w-sm">
          <CharacterCanvas lookAtTarget={linkedInHover ? "linkedin" : null} />
          <AnimatePresence>
            {linkedInHover && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="callout-pill absolute top-[14%] left-1/2 -translate-x-1/2"
              >
                Let&rsquo;s talk!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <footer className="mt-24 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4">
        <span className="poster-meta text-ink-soft">
          Garfield &ldquo;Garfy&rdquo; Wang — Remote
        </span>
        <span className="poster-meta text-ink-soft">
          © {new Date().getFullYear()} · Built with Claude
        </span>
      </footer>
    </section>
  );
}
