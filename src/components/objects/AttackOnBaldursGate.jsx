import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function RastovacLiDAR() {
  const model = useGLTF('assets/objects/AttackOnBaldursGate.glb');
  return (
    <primitive
      object={model.scene}
      position-x={0}
      position-z={-0.2}
      position-y={-1.3}  
      rotation={[0, 0, 0]}
      scale={3}
    />
  );
}
