import type { ReactNode } from "react";

/** Shared frame for every AI-product demo: same aspect, radius and padding,
 * so the five bespoke demos read as one family. */
export default function DemoStage({
  bg,
  children,
}: {
  bg: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl p-4 sm:p-5"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}
