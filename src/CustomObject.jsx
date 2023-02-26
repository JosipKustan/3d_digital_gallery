import React, { useEffect, useRef, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function CustomObject() {
  const model = useLoader(GLTFLoader, './assets/objects/polycam_phone_camera_house.glb');
  console.log(model);

  return (
    <primitive object={model.scene} rotation={[0, Math.PI, 0]} scale={2} />
  );
}
