import { Button, SecondaryButton } from "../components/shared/Button";
import {
  ButtonZone,
  H1Header,
  H2Header,
  H4Header,
  HeaderWrapper,
  HeroBeachIllustration,
  HeroServicesSection,
  IllustrationWrapper,
  MainContentContainer,
  Section,
  SubHeader,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { CardsWrapper } from "../components/app/cards/CardStyles";
import { IndividualCatSVG } from "../components/app/SVG/IndividualCatSVG";
import { BusinessCatSVG } from "../components/app/SVG/BusinessCatSVG";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/shared/Footer";
import { InfoCard } from "../components/app/cards/InfoCard";
import useIsMobileView from "../components/shared/hooks/useIsMobileView";
import { TigiSVG } from "../components/app/SVG/TigiSVG";
import { useEffect } from "react";

function ServicesPage() {
  const navigate = useNavigate();
  const isMobileView = useIsMobileView();

  return (
    <MainContentContainer>
      {/*HERO SECTION*/}
      <HeroServicesSection id="services">
        <HeaderWrapper>
          <H1Header>Services</H1Header>
          <SubHeader>
            Here we specialize in delivering handcrafted, one-of-a-kind
            miniature art pieces tailored to your needs. Whether you're looking
            for personal gifts or business solutions, we provide creative and
            personalized artwork for every occasion.
          </SubHeader>
        </HeaderWrapper>
        <IllustrationWrapper>
          <HeroBeachIllustration />
        </IllustrationWrapper>
      </HeroServicesSection>

      {/*PriceFactors*/}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>What IS the PRICE?</H2Header>
          <SubHeader>
            The price depends on the design and the complexity of your
            project.Reach out to us to share your vision, and we’ll provide a
            personalized quote to bring it to life.
          </SubHeader>
          <ButtonZone>
            <SecondaryButton onClick={() => navigate("/price-factors")}>
              Detailed price factors
            </SecondaryButton>
          </ButtonZone>
        </HeaderWrapper>
        <TigiSVG style={{ width: "100%", minWidth: "400px" }} />
      </Section>

      {/*INDIVIDUALS*/}
      <Section background={theme.colors.tiel_dark} color={theme.colors.white}>
        <HeaderWrapper>
          <IndividualCatSVG />
          <H2Header>For You</H2Header>
          {!isMobileView && (
            <ButtonZone>
              <Button>Get a quote.</Button>
            </ButtonZone>
          )}
        </HeaderWrapper>
        <CardsWrapper>
          <H4Header>Examples of approximate prices</H4Header>
          <InfoCard
            info={"Low Complexity"}
            price={"150-500€"}
            backgroundImage={
              "assets/images/works/weddinggifts/Wedding_Scale.jpg"
            }
          />
          <InfoCard
            info={"Medium Complexity"}
            price={"600-1000€"}
            backgroundImage={
              "assets/images/works/Rastovac/Rastovac_KuminaKuca-3.jpg"
            }
          />
          <InfoCard
            info={"High Complexity"}
            price={"1000+ €"}
            backgroundImage={
              "assets/images/works/attackonbaldursgate/BG_Attack-7.jpg"
            }
          />
          {isMobileView && (
            <ButtonZone>
              <Button>Get a quote.</Button>
            </ButtonZone>
          )}
        </CardsWrapper>
      </Section>
      {/*Biznis sekciono*/}
      <Section background={theme.colors.blue_dark} color={theme.colors.white}>
        <HeaderWrapper>
          <BusinessCatSVG />
          <H2Header>For Busi&#8203;ness</H2Header>
          {!isMobileView && (
            <ButtonZone>
              <Button>Get a quote.</Button>
            </ButtonZone>
          )}
        </HeaderWrapper>
        <CardsWrapper>
          <H4Header>Examples of some works</H4Header>
          <InfoCard
            info={"Gifts for Employees"}
            backgroundImage={
              "assets/images/works/MiniMees/GiftforEmployees.jpg"
            }
          />
          <InfoCard
            info={"Moderating Live Events and Conferences"}
            backgroundImage={"assets/images/events/DSC_3615.jpg"}
          />
          <InfoCard
            info={"Game Nights"}
            backgroundImage={"assets/images/events/DSC_4278.jpg"}
          />
          {isMobileView && (
            <ButtonZone>
              <Button>Get a quote.</Button>
            </ButtonZone>
          )}
        </CardsWrapper>
      </Section>

      <Footer
        credit={"Fotografija evenata: Edin Tuzlak"}
        link={"https://www.instagram.com/edin.tuzlak/"}
      />
    </MainContentContainer>
  );
}

export default ServicesPage;
