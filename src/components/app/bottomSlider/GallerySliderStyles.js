import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme";

export const GallerySliderWrapper = styled.div`
  position: relative;
  margin-top: 16px;
  width: 100%;
  height: 250px;
  color: black;
  display: grid;
  grid-template-columns: repeat(
    1,
    1fr
  ); /* Create 4 columns but only show one */
  gap: 8px;
  overflow: hidden;

  cursor: pointer;
`;
export const Thumbnail = styled.img`
  width: 360px;
  height: 250px;
  background-color: gray;
  object-fit: cover;

  border-radius: ${theme.border.big};
`;

export const CameraFrontDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background-color: ${theme.colors.black_transparent};
  color: ${theme.colors.white};

  border-radius: ${theme.border.big};

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;
export const GalleryWorkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const WorkName = styled.h2`
  margin: 0;
  padding-left: 8px;
  font-size: 64px;
  line-height: 100%;
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 128px;
  }
`;
