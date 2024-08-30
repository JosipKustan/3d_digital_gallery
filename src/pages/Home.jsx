import React from "react";
import { Button } from "../components/shared/Button";
import {
  Absolute3DModel,
  BasicCard,
  ButtonZone,
  Fake3DModel,
  FloatCardSection,
  H1Header,
  H1Highlight,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroIllustration,
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
import { HeroFull } from "../components/app/SVG/HeroFull";
import { TestemonialsCard } from "../components/app/cards/TestemonialsCard";
import { FlekicaSVG } from "../components/app/SVG/FlekicaSVG";
import { MagareVinkoSVG } from "../components/app/SVG/MagareVinkoSVG";
import { DolphinKrisSVG } from "../components/app/SVG/DolphinKrisSVG";
import { MuckoStretchSVG } from "../components/app/SVG/MuckoStretchSVG";
import { MiniZukiLeziSVG } from "../components/app/SVG/MiniZukiLeziSVG";
import Footer from "../components/shared/Footer";
import { JelenaPapigaSVG } from "../components/app/SVG/JelenaPapigaSVG";
import { TomicSVGDragon } from "../components/app/SVG/TomicSVGDragon";

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
        <IllustrationWrapper>
          <HeroIllustration />
        </IllustrationWrapper>
      </HeroSection>
      <FloatCardSection>
        <BasicCard>
          <H4Header> About us</H4Header>
          <br />
          <p>
            My name is Josip, but everyone calls me <strong>Kuki</strong>.
          </p>
          <p>
            My memory isn't the best, so I started turning my{" "}
            <strong>memories into miniature art</strong> to keep them from
            slipping away. I combine passion and precision to create pieces that
            capture stories.
          </p>
          <p>
            By day, I design software; by night, I bring memories to life. Each
            piece is crafted with meticulous care,{" "}
            <strong>ensuring that your special moments are preserved!</strong>
          </p>
          <ButtonZone>
            <MiniZukiLeziSVG style={{ position: "absolute", top: "-32px" }} />
            <Button>Follow us on the social medias</Button>
          </ButtonZone>
        </BasicCard>
      </FloatCardSection>

      {/*3D SECTION*/}
      <Section3D
        background={theme.colors.purple_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>
            Take it <br />
            for a spin
          </H2Header>
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
      </Section3D>

      {/*Mooou wuuuk SECTION*/}
      <Section
        background={theme.colors.purple_dark}
        color={theme.colors.white}
        style={{
          paddingBlock: "64px",
          paddingInline: "0px",
          flexDirection: "column",
        }}
      >
        <HeaderWrapper>
          <H4Header>Check out other works in 3D!</H4Header>
        </HeaderWrapper>
        <GalleryList big="true" />
      </Section>

      {/*Biznis sekciono*/}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>What we do for you?</H2Header>
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
          <H2Header>How we work?</H2Header>
          <SubHeader>
            Depending on projects demands and possibilities we have different
            operational workflows.
          </SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>1. We talk about the memories</H4Header>
            <p>
              You don’t need to have ideas on what the art will be, but you sure
              have a memory, person, pet, place, or really anything that might
              make you emotional. That is for me the best reason to create small
              art.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>2. You choose the idea</H4Header>
            <p>
              Don’t worry, we are here to help you decide. We talk about
              possible ideas and options to fit in your budget.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>3. We shake hands</H4Header>
            <p>
              Paper work and delivery agreements, we can not go without them,
              for both of our sake.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>4. Magic of making </H4Header>
            <p>
              We don’t leave you in the dark. Except if you want it that way :We
              start making and we give updated on the progress when necessary.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>5. Delivery </H4Header>
            <p>
              We carefully package and protect the item so it is delivered
              safely, small things are really fragile.
            </p>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      {/*Lets get it touch Sekcion*/}
      <Section color={theme.colors.black} id="contact">
        <HeaderWrapper>
          <H2Header>Let’s get in touch</H2Header>
          <SubHeader>
            Let’s unlock the ideas together! You might be surprised what can be
            done.
          </SubHeader>
        </HeaderWrapper>
        <CardsWrapper>
          <TestemonialsCard
            svg={<JelenaPapigaSVG />}
            name="Jelena P."
            testemonial="“Best gift EVER! Personalised, beautiful and it even glows. Who ever sees it, is impressed”"
            backgroundColor={theme.colors.background_dark}
          />
          <TestemonialsCard
            svg={<MagareVinkoSVG />}
            name="Mirela U."
            testemonial="“I don’t know how did he manage to get it spot on. And so detailed!!!”"
            backgroundColor={theme.colors.background_dark}
          />
          <TestemonialsCard
            svg={<TomicSVGDragon />}
            name="Josip T."
            testemonial="“Kuki made a small art piece that is a centerpiece of my living room"
            backgroundColor={theme.colors.background_dark}
          />
          <H4Header>Contact me on one of these :D</H4Header>
        </CardsWrapper>
      </Section>
      <Footer />
    </MainContentContainer>
  );
}

export default Home;
