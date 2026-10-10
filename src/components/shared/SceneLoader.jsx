import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";

// Plain DOM loader for 3D scenes. No three.js imports, so pages can use it
// as the next/dynamic `loading` fallback without pulling three into their bundle.

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  pointer-events: none;
  z-index: 1;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 400ms ease;
`;

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: ${theme.colors.purple_accent};
  animation: ${spin} 900ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2.4s;
  }
`;

const Label = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.typography.size.caption};
  color: ${theme.colors.white};
  opacity: 0.8;
`;

export default function SceneLoader({ visible = true }) {
  return (
    <Overlay $visible={visible} role="status" aria-hidden={!visible}>
      <Spinner />
      <Label>Loading 3D model</Label>
    </Overlay>
  );
}
