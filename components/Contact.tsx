import SealStamp from "./SealStamp";

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
    <section
      id="contact"
      className="px-6 sm:px-12 lg:px-24 py-24 sm:py-36 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, var(--rule) 43px, var(--rule) 44px)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <SealStamp text="let's talk" rotate={-5} className="mb-6" />
        <h2 className="font-display text-5xl sm:text-7xl leading-[0.95]">
          Based in Shanghai.
          <br />
          Working across APAC.
        </h2>
        <p className="text-ink-soft text-lg mt-6 max-w-xl leading-relaxed">
          Open to brand strategy engagements, China market-entry advisory, and
          conversations about building AI-assisted products. Reach out through
          LinkedIn — that's the fastest way to find me.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wider text-ink hover:text-seal squiggle-underline pb-1 transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-24 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4">
        <span className="font-hand text-xl text-ink-soft">
          Garfield &ldquo;Garfy&rdquo; Wang — Shanghai
        </span>
        <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wide">
          © {new Date().getFullYear()} · Built with Claude
        </span>
      </footer>
    </section>
  );
}
