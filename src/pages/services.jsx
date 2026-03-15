import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/app/cards/ServiceCard";
import { CategoryLabel } from "../components/app/nav/NavMenuStyles";
import { Button } from "../components/shared/Button";
import CardsGrid from "../components/shared/CardsGrid";
import Footer from "../components/shared/Footer";
import SectionNav from "../components/shared/SectionNav";
import {
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

// ─── Component ────────────────────────────────────────────────────────────────

function ServicesPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(null);
  const sectionTimers = useRef({});

  useEffect(() => {
    const ids = ["individual", "business", "fan-art", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            sectionTimers.current[e.target.id] = setTimeout(
              () => setActiveSection(e.target.id),
              300,
            );
          } else {
            clearTimeout(sectionTimers.current[e.target.id]);
            delete sectionTimers.current[e.target.id];
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      Object.values(sectionTimers.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <MainContentContainer>
      <Head>
        <title>
          Handmade Personalised Miniatures – What We Make | Creative Studio Kuki
        </title>
        <link rel="canonical" href="https://creativestudiokuki.com/services" />
        <meta
          name="description"
          content="Handmade personalised miniature commissions. Love stories, anniversaries, graduations, fan art, business gifts. Each piece made for exactly one person. Croatia."
        />
        <meta
          property="og:title"
          content="Handmade Personalised Miniatures – What We Make | Creative Studio Kuki"
        />
        <meta
          property="og:description"
          content="Handmade personalised miniature commissions. Love stories, anniversaries, graduations, fan art, business gifts. Each piece made for exactly one person."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      {/* ── HERO ── */}
      <HeroServicesSection id="services">
        <HeaderWrapper>
          <H1Header>For this moment.</H1Header>
          <SubHeader>
            Handmade miniature commissions for people, places and moments that
            matter. Each piece is 3D modelled, printed in resin and
            hand-painted. Each one is made once, for one person.
          </SubHeader>
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
          <SubHeader>
            Not every commission has a clean category name. If you have an idea
            and you are not sure where it belongs, just describe it and we will
            figure it out from there.
          </SubHeader>
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
        <FAQList>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.q}>
              <H5Header style={{ marginBottom: "10px" }}>{item.q}</H5Header>
              {item.a ? (
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.65)",
                  }}
                >
                  {item.a}
                </p>
              ) : (
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.65)",
                  }}
                >
                  Complexity, scale, number of figures, and build time are the
                  main factors.{" "}
                  <FAQLink href="/price-factors">
                    Full breakdown on the pricing page →
                  </FAQLink>
                </p>
              )}
            </FAQItem>
          ))}
        </FAQList>
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
