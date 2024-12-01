import React from "react";
import { Button } from "../components/shared/Button";
import {
  Absolute3DModel,
  BasicCard,
  ButtonZone,
  BeachIllustrationWrapper,
  CartIllustrationWrapper,
  DivIllustrationWrapper,
  Fake3DModel,
  FloatCardSection,
  H1Header,
  H1Highlight,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroIllustration,
  HeroBeachIllustration,
  HeroSection,
  IllustrationWrapper,
  MainContentContainer,
  ScrollZoneBottom,
  ScrollZoneTop,
  Section,
  Section3D,
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import RastovacLiDARScene from "./scenes/RastovacLiDARScene";
import { ModelDescription } from "../components/app/cards/ModelDescription";
import GuideInfo from "../components/app/GuideInfo";
import GalleryList from "../components/app/nav/GalleryList";
import { CardsWrapper } from "../components/app/cards/CardStyles";
import { CatCard } from "../components/app/cards/CatCard";
import { IndividualCatSVG } from "../components/app/SVG/IndividualCatSVG";
import { BusinessCatSVG } from "../components/app/SVG/BusinessCatSVG";
import { TestemonialsCard } from "../components/app/cards/TestemonialsCard";
import { MagareVinkoSVG } from "../components/app/SVG/MagareVinkoSVG";
import { MiniZukiLeziSVG } from "../components/app/SVG/MiniZukiLeziSVG";
import Footer from "../components/shared/Footer";
import { JelenaPapigaSVG } from "../components/app/SVG/JelenaPapigaSVG";
import { TomicSVGDragon } from "../components/app/SVG/TomicSVGDragon";

function ServicesPage() {
  return (
    <MainContentContainer>
      {/*HERO SECTION*/}
      <HeroSection>
        <HeaderWrapper>
          <H1Header>
            Services
          </H1Header>
          <SubHeader>
          Here we specialize in delivering handcrafted, 
          one-of-a-kind miniature art pieces tailored to your needs. 
          Whether you're looking for personal gifts or business solutions, 
          we provide creative and personalized artwork for every occasion.
          </SubHeader>
        </HeaderWrapper>
        <DivIllustrationWrapper>
          <IllustrationWrapper>
            <HeroBeachIllustration />
          </IllustrationWrapper>
        </DivIllustrationWrapper>
        
        
      </HeroSection>

      {/*3D SECTION*/}
      <Section3D
        background={theme.colors.tiel_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <CatCard
            svg={<IndividualCatSVG />}
            header="For Individuals"
            color={theme.colors.tiel_dark}
          />
          <H2Header>
          What IS the PRICE?
          </H2Header>
          <SubHeader>
            It depends on what we come up with and how complex you want it. 
            We believe that the value of our work is in its uniqueness and the memories 
            it captures. Contact us to discuss your wants and get a personalized quote.
          </SubHeader>
          <H4Header>
            What IS the PRICE?
          </H4Header>
          <ButtonZone>
            <Button>Get a quote.</Button>
          </ButtonZone><br />
          
        </HeaderWrapper>
        <IllustrationWrapper>
          
        </IllustrationWrapper>
      </Section3D>
      {/*Biznis sekciono*/}
      <Section
        background={theme.colors.blue_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          
        <CardsWrapper>
          <CatCard
            svg={<BusinessCatSVG />}
            header="For Businesses"
            description="Gifts, Memorabilia, Awards and Game Events."
            color={theme.colors.blue_dark}
          />
        </CardsWrapper>
        <H2Header>From art to events</H2Header>
          <SubHeader>
            We collaborate with companies to deliver 
            innovative and custom artwork and game events 
            for a variety of purposes
          </SubHeader>
          <H4Header>Examples of some works</H4Header>
          <ButtonZone>
            <Button>Get a quote.</Button>
          </ButtonZone><br />
        </HeaderWrapper>
      </Section>
    </MainContentContainer>
  );
}

export default ServicesPage;