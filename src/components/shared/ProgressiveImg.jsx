import { useState, forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";
import { getSmallImagePath } from "./hooks/useImageDimensions";

const shimmer = keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 250px;
  border-radius: ${theme.border.big};
  overflow: hidden;
  flex-shrink: 0;
`;

const Skeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #2a2a2a 25%,
    #3a3a3a 50%,
    #2a2a2a 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite linear;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const PlaceholderImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(12px);
  transform: scale(1.08);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  pointer-events: none;
`;

const FullImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.4s ease;
  cursor: pointer;
`;

const ProgressiveImg = forwardRef(function ProgressiveImg(
  { src, alt, onClick, className },
  ref
) {
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [fullLoaded, setFullLoaded] = useState(false);
  const smallSrc = getSmallImagePath(src);

  return (
    <Wrapper>
      <Skeleton $hidden={fullLoaded} />
      <PlaceholderImg
        src={smallSrc}
        aria-hidden="true"
        onLoad={() => setPlaceholderLoaded(true)}
        $visible={placeholderLoaded && !fullLoaded}
      />
      <FullImg
        ref={ref}
        src={src}
        alt={alt}
        onClick={onClick}
        className={className}
        onLoad={() => setFullLoaded(true)}
        $loaded={fullLoaded}
      />
    </Wrapper>
  );
});

export default ProgressiveImg;
