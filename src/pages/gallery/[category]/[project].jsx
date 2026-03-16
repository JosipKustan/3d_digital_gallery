/* eslint-disable quotes */
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../../../components/shared/Footer";
import ImageGalleryRow from "../../../components/shared/ImageGalleryRow";
import {
  CategorySection,
  GallerySection,
  H1Header,
  H4Header,
  HeaderWrapper,
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

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
`;

const BreadcrumbLink = styled(Link)`
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: color 0.15s;
  &:hover { color: ${theme.colors.black}; }
`;

const BreadcrumbSep = styled.span`
  color: rgba(0, 0, 0, 0.25);
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
  color: rgba(255, 255, 255, 0.45);
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.lead};
  line-height: ${theme.typography.leading.relaxed};
  color: rgba(255, 255, 255, 0.75);
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
  color: rgba(255, 255, 255, 0.6);
`;

const ThreeDBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid ${({ $color }) => $color}44;
  background: ${({ $color }) => $color}10;
`;

const ThreeDHint = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.caption};
  color: rgba(255, 255, 255, 0.45);
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

const GalleryLabel = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  padding-inline: 24px;

  @media (min-width: 1080px) {
    padding-inline: 128px;
  }
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
        <meta
          name="description"
          content={work.shortDescription}
        />
        <meta property="og:title" content={`${work.name} | Creative Studio Kuki`} />
        <meta property="og:description" content={work.shortDescription} />
        <meta property="og:image" content={work.src} />
      </Head>

      {/* ── BREADCRUMB + TITLE ── */}
      <GallerySection color={theme.colors.black}>
        <HeaderWrapper>
          <Breadcrumb>
            <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
            <BreadcrumbSep>/</BreadcrumbSep>
            <BreadcrumbLink href={`/gallery/${cat.slug}`}>{cat.label}</BreadcrumbLink>
            <BreadcrumbSep>/</BreadcrumbSep>
            <span style={{ color: "rgba(0,0,0,0.65)" }}>{work.name}</span>
          </Breadcrumb>
          <H1Header style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>{work.name}</H1Header>
        </HeaderWrapper>
      </GallerySection>

      {/* ── HERO IMAGE + DESCRIPTION ── */}
      <DetailSection $bg={bg}>
        <HeroImage src={work.galleryImages[0]} alt={work.name} />

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
        <GalleryLabel>All photos — {work.galleryImages.length} images</GalleryLabel>
        <ImageGalleryRow work={work} />
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
