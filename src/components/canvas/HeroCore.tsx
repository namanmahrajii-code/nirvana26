'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function MonolithCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Primary slow rotation with mouse sway
      meshRef.current.rotation.x = t * 0.15 + mouse.current.y * 0.4;
      meshRef.current.rotation.y = t * 0.25 + mouse.current.x * 0.4;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.2 + mouse.current.y * 0.3;
      wireframeRef.current.rotation.y = -t * 0.3 + mouse.current.x * 0.3;
      const scale = 1.08 + Math.sin(t * 2) * 0.03;
      wireframeRef.current.scale.set(scale, scale, scale);
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.5;
      const pulse = 0.85 + Math.sin(t * 3.5) * 0.1;
      innerRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.2;
      ringRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group>
      {/* Outer Geometric Titanium Polyhedron */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <octahedronGeometry args={[2.2, 0]} />
        <meshPhysicalMaterial
          color="#0c0c0e"
          emissive="#1a0204"
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Crimson Tactical Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.45, 1]} />
        <meshBasicMaterial
          color="#E50914"
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>

      {/* Internal Crimson Energy Core */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          color="#FF1E27"
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* Orbital Laser Rings */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2, 3.23, 64]} />
          <meshBasicMaterial color="#E50914" side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <ringGeometry args={[3.5, 3.52, 64]} />
          <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
}

function StarfieldParticles({ count = 180 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 22;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 22;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#E50914"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroCore() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      data-cursor="ROTATE"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#E50914" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#FF1E27" distance={8} />

        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
          <MonolithCore mouse={mouse} />
        </Float>

        <StarfieldParticles count={140} />
      </Canvas>
    </div>
  );
}
