"use client";

import { Canvas } from "@react-three/fiber";
import Character from "./Character";

export default function CharacterScene({
  waveTrigger,
  lookAtTarget,
}: {
  waveTrigger: boolean;
  lookAtTarget: "linkedin" | null;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 5.2], fov: 32 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[2, 3, 3]} intensity={1.1} />
      <directionalLight position={[-2, 1, -2]} intensity={0.3} />
      <Character waveTrigger={waveTrigger} lookAtTarget={lookAtTarget} />
    </Canvas>
  );
}
