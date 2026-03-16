/* eslint-disable quotes */
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../../../components/shared/Footer";
import ProjectStrip from "../../../components/app/cards/ProjectStrip";
import { CategoryLabel } from "../../../components/app/nav/NavMenuStyles";
import {
  CategorySection,
  GallerySection,
  H1Header,
  H4Header,
  HeaderWrapper,
  H5Header,
  MainContentContainer,
  SectionTitleGroup,
  SectionTopRow,
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

// ─── Back link ────────────────────────────────────────────────────────────────

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${theme.typography.size.caption};
  color: rgba(0, 0, 0, 0.45);
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.15s;

  &:hover {
    color: ${theme.colors.black};
  }
`;

const EmptyPlaceholder = styled.div`
  border: 1.5px dashed rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  max-width: 480px;
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: ${theme.typography.size.lead};
  color: rgba(255, 255, 255, 0.55);
  line-height: ${theme.typography.leading.snug};
`;

// ─── Component ────────────────────────────────────────────────────────────────

function CategoryGalleryPage({ cat, works }) {
  const bg = GROUP_BG[cat.group];

  return (
    <MainContentContainer>
      <Head>
        <title>{cat.label} — Gallery | Creative Studio Kuki</title>
        <link rel="canonical" href={`https://creativestudiokuki.com/gallery/${cat.slug}`} />
        <meta
          name="description"
          content={`${cat.label} miniature art pieces by Creative Studio Kuki. ${cat.description} Handcrafted, 3D-printed, hand-painted.`}
        />
        <meta property="og:title" content={`${cat.label} — Gallery | Creative Studio Kuki`} />
        <meta property="og:description" content={`${cat.label} miniature art pieces by Creative Studio Kuki. ${cat.description}`} />
      </Head>

      {/* ── HERO ── */}
      <GallerySection color={theme.colors.black}>
        <HeaderWrapper>
          <BackLink href="/gallery">← All categories</BackLink>
          <H1Header>{cat.label}</H1Header>
          <SubHeader>{cat.description}</SubHeader>
        </HeaderWrapper>
      </GallerySection>

      {/* ── WORKS ── */}
      <CategorySection id={cat.slug} $bg={bg}>
        <SectionTopRow>
          <SectionTitleGroup>
            <CategoryLabel $accent={cat.accent}>{cat.description}</CategoryLabel>
            <H5Header>{cat.label}</H5Header>
          </SectionTitleGroup>
          <Button variant="light" as={Link} href="/contact">
            Commission one →
          </Button>
        </SectionTopRow>

        {works.length > 0 ? (
          works.map((work) => (
            <ProjectStrip
              key={work.id}
              work={work}
              accent={cat.accent}
            />
          ))
        ) : (
          <EmptyPlaceholder>
            <H4Header style={{ fontSize: "1.1rem" }}>More work coming soon</H4Header>
            <EmptyText>
              This category is growing. If you have something in mind,{" "}
              <Link href="/contact" style={{ color: cat.accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                commission a piece
              </Link>.
            </EmptyText>
          </EmptyPlaceholder>
        )}
      </CategorySection>

      <Footer />
    </MainContentContainer>
  );
}

// ─── Static generation ────────────────────────────────────────────────────────

export async function getStaticPaths() {
  return {
    paths: GALLERY_CATEGORIES.map((c) => ({ params: { category: c.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cat = GALLERY_CATEGORIES.find((c) => c.slug === params.category);
  const works = galleryWorks.filter((w) => w.category === params.category);
  return { props: { cat, works } };
}

export default CategoryGalleryPage;
