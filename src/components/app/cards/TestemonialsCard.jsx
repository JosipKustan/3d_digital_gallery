import {
  CardName,
  CardWrapper,
  SVGWrapper,
  TestemonialText,
  TextWrapper,
} from "./CardStyles";

export function TestemonialsCard({ svg, name, testemonial, backgroundColor }) {
  return (
    <CardWrapper color={backgroundColor}>
      <SVGWrapper>{svg}</SVGWrapper>
      <TextWrapper>
        <TestemonialText>{testemonial}</TestemonialText>
        <CardName>{name}</CardName>
      </TextWrapper>
    </CardWrapper>
  );
}
