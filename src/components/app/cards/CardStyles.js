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
`;
export const SVGWrapper = styled.div`
  height: 128px;
  width: 128px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 370px) {
    height: 84px;
    width: 84px;
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
`;
export const CardName = styled.p`
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  margin: 0;
  @media (max-width: 370px) {
    font-size: 10px;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 16px;
  box-sizing: border-box;
  @media (min-width: 1080px) {
    align-items: end;
  }
`;

export const InfoCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${theme.colors.white};
  background-color: ${theme.colors.background_dark};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: ${theme.border.big};
  height: 290px;
  box-sizing: border-box;
  padding: 0px 16px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    z-index: 1;
    border-radius: ${theme.border.big};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    min-width: 280px;
  }
`;

export const InfoText = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  z-index: 2;
  padding-top: 8px;
`;

export const MoneyandShippingInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  box-sizing: border-box;

  font-size: 36px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;

  margin: 0;
  z-index: 2;
`;
