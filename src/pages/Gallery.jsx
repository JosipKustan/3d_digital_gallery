import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Scena from '../Scena.jsx';
import GuideInfo from '../components/app/GuideInfo.jsx';

function Gallery() {
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
        <Scena />
      </Canvas>
    </>
  );
}

export default Gallery;
