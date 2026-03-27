'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Ring, Trail } from '@react-three/drei';
import * as THREE from 'three';

// Low Earth Orbit Satellite
function Satellite({ orbitRadius = 3, speed = 0.5, color = "#3b82f6" }) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t) * orbitRadius;
    ref.current.position.z = Math.sin(t) * orbitRadius;
    ref.current.position.y = Math.sin(t * 0.5) * (orbitRadius * 0.3);
  });

  return (
    <group>
      <Trail
        width={1}
        length={8}
        color={new THREE.Color(color)}
        attenuation={(t) => t * t}
      >
        <Sphere ref={ref} args={[0.08, 16, 16]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </Sphere>
      </Trail>
    </group>
  );
}

// Antenna Radio Waves (Ripples)
function RadioWaves() {
  const waves = useMemo(() => [0, 1, 2], []);
  return (
    <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {waves.map((i) => (
        <Wave key={i} delay={i * 0.8} />
      ))}
      {/* Ground Station/Antenna Base */}
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.1, 0.2, 0.3, 16]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
    </group>
  );
}

function Wave({ delay }: { delay: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = (state.clock.getElapsedTime() + delay) % 2.4;
    const scale = t * 2;
    ref.current.scale.set(scale, scale, 1);
    const material = ref.current.material as THREE.MeshStandardMaterial;
    material.opacity = Math.max(0, 1 - t / 2.4) * 0.3;
  });

  return (
    <Ring ref={ref} args={[0.95, 1, 64]}>
      <meshStandardMaterial transparent color="#3b82f6" />
    </Ring>
  );
}

function SignalPoints() {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 30;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

export default function WorkBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-[#020617]">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SignalPoints />
        <RadioWaves />
        <Satellite orbitRadius={4} speed={0.4} color="#3b82f6" />
        <Satellite orbitRadius={5.5} speed={0.25} color="#60a5fa" />
        <gridHelper args={[50, 50, '#e2e8f0', '#f1f5f9']} position={[0, -2.1, 0]} opacity={0.1} />
      </Canvas>
    </div>
  );
}
