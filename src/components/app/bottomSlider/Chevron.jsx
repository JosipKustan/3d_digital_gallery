import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChevronWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
  width: 72px;
  display: flex;
  justify-content: center;
  z-index: 2;
  color:black;
`;

export function ChevronIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={
            isOpen
              ? 'M6 6L12 12L18 6'
              : 'M6 18L12 12L18 18'
          }
      />
    </svg>
  );
}
