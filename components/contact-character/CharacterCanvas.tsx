"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const CharacterScene = dynamic(() => import("./CharacterScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function CharacterCanvas({ lookAtTarget }: { lookAtTarget: "linkedin" | null }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [canRender3D] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !reduced && hasWebGL();
  });
  const [waveTrigger, setWaveTrigger] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNearViewport(true);
            setWaveTrigger(true);
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full aspect-square max-w-sm mx-auto">
      <div
        className="lamp-glow absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in srgb, var(--lamp-glow) 45%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {nearViewport && canRender3D ? (
        <CharacterScene waveTrigger={waveTrigger} lookAtTarget={lookAtTarget} />
      ) : (
        <Image
          src="/images/garfy-character.png"
          alt="An illustrated vinyl-toy style character of Garfield Wang, wearing a beanie, glasses and a scarf"
          fill
          className="object-contain"
          sizes="384px"
        />
      )}
    </div>
  );
}
