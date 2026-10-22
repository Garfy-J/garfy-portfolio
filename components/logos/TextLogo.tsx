/**
 * Fallback for brands with no real logo available from simple-icons or an
 * official/Commons source — renders the brand name as plain text, per the
 * "never draw or approximate a logo" rule.
 */
export default function TextLogo({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`font-semibold tracking-tight ${className}`} aria-label={name}>
      {name}
    </span>
  );
}
