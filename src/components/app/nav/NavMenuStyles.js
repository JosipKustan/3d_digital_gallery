import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme";
import Link from "next/link";

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
  top: 0;
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
  font-size: clamp(0.75rem, 3.5vw + 0.35rem, 2rem);
  font-weight: ${theme.typography.weight.bold};
  text-transform: capitalize;
  align-self: center;
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
  font-size: ${theme.typography.size.subheading};
  font-weight: ${theme.typography.weight.bold};
  line-height: ${theme.typography.leading.tight};
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

export const MenuItemHash = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.typography.size.subheading};
  font-weight: ${theme.typography.weight.bold};
  line-height: ${theme.typography.leading.tight};
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

// ─── Services sticky category nav ─────────────────────────────────────────────

export const StickyNav = styled.nav`
  position: sticky;
  top: 64px;
  z-index: 40;
  width: 100%;
  box-sizing: border-box;
  background: rgba(33, 33, 33, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 6px;
  height: 54px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 480px) {
    justify-content: center;
    padding: 0 24px;
    gap: 10px;
    overflow-x: unset;
  }
`;

export const NavPill = styled.button`
  background: ${({ $active, $accent }) =>
    $active ? `${$accent}22` : "transparent"};
  border: 1.5px solid
    ${({ $active, $accent }) => ($active ? $accent : "rgba(255,255,255,0.18)")};
  color: ${({ $active, $accent }) =>
    $active ? $accent : "rgba(255,255,255,0.6)"};
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 7px 16px;
  border-radius: 100px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
  white-space: nowrap;
  line-height: 1;

  &:hover {
    background: ${({ $accent }) => `${$accent}18`};
    border-color: ${({ $accent }) => $accent};
    color: ${({ $accent }) => $accent};
  }
`;

export const NavSep = styled.span`
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`;

export const CategoryLabel = styled.div`
  display: inline-flex;
  font-family: "Kanit", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
  padding: 5px 14px;
  border: 1.5px solid ${({ $accent }) => $accent};
  border-radius: 100px;
  width: fit-content;
`;
