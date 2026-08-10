"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const SCHOOLS = [
  {
    degree: "MSc, E-Business & Innovation",
    school: "Lancaster University",
    color: "border-coral",
  },
  {
    degree: "BA",
    school: "National Taiwan University",
    color: "border-cobalt",
  },
  {
    degree: "Filmmaking Certificate",
    school: "London Film Academy",
    color: "border-teal",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="On paper" title="Education" />
      <div className="mt-14 grid sm:grid-cols-3 gap-8">
        {SCHOOLS.map((s, i) => (
          <motion.div
            key={s.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`border-2 ${s.color} rounded-2xl bg-paper p-8 flex flex-col gap-4 relative`}
          >
            {i === 2 && (
              <SealStamp
                text="artist too"
                color="teal"
                className="absolute -top-4 -right-3"
                rotate={9}
              />
            )}
            <p className="font-display font-bold text-2xl leading-tight">{s.degree}</p>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {s.school}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
