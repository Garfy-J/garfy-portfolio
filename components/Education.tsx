"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const SCHOOLS = [
  {
    degree: "MSc, E-Business & Innovation",
    school: "Lancaster University",
    color: "border-orange",
  },
  {
    degree: "BA",
    school: "National Taiwan University",
    color: "border-sky",
  },
  {
    degree: "Filmmaking Certificate",
    school: "London Film Academy",
    color: "border-sage",
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className={`border-t-4 ${s.color} bg-paper-2 p-8 flex flex-col gap-4`}
          >
            <p className="font-bold text-2xl leading-tight">{s.degree}</p>
            <p className="poster-meta text-ink-soft">{s.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
