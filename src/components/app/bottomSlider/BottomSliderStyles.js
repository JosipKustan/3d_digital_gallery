import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme.js";

export const BottomSliderWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: calc(100% - 64px - 16px);
  padding: 16px;
  background: ${theme.colors.purple_dark_transparent};
  color: ${theme.colors.white};
  z-index: 30;
  border-radius: 16px 16px 0px 0px;
  box-shadow: inset 0 3px 0 0 ${theme.colors.purple_accent},
    inset 3px 0 0 0 ${theme.colors.purple_accent},
    inset -3px 0 0 0 ${theme.colors.purple_accent};

  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export const BottomSliderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 32;
`;

export const InfoHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 4px;

  text-align: end;

  font-size: 12px;
  font-weight: 500;
`;
export const Name = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
export const ArtName = styled.span`
  flex: 1.5;
  margin-right: 8px;
  font-size: 20px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 100%;
`;
export const Description = styled.p`
  max-width: 600px;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
