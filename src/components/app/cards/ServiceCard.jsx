import Image from "next/image";
import {
  CardBody,
  CardCopy,
  CardImageWrap,
  CardLink,
  CardTitle,
  ServiceCardLink,
} from "./CardStyles";

export default function ServiceCard({
  card,
  accent,
  sizes = "(min-width: 640px) 50vw, 100vw",
}) {
  return (
    <ServiceCardLink href={card.href} $accent={accent}>
      <CardImageWrap>
        <Image
          src={card.image}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
          alt={card.title}
        />
      </CardImageWrap>
      <CardBody>
        <CardTitle>{card.title}</CardTitle>
        <CardCopy>{card.copy}</CardCopy>
        <CardLink $accent={accent}>→ See the work</CardLink>
      </CardBody>
    </ServiceCardLink>
  );
}
