import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function RastovacPhotogrammetry() {
  const model = useGLTF('assets/objects/Miniature - Old counts house and chicken coop.glb');
  return (
    <primitive
      object={model.scene}
      position-x={0}
      position-y={-1}
      position-z={-0.5}
      rotation={[0, 0, 0]}
      scale={3}
    />
  );
}
