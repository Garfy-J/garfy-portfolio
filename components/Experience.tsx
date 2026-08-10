"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const ROLES = [
  {
    org: "Cyberlink",
    role: "Marketing Assistant",
    when: "Oct 2012 – Dec 2013",
    body: "Product marketing and e-commerce across APAC and EMEA.",
  },
  {
    org: "Ogilvy, Taipei",
    role: "Digital Media Planner",
    when: "",
    body: "Early digital media planning grounding at one of the network agencies.",
  },
  {
    org: "GREY Group, Beijing",
    role: "Brand Strategist",
    when: "",
    body: "Strategy work spanning auto, medical and other categories.",
  },
  {
    org: "Olé Inspiration, Beijing",
    role: "Planning Manager",
    when: "",
    body: "Worked with entertainment studios including Universal, Sony and Warner Bros.",
  },
  {
    org: "TOPYS",
    role: "Senior Brand Strategist",
    when: "",
    body: "Built connections across creative studios, individual creators and media.",
  },
  {
    org: "Milleporte K.K., Tokyo",
    role: "E-Commerce & Marketing Manager",
    when: "",
    body: "Drove e-commerce and marketing to a 2,299% ROAS.",
    highlight: "2,299% ROAS",
  },
  {
    org: "Cabana",
    role: "Creative Marketing Manager",
    when: "",
    body: "Creative-led marketing management.",
  },
  {
    org: "Independent",
    role: "Brand & Integrated Marketing Strategist",
    when: "Current",
    body: "A remote-first practice spanning strategy, market intelligence and campaign execution for international clients across auto, luxury, hospitality, outdoor and tech — plus hands-on work with Asia's major consumer platforms.",
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="The long version" title="Experience" />

      <div className="mt-14 max-w-3xl">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.org + r.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="relative pl-8 sm:pl-10 pb-10 border-l-2 border-rule last:pb-0 last:border-l-0"
          >
            <span
              className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 border-ink ${
                r.current ? "bg-coral" : "bg-yellow"
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-bold text-2xl">{r.org}</h3>
              {r.when && (
                <span className="font-mono text-xs text-ink-soft uppercase tracking-wide">
                  {r.when}
                </span>
              )}
            </div>
            <p className="text-coral font-semibold mt-0.5">{r.role}</p>
            <p className="text-ink-soft mt-2 leading-relaxed max-w-xl">
              {r.highlight ? (
                <>
                  Drove e-commerce and marketing to a{" "}
                  <span className="highlight-yellow font-semibold text-ink">
                    {r.highlight}
                  </span>
                  .
                </>
              ) : (
                r.body
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
