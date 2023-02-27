import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ObjektScene() {
  const model = useGLTF('assets/objects/polycam_LiDAR_house.glb');
  return (
    <primitive object={model.scene} position-x={0.5} rotation={[0, Math.PI, 0]} scale={10} />
  );
}
