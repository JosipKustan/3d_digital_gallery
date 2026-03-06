import { extend, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import AttackOnBaldursGate from "../components/objects/AttackOnBaldursGate.jsx";
import Placeholder from "../components/shared/Placeholder.jsx";
import Hand from "../components/objects/Hand.jsx";

extend({ OrbitControls });

export default function AttackOnBaldursGateScene() {
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
        position: [-6, 0, -4],
      }}
    >
      <Environment preset="apartment" intensity={0.5} />
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

      <Suspense fallback={<Placeholder />}>
        <AttackOnBaldursGate />
      </Suspense>
      <Hand />
    </Canvas>
  );
}
