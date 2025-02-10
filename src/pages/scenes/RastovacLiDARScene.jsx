import { extend, Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import RastovacLiDAR from "../../components/objects/RastovacLiDAR.jsx";
import Placeholder from "../../components/shared/Placeholder.jsx";
import Hand from "../../components/objects/Hand.jsx";
import RotatingObject from "../../components/shared/RotatingObject.jsx";

extend({ OrbitControls });

export default function RastovacLiDARScene() {
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
        position: [10, 6, 2],
      }}
    >
      {/* <Environment background blur={0.1} files="assets/images/hdri/golf_course_sunrise_1k.hdr" /> */}
      <ambientLight intensity={0.6} color="#FFFFFF" />
      {/* <SpotLight position={[0, position, 0]} color="#ffffff" intensity={intensity} distance={distance} angle={Math.PI / 8} penumbra={1} scale={scale} attenuation={attenuation} /> */}
      <SpotLight
        position={[0, 10.0, 0]}
        color="#ffffff"
        intensity={1}
        distance={9.89}
        angle={Math.PI / 8}
        penumbra={1}
        scale={10.0}
        attenuation={10.0}
      />

      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={30}
      />
      <RotatingObject>
        <Hand />
        <Suspense fallback={<Placeholder />}>
          <RastovacLiDAR />
        </Suspense>
      </RotatingObject>
    </Canvas>
  );
}
