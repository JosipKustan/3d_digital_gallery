import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/shared/Footer";
import PhotoswipeScroller from "../../../components/shared/PhotoswipeScroller";
import {
  H1Header,
  H4Header,
  MainContentContainer,
  SubHeader,
} from "../../../components/shared/StaticStyles";
import { Button } from "../../../components/shared/Button";
import theme from "../../../components/theme";
import { GALLERY_CATEGORIES, galleryWorks } from "../../../data/siteContent";

// ─── Section backgrounds ──────────────────────────────────────────────────────

const GROUP_BG = {
  individual: theme.colors.tiel_dark,
  business:   theme.colors.blue_dark,
  fan:        theme.colors.purple_dark,
};

// ─── Hero section ─────────────────────────────────────────────────────────────

const kenBurns = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: 65vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  @media (min-width: 1080px) {
    min-height: 72vh;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  will-change: transform;
  animation: ${kenBurns} 22s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.72) 75%,
    rgba(0, 0, 0, 0.88) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 80px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1080px) {
    padding: 120px 128px 64px;
  }
`;

// ─── Navigation: mobile back / desktop breadcrumb ─────────────────────────────

const MobileBack = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s, gap 0.2s cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    color: rgba(255, 255, 255, 1);
    gap: 14px;
  }

  @media (min-width: 1080px) {
    display: none;
  }
`;

const DesktopBreadcrumb = styled.nav`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Kanit", sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.65);
  }
`;

const BreadcrumbLink = styled(Link)`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.15s;
  &:hover { color: rgba(255, 255, 255, 1); }
`;

const BreadcrumbSep = styled.span`
  color: rgba(255, 255, 255, 0.35);
`;

// ─── Detail layout ────────────────────────────────────────────────────────────

const DetailSection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${({ $bg }) => $bg};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 72px 24px 96px;

  @media (min-width: 1080px) {
    padding: 80px 128px 112px;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
  box-shadow: 16px 20px 0 0 ${({ $accent }) => $accent};

  @media (min-width: 1080px) {
    width: 50%;
    aspect-ratio: unset;
    max-height: 560px;
    align-self: stretch;
    object-position: center;
  }
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex: 1;
`;

const ArtistRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ArtistAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.85;
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ArtistName = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${theme.colors.white};
`;

const ArtistSub = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.65);
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.lead};
  line-height: ${theme.typography.leading.relaxed};
  color: rgba(255, 255, 255, 0.92);
`;

const MakingLabel = styled.span`
  display: block;
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 8px;
`;

const MakingText = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.body};
  line-height: ${theme.typography.leading.relaxed};
  color: rgba(255, 255, 255, 0.82);
`;

const borderPulse = keyframes`
  0%, 100% { border-color: transparent; }
  50%       { border-color: ${() => "currentColor"}; }
`;

const ThreeDBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid ${({ $color }) => $color}44;
  background: ${({ $color }) => $color}10;
  animation: borderPulse 3.5s ease-in-out infinite;

  @keyframes borderPulse {
    0%, 100% { border-color: ${({ $color }) => $color}33; }
    50%       { border-color: ${({ $color }) => $color}99; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ThreeDHint = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.caption};
  color: rgba(255, 255, 255, 0.68);
  line-height: ${theme.typography.leading.snug};
`;

// ─── CTA section ─────────────────────────────────────────────────────────────

const CTASection = styled.section`
  width: 100vw;
  box-sizing: border-box;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 1080px) {
    padding: 80px 128px;
  }
`;

const CTAText = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.lead};
  color: rgba(255, 255, 255, 0.6);
`;

// ─── Full gallery section ─────────────────────────────────────────────────────

const GallerySectionWrap = styled.section`
  width: 100vw;
  box-sizing: border-box;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  padding: 64px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GalleryMetaRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-inline: 24px;

  @media (min-width: 1080px) {
    padding-inline: 128px;
  }
`;

const GalleryLabel = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
`;

const ScrollHint = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
`;


// ─── Component ────────────────────────────────────────────────────────────────

function ProjectPage({ work, cat }) {
  const bg = GROUP_BG[cat.group];
  const accent = cat.accent;

  return (
    <MainContentContainer>
      <Head>
        <title>{work.name} — {cat.label} | Creative Studio Kuki</title>
        <link rel="canonical" href={`https://creativestudiokuki.com/gallery/${cat.slug}/${work.slug}`} />
        <meta name="description" content={work.shortDescription} />
        <meta property="og:title" content={`${work.name} | Creative Studio Kuki`} />
        <meta property="og:description" content={work.shortDescription} />
        <meta property="og:image" content={work.src} />
      </Head>

      {/* ── HERO: full-bleed image ── */}
      <HeroSection>
        <HeroBg $src={work.src} />
        <HeroOverlay />
        <HeroContent>
          {/* Mobile: single back link */}
          <MobileBack href={`/gallery/${cat.slug}`}>← {cat.label}</MobileBack>

          {/* Desktop: full breadcrumb */}
          <DesktopBreadcrumb>
            <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
            <BreadcrumbSep>/</BreadcrumbSep>
            <BreadcrumbLink href={`/gallery/${cat.slug}`}>{cat.label}</BreadcrumbLink>
            <BreadcrumbSep>/</BreadcrumbSep>
            <span style={{ color: "rgba(255,255,255,0.95)" }}>{work.name}</span>
          </DesktopBreadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <H1Header style={{ color: "white", fontSize: "clamp(2rem, 5vw, 4rem)", margin: 0 }}>
              {work.name}
            </H1Header>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* ── DETAIL: image + description ── */}
      <DetailSection $bg={bg}>
        <HeroImage src={work.galleryImages[0]} alt={work.name} $accent={accent} />

        <DescriptionColumn>
          <ArtistRow>
            <ArtistAvatar src={work.artistsImage} alt={work.artistName} />
            <ArtistInfo>
              <ArtistName>{work.artistName}</ArtistName>
              <ArtistSub>{work.artistRealName}</ArtistSub>
            </ArtistInfo>
          </ArtistRow>

          <DescriptionText>{work.description}</DescriptionText>

          <div>
            <MakingLabel $color={accent}>How it was made</MakingLabel>
            <MakingText>{work.making}</MakingText>
          </div>

          {work.link && (
            <ThreeDBlock $color={accent}>
              <H4Header style={{ fontSize: "1rem", margin: 0 }}>
                Interactive 3D model available
              </H4Header>
              <ThreeDHint>
                Explore this piece in real-time 3D — rotate, zoom, and inspect every detail.
              </ThreeDHint>
              <Button variant="light" as={Link} href={work.link}>
                View in 3D ✦
              </Button>
            </ThreeDBlock>
          )}
        </DescriptionColumn>
      </DetailSection>

      {/* ── FULL IMAGE GALLERY ── */}
      <GallerySectionWrap>
        <GalleryMetaRow>
          <GalleryLabel>All photos — {work.galleryImages.length} images</GalleryLabel>
          <ScrollHint>scroll →</ScrollHint>
        </GalleryMetaRow>
        <PhotoswipeScroller
          images={work.galleryImages}
          fadeColor={theme.colors.background_dark}
        />
      </GallerySectionWrap>

      {/* ── CTA ── */}
      <CTASection>
        <SubHeader>Want something like this?</SubHeader>
        <CTAText>
          Every piece is made once, for one person. Tell me what the moment is.
        </CTAText>
        <Button variant="primary" as={Link} href="/contact">
          Commission a piece →
        </Button>
      </CTASection>

      <Footer />
    </MainContentContainer>
  );
}

// ─── Static generation ────────────────────────────────────────────────────────

export async function getStaticPaths() {
  return {
    paths: galleryWorks.map((w) => ({
      params: { category: w.category, project: w.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work = galleryWorks.find(
    (w) => w.slug === params.project && w.category === params.category,
  );
  const cat = GALLERY_CATEGORIES.find((c) => c.slug === params.category);
  return { props: { work, cat } };
}

export default ProjectPage;
