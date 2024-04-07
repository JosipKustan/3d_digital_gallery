import { extend, Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, SpotLight } from '@react-three/drei';
import * as THREE from 'three';
import AttackOnBaldursGate from '../../components/objects/AttackOnBaldursGate.jsx';
import Placeholder from '../../components/shared/Placeholder.jsx';
import BottomSlider from '../../components/app/bottomSlider/BottomSlider.jsx';
import GuideInfo from '../../components/app/GuideInfo.jsx';
import { galleryWorks } from '../../art/galleryWorks.js';

extend({ OrbitControls });


export default function AttackOnBaldursGateScene() {
  const pedestalSize = [6, 50, 6];
  const pedestalPosition = [0, -25.9, 0];
  const pedestalColor = '#201212';

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
          position: [-6, 0, -4],
        }}
      >
       
        <ambientLight intensity={0.6} color="#FFFFFF" />
  
        <SpotLight position={[0, 10.0, 0]} color="#ffffff" intensity={1} distance={9.89} angle={Math.PI / 8} penumbra={1} scale={10.00} attenuation={10.00} />

        <mesh position={pedestalPosition}>
          <boxGeometry args={pedestalSize} />
          <meshStandardMaterial color={pedestalColor} />
        </mesh>
        <OrbitControls
          makeDefault
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={30}
        />
        <Suspense fallback={<Placeholder />}>
          <AttackOnBaldursGate />
        </Suspense>
      </Canvas>
      <BottomSlider artPiece={galleryWorks[2]} />
    </>
  );
}
