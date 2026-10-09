import { Button } from "../../shared/Button";
import { useOpenLink } from "../../shared/hooks/useOpenLink";
import { IconNewTab } from "../SVG/IconNewTab";
import {
  CardImage,
  CatCardDescription,
  CatCardHeader,
  CircleWrapper,
  PortfolioCardBottom,
  PortfolioCardWrapper,
  SVGWrapper,
  TextWrapper,
} from "./CardStyles";

export function PortfolioCard({
  svg,
  img,
  header,
  description,
  color,
  colorAccent,
  textColor,
  responsibilities,
  links, // Default to empty array as fallback
}) {
  const { openLink } = useOpenLink();

  return (
    <PortfolioCardWrapper
      color={color}
      $textColor={textColor}
      direction="column"
      align="left"
    >
      <TextWrapper>
        <CatCardHeader>{header}</CatCardHeader>

        <CatCardDescription>{description}</CatCardDescription>

        <CatCardDescription>
          {"Responsibilities: "}
          <strong>{responsibilities}</strong>
        </CatCardDescription>
      </TextWrapper>
      <PortfolioCardBottom>
        <CircleWrapper color={colorAccent}>
          {img ? (
            <CardImage src={img} alt={`${header} art`} sizes="148px" />
          ) : (
            <SVGWrapper>{svg}</SVGWrapper>
          )}
        </CircleWrapper>
        <TextWrapper>
          {links &&
            links.map(([link, name], index) => (
              <Button
                variant="solid"
                key={index}
                onClick={() => openLink(link)}
              >
                {name || "Case Study"}
                <IconNewTab />
              </Button>
            ))}
        </TextWrapper>
      </PortfolioCardBottom>
    </PortfolioCardWrapper>
  );
}
