import Link from "next/link";
import styled from "styled-components";
import PhotoswipeScroller from "../../shared/PhotoswipeScroller";
import { Button } from "../../shared/Button";
import theme from "../../theme";

// ─── Wrapper ──────────────────────────────────────────────────────────────────

const StripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 0 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &:first-of-type {
    padding-top: 0;
    border-top: none;
  }
`;

// ─── Top row: title + CTAs ────────────────────────────────────────────────────

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-inline: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding-inline: 0;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-family: "Kanit", sans-serif;
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.75rem);
  font-weight: 700;
  line-height: 1.05;
  color: ${theme.colors.white};
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  ${TitleLink}:hover & {
    opacity: 0.65;
  }
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

// ─── 3D pill ──────────────────────────────────────────────────────────────────

const ThreeDButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => $color}55;
  padding: 10px 14px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color};
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectStrip({ work, accent, fadeColor }) {
  const projectHref = `/gallery/${work.category}/${work.slug}`;

  return (
    <StripWrapper>
      <TopRow>
        <TitleLink href={projectHref}>
          <ProjectTitle>{work.name}</ProjectTitle>
        </TitleLink>

        <CTARow>
          <Button variant="light" as={Link} href={projectHref}>
            View project →
          </Button>
          {work.link && (
            <ThreeDButton href={work.link} $color={accent ?? theme.colors.purple_accent}>
              3D ✦
            </ThreeDButton>
          )}
        </CTARow>
      </TopRow>

      <PhotoswipeScroller images={work.galleryImages} fadeColor={fadeColor} breakout />
    </StripWrapper>
  );
}
