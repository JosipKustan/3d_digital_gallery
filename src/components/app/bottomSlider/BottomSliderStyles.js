import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BottomSliderWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 16px;
  background: rgba(244, 233, 230, 0.45);
  color: white;
  z-index: 1;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
`;

export const BottomSliderContent = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoHeaderContainer = styled.div`
 display: flex;
  gap: 8px;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const Name = styled.span`
  font-size: 12px;
  color: #625959;
`;
export const ArtName = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
export const Description = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #222222;
`;
