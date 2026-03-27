'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function BokehParticles() {
  const count = 40;
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
      color: ['#ffedd5', '#fef3c7', '#dcfce7', '#fae8ff'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <Float
          key={i}
          speed={p.speed * 2}
          rotationIntensity={2}
          floatIntensity={2}
          position={p.position}
        >
          <Sphere args={[p.size, 16, 16]}>
            <meshStandardMaterial
              color={p.color}
              transparent
              opacity={0.15}
              blur={10}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

export default function LifeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#fcfbf7']} />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BokehParticles />
      </Canvas>
    </div>
  );
}
