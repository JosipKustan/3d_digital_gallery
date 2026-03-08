import { useState } from "react";
import Head from "next/head";
import {
  ContactFormWrapper,
  H2Header,
  H4Header,
  HeaderWrapper,
  MainContentContainer,
  Section,
  SubHeader,
} from "../components/shared/StaticStyles";
import { Button } from "../components/shared/Button";
import { ContactZukiPurr } from "../components/app/ContactZukiPurr";
import { TestemonialsCard } from "../components/app/cards/TestemonialsCard";
import { JelenaPapigaSVG } from "../components/app/SVG/JelenaPapigaSVG";
import { MagareVinkoSVG } from "../components/app/SVG/MagareVinkoSVG";
import { TomicSVGDragon } from "../components/app/SVG/TomicSVGDragon";
import { CardsWrapper } from "../components/app/cards/CardStyles";
import Footer from "../components/shared/Footer";
import theme from "../components/theme";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    // Honeypot: if bot-field is filled, silently bail
    if (data.get("bot-field")) return;

    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "commission",
          ...Object.fromEntries(data.entries()),
        }).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <MainContentContainer>
      <Head>
        <title>Contact &amp; Commission - Creative Studio Kuki</title>
        <link rel="canonical" href="https://creativestudiokuki.com/contact" />
        <meta
          name="description"
          content="Commission a personalised miniature art piece from Creative Studio Kuki. Get in touch and let's talk about the memory you want to preserve."
        />
        <meta
          property="og:title"
          content="Contact &amp; Commission - Creative Studio Kuki"
        />
        <meta
          property="og:description"
          content="Commission a personalised miniature art piece from Creative Studio Kuki."
        />
      </Head>

      <Section
        color={theme.colors.white}
        background={theme.colors.background_dark}
        id="contact"
      >
        <HeaderWrapper>
          <H2Header>Start a commission</H2Header>
          <SubHeader>
            {
              "Let's unlock the ideas together! You might be surprised what can be done."
            }
          </SubHeader>
          <ContactZukiPurr />
        </HeaderWrapper>
        <ContactFormWrapper
          onSubmit={handleSubmit}
          name="commission"
        >
          <input type="hidden" name="form-name" value="commission" />
          {/* Honeypot — hidden from humans, bots fill it in */}
          <input name="bot-field" style={{ display: "none" }} />

          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <select name="type" required defaultValue="">
            <option value="" disabled>
              What kind of piece?
            </option>
            <option value="personal-gift">Personal gift</option>
            <option value="wedding-anniversary">Wedding / Anniversary</option>
            <option value="graduation">Graduation</option>
            <option value="business-team">Business / Team gift</option>
            <option value="fan-art">Fan art</option>
            <option value="other">Other / Not sure yet</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about the memory or idea you want to preserve..."
            required
          />
          {status === "success" ? (
            <p style={{ color: "var(--color-tiel, #4ecdc4)", margin: 0 }}>
              Got it! I'll be in touch soon.
            </p>
          ) : (
            <>
              <Button
                type="submit"
                style={{ alignSelf: "flex-start" }}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send inquiry"}
              </Button>
              {status === "error" && (
                <p style={{ color: "#e05c5c", margin: 0 }}>
                  Something went wrong. Try again or email directly.
                </p>
              )}
            </>
          )}
        </ContactFormWrapper>
      </Section>

      <Section background={theme.colors.white} color={theme.colors.black}>
        <HeaderWrapper>
          <H2Header>Real stories, real impact</H2Header>
          <SubHeader>
            {"Every piece started with a conversation. Sometimes it is enough to just ask. You might be surprised by the ideas we come up with together."}
          </SubHeader>
        </HeaderWrapper>
        <CardsWrapper>
          <H4Header>{"What people say..."}</H4Header>
          <TestemonialsCard
            svg={<JelenaPapigaSVG />}
            name="Jelena P."
            testemonial={
              "\u201cBest gift EVER! Personalised, beautiful and it even glows. Whoever sees it, is impressed\u201d"
            }
            backgroundColor={theme.colors.background_dark}
          />
          <TestemonialsCard
            svg={<MagareVinkoSVG />}
            name="Mirela U."
            testemonial={
              "\u201cI don\u2019t know how did he manage to get it spot on. And so detailed!!!\u201d"
            }
            backgroundColor={theme.colors.background_dark}
          />
          <TestemonialsCard
            svg={<TomicSVGDragon />}
            name="Josip T."
            testemonial={
              "\u201cKuki made a small art piece that is a centerpiece of my living room\u201d"
            }
            backgroundColor={theme.colors.background_dark}
          />
          <SubHeader style={{ marginTop: "16px", opacity: 0.6 }}>
            More stories and behind-the-scenes coming soon.
          </SubHeader>
        </CardsWrapper>
      </Section>

      <Footer />
    </MainContentContainer>
  );
}
