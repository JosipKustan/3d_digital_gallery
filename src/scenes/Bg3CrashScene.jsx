import { extend, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import Bg3Crash from "../components/objects/Bg3Crash.jsx";
import Placeholder from "../components/shared/Placeholder.jsx";
import Hand from "../components/objects/Hand.jsx";

extend({ OrbitControls });

export default function Bg3CrashScene() {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, -1],
      }}
    >
      <Environment preset="apartment" />
      <SpotLight
        position={[0, 10.0, 0]}
        color="#ffffff"
        intensity={4}
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
      <Hand />
      <Suspense fallback={<Placeholder />}>
        <Bg3Crash />
      </Suspense>
    </Canvas>
  );
}
