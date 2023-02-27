import { useThree, extend, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import ObjektScene from './ObjektScene.jsx';

extend({ OrbitControls });

export default function Scena() {
  return (
    <>
      <Environment background blur={0.1} files="assets/images/hdri/golf_course_sunrise_1k.hdr" />
      <OrbitControls makeDefault />

      <ObjektScene />
    </>
  );
}
