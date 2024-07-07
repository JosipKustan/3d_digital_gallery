import { extend, Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import BottomSlider from "../components/app/bottomSlider/BottomSlider";
import GuideInfo from "../components/app/GuideInfo";

extend({ OrbitControls });

export default function GalleryArt({ galleryID, children }) {
  return (
    <>
      <GuideInfo />
      {children}
      <BottomSlider artPiece={galleryID} />
    </>
  );
}
