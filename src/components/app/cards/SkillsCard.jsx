import {
  CardBottomWrapper,
  CardWrapper,
  CatCardDescription,
  CatCardHeader,
  CircleWrapper,
  SkillCardWrapper,
  SVGWrapper,
  TextWrapper,
} from "./CardStyles";

export function SkillsCard({
  svg,
  img,
  header,
  description,
  color,
  skills, // Now array of bullet points: ["Item 1", "Item 2"]
}) {
  return (
    <SkillCardWrapper direction="column" align="left">
      <TextWrapper>
        <CatCardHeader>{header}</CatCardHeader>
        <CatCardDescription>{description}</CatCardDescription>
      </TextWrapper>

      <CardBottomWrapper>
        <CircleWrapper color={color}>
          {img ? (
            <img
              src={img}
              alt={`${header} preview`}
              style={{
                width: "120%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          ) : (
            <SVGWrapper>{svg}</SVGWrapper>
          )}
        </CircleWrapper>

        <TextWrapper>
          <ul
            style={{
              margin: "0.5rem 0 0 0",
              paddingLeft: "1.5rem",
            }}
          >
            {skills?.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.25rem" }}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </TextWrapper>
      </CardBottomWrapper>
    </SkillCardWrapper>
  );
}
