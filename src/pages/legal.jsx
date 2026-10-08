import Footer from "../components/shared/Footer";
import HourlyRates from "../components/shared/HourlyRates";
import { SEO } from "../components/shared/SEO";
import {
  BodyLead,
  H2Header,
  H4Header,
  HeaderWrapper,
  MainContentContainer,
  Section,
  StepWrapper,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { HOURLY_RATES, rateFor } from "../data/siteContent";

export default function Legal() {
  return (
    <MainContentContainer>
      <SEO
        title="Legal Information and Price List | Creative Studio Kuki"
        description={`Hourly rates of Creative Studio Kuki: custom design work €${rateFor("custom-design")} per hour, digital design and programming €${rateFor("digital")} per hour. No VAT added.`}
        ogDescription="Registered activities and hourly rates of Creative Studio Kuki."
        path="/legal"
      />
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header as="h1">Legal Information</H2Header>
          <BodyLead>
            The full price list for every service Creative Studio Kuki is
            registered to provide.
          </BodyLead>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header as="h2">Hourly rates</H4Header>
            <HourlyRates rates={HOURLY_RATES} showNkd />
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h2">How the price is set</H4Header>
            <p>
              I charge for all work by the hour. Once we agree on the scope, I
              estimate the hours needed. The quote is those hours times the rate
              for that type of work, plus delivery and any special materials
              with a high cost.
            </p>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}
