import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import SceneErrorBoundary from "../components/shared/SceneErrorBoundary";
import { Button } from "../components/shared/Button";
import Image from "next/image";
import {
  Absolute3DModel,
  ArtisanGalleryWrap,
  ArtisanPhoto,
  ArtisanPhotoCol,
  ArtisanPhotoInner,
  ButtonZone,
  DesktopOnly,
  Fake3DModel,
  H1Highlight,
  H1Small,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroHeader,
  HeroIllustration,
  HeroSection,
  IllustrationWrapper,
  MainContentContainer,
  MobileOnly,
  PolaroidTitle,
  ScrollZoneBottom,
  ScrollZoneTop,
  Section,
  Section3D,
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { ModelDescription } from "../components/app/cards/ModelDescription";
import GuideInfo from "../components/app/GuideInfo";
import { GalleryTeaser } from "../components/app/GalleryTeaser";
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
import { ContactZukiPurr } from "../components/app/ContactZukiPurr";

const RastovacLiDARScene = dynamic(
  () => import("../scenes/RastovacLiDARScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  },
);

function Home() {
  return (
    <MainContentContainer>
      <Head>
        <title>
          Personalised Miniature Art &amp; Handcrafted Gifts | Studio Kuki
        </title>
        <link rel="canonical" href="https://creativestudiokuki.com/" />
        <meta
          name="description"
          content="Studio Kuki crafts personalised miniature art, unique gifts, wedding keepsakes, and business awards. Handmade with care by Josip Kuštan."
        />
        <meta
          property="og:title"
          content="Personalised Miniature Art & Handcrafted Gifts | Studio Kuki"
        />
        <meta
          property="og:description"
          content="Studio Kuki crafts personalised miniature art, unique gifts, wedding keepsakes, and business awards. Handmade with care by Josip Kuštan."
        />
      </Head>
      {/*HERO SECTION*/}
      <HeroSection>
        <HeaderWrapper>
          <HeroHeader>
            <H1Highlight>Tiny art, </H1Highlight>big memories
          </HeroHeader>
          <H1Small>
            Personalised Miniature Art &amp; Handcrafted Gifts — crafting for
            individuals and businesses.
          </H1Small>
          <Link href="/gallery">
            <Button variant="dark">See all work →</Button>
          </Link>
        </HeaderWrapper>
        <IllustrationWrapper>
          <HeroIllustration />
        </IllustrationWrapper>
      </HeroSection>
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
          <SubHeader>This miniature was captured using 3D scanning</SubHeader>
        </HeaderWrapper>
        <ScrollZoneTop />
        <ScrollZoneBottom />
        <Fake3DModel>
          <GuideInfo />
        </Fake3DModel>
        <Absolute3DModel>
          <SceneErrorBoundary>
            <RastovacLiDARScene />
          </SceneErrorBoundary>
        </Absolute3DModel>
        <ModelDescription galleryWorksID={0} />
      </Section3D>

      {/*Gallery Teaser SECTION*/}
      <Section
        background={theme.colors.white}
        color={theme.colors.white}
        style={{ padding: 0 }}
      >
        <GalleryTeaser
          featured={[
            { id: 1, category: "Places" },
            { id: 5, category: "Fan Art — Gaming" },
            { id: 4, category: "Fan Art — Gaming" },
          ]}
        />
      </Section>

      {/*About sekcion*/}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>The artisan </H2Header>
          <SubHeader>
            An engineer with too many hobbies and too little time for them all.
            Woodworking, sculpting, painting, cooking... somewhere in between,{" "}
            <strong>Creative Studio Kuki was born</strong>.
          </SubHeader>
          <SubHeader>
            A place to turn memories into something you can hold, gift, and keep
            forever.
          </SubHeader>
          <ButtonZone>
            <MiniZukiLeziSVG
              style={{
                position: "absolute",
                top: "-32px",
                pointerEvents: "none",
              }}
            />
            <Button variant="light" as={Link} href="/about">
              Meet the maker →
            </Button>
          </ButtonZone>
        </HeaderWrapper>

        <ArtisanGalleryWrap>
          {/* Tall left column — wedding keepsake */}
          <ArtisanPhotoCol>
            <ArtisanPhoto style={{ transform: "rotate(-2.5deg)" }}>
              <ArtisanPhotoInner style={{ width: 230, height: 360 }}>
                <Image
                  src="/assets/images/Portrets/MeInAPainting.JPG"
                  fill
                  sizes="210px"
                  style={{ objectFit: "cover" }}
                  alt="Me in a frame"
                />
              </ArtisanPhotoInner>
              <PolaroidTitle>Me in a frame</PolaroidTitle>
            </ArtisanPhoto>
          </ArtisanPhotoCol>

          {/* Right column — two smaller pieces */}
          <ArtisanPhotoCol>
            <ArtisanPhoto style={{ transform: "rotate(1.8deg)" }}>
              <ArtisanPhotoInner style={{ width: 240, height: 236 }}>
                <Image
                  src="/assets/images/Portrets/WholeTeamMeeting.JPG"
                  fill
                  sizes="174px"
                  style={{ objectFit: "cover" }}
                  alt="Team meeting - all cats on a window"
                />
              </ArtisanPhotoInner>
              <PolaroidTitle>Team meeting</PolaroidTitle>
            </ArtisanPhoto>
            <ArtisanPhoto style={{ transform: "rotate(-1.2deg)" }}>
              <ArtisanPhotoInner style={{ width: 240, height: 210 }}>
                <Image
                  src="/assets/images/Portrets/ZukiSundown.JPG"
                  fill
                  sizes="174px"
                  style={{ objectFit: "cover" }}
                  alt="Attack on Baldur's Gate fan art"
                />
              </ArtisanPhotoInner>
              <PolaroidTitle>Director Portret</PolaroidTitle>
            </ArtisanPhoto>
          </ArtisanPhotoCol>
        </ArtisanGalleryWrap>
      </Section>

      {/*Biznis sekciono*/}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>What we do for you?</H2Header>
          <SubHeader>
            Personalised Miniature Art, Unique Gifts, Awards, and Fun Game
            Events.
          </SubHeader>
        </HeaderWrapper>
        <CardsWrapper>
          <CatCard
            svg={<IndividualCatSVG />}
            header="For Individuals"
            description="Personalised Miniature Art for one or many."
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
          <DesktopOnly>
            <Button variant="dark" as={Link} href="/contact">
              Start a commission →
            </Button>
          </DesktopOnly>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>1. We talk about the memories</H4Header>
            <p>
              You don't need to have ideas on what the art will be, but you sure
              have a memory, person, pet, place, or really anything that might
              make you emotional. That is for me the best reason to create small
              art.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>2. You choose the idea</H4Header>
            <p>
              Don't worry, we are here to help you decide. We talk about
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
              We don't leave you in the dark. Except if you want it that way. We
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
          <MobileOnly>
            <Button variant="dark" as={Link} href="/contact">
              Start a commission →
            </Button>
          </MobileOnly>
        </TextListWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}

export default Home;
