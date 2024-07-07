import {
  CardWrapper,
  CatCardDescription,
  CatCardHeader,
  SVGWrapper,
  TextWrapper,
} from "./CatCardStyles";

export function CatCard({ svg, header, description, color }) {
  return (
    <CardWrapper color={color}>
      <SVGWrapper>{svg}</SVGWrapper>
      <TextWrapper>
        <CatCardHeader>{header}</CatCardHeader>
        <CatCardDescription>{description}</CatCardDescription>
      </TextWrapper>
    </CardWrapper>
  );
}
