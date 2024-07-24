import { useState } from "react";
import {
  Backdrop,
  BrandName,
  Hamburger,
  MenuItem,
  MenuItemHash,
  MenuList,
  Nav,
  NavScrollZone,
  TopNavigationWrapper,
} from "./NavMenuStyles.js";
import GalleryList from "./GalleryList.jsx";
import { CatCard } from "../cards/CatCard.jsx";
import theme from "../../theme.js";
import { BusinessCatSVG } from "../SVG/BusinessCatSVG.jsx";
import { IndividualCatSVG } from "../SVG/IndividualCatSVG.jsx";
import { CardsWrapper } from "../cards/CardStyles.js";
import { H5Header, H6Header } from "../../shared/StaticStyles.js";

const variants = {
  open: {
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  closed: {
    x: "-100%",
    transition: {
      ease: "easeInOut",
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
      <TopNavigationWrapper>
        <Hamburger onClick={toggleMenu}>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 17H22.5M1.5 9H22.5M1.5 1H22.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Hamburger>
        <BrandName>CREATIVE STUDIO KUKI</BrandName>
      </TopNavigationWrapper>

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
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
        onClick={toggleMenu}
      >
        <H5Header style={{ paddingLeft: "16px" }}>
          VIEW SOME WORK IN 3D
        </H5Header>
        <GalleryList />
        <MenuList>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/gallery">Gallery</MenuItem>
          <MenuItemHash smooth to="/#contact">
            Contact
          </MenuItemHash>
        </MenuList>

        <H5Header style={{ paddingLeft: "16px", marginTop: "16px" }}>
          CHECK OUT OUR SERVICES
        </H5Header>
        <CardsWrapper>
          <CatCard
            svg={<IndividualCatSVG />}
            header="For Individuals"
            description="Personalized Miniature Art for one or many."
            color={theme.colors.tiel_dark}
          />
          <CatCard
            svg={<BusinessCatSVG />}
            header="For Businesses"
            description="Gifts, Memorabilia, Awards and Game Events."
            color={theme.colors.blue_dark}
          />
        </CardsWrapper>
        <NavScrollZone />
      </Nav>
    </>
  );
}
export default NavMenu;
