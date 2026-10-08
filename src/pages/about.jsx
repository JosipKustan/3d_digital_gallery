import { SEO } from "../components/shared/SEO";
import Link from "next/link";
import styled from "styled-components";
import {
  ArtisanGalleryWrap,
  ArtisanPhoto,
  ArtisanPhotoCol,
  ArtisanPhotoInner,
  BodyLead,
  ButtonZone,
  H1Highlight,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroHeader,
  MainContentContainer,
  PolaroidTitle,
  Section,
  StepWrapper,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import { Button } from "../components/shared/Button";
import WorkImage from "../components/shared/WorkImage";
import { MiniZukiLeziSVG } from "../components/app/SVG/MiniZukiLeziSVG";
import Footer from "../components/shared/Footer";
import theme from "../components/theme";

// ─── Hero portrait ────────────────────────────────────────────────────────────

// Single polaroid, narrower than the two-column artisan gallery
const HeroPhotoWrap = styled(ArtisanGalleryWrap)`
  position: relative;
  flex: 0 1 380px;
  min-width: 0;
  max-width: 380px;

  @media (max-width: 1080px) {
    max-width: 300px;
    /* room for the napping cat above the frame, clear of the tagline */
    margin-top: 40px;
  }
`;

// Žuki napping on top of the polaroid frame
const NappingCat = styled(MiniZukiLeziSVG)`
  position: absolute;
  top: -50px;
  right: 24px;
  z-index: 2;
  pointer-events: none;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <MainContentContainer>
      <SEO
        title="About Kuki — Creative Studio Kuki"
        description="Meet Josip 'Kuki' Kuštan — the engineer-turned-artisan behind Creative Studio Kuki. Too many hobbies, too little time, and a studio born from all of it."
        ogDescription="Meet Josip 'Kuki' Kuštan — the engineer-turned-artisan behind Creative Studio Kuki."
        path="/about"
      />

      {/* ── HERO ── */}
      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <HeroHeader>
            <H1Highlight style={{ display: "block" }}>Too many hobbies,</H1Highlight>{" "}
            too little time
          </HeroHeader>
          <BodyLead>
            Engineer by trade. Artisan by obsession. Studio owner by accident.
          </BodyLead>
        </HeaderWrapper>

        <HeroPhotoWrap>
          <NappingCat />
          <ArtisanPhoto style={{ transform: "rotate(2deg)" }}>
            <ArtisanPhotoInner style={{ aspectRatio: "973/1420" }}>
              <WorkImage
                src="/assets/images/Portrets/webp/big/MeButNicer-973x1420.webp"
                fill
                preload
                sizes="(min-width: 1080px) 380px, 300px"
                style={{ objectFit: "cover" }}
                alt="Josip 'Kuki' Kuštan"
              />
            </ArtisanPhotoInner>
            <PolaroidTitle>Kuki</PolaroidTitle>
          </ArtisanPhoto>
        </HeroPhotoWrap>
      </Section>

      {/* ── WHO IS KUKI ── */}
      <Section background={theme.colors.yellow_accent} color={theme.colors.black}>
        <HeaderWrapper>
          <H2Header>Who is Kuki?</H2Header>
          <BodyLead>
            My name is Josip, but everyone calls me <strong>Kuki</strong>.
          </BodyLead>
          <BodyLead>
            By day I design software. By night — and on weekends, and during
            lunch breaks — I sculpt, paint, build, and generally make a mess of
            my apartment with sawdust and acrylic paint.
          </BodyLead>
          <BodyLead>
            Woodworking, miniature sculpting, painting, prop-making, 3D
            scanning... the list of hobbies keeps growing.{" "}
            <strong>The time available for them does not.</strong>
          </BodyLead>
        </HeaderWrapper>

        <ArtisanGalleryWrap>
          <ArtisanPhotoCol>
            <ArtisanPhoto style={{ transform: "rotate(-2deg)" }}>
              <ArtisanPhotoInner style={{ aspectRatio: "3/4" }}>
                <WorkImage
                  src="/assets/images/Portrets/webp/big/TigiCloseup-1920x2560.webp"
                  fill
                  sizes="(min-width: 1080px) 20vw, 45vw"
                  style={{ objectFit: "cover" }}
                  alt="Tigi the cat looking through a net"
                />
              </ArtisanPhotoInner>
              <PolaroidTitle>Tigi</PolaroidTitle>
            </ArtisanPhoto>
          </ArtisanPhotoCol>
          <ArtisanPhotoCol style={{ paddingTop: "48px" }}>
            <ArtisanPhoto style={{ transform: "rotate(1.8deg)" }}>
              <ArtisanPhotoInner style={{ aspectRatio: "4/5" }}>
                <WorkImage
                  src="/assets/images/Portrets/webp/big/MeWorking-2560x1681.webp"
                  fill
                  sizes="(min-width: 1080px) 20vw, 45vw"
                  style={{ objectFit: "cover" }}
                  alt="Kuki at work"
                />
              </ArtisanPhotoInner>
              <PolaroidTitle>Me working</PolaroidTitle>
            </ArtisanPhoto>
          </ArtisanPhotoCol>
        </ArtisanGalleryWrap>
      </Section>

      {/* ── STORY ── */}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>How the studio started</H2Header>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header as="h3">It started with having a bad memory</H4Header>
            <p>
              My memory isn't great. Important moments blur, details fade. So I
              started making physical things to anchor them — a miniature of a
              childhood home, a sculpt of a favourite character, a tiny model of
              a place that mattered.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">Then people started asking</H4Header>
            <p>
              Friends saw the pieces and wanted their own. A wedding gift here.
              A graduation piece there. A team of 15 employees immortalised in
              clay for a company anniversary. One commission at a time,{" "}
              <strong>Creative Studio Kuki became real</strong>.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">What we are now</H4Header>
            <p>
              A one-person studio that makes personalised miniature art —
              wedding keepsakes, graduation gifts, employee commissions, fan
              art, and everything in between. Every piece handcrafted, every
              detail deliberate.
            </p>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      {/* ── CTA ── */}
      <Section color={theme.colors.black}>
        <HeaderWrapper>
          <H2Header>Want to commission your own?</H2Header>
          <BodyLead>Let's talk about the memory you want to keep.</BodyLead>
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
