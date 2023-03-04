import { extend } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import ObjektScene from '../../ObjektScene.jsx';
import Placeholder from '../../components/shared/Placeholder.jsx';

extend({ OrbitControls });

export default function RastovacLiDAR() {
  return (
    <>
      <Environment background blur={0.1} files="assets/images/hdri/golf_course_sunrise_1k.hdr" />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={10}
      />
      <Suspense fallback={<Placeholder />}>
        <ObjektScene />
      </Suspense>
    </>
  );
}
