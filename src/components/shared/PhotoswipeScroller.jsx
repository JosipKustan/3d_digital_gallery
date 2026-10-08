import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import styled, { css } from "styled-components";
import useImageDimensions from "./hooks/useImageDimensions";
import ProgressiveImg from "./ProgressiveImg";

// ─── Styles ──────────────────────────────────────────────────────────────────

export const ScrollTrack = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-inline: 24px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  align-items: flex-start;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1080px) {
    padding-inline: 0;
  }
`;

export const ImageSlot = styled.div`
  flex-shrink: 0;
  height: auto;
  width: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 13px;
  scroll-snap-align: start;
  cursor: pointer;
  position: relative;

  &:hover img {
    transform: scale(1.04);
  }
`;

const SlotImg = styled(ProgressiveImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
`;

// ─── ImageItem must be a separate component so hooks run per-image ────────────

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

// ─── Fade-edge + optional breakout wrapper ────────────────────────────────────

const FadeWrap = styled.div`
  position: relative;

  ${({ $breakout }) =>
    $breakout &&
    css`
      margin-inline: -24px;

      @media (min-width: 1080px) {
        margin-inline: -128px;
      }
    `}

  &::after {
    content: ${({ $fadeColor }) => ($fadeColor ? '""' : "none")};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ $fadeColor }) => $fadeColor}
    );
    pointer-events: none;
    z-index: 2;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * PhotoswipeScroller — horizontal image strip with photoswipe lightbox.
 * @param {string[]} images      Array of image paths.
 * @param {string}  [fadeColor]  Right-edge gradient fade colour (matches parent bg).
 * @param {boolean} [breakout]   Break out of padded parent to reach screen edges.
 */
export default function PhotoswipeScroller({ images, fadeColor, breakout }) {
  return (
    <FadeWrap $fadeColor={fadeColor} $breakout={breakout}>
      <Gallery>
        <ScrollTrack $breakout={breakout}>
          <div style={{ flexShrink: 0, width: 20 }} aria-hidden="true" />
          {images.map((path, i) => (
            <ImageItem key={path} path={path} index={i} />
          ))}
        </ScrollTrack>
      </Gallery>
    </FadeWrap>
  );
}
