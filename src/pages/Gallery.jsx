import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import RastovacLiDAR from './scenes/RastovacLiDAR.jsx';
import GuideInfo from '../components/app/GuideInfo.jsx';
import BottomSlider from '../components/app/bottomSlider/BottomSlider.jsx';
import { RastovacArtName, RastovacDescription } from '../components/app/bottomSlider/BottomSliderContent.jsx';

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
        <RastovacLiDAR />

      </Canvas>

      <BottomSlider artName={RastovacArtName} description={RastovacDescription} />
    </>
  );
}

export default Gallery;
