import { useState } from 'react';
import {
  Backdrop,
  Hamburger, Nav, NavItem, NavList,
} from './NavMenuStyles.js';

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-100%',
  },
};
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowBackdrop(!showBackdrop);
  };

  return (
    <>
      <Hamburger onClick={toggleMenu}>
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 17H22.5M1.5 9H22.5M1.5 1H22.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Hamburger>
      {isOpen && (
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleMenu}
      />
      )}
      <Nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <NavList>
          <NavItem
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ovdje
          </NavItem>
          <NavItem
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            nema jos
          </NavItem>
          <NavItem
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Nista
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
}
export default NavMenu;
