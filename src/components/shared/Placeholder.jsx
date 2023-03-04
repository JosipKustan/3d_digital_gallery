import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Placeholder() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t) * Math.PI * 0.25;
    meshRef.current.rotation.y = Math.cos(t) * Math.PI * 0.25;
  });

  return (

    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>

  );
}

export default Placeholder;
