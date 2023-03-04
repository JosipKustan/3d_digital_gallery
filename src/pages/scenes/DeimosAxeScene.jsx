import { extend, Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Placeholder from '../../components/shared/Placeholder.jsx'; import { RastovacArtName, RastovacDescription } from '../../components/app/bottomSlider/BottomSliderContent.jsx';
import BottomSlider from '../../components/app/bottomSlider/BottomSlider.jsx';
import GuideInfo from '../../components/app/GuideInfo.jsx';
import DeimosAxe from '../../components/objects/DeimosAxe.jsx';
import { galleryWorks } from '../../art/galleryWorks.js';

extend({ OrbitControls });

export default function DeimosAxeScene() {
  return (
    <>
      <GuideInfo />
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <ambientLight intensity={1} />

        <spotLight position={[0, 5, 0]} intensity={2} angle={Math.PI / 4} penumbra={1} />

        <color attach="background" args={['#777777']} />
        <OrbitControls
          makeDefault
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={10}
        />
        <Suspense fallback={<Placeholder />}>
          <DeimosAxe />
        </Suspense>
      </Canvas>
      <BottomSlider artPiece={galleryWorks[2]} />
    </>
  );
}
