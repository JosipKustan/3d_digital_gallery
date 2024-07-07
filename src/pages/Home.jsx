import React from "react";
import { Button } from "../components/shared/Button";
import {
  Absolute3DModel,
  AbsoluteIllustration,
  Fake3DModel,
  H1Header,
  H1Highlight,
  H2Header,
  H5Header,
  HeaderWrapper,
  HeroSection,
  MainContentContainer,
  ScrollZoneBottom,
  ScrollZoneTop,
  Section,
  SubHeader,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { HeroZuki } from "../components/app/SVG/HeroZuki";
import RastovacLiDARScene from "./scenes/RastovacLiDARScene";
import { ModelDescription } from "../components/app/cards/ModelDescription";
import GuideInfo from "../components/app/GuideInfo";
import GalleryList from "../components/app/nav/GalleryList";

function Home() {
  return (
    <MainContentContainer>
      {/*HERO SECTION*/}
      <HeroSection>
        <HeaderWrapper>
          <H1Header>
            <H1Highlight>Tiny art.</H1Highlight>Big memories
          </H1Header>
          <SubHeader>
            Crafting personalized miniature art and unforgettable experiences
            for individuals and businesses.
          </SubHeader>
        </HeaderWrapper>
        <AbsoluteIllustration>
          <HeroZuki />
        </AbsoluteIllustration>
      </HeroSection>

      {/*3D SECTION*/}
      <Section background={theme.colors.purple_dark} color={theme.colors.white}>
        <HeaderWrapper>
          <H2Header>Take it for a spin</H2Header>
          <SubHeader>No really, it's a 3D model. Spin it.</SubHeader>
        </HeaderWrapper>
        <ScrollZoneTop />
        <ScrollZoneBottom />
        <Fake3DModel>
          <GuideInfo />
        </Fake3DModel>
        <Absolute3DModel>
          <RastovacLiDARScene />
        </Absolute3DModel>
        <ModelDescription galleryWorksID={0} />
      </Section>

      {/*Mooou wuuuk SECTION*/}
      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <H5Header>Check out other works in 3D!</H5Header>
        </HeaderWrapper>
        <GalleryList big />
      </Section>
    </MainContentContainer>
  );
}

export default Home;
