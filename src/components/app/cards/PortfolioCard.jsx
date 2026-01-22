import { Button } from "../../shared/Button";
import { useOpenLink } from "../../shared/hooks/useOpenLink";
import { IconNewTab } from "../SVG/IconNewTab";
import {
  CardBottomWrapper,
  CardWrapper,
  CatCardDescription,
  CatCardHeader,
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
        {img ? (
          <img
            src={img}
            alt={`${header} preview`}
            style={{ width: "148px", height: "auto", objectFit: "cover" }}
          />
        ) : (
          <SVGWrapper>{svg}</SVGWrapper>
        )}
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
