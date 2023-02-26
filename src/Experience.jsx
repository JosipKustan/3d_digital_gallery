import { useThree, extend, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import CustomObject from './CustomObject';

extend({ OrbitControls });

export default function Experience() {
  return (
    <>
      <Environment background files="assets/images/hdri/golf_course_sunrise_1k.hdr" />
      <OrbitControls makeDefault />

      <ambientLight intensity={0.3} />
      <mesh position-y={0.35} position-x={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="#202410" />
      </mesh>
      <CustomObject />
    </>
  );
}
