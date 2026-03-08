import Head from "next/head";
import Link from "next/link";
import {
  BasicCard,
  ButtonZone,
  FloatCardSection,
  H1Highlight,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroHeader,
  HeroSection,
  IllustrationWrapper,
  MainContentContainer,
  Section,
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import { Button } from "../components/shared/Button";
import { MiniZukiLeziSVG } from "../components/app/SVG/MiniZukiLeziSVG";
import Footer from "../components/shared/Footer";
import theme from "../components/theme";

export default function AboutPage() {
  return (
    <MainContentContainer>
      <Head>
        <title>About Kuki — Creative Studio Kuki</title>
        <link rel="canonical" href="https://creativestudiokuki.com/about" />
        <meta
          name="description"
          content="Meet Josip 'Kuki' Kuštan — the engineer-turned-artisan behind Creative Studio Kuki. Too many hobbies, too little time, and a studio born from all of it."
        />
        <meta property="og:title" content="About Kuki — Creative Studio Kuki" />
        <meta
          property="og:description"
          content="Meet Josip 'Kuki' Kuštan — the engineer-turned-artisan behind Creative Studio Kuki."
        />
      </Head>

      <HeroSection>
        <HeaderWrapper>
          <HeroHeader>
            <H1Highlight>Too many hobbies,</H1Highlight> too little time
          </HeroHeader>
          <SubHeader>
            Engineer by trade. Artisan by obsession. Studio owner by accident.
          </SubHeader>
        </HeaderWrapper>
        <IllustrationWrapper>
          <MiniZukiLeziSVG />
        </IllustrationWrapper>
      </HeroSection>

      <FloatCardSection>
        <BasicCard>
          <H4Header>Who is Kuki?</H4Header>
          <br />
          <p>
            My name is Josip, but everyone calls me <strong>Kuki</strong>.
          </p>
          <p>
            By day I design software. By night — and on weekends, and during
            lunch breaks — I sculpt, paint, build, and generally make a mess of
            my apartment with sawdust and acrylic paint.
          </p>
          <p>
            Woodworking, miniature sculpting, painting, prop-making, 3D
            scanning... the list of hobbies keeps growing.{" "}
            <strong>The time available for them does not.</strong>
          </p>
        </BasicCard>
      </FloatCardSection>

      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>How the studio started</H2Header>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>It started with having a bad memory</H4Header>
            <p>
              My memory isn't great. Important moments blur, details fade. So I
              started making physical things to anchor them — a miniature of a
              childhood home, a sculpt of a favourite character, a tiny model of
              a place that mattered.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>Then people started asking</H4Header>
            <p>
              Friends saw the pieces and wanted their own. A wedding gift here.
              A graduation piece there. A team of 15 employees immortalised in
              clay for a company anniversary. One commission at a time,{" "}
              <strong>Creative Studio Kuki became real</strong>.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>What we are now</H4Header>
            <p>
              A one-person studio that makes personalised miniature art —
              wedding keepsakes, graduation gifts, employee commissions, fan
              art, and everything in between. Every piece handcrafted, every
              detail deliberate.
            </p>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <H2Header>Want to commission your own?</H2Header>
          <SubHeader>Let's talk about the memory you want to keep.</SubHeader>
          <ButtonZone>
            <Button as={Link} href="/contact">
              Get in touch →
            </Button>
          </ButtonZone>
        </HeaderWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}
