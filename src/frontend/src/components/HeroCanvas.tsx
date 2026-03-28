import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function Particles() {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const particles = useMemo(
    () =>
      Array.from({ length: 55 }, (_el, idx) => ({
        id: `p-${idx}`,
        position: [
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8 - 2,
        ] as [number, number, number],
        speed: Math.random() * 0.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 0.06 + 0.03,
      })),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const p = particles[i];
      mesh.position.y =
        (p.position[1] as number) + Math.sin(t * p.speed + p.phase) * 0.8;
      mesh.position.x =
        (p.position[0] as number) + Math.cos(t * p.speed * 0.5 + p.phase) * 0.4;
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <mesh
          key={p.id}
          position={p.position}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#C9A09A"
            emissive="#B98C86"
            emissiveIntensity={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

function TorusRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });
  return (
    <mesh ref={ref} position={[3, -1, -4]}>
      <torusGeometry args={[3.2, 0.03, 16, 80]} />
      <meshStandardMaterial
        color="#B98C86"
        emissive="#A77570"
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function TorusRing2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = -state.clock.elapsedTime * 0.05;
      ref.current.rotation.z = state.clock.elapsedTime * 0.09;
    }
  });
  return (
    <mesh ref={ref} position={[-4, 2, -6]}>
      <torusGeometry args={[2.5, 0.025, 16, 80]} />
      <meshStandardMaterial
        color="#C9A09A"
        emissive="#C9A09A"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

const diamondShapes = [
  { id: "d-0", pos: [-5, 3, -3] as [number, number, number], speed: 0.3 },
  { id: "d-1", pos: [5, -2, -2] as [number, number, number], speed: 0.25 },
  { id: "d-2", pos: [-2, -3, -5] as [number, number, number], speed: 0.4 },
];

function DiamondShapes() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x = t * diamondShapes[i].speed;
      mesh.rotation.y = t * diamondShapes[i].speed * 0.7;
    });
  });

  return (
    <>
      {diamondShapes.map((s, i) => (
        <mesh
          key={s.id}
          position={s.pos}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#C9A09A"
            emissive="#B98C86"
            emissiveIntensity={1.2}
            metalness={1}
            roughness={0.05}
          />
        </mesh>
      ))}
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#C9A09A" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#B98C86" />
      <Stars
        radius={80}
        depth={50}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <Particles />
      <TorusRing />
      <TorusRing2 />
      <DiamondShapes />
    </Canvas>
  );
}
