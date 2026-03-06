import { extend, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Placeholder from "../components/shared/Placeholder.jsx";
import DeimosAxe from "../components/objects/DeimosAxe.jsx";

extend({ OrbitControls });

export default function DeimosAxeScene() {
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
        position: [3, 2, 6],
      }}
    >
      <Environment preset="studio" intensity={0.5} />
      <spotLight
        position={[0, 5, 0]}
        intensity={1.5}
        angle={Math.PI / 4}
        penumbra={1}
      />

      <color attach="background" args={["#777777"]} />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={20}
      />
      <Suspense fallback={<Placeholder />}>
        <DeimosAxe />
      </Suspense>
    </Canvas>
  );
}
