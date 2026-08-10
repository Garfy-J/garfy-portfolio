"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";

const ROLES = [
  {
    org: "Cyberlink",
    role: "Marketing Assistant",
    when: "Oct 2012 – Dec 2013",
    body: "Cut my teeth in product marketing and e-commerce across APAC and EMEA — the crash course that taught me how brands actually move product, not just headlines.",
  },
  {
    org: "Ogilvy, Taipei",
    role: "Digital Media Planner",
    when: "",
    body: "Learned digital media planning inside one of advertising's biggest network agencies — where strategy and execution first had to earn the right to talk to each other.",
  },
  {
    org: "GREY Group, Beijing",
    role: "Brand Strategist",
    when: "",
    body: "Built brand strategy for auto and medical clients — categories where the stakes are real and there's no room for sloppy thinking.",
  },
  {
    org: "Olé Inspiration, Beijing",
    role: "Planning Manager",
    when: "",
    body: "Partnered with Universal, Sony and Warner Bros. on entertainment marketing — learning how to make a studio's biggest bets feel personal to an audience of millions.",
  },
  {
    org: "TOPYS",
    role: "Senior Brand Strategist",
    when: "",
    body: "Built a web of relationships across creative studios, independent creators and media — the kind of network you can't shortcut or fake.",
  },
  {
    org: "Milleporte K.K., Tokyo",
    role: "E-Commerce & Marketing Manager",
    when: "",
    body: "Owned e-commerce and marketing end to end, and pushed it hard — content marketing, KOC/KOL influencer marketing, and a website revamp paired with a performance marketing strategy, driving results to a",
    highlight: "2,299% ROAS",
  },
  {
    org: "Cabana",
    role: "Creative Marketing Manager",
    when: "",
    body: "Two collaborations, two very different creative registers: project-managed ‘Eroded Jupiter,’ a limited-edition collaboration with artist Daniel Arsham, and led creative on Cabana's 3rd Anniversary Limited Edition release featuring Kvadrat/Raf Simons.",
  },
  {
    org: "Totem Media",
    role: "Strategy Lead",
    when: "Current",
    body: "Leading integrated strategy for international brands — including Intel's B2B and B2C influencer programs across five APAC markets — and contributing to Totem's China Brands Going Global intelligence report.",
    current: true,
  },
  {
    org: "Independent",
    role: "Brand & Integrated Marketing Strategist",
    when: "Current",
    body: "A remote-first practice spanning strategy, market intelligence and campaign execution for international clients across auto, luxury, hospitality, outdoor and tech — plus hands-on work with Asia's major consumer platforms. Built to move fast and go wherever the work is.",
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
                  {r.body}{" "}
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
