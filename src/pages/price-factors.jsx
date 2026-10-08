import Footer from "../components/shared/Footer";
import HourlyRates from "../components/shared/HourlyRates";
import { SEO } from "../components/shared/SEO";
import {
  BodyLead,
  H2Header,
  H4Header,
  HeaderWrapper,
  InlineLink,
  MainContentContainer,
  Section,
  StepWrapper,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { CUSTOM_DESIGN_RATE } from "../data/siteContent";

const CUSTOM_RATE = `€${CUSTOM_DESIGN_RATE.rate} per hour`;

export default function PriceFactors() {
  return (
    <MainContentContainer>
      <SEO
        title="Pricing and Hourly Rates | Creative Studio Kuki"
        description={`Custom design work at Creative Studio Kuki is ${CUSTOM_RATE}, no VAT added. Once we agree on the brief, I estimate the hours, so you know the price up front.`}
        ogDescription={`Custom design work is ${CUSTOM_RATE}. I estimate the hours up front, so you know the price before work starts.`}
        path="/price-factors"
      />
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header as="h1">Pricing</H2Header>
          <BodyLead>
            Every project is different, so I price by the hour. Once we agree
            on what we are making, I estimate how long it will take, and that
            estimate sets the price.
          </BodyLead>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header as="h2">Hourly rate</H4Header>
            <HourlyRates rates={[CUSTOM_DESIGN_RATE]} />
            <p>
              Rates for digital design, programming and other services are on
              the <InlineLink href="/legal">legal information page</InlineLink>.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h2">What affects the price</H4Header>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">1. People and Character Details</H4Header>
            <p>
              <strong>Figures Up to 3 cm:</strong> Small-scale figures don't
              require intricate facial details, so generic representations take
              fewer hours.
            </p>
            <p>
              <strong>Detailed Sculptures of Specific People:</strong> When a
              project requires realistic 3D modeling of someone's face or
              figure, especially for larger works, the time and effort increase
              significantly. Sculpting a lifelike representation demands
              advanced techniques and precision, which adds hours.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">2. Epoxy Resin (Water Effects)</H4Header>
            <p>
              Epoxy resin is an essential material for creating realistic water
              effects, transparent surfaces, or glossy finishes. However, it's:
            </p>
            <ul>
              <li>
                <strong>Expensive:</strong> High-quality resin is a special
                material, so its cost may be added to the quote.
              </li>
              <li>
                <strong>Delicate to Work With:</strong> Requires specialty tools
                like pressure pots to avoid bubbles and ensure smooth results.
              </li>
              <li>
                <strong>Time-Consuming:</strong> Resin curing can take hours or
                even days, during which the piece needs careful monitoring.
              </li>
            </ul>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">3. Lighting Effects</H4Header>
            <p>
              Even in small-scale works, adding lighting requires a higher level
              of planning, materials, and labor:
            </p>
            <ul>
              <li>
                <strong>Small Pieces:</strong> Lights must be integrated into
                the base, which requires custom designs and electrical work.
              </li>
              <li>
                <strong>Larger Projects:</strong> The complexity increases with
                the need for more complex light composition, wiring, and
                installation techniques to ensure the lighting enhances the
                piece's overall aesthetic.
              </li>
            </ul>
            <p>
              Lighting effects are transformative but involve additional steps
              that add hours. Lighting components with a high cost may be added
              to the quote.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">4. Size and Scale</H4Header>
            <p>
              Working in three dimensions takes more modelling, printing and
              painting time, and as the project grows in size, the hours grow
              quickly.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header as="h3">5. Delivery</H4Header>
            <p>
              Ensuring your art piece arrives safely is a priority. Delivery is
              not part of the hourly rate and is charged separately:
            </p>
            <ul>
              <li>
                <strong>Packaging:</strong> Each piece is carefully packed with
                protective materials to prevent damage during transit. For
                fragile items like epoxy resin projects or those with delicate
                lighting, specialized packaging is used.
              </li>
              <li>
                <strong>Shipping Costs:</strong> Depending on the size, weight,
                and destination, shipping costs will vary. We'll provide a clear
                estimate based on your location.
              </li>
              <li>
                <strong>International Shipping:</strong> If you're outside our
                local delivery area, customs fees, insurance, and extended
                transit times may apply.
              </li>
              <li>
                <strong>Personal Delivery Option:</strong> For high-value or
                large-scale pieces, we may offer personal delivery and setup
                within certain regions for an additional fee.
              </li>
            </ul>
          </StepWrapper>
        </TextListWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}
