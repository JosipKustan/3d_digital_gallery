// components/utils/RotatingObject.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingObject = ({ children, rotationSpeed = 0.001 }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default RotatingObject;
