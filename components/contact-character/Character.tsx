"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SKIN = "#E8B98C";
const HAIR = "#1C1812";
const BEANIE = "#B99466";
const GLASSES_FRAME = "#3A3733";
const GLASSES_LENS = "#8A9598";
const SCARF_NAVY = "#223A5E";
const SCARF_MUSTARD = "#C79A3E";
const JACKET = "#E7DFCB";
const EYE = "#17140F";

function Blink({ matRef }: { matRef: React.RefObject<THREE.Mesh | null> }) {
  const nextBlink = useRef(0);
  const blinking = useRef(false);
  const blinkT = useRef(0);

  useEffect(() => {
    nextBlink.current = 2 + Math.random() * 2;
  }, []);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    if (!blinking.current) {
      nextBlink.current -= delta;
      if (nextBlink.current <= 0) {
        blinking.current = true;
        blinkT.current = 0;
      }
    } else {
      blinkT.current += delta;
      const p = blinkT.current / 0.18;
      if (p >= 1) {
        blinking.current = false;
        nextBlink.current = 3 + Math.random() * 2;
        matRef.current.scale.y = 1;
      } else {
        const s = p < 0.5 ? 1 - p * 2 : (p - 0.5) * 2;
        matRef.current.scale.y = Math.max(0.05, s);
      }
    }
  });
  return null;
}

export default function Character({
  waveTrigger,
  lookAtTarget,
}: {
  waveTrigger: boolean;
  lookAtTarget: "linkedin" | null;
}) {
  const head = useRef<THREE.Group>(null);
  const eyesGroup = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const tassel = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const leftLid = useRef<THREE.Mesh>(null);
  const rightLid = useRef<THREE.Mesh>(null);

  const pointer = useRef({ x: 0, y: 0 });
  const idleT = useRef(0);
  const waveT = useRef<number | null>(null);
  const hasWaved = useRef(false);

  const touchPrimary = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(hover: none)").matches,
    []
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      pointer.current.x = Math.max(-1, Math.min(1, e.gamma / 30));
      pointer.current.y = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);

  useFrame((_, delta) => {
    idleT.current += delta;

    // breathing
    if (body.current) {
      const breathe = 1 + Math.sin(idleT.current * 1.6) * 0.012;
      body.current.scale.set(breathe, 1 + Math.sin(idleT.current * 1.6) * 0.018, breathe);
    }

    // scarf tassel sway
    if (tassel.current) {
      tassel.current.rotation.z = Math.sin(idleT.current * 1.3) * 0.12;
    }

    // head + eyes target
    let targetX = 0;
    let targetY = 0;
    if (lookAtTarget === "linkedin") {
      targetX = -0.45;
      targetY = 0.1;
    } else if (touchPrimary) {
      targetX = Math.sin(idleT.current * 0.35) * 0.3;
      targetY = Math.sin(idleT.current * 0.22) * 0.08;
    } else {
      targetX = THREE.MathUtils.clamp(pointer.current.x, -1, 1) * 0.35;
      targetY = THREE.MathUtils.clamp(-pointer.current.y, -1, 1) * 0.15;
    }
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetX, delta * 4);
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, targetY, delta * 4);
    }
    if (eyesGroup.current) {
      eyesGroup.current.position.x = THREE.MathUtils.lerp(eyesGroup.current.position.x, targetX * 0.08, delta * 5);
    }

    // wave on scroll-in
    if (waveTrigger && !hasWaved.current) {
      hasWaved.current = true;
      waveT.current = 0;
    }
    if (waveT.current !== null && rightArm.current) {
      waveT.current += delta;
      const t = waveT.current;
      if (t < 1.4) {
        const lift = Math.min(1, t / 0.3);
        const wiggle = t > 0.3 ? Math.sin((t - 0.3) * 10) * 0.35 : 0;
        rightArm.current.rotation.z = -lift * 2.0 + wiggle;
      } else {
        rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, 0, delta * 3);
        if (t > 1.8) waveT.current = null;
      }
    }
  });

  return (
    <group position={[0, -0.4, 0]}>
      {/* body / jacket */}
      <group ref={body} position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <capsuleGeometry args={[0.62, 0.55, 6, 16]} />
          <meshStandardMaterial color={JACKET} roughness={0.75} />
        </mesh>

        {/* scarf */}
        <mesh position={[0, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.52, 0.17, 12, 32]} />
          <meshStandardMaterial color={SCARF_NAVY} roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.5, 0.5]} rotation={[0.3, 0, 0]}>
          <torusGeometry args={[0.3, 0.1, 10, 20, Math.PI]} />
          <meshStandardMaterial color={SCARF_MUSTARD} roughness={0.8} />
        </mesh>
        <group ref={tassel} position={[0.15, 0.1, 0.62]}>
          <mesh position={[0, -0.25, 0]}>
            <capsuleGeometry args={[0.07, 0.3, 4, 8]} />
            <meshStandardMaterial color={SCARF_NAVY} roughness={0.8} />
          </mesh>
        </group>

        {/* left arm (static) */}
        <group position={[-0.62, 0.1, 0]} rotation={[0, 0, 0.35]}>
          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry args={[0.16, 0.5, 4, 12]} />
            <meshStandardMaterial color={JACKET} roughness={0.75} />
          </mesh>
        </group>

        {/* right arm (waves) */}
        <group ref={rightArm} position={[0.62, 0.35, 0]}>
          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry args={[0.16, 0.5, 4, 12]} />
            <meshStandardMaterial color={JACKET} roughness={0.75} />
          </mesh>
          <mesh position={[0, -0.62, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>
      </group>

      {/* head group */}
      <group ref={head} position={[0, 1.05, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.62, 32, 32]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>

        {/* hair fringe peeking under beanie */}
        <mesh position={[0, 0.12, 0.42]} rotation={[0.3, 0, 0]}>
          <sphereGeometry args={[0.5, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
          <meshStandardMaterial color={HAIR} roughness={0.6} />
        </mesh>

        {/* beanie */}
        <mesh position={[0, 0.22, 0]}>
          <sphereGeometry args={[0.66, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52]} />
          <meshStandardMaterial color={BEANIE} roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.02, 0]}>
          <torusGeometry args={[0.64, 0.08, 10, 32]} />
          <meshStandardMaterial color={BEANIE} roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.06, 6]} />
          <meshStandardMaterial color={BEANIE} roughness={0.9} />
        </mesh>

        {/* eyes */}
        <group ref={eyesGroup} position={[0, 0, 0]}>
          <mesh position={[-0.21, -0.02, 0.56]} ref={leftLid}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color={EYE} roughness={0.2} />
          </mesh>
          <mesh position={[0.21, -0.02, 0.56]} ref={rightLid}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color={EYE} roughness={0.2} />
          </mesh>
        </group>
        <Blink matRef={leftLid} />
        <Blink matRef={rightLid} />

        {/* glasses */}
        <group position={[0, -0.03, 0.58]}>
          <mesh position={[-0.21, 0, 0.03]}>
            <torusGeometry args={[0.15, 0.025, 8, 24]} />
            <meshStandardMaterial color={GLASSES_FRAME} roughness={0.4} />
          </mesh>
          <mesh position={[0.21, 0, 0.03]}>
            <torusGeometry args={[0.15, 0.025, 8, 24]} />
            <meshStandardMaterial color={GLASSES_FRAME} roughness={0.4} />
          </mesh>
          <mesh position={[-0.21, 0, 0.03]}>
            <circleGeometry args={[0.14, 24]} />
            <meshPhysicalMaterial
              color={GLASSES_LENS}
              roughness={0.1}
              transmission={0.6}
              transparent
              opacity={0.35}
            />
          </mesh>
          <mesh position={[0.21, 0, 0.03]}>
            <circleGeometry args={[0.14, 24]} />
            <meshPhysicalMaterial
              color={GLASSES_LENS}
              roughness={0.1}
              transmission={0.6}
              transparent
              opacity={0.35}
            />
          </mesh>
          <mesh position={[0, 0.01, 0.03]}>
            <boxGeometry args={[0.08, 0.02, 0.02]} />
            <meshStandardMaterial color={GLASSES_FRAME} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.03, 0.02]}>
            <boxGeometry args={[0.1, 0.015, 0.015]} />
            <meshStandardMaterial color={GLASSES_FRAME} roughness={0.4} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
