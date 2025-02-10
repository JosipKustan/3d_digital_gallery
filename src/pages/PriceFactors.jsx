import {
  H2Header,
  H4Header,
  HeaderWrapper,
  MainContentContainer,
  Section,
  StepWrapper,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";

export default function PriceFactors() {
  return (
    <MainContentContainer>
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H2Header>Price Factors</H2Header>
          <SubHeader>
            A closer look at the elements that impact pricing for your custom
            art projects.
          </SubHeader>
        </HeaderWrapper>
        <TextListWrapper>
          <StepWrapper>
            <H4Header>1. People and Character Details</H4Header>
            <p>
              <strong>Figures Up to 3 cm:</strong> Small-scale figures don’t
              require intricate facial details, so the price remains manageable
              for generic representations.
            </p>
            <p>
              <strong>Detailed Sculptures of Specific People:</strong> When a
              project requires realistic 3D modeling of someone’s face or
              figure, especially for larger works, the time and effort increase
              significantly. Sculpting a lifelike representation demands
              advanced techniques and precision, adding to the cost.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>2. Epoxy Resin (Water Effects)</H4Header>
            <p>
              Epoxy resin is an essential material for creating realistic water
              effects, transparent surfaces, or glossy finishes. However, it’s:
            </p>
            <ul>
              <li>
                <strong>Expensive:</strong> High-quality resin comes at a
                premium.
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
            <H4Header>3. Lighting Effects</H4Header>
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
                piece’s overall aesthetic.
              </li>
            </ul>
            <p>
              Lighting effects are transformative but involve additional steps
              that impact both time and material costs.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>4. 3D Impact on Costs</H4Header>
            <p>
              Working in three dimensions increases the amount of materials
              needed, and as the size of the project grows, the price scales up
              exponentially.
            </p>
          </StepWrapper>
          <StepWrapper>
            <H4Header>5. Delivery</H4Header>
            <p>
              Ensuring your art piece arrives safely is a priority. Here’s how
              delivery affects pricing:
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
                and destination, shipping costs will vary. We’ll provide a clear
                estimate based on your location.
              </li>
              <li>
                <strong>International Shipping:</strong> If you’re outside our
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
    </MainContentContainer>
  );
}
