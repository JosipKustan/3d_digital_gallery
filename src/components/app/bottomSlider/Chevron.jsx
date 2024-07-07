import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme";

export const ChevronWrapper = styled(motion.div)`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
  width: 72px;
  height: 32px; /* Adjust if needed */
  display: flex;
  justify-content: center;
  z-index: 2;
  color: ${theme.colors.white};
`;

export function ChevronIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path
        d={
          isOpen
            ? "m25.1 12.725-8.4 8.425c-.1.1-.208.17-.325.212a1.098 1.098 0 0 1-.375.063 1.1 1.1 0 0 1-.375-.063.872.872 0 0 1-.325-.212l-8.425-8.425a1.187 1.187 0 0 1-.35-.875c0-.35.125-.65.375-.9a1.2 1.2 0 0 1 .875-.375 1.2 1.2 0 0 1 .875.375L16 18.3l7.35-7.35c.233-.233.52-.35.862-.35.342 0 .638.125.888.375s.375.542.375.875a1.2 1.2 0 0 1-.375.875Z"
            : "m6.9 19.275 8.4-8.425c.1-.1.208-.17.325-.212.117-.042.242-.063.375-.063a1.1 1.1 0 0 1 .375.063.872.872 0 0 1 .325.212l8.425 8.425c.233.233.35.525.35.875s-.125.65-.375.9a1.2 1.2 0 0 1-.875.375 1.2 1.2 0 0 1-.875-.375L16 13.7l-7.35 7.35c-.233.233-.52.35-.862.35-.342 0-.638-.125-.888-.375a1.2 1.2 0 0 1-.375-.875 1.2 1.2 0 0 1 .375-.875Z"
        }
      />
    </svg>
  );
}
