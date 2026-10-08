import React from "react";
import BottomSlider from "./app/bottomSlider/BottomSlider";
import GuideInfo from "./app/GuideInfo";
import GalleryList from "./app/nav/GalleryList";
import useIsMobileView from "./shared/hooks/useIsMobileView";
import { BottomBar, ScreenWrapper, VisuallyHidden } from "./shared/StaticStyles";
import theme from "./theme";

export default function GalleryArt({ galleryID, children }) {
  const isMobileView = useIsMobileView();
  return (
    <ScreenWrapper>
      <VisuallyHidden as="h1">{galleryID.name}, interactive 3D model</VisuallyHidden>
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
