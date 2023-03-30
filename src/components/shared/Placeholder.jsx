import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function Placeholder() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t) * Math.PI * 0.25;
    meshRef.current.rotation.y = Math.cos(t) * Math.PI * 0.25;
  });

  return (
    <>
      <Text position={[0, 1, 0]} font="https://fonts.googleapis.com/css2?family=Inter:wght@400" characters="abcdefghijklmnopqrstuvwxyz0123456789!">
        Loading
      </Text>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>

  );
}

export default Placeholder;
