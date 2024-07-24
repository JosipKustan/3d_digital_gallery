import styled from "styled-components";
import theme from "../../theme";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  background-color: ${(props) => props.color || theme.colors.purple_dark};
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${theme.colors.white};
  border-radius: ${theme.border.big};
  height: fit-content;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 8px 16px;
  cursor: pointer;
`;
export const SVGWrapper = styled.div`
  height: 128px;
  width: 128px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 370px) {
    height: 102px;
    width: 102px;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CatCardHeader = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;

  margin: 0;
  @media (max-width: 370px) {
    font-size: 24px;
  }
`;

export const CatCardDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  margin: 0;
  @media (max-width: 370px) {
    font-size: 14px; /* Adjust this value as needed for smaller screens */
  }
`;

export const TestemonialText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: 400;
  font-style: italic;

  margin: 0;
  @media (max-width: 370px) {
    font-size: 24px;
  }
`;
export const CardName = styled.p`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  margin: 0;
  @media (max-width: 370px) {
    font-size: 24px;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 16px;
  box-sizing: border-box;
`;
