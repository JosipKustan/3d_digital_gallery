import React from "react";
import { useGLTF } from "@react-three/drei";

export default function RastovacLiDAR() {
  const model = useGLTF("assets/objects/polycam_LiDAR_house.glb");
  return (
    <primitive
      object={model.scene}
      position-x={-0.8}
      position-z={8}
      rotation={[0, 0, 0]}
      scale={18}
    />
  );
}
