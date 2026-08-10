type SealStampProps = {
  text: string;
  className?: string;
  rotate?: number;
  color?: "coral" | "cobalt" | "yellow" | "teal";
};

const COLOR_MAP: Record<string, { bg: string; fg: string }> = {
  coral: { bg: "var(--coral)", fg: "#fff" },
  cobalt: { bg: "var(--cobalt)", fg: "#fff" },
  yellow: { bg: "var(--yellow)", fg: "var(--ink)" },
  teal: { bg: "var(--teal)", fg: "#fff" },
};

/** The page's signature motif: a bright, riso-print sticker badge — used to
 * mark shipped work, results, and highlights throughout. */
export default function SealStamp({
  text,
  className = "",
  rotate = -6,
  color = "coral",
}: SealStampProps) {
  const c = COLOR_MAP[color];
  return (
    <span
      className={`badge px-4 py-1.5 text-sm sm:text-base leading-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, background: c.bg, color: c.fg }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
