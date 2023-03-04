import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F4E9E6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 15;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    /* set width for mobile screens */
    max-width: 340px;
  }

  @media screen and (min-width: 769px) {
    /* set width for desktop screens */
    max-width: 400px;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  margin-top: 48px;
  height: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
  padding: 8px;
  box-sizing: border-box;
`;

export const NavItem = styled(motion.li)`
`;
export const Hamburger = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  position: absolute;
  left: 0;
  top: 0;

  background: rgba(244, 233, 230, 0.6);
  /* Glassmorphism */

  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0 0 16px 0;
  z-index: 20;
  //&:focus {
  //  outline: none;
  //  box-shadow: 0 0 0 4px #9ecaed;
  //}
`;
export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 14;
`;
