"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl"
      >
        <span className="poster-meta text-orange font-bold">Let&rsquo;s talk</span>
        <h2 className="display-tight text-5xl sm:text-7xl mt-3">
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
              className="poster-meta text-base text-ink hover:text-orange transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </motion.div>

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
