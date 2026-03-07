import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { TigiSVG } from "../components/app/SVG/TigiSVG";

// ── Animations ──────────────────────────────────────────────────────────────

const angryShake = keyframes`
  0%, 75%, 100% { transform: translateX(0) rotate(0deg); }
  77%  { transform: translateX(-3px) rotate(-0.6deg); }
  79%  { transform: translateX(3px)  rotate(0.6deg);  }
  81%  { transform: translateX(-3px) rotate(-0.4deg); }
  83%  { transform: translateX(3px)  rotate(0.4deg);  }
  85%  { transform: translateX(-2px) rotate(-0.3deg); }
  87%  { transform: translateX(2px)  rotate(0.3deg);  }
  89%  { transform: translateX(-1px) rotate(-0.2deg); }
  91%  { transform: translateX(1px)  rotate(0.2deg);  }
  93%  { transform: translateX(0)    rotate(0deg);    }
`;

const noteFloat = keyframes`
  0%, 100% { transform: rotate(-4deg) translateY(0px); }
  50%       { transform: rotate(-3deg) translateY(-8px); }
`;

const glitch = keyframes`
  0%, 88%, 100% {
    text-shadow: none;
    transform: none;
  }
  90% {
    text-shadow: -4px 0 #C15EFD, 4px 0 #27F7F0;
    transform: skewX(-4deg);
  }
  92% {
    text-shadow: 4px 0 #C15EFD, -4px 0 #27F7F0;
    transform: skewX(4deg);
  }
  94% {
    text-shadow: -2px 0 #C15EFD, 2px 0 #27F7F0;
    transform: skewX(-1deg);
  }
  96% {
    text-shadow: none;
    transform: none;
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const popIn = keyframes`
  0%   { opacity: 0; transform: rotate(-4deg) scale(0.7) translateY(20px); }
  70%  { transform: rotate(-4.5deg) scale(1.04) translateY(-4px); }
  100% { opacity: 1; transform: rotate(-4deg) scale(1) translateY(0); }
`;

// ── Styled Components ────────────────────────────────────────────────────────

const Page = styled.div`
  min-height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 24px;
`;

const Watermark = styled.div`
  position: absolute;
  font-family: "Kanit", sans-serif;
  font-size: clamp(200px, 35vw, 480px);
  font-weight: 900;
  color: rgba(193, 94, 253, 0.055);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  letter-spacing: -0.05em;
  user-select: none;
  pointer-events: none;
  line-height: 1;
`;

const SceneWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StickyNote = styled.div`
  position: absolute;
  top: -28px;
  right: clamp(-60px, -8vw, -20px);
  background: #f5e03a;
  padding: 18px 22px 24px 22px;
  max-width: clamp(180px, 28vw, 300px);
  box-shadow:
    3px 5px 20px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(0, 0, 0, 0.12);
  z-index: 10;
  animation:
    ${popIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both,
    ${noteFloat} 4s ease-in-out 1s infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 0 3px 3px;
  }

  /* tape edge wear */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.04) 0%,
      transparent 30%,
      rgba(0, 0, 0, 0.06) 70%,
      transparent 100%
    );
  }
`;

const NoteText = styled.p`
  font-family: "Permanent Marker", cursive;
  font-size: clamp(14px, 1.8vw, 19px);
  color: #1a1100;
  margin: 0;
  line-height: 1.55;
  transform: rotate(1.5deg);
`;

const CatWrapper = styled.div`
  animation: ${angryShake} 4s ease-in-out infinite;
`;

const StyledTigi = styled(TigiSVG)`
  width: clamp(280px, 52vw, 620px);
  height: auto;
  display: block;
`;

const TextBlock = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 8px;
`;

const ErrorCode = styled.span`
  display: block;
  font-family: "Kanit", sans-serif;
  font-size: clamp(56px, 10vw, 108px);
  font-weight: 900;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.03em;
  animation: ${glitch} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const Label = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: clamp(11px, 1.2vw, 14px);
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.35em;
  margin: 4px 0 28px;
  animation: ${fadeUp} 0.7s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 13px 36px;
  border: 2px solid rgba(193, 94, 253, 0.55);
  color: #c15efd;
  font-family: "Kanit", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  animation: ${fadeUp} 0.7s ease forwards;
  animation-delay: 0.85s;
  opacity: 0;

  &:hover {
    background: rgba(193, 94, 253, 0.12);
    border-color: #c15efd;
    box-shadow: 0 0 28px rgba(193, 94, 253, 0.2);
  }
`;

// ── Page ─────────────────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found</title>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Page>
        <Watermark>404</Watermark>

        <SceneWrapper>
          <StickyNote>
            <NoteText>
              Don&apos;t tell her,<br />
              she will be<br />
              angry at me!
            </NoteText>
          </StickyNote>

          <CatWrapper>
            <StyledTigi aria-label="Tigi the angry cat" />
          </CatWrapper>
        </SceneWrapper>

        <TextBlock>
          <ErrorCode>404</ErrorCode>
          <Label>Page Not Found</Label>
          <HomeButton href="/">&larr;&nbsp;Back to safety</HomeButton>
        </TextBlock>
      </Page>
    </>
  );
}
