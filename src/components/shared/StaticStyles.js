import styled from "styled-components";
import theme from "../theme";

export const MainContentContainer = styled.div`
  margin-top: 64px;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: 64px 24px;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 700px;
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
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-inline: 16px;

  text-align: center;
  box-sizing: border-box;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 280%;
  max-width: 450px;
`;

export const H1Header = styled.h1`
  margin: 0;
  font-size: 64px;

  text-transform: uppercase;
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
`;

export const SubHeader = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  line-height: 130%;
`;

export const AbsoluteIllustration = styled.div`
  position: absolute;
  bottom: -208px;
  right: -250px;
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

export const H5Header = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: 36px;
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
