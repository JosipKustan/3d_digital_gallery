/* eslint-disable quotes */
import { extend } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import BottomSlider from "./app/bottomSlider/BottomSlider";
import GuideInfo from "./app/GuideInfo";
import { ScreenWrapper } from "./shared/StaticStyles";

extend({ OrbitControls });

export default function GalleryArt({ galleryID, children }) {
  return (
    <ScreenWrapper>
      <GuideInfo />
      {children}
      <BottomSlider artPiece={galleryID} />
    </ScreenWrapper>
  );
}
