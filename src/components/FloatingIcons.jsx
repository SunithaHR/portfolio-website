// src/components/FloatingIcons.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const FloatingIcons = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const icons = [
    { position: [-6, 2, 0], color: '#3B82F6' },
    { position: [4, 3, -2], color: '#10B981' },
    { position: [-3, -1, 3], color: '#8B5CF6' },
    { position: [5, -2, 1], color: '#F59E0B' },
    { position: [0, 4, -3], color: '#EC4899' },
    { position: [-5, -3, -1], color: '#06B6D4' },
  ];

  return (
    <group ref={groupRef}>
      {icons.map((item, idx) => (
        <Float key={idx} speed={2 + idx * 0.5} rotationIntensity={1} floatIntensity={1}>
          <mesh position={item.position}>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingIcons;