"use client";

import { motion } from "framer-motion";
import Section from "./Section";

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
    <Section id="contact" bg="paper-2">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl flex-1"
        >
          <span className="poster-meta text-yellowDeep font-bold">Let&rsquo;s talk</span>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl leading-[0.98] mt-3">
            Remote-first.
            <br />
            Working with teams everywhere.
          </h2>
          <p className="text-ink-soft text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
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
                className="poster-meta text-base text-ink hover:text-yellowDeep transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="relative shrink-0 w-full lg:w-auto flex justify-center"
        >
          <div className="relative h-[300px] sm:h-[420px] aspect-[567/756]">
            {/* soft glow behind upper body */}
            <div
              className="absolute left-1/2 top-[8%] w-[85%] aspect-square -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--lamp-glow) 60%, transparent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* floor shadow */}
            <div
              className="absolute left-1/2 bottom-[2%] w-[55%] h-[7%] -translate-x-1/2 rounded-full bg-ink/15 blur-md"
              aria-hidden="true"
            />

            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet="/images/garfy-character-still.webp" />
              {/* plain img, not next/image: animated WebP needs to stay animated */}
              <img
                src="/images/garfy-character.webp"
                alt="Illustration of Garfy"
                width={567}
                height={756}
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-contain"
              />
            </picture>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="callout-pill absolute top-[6%] right-[2%] sm:right-[-6%]"
            >
              Let&rsquo;s talk!
            </motion.span>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4">
        <span className="poster-meta text-ink-soft">
          Garfield &ldquo;Garfy&rdquo; Wang — Remote
        </span>
        <span className="poster-meta text-ink-soft">
          © {new Date().getFullYear()} · Built with Claude
        </span>
      </footer>
    </Section>
  );
}
