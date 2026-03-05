/* eslint-disable quotes */
import React from "react";
import Head from "next/head";
import {
  AbsoluteIllustration,
  GallerySection,
  H1Header,
  HeaderWrapper,
  MainContentContainer,
  SubHeader,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { ZvrkiBodySVG } from "../components/app/SVG/ZvrkiBody";
import { ZvrkiHeadSVG } from "../components/app/SVG/ZvrkiHead";
import Footer from "../components/shared/Footer";
import ImageGalleryRow from "../components/shared/ImageGalleryRow";
import useIsMobileView from "../components/shared/hooks/useIsMobileView";

function GalleryPage() {
  const isMobileView = useIsMobileView();
  return (
    <MainContentContainer>
      <Head>
        <title>Gallery — Miniature Art Portfolio | Creative Studio Kuki</title>
        <meta
          name="description"
          content="Browse the Creative Studio Kuki gallery — handcrafted miniature art pieces, personalized gifts, and unique creations by Josip Kuki."
        />
        <meta property="og:title" content="Gallery — Miniature Art Portfolio | Creative Studio Kuki" />
        <meta property="og:description" content="Browse the Creative Studio Kuki gallery — handcrafted miniature art pieces, personalized gifts, and unique creations by Josip Kuki." />
      </Head>

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

export default GalleryPage;
