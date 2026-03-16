/* eslint-disable quotes */
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "../../components/shared/Footer";
import SectionNav from "../../components/shared/SectionNav";
import ProjectCard from "../../components/app/cards/ProjectCard";
import { CategoryLabel } from "../../components/app/nav/NavMenuStyles";
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
} from "../../components/shared/StaticStyles";
import { Button } from "../../components/shared/Button";
import theme from "../../components/theme";
import { GALLERY_CATEGORIES, galleryWorks } from "../../data/siteContent";
import { scrollToSection } from "../../utils/scroll";

// ─── Category title link ──────────────────────────────────────────────────────

const CategoryTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.6; }
`;

// ─── Section background colours ──────────────────────────────────────────────

const GROUP_BG = {
  individual: theme.colors.tiel_dark,
  business:   theme.colors.blue_dark,
  fan:        theme.colors.purple_dark,
};

// ─── Project cards grid ───────────────────────────────────────────────────────

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// ─── Empty state ─────────────────────────────────────────────────────────────

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

// ─── 3D section styles ────────────────────────────────────────────────────────

const ThreeDSection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 72px 24px 96px;

  @media (min-width: 1080px) {
    padding: 80px 128px 112px;
  }
`;

const ThreeDAccent = "#C15EFD";

// ─── Nav items ────────────────────────────────────────────────────────────────

const GALLERY_NAV = [
  ...GALLERY_CATEGORIES.map((c) => ({ id: c.slug, label: c.label, accent: c.accent })),
  { id: "interactive-3d", label: "Interactive 3D", accent: ThreeDAccent },
];

// ─── Component ───────────────────────────────────────────────────────────────

function GalleryPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(null);
  const sectionTimers = useRef({});

  useEffect(() => {
    const ids = [...GALLERY_CATEGORIES.map((c) => c.slug), "interactive-3d"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            sectionTimers.current[e.target.id] = setTimeout(
              () => setActiveSection(e.target.id),
              300,
            );
          } else {
            clearTimeout(sectionTimers.current[e.target.id]);
            delete sectionTimers.current[e.target.id];
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      Object.values(sectionTimers.current).forEach(clearTimeout);
    };
  }, []);

  // Scroll to hash on mount (e.g. /gallery#gaming-art from services page)
  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
      setActiveSection(hash);
    }
  }, [router.asPath]);

  return (
    <MainContentContainer>
      <Head>
        <title>Gallery — Miniature Art Portfolio | Creative Studio Kuki</title>
        <link rel="canonical" href="https://creativestudiokuki.com/gallery" />
        <meta
          name="description"
          content="Browse the Creative Studio Kuki gallery — handcrafted miniature art pieces organised by category: love stories, places, gaming art, and more."
        />
        <meta property="og:title" content="Gallery — Miniature Art Portfolio | Creative Studio Kuki" />
        <meta property="og:description" content="Browse the Creative Studio Kuki gallery — handcrafted miniature art pieces, personalised gifts, and unique creations by Josip Kuki." />
      </Head>

      {/* ── HERO ── */}
      <GallerySection color={theme.colors.black}>
        <HeaderWrapper>
          <H1Header>Art is in the details</H1Header>
          <SubHeader>And in the meaning behind them</SubHeader>
        </HeaderWrapper>
      </GallerySection>

      {/* ── STICKY CATEGORY NAV ── */}
      <SectionNav
        items={GALLERY_NAV}
        activeSection={activeSection}
        onSelect={(id) => { setActiveSection(id); scrollToSection(id); }}
      />

      {/* ── CATEGORY SECTIONS ── */}
      {GALLERY_CATEGORIES.map((cat) => {
        const works = galleryWorks.filter((w) => w.category === cat.slug);
        const bg = GROUP_BG[cat.group];

        return (
          <CategorySection key={cat.slug} id={cat.slug} $bg={bg}>
            <SectionTopRow>
              <SectionTitleGroup>
                <CategoryLabel $accent={cat.accent}>{cat.description}</CategoryLabel>
                <CategoryTitleLink href={`/gallery/${cat.slug}`}><H5Header>{cat.label}</H5Header></CategoryTitleLink>
              </SectionTitleGroup>
              <Button variant="light" as={Link} href={`/gallery/${cat.slug}`}>
                See this category →
              </Button>
            </SectionTopRow>

            {works.length > 0 ? (
              <CardsGrid>
                {works.map((work, i) => (
                  <ProjectCard
                    key={work.id}
                    work={work}
                    accent={cat.accent}
                    showNumber={i}
                  />
                ))}
              </CardsGrid>
            ) : (
              <EmptyPlaceholder>
                <H4Header style={{ fontSize: "1.1rem" }}>More work coming soon</H4Header>
                <EmptyText>
                  {cat.description} If you have something in mind,{" "}
                  <Link href="/contact" style={{ color: cat.accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    commission a piece
                  </Link>.
                </EmptyText>
              </EmptyPlaceholder>
            )}
          </CategorySection>
        );
      })}

      {/* ── INTERACTIVE 3D SECTION ── */}
      {(() => {
        const works3d = galleryWorks.filter((w) => w.link);
        return (
          <ThreeDSection id="interactive-3d">
            <SectionTopRow>
              <SectionTitleGroup>
                <CategoryLabel $accent={ThreeDAccent}>Explore in your browser — rotate, zoom, interact</CategoryLabel>
                <H5Header>Interactive 3D</H5Header>
              </SectionTitleGroup>
            </SectionTopRow>
            <CardsGrid>
              {works3d.map((work, i) => (
                <ProjectCard
                  key={work.id}
                  work={work}
                  accent={ThreeDAccent}
                  showNumber={i}
                />
              ))}
            </CardsGrid>
          </ThreeDSection>
        );
      })()}

      <Footer />
    </MainContentContainer>
  );
}

export default GalleryPage;
