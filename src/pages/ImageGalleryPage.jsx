/* eslint-disable quotes */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import {
  AbsoluteIllustration,
  GalleryPageWrapper,
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

function ImageGalleryPage() {
  const images = galleryWorks[0].galleryImages;
  return (
    <MainContentContainer>
      {/* HERO SECTION */}

      {/* 3D SECTION */}
      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <AbsoluteIllustration style={{ bottom: "-40px", right: "10px" }}>
            <ZvrkiBodySVG />
          </AbsoluteIllustration>
          <AbsoluteIllustration
            style={{ bottom: "50px", right: "30px", zIndex: "10" }}
          >
            <ZvrkiHeadSVG />
          </AbsoluteIllustration>
          <H1Header style={{ width: "300px" }}>Art is in the details</H1Header>
          <SubHeader>And the meaning behind them</SubHeader>
        </HeaderWrapper>
        <GalleryPageWrapper>
          <Gallery>
            {images.map((path, index) => {
              const { width, height } = useImageDimensions(path);
              return (
                <Item
                  key={index}
                  original={path}
                  thumbnail={path}
                  width={width}
                  height={height}
                  caption={`Gallery Image ${index + 1}`}
                >
                  {({ ref, open }) => (
                    <Thumbnail
                      ref={ref}
                      onClick={open}
                      className="image-item"
                      src={path}
                      alt={`Gallery Image ${index + 1}`}
                    />
                  )}
                </Item>
              );
            })}
          </Gallery>
        </GalleryPageWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}

export default ImageGalleryPage;
