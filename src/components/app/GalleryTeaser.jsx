import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { galleryWorks } from "../../art/galleryWorks";
import { Button } from "../shared/Button";
import { MiniZukiInAHat } from "./SVG/MiniZukiInAHat";
import theme from "../theme";

const categoryColors = {
  Places: theme.colors.tiel_accent,
  "Fan Art — Gaming": theme.colors.yellow_accent,
};

const getCategoryColor = (category) =>
  categoryColors[category] ?? theme.colors.purple_accent;

const stampBounce = keyframes`
  0%, 100% { transform: rotate(-12deg) translateY(0); }
  50%       { transform: rotate(-10deg) translateY(-5px); }
`;

const TeaserWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 64px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1080px) {
    padding: 80px 128px 96px;
  }
`;

const TeaserHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 16px;
`;

const TeaserLabel = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`;

const TeaserCount = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: ${theme.colors.purple_accent};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  border: 1px solid ${({ $color }) => $color};
  background: ${theme.colors.background_dark};
  overflow: visible;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ $color }) => $color};
    transform: translateY(-4px);
    box-shadow: 0 16px 48px ${({ $color }) => $color}33;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardNumber = styled.span`
  position: absolute;
  top: 14px;
  left: 16px;
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.22);
  z-index: 2;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const CardBody = styled.div`
  padding: 18px 20px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex: 1;
`;

const CardCategory = styled.span`
  display: block;
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 6px;
`;

const CardTitle = styled.h3`
  font-family: "Kanit", sans-serif;
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
  line-height: 1.3;
`;

const ApprovalStamp = styled(MiniZukiInAHat)`
  position: absolute;
  top: -28px;
  right: 16px;
  width: 64px;
  height: auto;
  transform: rotate(-12deg);
  animation: ${stampBounce} 3s ease-in-out infinite;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  z-index: 10;
`;

const TeaserFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export function GalleryTeaser({ featured }) {
  const works = featured
    .map(({ id, category }) => {
      const work = galleryWorks.find((w) => w.id === id);
      return work ? { ...work, category } : null;
    })
    .filter(Boolean);

  return (
    <TeaserWrapper>
      <TeaserHeader>
        <TeaserLabel>Selected works by our Creative Director Žuki</TeaserLabel>
        <TeaserCount>{works.length} pieces</TeaserCount>
      </TeaserHeader>

      <CardsGrid>
        {works.map((work, i) => (
          <CardLink key={work.id} href={work.link}>
            <Card $color={getCategoryColor(work.category)}>
              <CardNumber>0{i + 1}</CardNumber>
              <ImageWrapper>
                <CardImage src={work.src} alt={work.name} loading="lazy" />
              </ImageWrapper>
              <CardBody>
                <CardCategory $color={getCategoryColor(work.category)}>
                  {work.category}
                </CardCategory>
                <CardTitle>{work.name}</CardTitle>
              </CardBody>
              <ApprovalStamp aria-hidden="true" />
            </Card>
          </CardLink>
        ))}
      </CardsGrid>

      <TeaserFooter>
        <Link href="/gallery">
          <Button variant="dark">See all work →</Button>
        </Link>
      </TeaserFooter>
    </TeaserWrapper>
  );
}
