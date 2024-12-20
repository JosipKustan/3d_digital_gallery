import { extend, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Placeholder from "../../components/shared/Placeholder.jsx";
import BottomSlider from "../../components/app/bottomSlider/BottomSlider.jsx";
import GuideInfo from "../../components/app/GuideInfo.jsx";
import RastovacPhotogrammetry from "../../components/objects/RastovacPhotogrammetry.jsx";
import { galleryWorks } from "../../art/galleryWorks.js";

extend({ OrbitControls });

export default function RastovacPhotogrammetryScene() {
  return (
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
      <Environment
        background
        blur={0.1}
        files="assets/images/hdri/golf_course_sunrise_1k.hdr"
      />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={20}
      />
      <Suspense fallback={<Placeholder />}>
        <RastovacPhotogrammetry />
      </Suspense>
    </Canvas>
  );
}
