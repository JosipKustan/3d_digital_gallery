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
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { HeroZuki } from "../components/app/SVG/HeroZuki";
import RastovacLiDARScene from "./scenes/RastovacLiDARScene";
import { ModelDescription } from "../components/app/cards/ModelDescription";
import GuideInfo from "../components/app/GuideInfo";
import GalleryList from "../components/app/nav/GalleryList";
import { CardsWrapper } from "../components/app/cards/CatCardStyles";
import { CatCard } from "../components/app/cards/CatCard";
import { IndividualCatSVG } from "../components/app/SVG/IndividualCatSVG";
import { BusinessCatSVG } from "../components/app/SVG/BusinessCatSVG";
import { ZvrkiAboutUsSVG } from "../components/app/SVG/ZvrkiAboutUsSVG";

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

      {/*Biznis sekciono*/}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H1Header>What we do for you?</H1Header>
          <SubHeader>
            Personalized Miniature Art, Unique Gifts, Awards, and Fun Game
            Events.
          </SubHeader>
        </HeaderWrapper>
        <CardsWrapper>
          <CatCard
            svg={<IndividualCatSVG />}
            header="For Individuals"
            description="Personalized Miniature Art for one or many."
            color={theme.colors.tiel_dark}
          />
          <CatCard
            svg={<BusinessCatSVG />}
            header="For Businesses"
            description="Gifts, Memorabilia, Awards and Game Events."
            color={theme.colors.blue_dark}
          />
        </CardsWrapper>
      </Section>

      {/*How we work sekcion*/}
      <Section background={theme.colors.yellow_accent}>
        <HeaderWrapper>
          <H1Header>How we work?</H1Header>
          <SubHeader>
            Depending on projects demands and possibilities we have different
            operational workflows.
          </SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H5Header>1. We talk about the memories</H5Header>
            <p>
              Depending on projects demands and possibilities we have different
              operational workflows.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H5Header>2. You choose the idea</H5Header>
            <p>
              Depending on projects demands and possibilities we have different
              operational workflows.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H5Header>3. We shake hands</H5Header>
            <p>
              Depending on projects demands and possibilities we have different
              operational workflows.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H5Header>4. Magic of making </H5Header>
            <p>
              Depending on projects demands and possibilities we have different
              operational workflows.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H5Header>5. Delivery </H5Header>
            <p>
              Depending on projects demands and possibilities we have different
              operational workflows.
            </p>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      {/*About us Sekcion*/}
      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <H1Header>About us</H1Header>
          <SubHeader>Well, me and the cats...</SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <p>My name is Josip, but everyone calls me Kuki.</p>
          <p>
            My memory isn't the best, so I started turning my memories into
            miniature art to keep them from slipping away. I combine passion and
            precision to create pieces that capture stories.
          </p>
          <p>
            By day, I design software; by night, I bring memories to life. Each
            piece is crafted with meticulous care, ensuring that your special
            moments are preserved!
          </p>
        </TextListWrapper>
        <ZvrkiAboutUsSVG />
      </Section>
    </MainContentContainer>
  );
}

export default Home;
