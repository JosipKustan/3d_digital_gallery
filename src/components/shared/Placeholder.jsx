import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function Placeholder() {
  const meshRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (textRef.current) {
      // This will make the placeholder mesh always face the camera
      textRef.current.lookAt(camera.position);
    }
  }, [camera.position]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t) * Math.PI * 0.25;
    meshRef.current.rotation.y = Math.cos(t) * Math.PI * 0.25;
  });

  return (
    <>
      <Text
        ref={textRef}
        position={[0, 1, 0]}
        font="/assets/font/Kanit-Bold.ttf"
        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      >
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
