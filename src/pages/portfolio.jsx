import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Button } from "../components/shared/Button";
import {
  Absolute3DModel,
  ButtonZone,
  ContactWrapper,
  Fake3DModel,
  H1Header,
  H1Highlight,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroPortfolioIllustration,
  MainContentContainer,
  PurPurAnimated,
  ScrollZoneBottom,
  ScrollZoneTop,
  Section3D,
  SectionPortfolio,
  SkillCardsWrapper,
  SkillSectionPortfolio,
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import GuideInfo from "../components/app/GuideInfo";
import { IndividualCatSVG } from "../components/app/SVG/IndividualCatSVG";
import Footer from "../components/shared/Footer";
import { PortfolioCard } from "../components/app/cards/PortfolioCard";
import { NDAZukiSvg } from "../components/app/SVG/NDAZukiSvg";
import { IconNewTab } from "../components/app/SVG/IconNewTab";
import { useOpenLink } from "../components/shared/hooks/useOpenLink";
import { SkillsCard } from "../components/app/cards/SkillsCard";
import { CookingSvg } from "../components/app/SVG/CookingSvg";
import { GameMasterSVG } from "../components/app/SVG/GameMasterSVG";
import { DanceSVG } from "../components/app/SVG/DanceSVG";
import { CountrysideSVG } from "../components/app/SVG/CountrysideSVG";
import { QedSVG } from "../components/app/SVG/QedSVG";
import { ContactZuki } from "../components/app/SVG/ContactZuki";
import useIsMobileView from "../components/shared/hooks/useIsMobileView";

const RastovacLiDARScene = dynamic(
  () => import("../scenes/RastovacLiDARScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  },
);

function Portfolio() {
  const { openLink } = useOpenLink();
  const isMobileView = useIsMobileView();

  return (
    <MainContentContainer>
      <Head>
        <title>
          Portfolio — Josip Kuštan, Designer & Artist | Creative Studio Kuki
        </title>
        <link rel="canonical" href="https://creativestudiokuki.com/portfolio" />
        <meta
          name="description"
          content="The personal portfolio of Josip Kuštan — UX designer, software engineer, and miniature artist. Explore case studies, skills, and creative work."
        />
        <meta
          property="og:title"
          content="Portfolio — Josip Kuštan, Designer & Artist | Creative Studio Kuki"
        />
        <meta
          property="og:description"
          content="The personal portfolio of Josip Kuštan — UX designer, software engineer, and miniature artist."
        />
      </Head>
      {/*HERO SECTION*/}
      <SectionPortfolio>
        <HeaderWrapper>
          <H1Header>
            <H1Highlight>Hi! I'm </H1Highlight> Josip Kuštan
          </H1Header>
          <SubHeader>UX Designer - with miniature artist's patience.</SubHeader>
        </HeaderWrapper>
        <HeroPortfolioIllustration />
      </SectionPortfolio>

      {/*3D SECTION*/}
      <Section3D
        background={theme.colors.purple_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>
            What comes <br />
            with me?
          </H2Header>
          <SubHeader>
            4+ years of agency and freelance experience across complex
            enterprise apps, niche B2B solutions, and small business sites.
            Ready for product teams, but open to interesting challenges
            anywhere.
          </SubHeader>
        </HeaderWrapper>
        {!isMobileView && (
          <>
            <ScrollZoneTop />
            <ScrollZoneBottom />
            <Fake3DModel>
              <GuideInfo />
            </Fake3DModel>
            <Absolute3DModel>
              <RastovacLiDARScene />
            </Absolute3DModel>
          </>
        )}
      </Section3D>

      {/*Biznis sekciono*/}
      <SkillSectionPortfolio
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>Work I am proud of</H2Header>
          <SubHeader>
            Most work is under NDA, but here's what I can show
          </SubHeader>
        </HeaderWrapper>
        <SkillCardsWrapper>
          <PortfolioCard
            svg={<IndividualCatSVG />}
            img="/assets/images/Logos/cpsHand.png"
            header="Fundraising website for charities"
            description="3x donation revenue through intuitive UX flows."
            responsibilities="UX research, workshops, user flows, design, prototypes, and user testing."
            color={theme.colors.tiel_dark}
            colorAccent={theme.colors.tiel_accent}
            links={[
              [
                "https://www.behance.net/gallery/193394665/Do-the-right-thing-(hrv-Cini-pravu-stvar)",
                "Case Study",
              ],
              ["https://www.cinipravustvar.hr/", "Fundraiser"],
            ]}
          />
          <PortfolioCard
            svg={<QedSVG style={{ width: "100%", height: "100%" }} />}
            header="International conference moderator"
            description="QED (Quality in Enterprise Development) for 2 years"
            responsibilities="keynote moderation, creative role in the organizing team, and game‑night hosting."
            color={theme.colors.purple_dark}
            colorAccent={theme.colors.purple_accent}
            links={[
              ["https://www.youtube.com/watch?v=DJrN_hCNKxE&t", "Keynote talk"],
              ["https://qed.croz.net/", "Conference"],
            ]}
          />
          <PortfolioCard
            svg={<NDAZukiSvg style={{ width: "auto", height: "100%" }} />}
            header="Enterprise Design System (NDA)"
            description="Unified 120+ applications, legacy 1980s to modern 2020s)"
            responsibilities="client communication, app analysis and categorization, global layout, pattern creation, component creation, Figma demos and prototypes, and a design guidebook with all UX examples."
            color={theme.colors.blue_dark}
            colorAccent={theme.colors.blue_accent}
            links={[["/assets/PDF/NDA Case Study.pdf#zoom=50", "Case Study"]]}
          />
        </SkillCardsWrapper>
      </SkillSectionPortfolio>

      {/*MoWook*/}
      <SectionPortfolio background={theme.colors.yellow_accent}>
        <HeaderWrapper>
          <H2Header>More work</H2Header>
          <SubHeader>I'm proud of this work too.</SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>1. Tiller - Design System</H4Header>
            <p>
              My first of four design systems—open source. I worked with
              developers and designers to create a tool that fits company goals.
            </p>
            <Button
              background={theme.colors.transparent}
              colorAccent={theme.colors.black}
              colorText={theme.colors.black}
              color={theme.colors.white}
              onClick={() =>
                openLink(
                  "https://croz-ltd.github.io/tiller/?path=/story/introduction--page",
                )
              }
            >
              Showcase
              <IconNewTab style={{ fill: "black" }} />
            </Button>
          </StepWrapper>
          <StepWrapper>
            <H4Header>2. Bank UX consultant</H4Header>
            <p>
              Enterprise UX. Biggest impacts: creating the information
              architecture for legally heavy websites, running user testing, and
              using and teaching complex Figma systems for faster iteration.
            </p>
            <Button
              background={theme.colors.transparent}
              colorAccent={theme.colors.black}
              colorText={theme.colors.black}
              color={theme.colors.white}
              onClick={() => openLink("https://www.rba.hr/hr/gradani.html")}
            >
              Website
              <IconNewTab style={{ fill: "black" }} />
            </Button>
          </StepWrapper>
          <StepWrapper>
            <H4Header>3. Co-Leading UX Community of Practice (UX CoP)</H4Header>
            <p>
              I mentored junior designers, reviewed and guided them in their
              projects. UX CoP was the best way to learn and share knowledge
              between designers — you practically never work alone.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>4. Creative Studio Kuki (This site) </H4Header>
            <p>
              Solo‑built. Focused on 3D visualization and interaction design
              based on qualitative user research, plus fun illustrations of my
              cats.
            </p>
            <Button
              background={theme.colors.transparent}
              colorAccent={theme.colors.black}
              colorText={theme.colors.black}
              color={theme.colors.white}
              onClick={() => openLink("https://creativestudiokuki.com/")}
            >
              Homepage
              <IconNewTab style={{ fill: "black" }} />
            </Button>
          </StepWrapper>
          <StepWrapper>
            <H4Header>5. Code-X Marine </H4Header>
            <p>
              Niche product showcase website for one of the world's lightest*
              sailing boats.
            </p>
            <Button
              background={theme.colors.transparent}
              colorAccent={theme.colors.black}
              colorText={theme.colors.black}
              color={theme.colors.white}
              onClick={() => openLink("https://code-x-marine.com/")}
            >
              Website
              <IconNewTab style={{ fill: "black" }} />
            </Button>
          </StepWrapper>
        </TextListWrapper>
      </SectionPortfolio>

      {/* MoSkills */}
      <SkillSectionPortfolio background={theme.colors.white}>
        <HeaderWrapper>
          <H2Header>LIFE Skills</H2Header>
          <SubHeader>
            Life experience has been preparing me for UX and design.
          </SubHeader>
        </HeaderWrapper>

        <SkillCardsWrapper>
          <SkillsCard
            svg={<CookingSvg style={{ width: "100%", height: "100%" }} />}
            header="Cooking – 13 years"
            description="I love science behind food and how we perceive it. And of course to feed my friends and family."
            color={theme.colors.blue_dark}
            skills={[
              "Iteration and testing",
              "Visual composition",
              "Time management",
            ]}
          />
          <SkillsCard
            svg={<GameMasterSVG style={{ width: "100%", height: "100%" }} />}
            header="Game Master (D&D) – 10 years"
            description="A creative game where I've led more than 50 players through 10+ big and small stories."
            color={theme.colors.purple_dark}
            skills={[
              "Running design workshops",
              "Storytelling",
              "User empathy",
            ]}
          />
          <SkillsCard
            svg={<DanceSVG style={{ width: "100%", height: "100%" }} />}
            header="Art & Dance – 9 years"
            description="I was in competitive Standard and Latin dancing as a young one and now I make miniature art."
            color={theme.colors.tiel_dark}
            skills={["Beauty appreciation", "Spatial harmony"]}
          />
          <SkillsCard
            svg={<CountrysideSVG style={{ width: "100%", height: "100%" }} />}
            header="Countryside living"
            description="No problem is hard enough if you get together with people."
            color={theme.colors.yellow_accent}
            skills={["Problem-solving", "Resourcefulness", "Self-reliance"]}
          />
        </SkillCardsWrapper>
      </SkillSectionPortfolio>

      {/*Lets get it touch Sekcion*/}
      <SkillSectionPortfolio
        background={theme.colors.white}
        color={theme.colors.black}
        id="contact"
      >
        <HeaderWrapper>
          <H2Header>Let's get in touch</H2Header>
          <ContactWrapper>
            <ContactZuki eyes={false} />
            <PurPurAnimated />
            <PurPurAnimated style={{ top: "20px", right: "60%" }} />
            <PurPurAnimated style={{ top: "-15px", right: "30%" }} />
          </ContactWrapper>
        </HeaderWrapper>
      </SkillSectionPortfolio>

      {/* Miniature Artworks & Handmade */}
      <SectionPortfolio
        background={theme.colors.purple_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>STILL HERE?</H2Header>
          <SubHeader>I have interesting things to show you</SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>Miniature Art Worlds</H4Header>
            <p>
              Precision‑crafted dioramas that preserve memories and make unique
              gifts.
            </p>
            <br />
          </StepWrapper>
          <StepWrapper>
            <H4Header>Professional '25 Kitchen</H4Header>
            <p>
              Worked as a cook in a small restaurant, from menu R&D to daily
              execution. It was very successful—and also the hardest job I've
              ever done.
            </p>
            <br />
          </StepWrapper>
          <StepWrapper>
            <H4Header>Hand-sewn Vest &amp; Tie</H4Header>
            <p>
              Patterned and stitched formal wear before I ever touched a sewing
              machine for anything else.
            </p>
            <br />
          </StepWrapper>
          <StepWrapper>
            <H4Header>Hand-forged Chef Knife</H4Header>
            <p>
              Designed and forged my own chef's knife. The handle is just
              waiting for its time.
            </p>
            <br />
          </StepWrapper>
        </TextListWrapper>
      </SectionPortfolio>
      <Footer />
    </MainContentContainer>
  );
}

export default Portfolio;
