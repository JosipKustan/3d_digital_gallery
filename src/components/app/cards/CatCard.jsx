import Link from "next/link";
import { motion } from "framer-motion";
import {
  CardWrapper,
  CatCardDescription,
  CatCardHeader,
  SVGWrapper,
  TextWrapper,
} from "./CardStyles";

const MotionCard = motion(CardWrapper);
const MotionSVGWrapper = motion(SVGWrapper);

const cardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 12 },
  },
};

const svgVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -10, 10, -6, 6, 0],
    transition: {
      scale: { type: "spring", stiffness: 300, damping: 10 },
      rotate: { duration: 0.45, ease: "easeInOut" },
    },
  },
};

export function CatCard({ svg, header, description, color, href }) {
  const card = (
    <MotionCard
      color={color}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      <MotionSVGWrapper variants={svgVariants}>
        {svg}
      </MotionSVGWrapper>
      <TextWrapper>
        <CatCardHeader>{header}</CatCardHeader>
        <CatCardDescription>{description}</CatCardDescription>
      </TextWrapper>
    </MotionCard>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", width: "100%" }}>
        {card}
      </Link>
    );
  }

  return card;
}
