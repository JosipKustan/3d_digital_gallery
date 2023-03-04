import { useState } from 'react';
import {
  Backdrop,
  Hamburger, Nav, NavItem, NavList,
} from './NavMenuStyles.js';
import ThumbnailPicker from '../thumbnailPicker/ThumbnailPicker.jsx';
import { galleryWorks } from '../../../art/galleryWorks.js';

const variants = {
  open: {
    x: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  closed: {
    x: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
};
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [startX, setStartX] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowBackdrop(!showBackdrop);
  };
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;

    if (endX < startX) {
      toggleMenu();
    }
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      )}
      <Nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <NavList>
          {galleryWorks.map((image) => (
            <NavItem
              onClick={toggleMenu}
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.7 }}
              key={image.id}
            >
              <ThumbnailPicker image={image} />
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </>
  );
}
export default NavMenu;
