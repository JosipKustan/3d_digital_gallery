import styled, { keyframes } from "styled-components";
import theme from "../theme";
import { HeroFull } from "../app/SVG/HeroFull";
import { HeroBeach } from "../app/SVG/HeroBeach";
import { PurPur } from "../app/SVG/PurPur";
import { PortfolioHero } from "../app/SVG/PortfolioHero";

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
  gap: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    align-items: start;
    padding: 128px 0px 0px 128px;
    flex-direction: row;
    height: 100vh;
  }
`;
export const HeroIllustration = styled(HeroFull)`
  height: 100%;
`;
export const HeroPortfolioIllustration = styled(PortfolioHero)`
  height: 100%;
  width: 100%;
  @media (min-width: 1080px) {
    min-width: 480px;
  }
`;

export const HeroServicesSection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 64px 0px 0px 24px;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};
  gap: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    align-items: start;
    padding: 128px 0px 0px 128px;
    flex-direction: row;
    height: 100vh;
  }
`;
export const HeroBeachIllustration = styled(HeroBeach)`
  max-height: 80%;
`;
export const IllustrationWrapper = styled.div`
  position: absolute;
  width: 96%;
  height: 100vh;

  display: flex;
  align-items: end;
  justify-content: end;

  @media (max-width: 1080px) {
    position: relative;
    height: fit-content;
    width: 100%;
  }
`;
export const DivIllustrationWrapper = styled.div`
  display: flex;
`;
export const CartIllustrationWrapper = styled.div`
  position: absolute;
  width: 96%;
  height: 100vh;

  display: flex;
  align-items: end;
  justify-content: end;

  @media (max-width: 1080px) {
    position: relative;
    height: fit-content;
    width: 100%;
  }
`;
export const BeachIllustrationWrapper = styled.div`
  position: absolute;
  width: 96%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 1080px) {
    position: relative;
    height: fit-content;
    width: 100%;
  }
`;

export const FloatCardSection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 64px 24px;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px 128px;
  height: 0vh;
  @media (max-width: 1080px) {
    padding-inline: 24px;
    padding-bottom: 64px;
    align-items: center;
    justify-content: end;
    height: fit-content;
  }
`;

export const Section3D = styled.section`
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
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 128px 0px 0px 128px;
    align-items: center;
    height: 100vh;
  }
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
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 128px 128px;
    align-items: center;
  }
`;
export const SectionPortfolio = styled.section`
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
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 128px 128px;
    align-items: start;
  }
`;

export const SkillSectionPortfolio = styled.section`
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
  @media (min-width: 1080px) {
    flex-direction: column;
    padding: 128px 128px;
    align-items: center;
  }
`;

export const GallerySection = styled.section`
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
  @media (min-width: 1080px) {
    align-items: center;
  }
`;

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100vw;
  height: fit-content;
  box-sizing: border-box;
  padding: 128px 24px;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  text-decoration: none;
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
  padding-inline: 24px;

  text-align: center;
  box-sizing: border-box;
  align-items: center;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 360%;
  max-width: 540px;
  @media (min-width: 1080px) {
    line-height: 600%;
    max-width: 700px;
    padding-inline: 0px;
  }
`;
export const ScreenWrapper = styled.div`
  height: 100vh;
`;

export const GalleryPageWrapper = styled.div`
  display: flex;
  gap: 24px;
  overflow-y: scroll;
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

  @media (min-width: 1080px) {
    max-width: 100%;
    width: 100%;
    align-items: left;

    padding-inline: 0px;
  }
`;
export const SkillCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-inline: 16px;
  text-align: start;
  max-width: 456px;
  padding-inline: 24px;

  @media (min-width: 1080px) {
    max-width: 100%;
    width: 100%;
    align-items: left;
    gap: 48px;
    flex-direction: row;
    flex-wrap: wrap;
    padding-inline: 0px;
    justify-content: center;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-inline: 16px;
  @media (min-width: 1080px) {
    max-width: 600px;
  }
`;

export const H1Header = styled.h1`
  margin: 0;
  font-size: 64px;
  text-transform: uppercase;

  z-index: 5;
  @media (min-width: 1080px) {
    font-size: 128px;

    line-height: 128px;
  }
`;

export const H2Header = styled.h2`
  margin: 0;
  font-size: 64px;
  line-height: 100%;
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 1080px) {
    font-size: 128px;
  }
`;

export const H1Highlight = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  line-height: 100%;
  @media (min-width: 1080px) {
    font-size: 64px;
  }
`;

export const SubHeader = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  line-height: 120%;
  z-index: 5;
  @media (min-width: 1080px) {
    font-size: 32px;
  }
`;

export const AbsoluteIllustration = styled.div`
  position: absolute;
`;

export const Absolute3DModel = styled.div`
  position: absolute;
  top: 0;
  height: 85%;
  width: 100%;
  @media (min-width: 1080px) {
    right: 0;
    width: 60%;
    height: 100%;
  }
`;
export const Fake3DModel = styled.div`
  position: absolute;
  top: 220px;
  width: 100%;
  z-index: 0;
  right: 0;
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
export const ButtonZone = styled.div`
  margin-top: 32px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BasicCard = styled.div`
  width: 100%;
  max-width: 620px;
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

  @media (min-width: 1080px) {
    margin-top: 0px;
  }
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

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ContactWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HoverLink = styled.a`
  display: inline-block;
  transition: opacity 0.15s ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.5; /* Light blue effect */
  }
`;

//Animations

// Define the animation
const stretchSquish = keyframes`
  0%, 100% {
    transform: scaleY(1);
    transform: scaleX(1);
  }
  50% {
    transform: scaleY(0.7) scaleX(1.6);
  }
`;

// Create a styled SVG component
export const PurPurAnimated = styled(PurPur)`
  position: absolute;
  transform-origin: center;
  animation: ${stretchSquish} 3s ease-in-out infinite alternate;
`;
