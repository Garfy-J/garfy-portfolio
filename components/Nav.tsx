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
  { id: "music", label: "Film & Music" },
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
      {/* Compact top nav — below 1440px */}
      <div className="fixed top-0 inset-x-0 z-50 min-[1440px]:hidden">
        <div className="flex items-center justify-between px-6 sm:px-12 py-4 bg-paper/90 backdrop-blur-sm border-b border-rule">
          <a href="#top" className="poster-meta font-bold text-ink">
            Garfy
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="poster-meta font-bold bg-ink text-paper px-3 py-2"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="bg-paper-2 border-b border-rule px-6 sm:px-12 py-5 flex flex-wrap gap-x-6 gap-y-3">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`poster-meta font-bold ${
                  active === s.id ? "text-orangeDeep" : "text-ink-soft hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Side nav — reserved space, 1440px and up only */}
      <nav
        className="hidden min-[1440px]:flex fixed z-40 top-1/2 -translate-y-1/2 right-6 flex-col gap-1 w-36"
        aria-label="Section navigation"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`poster-meta block pl-4 pr-2 py-1.5 font-bold border-l-2 transition-colors truncate ${
                isActive
                  ? "border-orange text-orangeDeep"
                  : "border-transparent text-ink-soft hover:text-ink hover:border-rule"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
