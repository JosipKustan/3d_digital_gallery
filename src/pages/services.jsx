import { SEO } from "../components/shared/SEO";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import ServiceCard from "../components/app/cards/ServiceCard";
import { CategoryLabel } from "../components/app/nav/NavMenuStyles";
import { Button } from "../components/shared/Button";
import CardsGrid from "../components/shared/CardsGrid";
import Footer from "../components/shared/Footer";
import SectionNav from "../components/shared/SectionNav";
import useActiveSection from "../components/shared/hooks/useActiveSection";
import {
  BodyLead,
  ButtonZone,
  CategorySection,
  FAQItem,
  FAQLink,
  FAQList,
  FAQSection,
  H1Header,
  H4Header,
  H5Header,
  HeaderWrapper,
  HeroBeachIllustration,
  HeroServicesSection,
  IllustrationWrapper,
  InlineLink,
  MainContentContainer,
  Section,
  SectionTitleGroup,
  SectionTopRow,
  SubHeader,
  TextListWrapper,
} from "../components/shared/StaticStyles";
import theme from "../components/theme";
import { BUSINESS_CARDS, FAQ_ITEMS, FAN_CARDS, INDIVIDUAL_CARDS, SERVICES_NAV } from "../data/siteContent";
import { servicesSchema } from "../data/servicesSchema";
import { scrollToSection } from "../utils/scroll";
import styled from "styled-components";

const SECTION_IDS = SERVICES_NAV.map((item) => item.id);

// ─── Hero ticker ───────────────────────────────────────────────────────────────

const HERO_IDEAS = [
  "A wedding proposal.",
  "A childhood home.",
  "A scene from a game you love.",
  "Thirty individual gifts. Thirty different people.",
  "A film moment frozen in three dimensions.",
  "Something no one has ever made.",
];

function RotatingIdea() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Reduced motion: keep the first idea on screen instead of cycling
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IDEAS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <IdeaTickerWrapper>
      <IdeaTickerLabel>For example —</IdeaTickerLabel>
      <IdeaTickerSlot>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 0.75 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
            style={{ display: "block" }}
          >
            {HERO_IDEAS[index]}
          </motion.span>
        </AnimatePresence>
      </IdeaTickerSlot>
    </IdeaTickerWrapper>
  );
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <FAQList>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        const answer = item.a ?? (
          <>
            Complexity, scale, number of figures, and build time are the main
            factors.{" "}
            <FAQLink href="/price-factors">
              Full breakdown on the pricing page →
            </FAQLink>
          </>
        );
        const buttonId = `${baseId}-q${i}`;
        const answerId = `${baseId}-a${i}`;
        return (
          <FAQItem key={item.q}>
            <H5Header style={{ marginBottom: 0 }}>
              <FAQToggle
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <FAQChevron
                  as={motion.span}
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                >
                  ↓
                </FAQChevron>
              </FAQToggle>
            </H5Header>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      margin: "14px 0 0",
                      lineHeight: 1.7,
                      color: "rgba(0,0,0,0.65)",
                    }}
                  >
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FAQItem>
        );
      })}
    </FAQList>
  );
}

// ─── Styled components ─────────────────────────────────────────────────────────

const IdeaTickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

const IdeaTickerLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.typography.size.caption};
  font-weight: ${theme.typography.weight.medium};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.4;
`;

const IdeaTickerSlot = styled.div`
  height: 1.75em;
  overflow: hidden;
  font-family: ${theme.fonts.body};
  font-size: ${theme.typography.size.lead};
  font-weight: ${theme.typography.weight.regular};
  line-height: 1.75;
`;

const FAQToggle = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 6px;
  }
`;

const FAQChevron = styled.span`
  font-size: 18px;
  flex-shrink: 0;
  opacity: 0.4;
  line-height: 1;
  padding-top: 3px;
  display: inline-block;
`;

// ─── Component ────────────────────────────────────────────────────────────────

function ServicesPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS);

  return (
    <MainContentContainer>
      <SEO
        title="Handmade Personalised Miniatures – What We Make | Creative Studio Kuki"
        description="Handmade personalised miniature commissions. Love stories, anniversaries, graduations, fan art, business gifts. Each piece made for exactly one person. Croatia."
        ogDescription="Handmade personalised miniature commissions. Love stories, anniversaries, graduations, fan art, business gifts. Each piece made for exactly one person."
        path="/services"
        jsonLd={servicesSchema}
      />

      {/* ── HERO ── */}
      <HeroServicesSection id="services">
        <HeaderWrapper>
          <H1Header>For this moment.</H1Header>
          <BodyLead>
            Handmade miniature commissions for people, places and moments that
            matter. Each piece is 3D modelled, printed in resin and
            hand-painted. Each one is made once, for one person.
          </BodyLead>
          <RotatingIdea />
        </HeaderWrapper>
        <IllustrationWrapper>
          <HeroBeachIllustration />
        </IllustrationWrapper>
      </HeroServicesSection>

      {/* ── INTRO ── */}
      <Section background={theme.colors.purple_dark} color={theme.colors.white}>
        <TextListWrapper>
          <SubHeader>
            The question I get most often is: how does this work?
          </SubHeader>
          <p>
            You tell me what the moment is. A place where something happened. A
            person and what defines them. An anniversary, a graduation, a
            proposal, a game, a film. I model it, print it, paint it, build it.
            It arrives as something you can hold.
          </p>
          <p>
            The longer version depends on what you are looking for. The three
            sections below cover the main categories. If yours does not fit
            cleanly into any of them, that is fine too.{" "}
            <InlineLink href="/contact">Get in touch.</InlineLink>
          </p>
        </TextListWrapper>
      </Section>

      {/* ── STICKY CATEGORY NAV ── */}
      <SectionNav
        items={SERVICES_NAV}
        activeSection={activeSection}
        onSelect={(id) => { setActiveSection(id); scrollToSection(id); }}
      />

      {/* ── INDIVIDUAL ── */}
      <CategorySection id="individual" $bg={theme.colors.tiel_dark}>
        <SectionTopRow>
          <SectionTitleGroup>
            <CategoryLabel $accent={theme.colors.tiel_accent}>
              For people
            </CategoryLabel>
            <H5Header>Made for you.</H5Header>
          </SectionTitleGroup>
          <Button variant="light" as={Link} href="/contact">
            Get a quote →
          </Button>
        </SectionTopRow>
        <CardsGrid>
          {INDIVIDUAL_CARDS.map((card) => (
            <ServiceCard
              key={card.href}
              card={card}
              accent={theme.colors.tiel_accent}
              sizes="(min-width: 640px) 25vw, 50vw"
            />
          ))}
        </CardsGrid>
      </CategorySection>

      {/* ── BUSINESS ── */}
      <CategorySection id="business" $bg={theme.colors.blue_dark}>
        <SectionTopRow>
          <SectionTitleGroup>
            <CategoryLabel $accent={theme.colors.yellow_accent}>
              For companies
            </CategoryLabel>
            <H5Header>For your team.</H5Header>
          </SectionTitleGroup>
          <Button variant="light" as={Link} href="/contact">
            Get a quote →
          </Button>
        </SectionTopRow>
        <CardsGrid>
          {BUSINESS_CARDS.map((card) => (
            <ServiceCard
              key={card.href}
              card={card}
              accent={theme.colors.yellow_accent}
            />
          ))}
        </CardsGrid>
      </CategorySection>

      {/* ── FAN ART ── */}
      <CategorySection id="fan-art" $bg={theme.colors.purple_dark}>
        <SectionTopRow>
          <SectionTitleGroup>
            <CategoryLabel $accent={theme.colors.purple_accent}>
              For fans
            </CategoryLabel>
            <H5Header>Fan art, built.</H5Header>
          </SectionTitleGroup>
          <Button variant="light" as={Link} href="/contact">
            Get a quote →
          </Button>
        </SectionTopRow>
        <CardsGrid>
          {FAN_CARDS.map((card) => (
            <ServiceCard
              key={card.href}
              card={card}
              accent={theme.colors.purple_accent}
            />
          ))}
        </CardsGrid>
      </CategorySection>

      {/* ── NOT SURE ── */}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <H4Header>Not sure where you fit?</H4Header>
          <BodyLead>
            Not every commission has a clean category name. If you have an idea
            and you are not sure where it belongs, just describe it and we will
            figure it out from there.
          </BodyLead>
          <ButtonZone>
            <Button variant="primary" onClick={() => router.push("/contact")}>
              Get in touch
            </Button>
          </ButtonZone>
        </HeaderWrapper>
      </Section>

      {/* ── FAQ ── */}
      <FAQSection
        id="faq"
        background={theme.colors.white}
        color={theme.colors.black}
      >
        <H4Header>How commissions work</H4Header>
        <FAQAccordion />
      </FAQSection>

      {/* ── CLOSING CTA ── */}
      <Section
        background={theme.colors.background_dark}
        color={theme.colors.white}
      >
        <HeaderWrapper>
          <SubHeader>
            Whatever the occasion, the process starts the same way.
          </SubHeader>
          <H4Header>Tell me what the moment is.</H4Header>
          <ButtonZone>
            <Button variant="primary" onClick={() => router.push("/contact")}>
              Commission something
            </Button>
          </ButtonZone>
        </HeaderWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}

export default ServicesPage;
