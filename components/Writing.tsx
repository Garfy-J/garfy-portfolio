import { SectionHeading } from "./Strengths";

const POSTS = [
  "UGC Mastery: Rhode's Viral Triumph vs. Fenty's Stumble",
  "Emotional Marketing vs. Vibe Marketing",
  "Why LinkedIn Is Still Undefeated",
  "New Winning Formula of Lufthansa",
  "From One-Off Ads to Ongoing Brand Series: AI as the Storytelling Engine",
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Field notes" title="Writing" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Notes on brand strategy, marketing culture and where AI fits in the
        storytelling stack — published on Medium.
      </p>

      <ul className="mt-12 max-w-3xl divide-y divide-rule border-t border-b border-rule">
        {POSTS.map((title) => (
          <li key={title}>
            <a
              href="https://garfieldwang.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 py-5 group"
            >
              <span className="font-display text-xl sm:text-2xl group-hover:text-seal transition-colors">
                {title}
              </span>
              <span className="font-mono text-xs text-ink-soft group-hover:text-seal transition-colors shrink-0">
                Read ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://garfieldwang.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 font-mono text-sm uppercase tracking-wide text-seal squiggle-underline pb-1"
      >
        All posts on Medium ↗
      </a>
    </section>
  );
}
