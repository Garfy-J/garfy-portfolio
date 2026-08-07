type SealStampProps = {
  text: string;
  className?: string;
  rotate?: number;
};

/** The page's signature motif: a hand-inked chop/seal stamp, referencing
 * both Garfield's China-market practice and his artist instincts. Used to
 * mark verified experience, shipped projects, and results throughout. */
export default function SealStamp({ text, className = "", rotate = -7 }: SealStampProps) {
  return (
    <span
      className={`stamp px-3 py-1 text-sm sm:text-base leading-none whitespace-nowrap ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
