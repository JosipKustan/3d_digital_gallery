import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Hand() {
  const nodes = useGLTF("assets/objects/hand2.glb");

  return (
    <primitive
      object={nodes.scene}
      material={nodes.materials}
      position-x={0}
      position-z={0}
      position-y={-1.7}
      rotation={[0, 0, 0]}
      scale={6}
    ></primitive>
  );
}
