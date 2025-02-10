/* eslint-disable quotes */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import {
  AbsoluteIllustration,
  GalleryPageWrapper,
  GallerySection,
  H1Header,
  HeaderWrapper,
  MainContentContainer,
  Section,
  SubHeader,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { Thumbnail } from "../components/app/bottomSlider/GallerySliderStyles";
import { galleryWorks } from "../art/galleryWorks";
import { ZvrkiBodySVG } from "../components/app/SVG/ZvrkiBody";
import { ZvrkiHeadSVG } from "../components/app/SVG/ZvrkiHead";
import Footer from "../components/shared/Footer";
import useImageDimensions from "../components/shared/hooks/getImageDimensions";
import ImageGalleryRow from "../components/shared/ImageGalleryRow";
import useIsMobileView from "../components/shared/hooks/useIsMobileView";

function ImageGalleryPage() {
  const isMobileView = useIsMobileView();
  return (
    <MainContentContainer>
      {/* HERO SECTION */}

      {/* 3D SECTION */}
      <GallerySection color={theme.colors.black}>
        <HeaderWrapper>
          <AbsoluteIllustration
            style={{ bottom: isMobileView ? "-40px" : "-10px", right: "10px" }}
          >
            <ZvrkiBodySVG />
          </AbsoluteIllustration>
          <AbsoluteIllustration
            style={{
              bottom: isMobileView ? "50px" : "80px",
              right: "30px",
              zIndex: "10",
            }}
          >
            <ZvrkiHeadSVG />
          </AbsoluteIllustration>
          <H1Header style={{ width: isMobileView ? "300px" : "600px" }}>
            Art is in the details
          </H1Header>
          <SubHeader>And in the meaning behind them</SubHeader>
        </HeaderWrapper>
        <ImageGalleryRow number={0} />
        <ImageGalleryRow number={1} />
        <ImageGalleryRow number={2} />
      </GallerySection>

      <Footer />
    </MainContentContainer>
  );
}

export default ImageGalleryPage;
