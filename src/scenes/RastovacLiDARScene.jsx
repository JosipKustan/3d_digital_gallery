import { extend, Canvas } from "@react-three/fiber";
import React, { Suspense, useCallback, useState } from "react";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import RastovacLiDAR from "../components/objects/RastovacLiDAR.jsx";
import SceneLoader from "../components/shared/SceneLoader.jsx";
import SceneReady from "../components/shared/SceneReady.jsx";
import Hand from "../components/objects/Hand.jsx";
import RotatingObject from "../components/shared/RotatingObject.jsx";

extend({ OrbitControls });

export default function RastovacLiDARScene() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
          position: [10, 6, 2],
        }}
      >
        <Environment preset="apartment" />
        <SpotLight
          position={[0, 10.0, 0]}
          color="#ffffff"
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
          <Suspense fallback={null}>
            <Hand />
            <RastovacLiDAR />
            <SceneReady onReady={handleReady} />
          </Suspense>
        </RotatingObject>
      </Canvas>
      <SceneLoader visible={!ready} />
    </div>
  );
}
