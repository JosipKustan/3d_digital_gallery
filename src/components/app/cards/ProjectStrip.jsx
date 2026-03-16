/* eslint-disable quotes */
import Link from "next/link";
import styled from "styled-components";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import useImageDimensions from "../../shared/hooks/useImageDimensions";
import ProgressiveImg from "../../shared/ProgressiveImg";
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

// ─── Horizontal image scroll ──────────────────────────────────────────────────

const ScrollTrack = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-inline: 24px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* hide scrollbar but keep scroll behaviour */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 1080px) {
    padding-inline: 0;
  }
`;

const ImageSlot = styled.div`
  flex-shrink: 0;
  height: 260px;
  width: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 4px;
  scroll-snap-align: start;
  cursor: pointer;
  position: relative;

  &:hover img {
    transform: scale(1.04);
  }

  @media (min-width: 768px) {
    height: 320px;
  }
`;

const SlotImg = styled(ProgressiveImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
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

// ─── Individual image item (hooks must be in a child component) ───────────────

function ImageItem({ path, index }) {
  const { width, height } = useImageDimensions(path);
  return (
    <Item
      original={path}
      thumbnail={path}
      width={width}
      height={height}
      caption={`Image ${index + 1}`}
    >
      {({ ref, open }) => (
        <ImageSlot onClick={open}>
          <SlotImg
            ref={ref}
            src={path}
            alt={`Image ${index + 1}`}
            className="image-item"
          />
        </ImageSlot>
      )}
    </Item>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectStrip({ work, accent }) {
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

      <Gallery>
        <ScrollTrack>
          {work.galleryImages.map((path, i) => (
            <ImageItem key={path} path={path} index={i} />
          ))}
        </ScrollTrack>
      </Gallery>
    </StripWrapper>
  );
}
