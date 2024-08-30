import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 100;
  overflow-x: auto;

  @media screen and (min-width: 769px) {
    /* set width for desktop screens */
    max-width: 55%;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  max-width: fit-content;
  overflow-y: scroll;

  min-height: ${(props) => (props.size ? "256px" : "118px")};
`;

export const NavItem = styled(motion.li)`
  width: ${(props) => (props.size ? "330px" : "172px")};
  height: ${(props) => (props.size ? "230px" : "96px")};
  border: solid 3px ${theme.colors.purple_accent};
  border-radius: ${theme.border.medium};
`;
export const Hamburger = styled.button`
  all: unset;
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

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
  z-index: 40;
`;

export const TopNavigationWrapper = styled.div`
  position: fixed;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${theme.colors.white};
  align-items: center;
  box-sizing: border-box;
  z-index: 150;
`;

export const BrandName = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;

  @media (min-width: 1080px) {
    font-size: 40px;
    align-self: center;
  }
`;

export const MenuList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  box-sizing: border-box;

  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 0px;
  }
`;

export const MenuItem = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  border-bottom: solid 3px ${theme.colors.purple_accent};
  color: ${theme.colors.black};
  text-transform: capitalize;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.purple_accent};
    transform: scale(1.05);
  }
  &:visited {
    text-decoration: none;
  }
`;

export const MenuItemHash = styled(HashLink)`
  font-family: ${theme.fonts.heading};
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  border-bottom: solid 3px ${theme.colors.purple_accent};
  color: ${theme.colors.black};
  text-transform: capitalize;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.purple_accent};
    transform: scale(1.05);
  }
  &:visited {
    text-decoration: none;
  }
`;

export const NavScrollZone = styled.div`
  min-height: 128px;
  width: 100%;
`;

export const DesktopNavWrapper = styled.nav`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 64px;
  width: 100%;

  background-color: ${theme.colors.white};

  box-sizing: border-box;
  padding-inline: 64px;
  padding-block: 16px;

  z-index: 1000;
`;
