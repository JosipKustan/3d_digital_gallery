import styled from "styled-components";
import theme from "../theme";

export const MainContentContainer = styled.div`
  margin-top: 64px;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 64px 24px;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: fit-content;
  box-sizing: border-box;
  padding: 64px 0px;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const Footer = styled.footer`
  position: relative;
  width: 100vw;
  height: fit-content;
  box-sizing: border-box;
  padding: 128px 24px;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-inline: 16px;

  text-align: center;
  box-sizing: border-box;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 360%;
  max-width: 450px;
`;

export const GalleryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  box-sizing: border-box;
  width: 100%;
  padding-inline: 16px;
`;
export const TextListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-inline: 16px;
  text-align: start;
  max-width: 456px;
  padding-inline: 24px;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-inline: 16px;
`;

export const H1Header = styled.h1`
  margin: 0;
  font-size: 64px;

  text-transform: uppercase;

  z-index: 5;
`;

export const H2Header = styled.h2`
  margin: 0;
  font-size: 64px;
  line-height: 100%;
  font-weight: 700;
  text-transform: uppercase;
`;

export const H1Highlight = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  line-height: 100%;
`;

export const SubHeader = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  line-height: 130%;
  z-index: 5;
`;

export const AbsoluteIllustration = styled.div`
  position: absolute;
`;

export const Absolute3DModel = styled.div`
  position: absolute;
  top: 0;
  height: 85%;
  width: 100%;
`;
export const Fake3DModel = styled.div`
  position: absolute;
  top: 220px;
  width: 100%;
  z-index: 0;
`;
export const ScrollZoneTop = styled.div`
  position: absolute;
  top: 0px;
  height: 220px;
  width: 100%;
  z-index: 10;
`;

export const ScrollZoneBottom = styled.div`
  position: absolute;
  bottom: 0px;
  height: 220px;
  width: 100%;
  z-index: 10;
`;
export const BasicCard = styled.div`
  width: 96%;
  max-width: 540px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: 300;
  background: ${theme.colors.background_dark};
  box-sizing: border-box;

  padding: 32px 16px;
  margin-top: -164px;
  border-radius: ${theme.border.medium};

  z-index: 10;
`;

export const H4Header = styled.h4`
  margin: 0px;
  font-family: ${theme.fonts.heading};
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
`;

export const H5Header = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  max-width: 450px;
  margin: 0;
`;

export const H6Header = styled.h6`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;