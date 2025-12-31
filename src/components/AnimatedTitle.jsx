// src/components/AnimatedTitle.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

const AnimatedTitle = () => {
  const titleRef = useRef();
  
  useFrame((state) => {
    if (titleRef.current) {
      titleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={titleRef}
        font="/fonts/Inter-Bold.woff"
        fontSize={1.5}
        color="#1E40AF"
        position={[0, 0, 0]}
        anchorX="center"
        anchorY="middle"
      >
        SUNITHA HR
      </Text>
    </Float>
  );
};

export default AnimatedTitle;