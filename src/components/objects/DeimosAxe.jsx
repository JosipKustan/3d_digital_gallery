import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function DeimosAxe() {
  const nodes = useGLTF('assets/objects/dragon_skull_greataxe.glb');
  return (
    <primitive
      object={nodes.scene}
      position-x={0}
      position-z={0}
      position-y={-1}
      rotation={[0, 0, 0]}
      scale={3}
    />
  );
}
