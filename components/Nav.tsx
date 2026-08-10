"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Garfy" },
  { id: "strengths", label: "Strengths" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "case-studies", label: "Case Studies" },
  { id: "ai-projects", label: "AI Projects" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 sm:hidden bg-ink text-paper font-mono text-xs px-3 py-2 rounded-sm shadow-md"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        className={`fixed z-40 top-0 right-0 h-full sm:h-auto sm:top-1/2 sm:-translate-y-1/2 sm:right-0 flex flex-col justify-center gap-1 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 bg-paper-2 sm:bg-transparent w-64 sm:w-auto pt-20 sm:pt-0`}
        aria-label="Section navigation"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`group flex items-center gap-2 pl-4 pr-3 py-2 sm:py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider border-l-4 transition-colors ${
                isActive
                  ? "border-coral text-coral bg-paper/80 sm:bg-paper"
                  : "border-transparent text-ink-soft hover:text-ink hover:border-rule"
              }`}
              style={
                isActive
                  ? { borderTopRightRadius: 4, borderBottomRightRadius: 4 }
                  : undefined
              }
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
