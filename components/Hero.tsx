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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-28 pb-20 overflow-hidden"
    >
      {/* faint ruled lines, like notebook paper */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, var(--rule) 43px, var(--rule) 44px)",
        }}
        aria-hidden="true"
      />

      {/* animated multi-accent blobs, frozen under prefers-reduced-motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="blob blob-a -top-[8%] -left-[6%]"
          style={{ background: "var(--seal)", width: "clamp(220px, 38vw, 420px)", height: "clamp(220px, 38vw, 420px)" }}
        />
        <div
          className="blob blob-b top-[10%] right-[2%]"
          style={{ background: "var(--indigo)", width: "clamp(200px, 34vw, 420px)", height: "clamp(200px, 34vw, 420px)" }}
        />
        <div
          className="blob blob-c bottom-[4%] left-[22%]"
          style={{ background: "var(--amber)", width: "clamp(160px, 28vw, 360px)", height: "clamp(160px, 28vw, 360px)" }}
        />
      </div>

      <div className="relative max-w-5xl">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Remote · APAC-rooted, globally available
          </span>
          <SealStamp text="est. 2012" rotate={-6} />
        </div>

        <h1 className="font-display font-extrabold text-[13vw] sm:text-[7.5vw] lg:text-[6.2vw] leading-[0.92] tracking-tight">
          Garfield Wang
        </h1>

        <p className="font-hand text-3xl sm:text-4xl text-seal mt-2 mb-8 -rotate-1">
          — everyone calls me Garfy
        </p>

        <p className="max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed mb-10">
          Brand &amp; integrated marketing generalist with{" "}
          <span className="highlight font-medium text-ink">10+ years across Greater China, Japan, Taiwan and APAC</span>.
          Trilingual in English, Mandarin and Japanese. I move across{" "}
          <span className="text-ink font-medium">strategy, e-commerce, creative direction and content</span> —
          comfortable switching disciplines and roles as the problem demands, not
          boxed into one lane — plus a growing shelf of self-shipped AI products
          on the side.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#case-studies"
            className="bg-ink text-paper font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-seal transition-colors"
          >
            View case studies
          </a>
          <a
            href="#ai-projects"
            className="border-2 border-ink font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-sm hover:border-seal hover:text-seal transition-colors"
          >
            Self-built AI products
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-seal squiggle-underline pb-1 transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
