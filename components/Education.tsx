"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import Section from "./Section";

const SCHOOLS = [
  {
    degree: "MSc, E-Business & Innovation",
    school: "Lancaster University",
  },
  {
    degree: "BA",
    school: "National Taiwan University",
  },
  {
    degree: "Filmmaking Certificate",
    school: "London Film Academy",
    pill: "Artist too",
  },
];

export default function Education() {
  return (
    <Section id="education" bg="paper">
      <SectionHeading eyebrow="On paper" title="Education" />
      <div className="mt-14 grid sm:grid-cols-3 gap-8">
        {SCHOOLS.map((s, i) => (
          <motion.div
            key={s.school}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border-2 border-ink rounded-2xl bg-paper-2 p-8 flex flex-col gap-4 relative"
          >
            {s.pill && (
              <span className="callout-pill absolute -top-4 -right-3 -rotate-6">{s.pill}</span>
            )}
            <p className="font-display font-bold text-2xl sm:text-3xl leading-[0.98]">{s.degree}</p>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {s.school}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
