import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ObjektScene() {
  const model = useGLTF('assets/objects/polycam_LiDAR_house.glb');
  return (
    <primitive object={model.scene} position-x={-1.5} position-z={7} rotation={[0, 0, 0]} scale={15} />
  );
}
