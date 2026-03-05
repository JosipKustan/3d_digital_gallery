/* eslint-disable quotes */
import { extend } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import BottomSlider from "./app/bottomSlider/BottomSlider";
import GuideInfo from "./app/GuideInfo";
import GalleryList from "./app/nav/GalleryList";
import useIsMobileView from "./shared/hooks/useIsMobileView";
import { BottomBar, ScreenWrapper } from "./shared/StaticStyles";
import theme from "./theme";

extend({ OrbitControls });

export default function GalleryArt({ galleryID, children }) {
  const isMobileView = useIsMobileView();
  return (
    <ScreenWrapper>
      <GuideInfo color={theme.colors.black} />
      {children}
      <BottomBar>
        <BottomSlider artPiece={galleryID} />
        {!isMobileView && (
          <div style={{ pointerEvents: "auto" }}>
            <GalleryList excludeId={galleryID.id} />
          </div>
        )}
      </BottomBar>
    </ScreenWrapper>
  );
}
