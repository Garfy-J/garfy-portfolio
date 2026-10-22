/** Recurring illustration motif — layered alpine-peak silhouettes with a low
 * sun, after "Garfy, at Altitude". Flat SVG polygons, no gradients. Used in
 * the hero and once in Film & Music, per the brief. */
export default function AlpinePeaks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 300"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <circle cx="560" cy="190" r="70" fill="var(--yellow)" className="animate-sun-drift" />
      <polygon
        points="0,300 120,120 230,230 340,90 460,230 560,140 680,260 800,180 800,300"
        fill="var(--paper-2)"
        opacity="0.9"
      />
      <polygon
        points="0,300 90,210 200,270 320,170 430,260 540,190 650,270 800,220 800,300"
        fill="var(--ink)"
      />
    </svg>
  );
}
