"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Strengths";
import Section from "./Section";
import AeroQueueDemo from "./ai-demos/AeroQueueDemo";
import TabiDemo from "./ai-demos/TabiDemo";
import LocalPulseDemo from "./ai-demos/LocalPulseDemo";
import TomoDemo from "./ai-demos/TomoDemo";
import ContinuityDemo from "./ai-demos/ContinuityDemo";
import PressmoDemo from "./ai-demos/PressmoDemo";
import WarmlyDemo from "./ai-demos/WarmlyDemo";
import TuBanDemo from "./ai-demos/TuBanDemo";
import EaseDemo from "./ai-demos/EaseDemo";

const PROJECTS: {
  name: string;
  tagline: string;
  body: string;
  demo: React.ComponentType;
  label?: string;
  phHref?: string;
  demoHref?: string;
  cta?: string;
}[] = [
  {
    name: "AeroQueue",
    tagline: "Know your queue before you reach it",
    body: "A live airport queue checker built for five personas — departing, arriving and transit passengers, escorts, and airport ops staff. Live queue visualizations, connection-safety checks, and a staff heatmap dashboard.",
    demo: AeroQueueDemo,
    phHref: "https://www.producthunt.com/products/aeroqueue",
    demoHref: "https://claude.ai/artifact/NGQYpiZoJUUcbB2N4QVf3B",
  },
  {
    name: "Tomo",
    tagline: "A calm medicine companion for older adults.",
    body: "Pill recognition, dose reminders, a family view with refills and gentle health nudges.",
    demo: TomoDemo,
    label: "Concept · interactive demo",
    demoHref: "https://claude.ai/artifact/TXTP3reiLDmnPuhFbp1bDa",
  },
  {
    name: "Continuity",
    tagline: "Hand over a business without losing what's in someone's head.",
    body: "Captures an owner's decisions, flags conflicting sources for review, lets the incoming operator practise.",
    demo: ContinuityDemo,
    label: "Concept · interactive demo",
    demoHref: "https://claude.ai/artifact/9LbJPnPiH4hCbviA1erM7W",
  },
  {
    name: "Pressmo",
    tagline: "Drop a file. It's already done.",
    body: "Converts, compresses and unzips PDFs, photos and design files right on your device: HEIC to JPG, compress or merge PDF, PDF to JPG, PSD to PNG, unzip. No upload, no sign-up, ten languages.",
    demo: PressmoDemo,
    label: "Free tool · live",
    demoHref: "https://claude.ai/artifact/3MDH24i64FEftg61cRxuFe",
    cta: "Try Pressmo ↗",
  },
  {
    name: "Warmly",
    tagline: "Screen CVs, and reply to every candidate kindly.",
    body: "A free CV screening tool for HR. Matches CVs to a job description requirement by requirement, flags hidden potential, and drafts a warm, personal reply for every applicant, including kind rejections. English and Chinese, and CVs never leave the browser.",
    demo: WarmlyDemo,
    label: "Free tool · live",
    demoHref: "https://warmly.garfy.workers.dev/",
    cta: "Try Warmly ↗",
  },
  {
    name: "途伴 TuBan",
    tagline: "A travel companion that watches your trip for you.",
    body: "Built for Chinese-speaking travellers in Japan. Connect bookings and flights once, and TuBan tells you the right platform and train car, walks you through the airport, translates conversations and menus, and keeps your IC card and tax-free receipts in one place.",
    demo: TuBanDemo,
    label: "Concept · interactive prototype",
    demoHref: "https://claude.ai/artifact/8KpcC1B77MV4BPoBfjKYUF",
    cta: "Open the prototype ↗",
  },
  {
    name: "心安 Ease",
    tagline: "A hospital stay app for patients, families and hospitals.",
    body: "Patients share needs and feelings in a tap, hospitals keep care, symptoms and notices in one place, and families can rest easy wherever they are. Bilingual Chinese and English.",
    demo: EaseDemo,
    label: "Concept · interactive demo",
    demoHref: "https://claude.ai/artifact/9ovJgyQid4Gegh7kRSGRvc",
  },
  {
    name: "TABI (Live Travel Financial Friend)",
    tagline: "Quick rate and want to keep your spending? We got your back.",
    body: "A Japanese city-pop styled travel finance and currency converter app — fast rate checks with a distinct visual identity, launched on Product Hunt.",
    demo: TabiDemo,
    phHref: "https://www.producthunt.com/products/live-travel-financial-friend",
  },
  {
    name: "LocalPulse",
    tagline: "Hyperlocal event discovery",
    body: "An app for surfacing what's actually happening nearby, right now.",
    demo: LocalPulseDemo,
    phHref: "https://www.producthunt.com/products/localpulse",
  },
];

export default function AIProjects() {
  return (
    <Section id="ai-projects" bg="paper">
      <SectionHeading eyebrow="Strategist who also ships" title="Self-Built AI Projects" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Outside client work, I design, build and launch full products myself —
        AI-assisted, end to end, from first commit to a live Product Hunt
        launch day. Each tile below is a small working recreation of the
        product&rsquo;s own UI, built in code.
      </p>

      <div className="mt-14 grid lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => {
          const Demo = p.demo;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <Demo />
                {p.label && (
                  <span className="poster-meta absolute top-3 left-3 z-10 bg-rust text-paper px-2 py-1">
                    {p.label}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-display font-bold text-2xl sm:text-3xl leading-[0.98]">{p.name}</h3>
                <p className="text-yellowDeep font-semibold text-sm">{p.tagline}</p>
                <p className="text-ink-soft leading-relaxed text-sm flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {p.demoHref && (
                    <a
                      href={p.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-meta font-bold text-ink border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors w-fit"
                    >
                      {p.cta ?? "View live demo ↗"}
                    </a>
                  )}
                  {p.phHref && (
                    <a
                      href={p.phHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-meta font-bold text-ink-soft hover:text-yellowDeep transition-colors w-fit"
                    >
                      Product Hunt ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
