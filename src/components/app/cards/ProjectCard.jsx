/* eslint-disable quotes */
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme";
import { GALLERY_CATEGORIES } from "../../../data/siteContent";

// ─── accent colour helper ─────────────────────────────────────────────────────

export function getCategoryAccent(categorySlug) {
  const cat = GALLERY_CATEGORIES.find((c) => c.slug === categorySlug);
  return cat?.accent ?? theme.colors.purple_accent;
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CardOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${theme.colors.background_dark};
  border: 1px solid ${({ $color }) => $color};
  overflow: visible;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px ${({ $color }) => $color}33;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardNumber = styled.span`
  position: absolute;
  top: 14px;
  left: 16px;
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.22);
  z-index: 2;
  pointer-events: none;
`;

const Has3DBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.background_dark};
  background: ${({ $color }) => $color};
  padding: 4px 8px;
  z-index: 2;
  pointer-events: none;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  display: block;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const CardBody = styled.div`
  padding: 16px 20px 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex: 1;
`;

const CategoryLabel = styled.span`
  display: block;
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 6px;
`;

const CardTitle = styled.h3`
  font-family: "Kanit", sans-serif;
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
  line-height: 1.3;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 18px;
  gap: 12px;
`;

const ViewLink = styled(Link)`
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.white};
  }
`;

const ThreeDLink = styled(Link)`
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  text-decoration: none;
  border: 1px solid ${({ $color }) => $color}66;
  padding: 6px 10px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ $color }) => $color}22;
    border-color: ${({ $color }) => $color};
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectCard({ work, accent, showNumber }) {
  const color = accent ?? getCategoryAccent(work.category);
  const projectHref = `/gallery/${work.category}/${work.slug}`;

  return (
    <CardOuter $color={color}>
      {showNumber != null && (
        <CardNumber>0{showNumber + 1}</CardNumber>
      )}
      {work.link && (
        <Has3DBadge $color={color}>3D ✦</Has3DBadge>
      )}

      <Link href={projectHref} style={{ textDecoration: "none", display: "block" }}>
        <ImageWrapper>
          <CardImg src={work.src} alt={work.name} loading="lazy" />
        </ImageWrapper>
        <CardBody>
          <CategoryLabel $color={color}>{work.category.replace(/-/g, " ")}</CategoryLabel>
          <CardTitle>{work.name}</CardTitle>
        </CardBody>
      </Link>

      <CardFooter>
        <ViewLink href={projectHref}>View project →</ViewLink>
        {work.link && (
          <ThreeDLink href={work.link} $color={color}>
            View in 3D ✦
          </ThreeDLink>
        )}
      </CardFooter>
    </CardOuter>
  );
}
