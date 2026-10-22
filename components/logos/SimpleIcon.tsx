type SimpleIconShape = { path: string; title: string };

/**
 * Renders a simple-icons glyph as a single-colour (currentColor) mark.
 * Source: https://github.com/simple-icons/simple-icons (CC0).
 */
export default function SimpleIcon({
  icon,
  label,
  className = "w-6 h-6",
}: {
  icon: SimpleIconShape;
  label?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={label ?? icon.title}
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
