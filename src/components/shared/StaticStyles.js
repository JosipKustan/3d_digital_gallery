import Link from "next/link";
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
  padding: 64px 24px 0;
  background-color: ${(props) => props.background || theme.colors.white};
  color: ${(props) => props.color || theme.colors.black};
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    align-items: stretch;
    padding: 0;
    flex-direction: row;
    height: 100vh;
    min-height: 680px;
    overflow: hidden;

    padding-left: 128px;
    padding-top: 128px;
  }
`;
export const HeroIllustration = styled(HeroFull)`
  height: auto;
  width: auto;
  max-height: 100%;
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
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;

  @media (min-width: 1080px) {
    flex: 1;
    align-self: stretch;
    overflow: hidden;
  }

  @media (max-width: 1080px) {
    height: fit-content;
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
    justify-content: space-evenly;
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
  width: 100%;

  text-align: center;
  box-sizing: border-box;
  align-items: center;
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.typography.weight.bold};
  line-height: 360%;
  max-width: 540px;
  @media (min-width: 1080px) {
    line-height: 600%;
    max-width: 575px;
    padding-inline: 0px;
    width: auto;
  }
`;
export const ScreenWrapper = styled.div`
  height: 100vh;
`;

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 30;
  pointer-events: none;
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

export const HeroHeader = styled.h3`
  margin: 0;
  font-size: ${theme.typography.size.hero};
  text-transform: uppercase;

  z-index: 5;
  @media (min-width: 1080px) {
    line-height: ${theme.typography.leading.tight};
  }
`;

export const H2Header = styled.h2`
  margin: 0;
  font-size: ${theme.typography.size.hero};
  line-height: ${theme.typography.leading.tight};
  font-weight: ${theme.typography.weight.bold};
  text-transform: uppercase;
`;

export const H1Highlight = styled.span`
  font-size: clamp(1.25rem, 2vw + 0.5rem, 2rem);
  text-transform: uppercase;
  line-height: ${theme.typography.leading.tight};
`;

export const H1Small = styled.h1`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.medium};
  line-height: ${theme.typography.leading.snug};
  z-index: 5;
  @media (min-width: 1080px) {
    font-size: 1.5rem;
  }
`;
export const H1Header = styled.h1`
  margin: 0;
  font-size: ${theme.typography.size.hero};
  text-transform: uppercase;

  z-index: 5;
  @media (min-width: 1080px) {
    line-height: ${theme.typography.leading.tight};
  }
`;
export const SubHeader = styled.h3`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.typography.weight.medium};
  line-height: ${theme.typography.leading.snug};

  font-size: ${theme.typography.size.lead};
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
  font-size: ${theme.typography.size.subheading};
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
  font-size: ${theme.typography.size.heading};
  font-weight: ${theme.typography.weight.bold};
  line-height: ${theme.typography.leading.tight};
`;

export const H5Header = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.typography.size.subheading};
  font-weight: ${theme.typography.weight.bold};
  line-height: ${theme.typography.leading.tight};
  max-width: 450px;
  margin: 0;
`;

export const H6Header = styled.h6`
  font-size: ${theme.typography.size.lead};
  font-weight: ${theme.typography.weight.bold};
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

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  padding: 16px;
  box-sizing: border-box;

  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.06);
    border: solid 2px rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: #ffffff;
    font-size: ${theme.typography.size.body};
    font-family: inherit;
    padding: 14px 16px;
    outline: none;
    transition: border-color 0.15s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      border-color: #c15efd;
    }
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }
`;
export const HoverLink = styled.a`
  display: inline-block;
  transition: opacity 0.15s ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.5; /* Light blue effect */
  }
`;

// Responsive visibility utilities
export const DesktopOnly = styled.div`
  display: none;
  @media (min-width: 1080px) {
    display: contents;
  }
`;

export const MobileOnly = styled.div`
  display: contents;
  @media (min-width: 1080px) {
    display: none;
  }
`;

//Animations

// Cat purr: 18 jitters over 1s (29% of 3.5s) → 2.5s slow release
// Each jitter step ≈ 55ms (1s / 18), scale builds up then slow ease-out back
const catPurr = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }
  2% {
    transform: scale(1.04) rotate(-4deg);
    animation-timing-function: linear;
  }
  3% {
    transform: scale(1.01) rotate(4deg);
    opacity: 1;
    animation-timing-function: linear;
  }
  5% {
    transform: scale(1.07) rotate(-3deg);
    animation-timing-function: linear;
  }
  6% {
    transform: scale(1.04) rotate(3deg);
    animation-timing-function: linear;
  }
  8% {
    transform: scale(1.09) rotate(-4deg);
    animation-timing-function: linear;
  }
  10% {
    transform: scale(1.06) rotate(4deg);
    animation-timing-function: linear;
  }
  11% {
    transform: scale(1.12) rotate(-3deg);
    animation-timing-function: linear;
  }
  13% {
    transform: scale(1.09) rotate(3deg);
    animation-timing-function: linear;
  }
  14% {
    transform: scale(1.14) rotate(-4deg);
    animation-timing-function: linear;
  }
  16% {
    transform: scale(1.11) rotate(4deg);
    animation-timing-function: linear;
  }
  17% {
    transform: scale(1.16) rotate(-3deg);
    animation-timing-function: linear;
  }
  19% {
    transform: scale(1.13) rotate(3deg);
    animation-timing-function: linear;
  }
  21% {
    transform: scale(1.18) rotate(-4deg);
    animation-timing-function: linear;
  }
  22% {
    transform: scale(1.15) rotate(4deg);
    animation-timing-function: linear;
  }
  24% {
    transform: scale(1.20) rotate(-3deg);
    animation-timing-function: linear;
  }
  25% {
    transform: scale(1.17) rotate(3deg);
    animation-timing-function: linear;
  }
  27% {
    transform: scale(1.22) rotate(-4deg);
    animation-timing-function: linear;
  }
  29% {
    transform: scale(1.20) rotate(0deg);
    opacity: 1;
    animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0;
  }
`;

// Create a styled SVG component
export const PurPurAnimated = styled(PurPur)`
  position: absolute;
  transform-origin: center;
  animation: ${catPurr} 3.5s linear infinite;
`;

// Artisan section — polaroid photo gallery
export const ArtisanGalleryWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: stretch;
  flex: 1;
  min-width: 360px;

  @media (max-width: 1080px) {
    gap: 10px;
    width: 100%;
    max-width: 480px;
  }
`;

export const ArtisanPhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 0;

  @media (max-width: 1080px) {
    gap: 10px;
  }
`;

export const ArtisanPhoto = styled.div`
  background: #fff;
  padding: 8px 8px 32px;
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.45),
    0 1px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.35s ease;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: rotate(0deg) scale(1.02) !important;
    box-shadow:
      0 20px 56px rgba(0, 0, 0, 0.6),
      0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
`;

export const PolaroidTitle = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 600;
  color: ${theme.colors.black};
  margin: 0;
  line-height: 1.3;
`;

export const ArtisanPhotoInner = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
`;

// ─── Services page — category section layout ───────────────────────────────────

export const CategorySection = styled.section`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${({ $bg }) => $bg};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 72px 24px 96px;

  @media (min-width: 1080px) {
    padding: 80px 128px 112px;
  }
`;

export const SectionTopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const SectionTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// ─── Services page — FAQ ───────────────────────────────────────────────────────

export const FAQSection = styled(Section)`
  padding: 72px 24px 96px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    padding: 80px 128px 112px;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 680px;
`;

export const FAQItem = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 28px 0;

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const FAQLink = styled(Link)`
  color: ${theme.colors.purple_dark};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: ${theme.colors.purple_accent};
  }
`;

export const InlineLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;
