import { Button } from "../../shared/Button";
import { useOpenLink } from "../../shared/hooks/useOpenLink";
import { IconNewTab } from "../SVG/IconNewTab";
import {
  CardBottomWrapper,
  CardImage,
  CardWrapper,
  CatCardDescription,
  CatCardHeader,
  CircleWrapper,
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
  responsibilities,
  links, // Default to empty array as fallback
}) {
  const { openLink } = useOpenLink();

  return (
    <CardWrapper color={color} direction="column" align="left">
      <TextWrapper>
        <CatCardHeader>{header}</CatCardHeader>

        <CatCardDescription>{description}</CatCardDescription>

        <CatCardDescription>
          {"Responsibilities: "}
          <strong>{responsibilities}</strong>
        </CatCardDescription>
      </TextWrapper>
      <CardBottomWrapper>
        <CircleWrapper color={colorAccent}>
          {img ? (
            <CardImage src={img} alt={`${header} art`} />
          ) : (
            <SVGWrapper>{svg}</SVGWrapper>
          )}
        </CircleWrapper>
        <TextWrapper>
          {links &&
            links.map(([link, name], index) => (
              <Button
                color={color}
                colorAccent={colorAccent}
                key={index}
                onClick={() => openLink(link)}
              >
                {name || "Case Study"}
                <IconNewTab />
              </Button>
            ))}
        </TextWrapper>
      </CardBottomWrapper>
    </CardWrapper>
  );
}
