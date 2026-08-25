'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingNode({
  position,
  color,
  wireColor = '#E50914',
  scale = 1,
  active = false,
  label = '',
}: {
  position: [number, number, number];
  color: string;
  wireColor?: string;
  scale?: number;
  active?: boolean;
  label?: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * (active ? 0.8 : 0.3);
      meshRef.current.rotation.y = t * (active ? 1.0 : 0.4);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef} scale={active ? scale * 1.3 : scale}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={active ? '#FF1E27' : '#2a0507'}
          emissiveIntensity={active ? 0.9 : 0.2}
        />
      </mesh>
      <mesh scale={(active ? scale * 1.3 : scale) * 1.15}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial
          color={wireColor}
          wireframe={true}
          transparent
          opacity={active ? 0.8 : 0.35}
        />
      </mesh>
    </group>
  );
}

function ConstellationField({ activeIndex = 0 }: { activeIndex?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  const nodes: Array<{ pos: [number, number, number]; color: string; label: string }> = [
    { pos: [0, 1.8, 0], color: '#141416', label: 'HACKATHON' },
    { pos: [2.5, 0.4, 0.8], color: '#16161a', label: 'CTF' },
    { pos: [1.6, -1.8, -0.6], color: '#18181c', label: 'WORKSHOP' },
    { pos: [-1.6, -1.8, 0.6], color: '#1a1a20', label: 'E-SPORTS' },
    { pos: [-2.5, 0.4, -0.8], color: '#141418', label: 'TREASURE HUNT' },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <OrbitingNode
          key={i}
          position={node.pos}
          color={node.color}
          active={activeIndex === i}
          label={node.label}
        />
      ))}
    </group>
  );
}

export function EventUniverseCanvas({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <div className="w-full h-full relative" data-cursor="EXPLORE">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#E50914" distance={10} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <ConstellationField activeIndex={activeIndex} />
        </Float>
      </Canvas>
    </div>
  );
}
