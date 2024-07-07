import { useState } from "react";
import {
  Backdrop,
  BrandName,
  Hamburger,
  MenuItem,
  MenuList,
  Nav,
  TopNavigationWrapper,
} from "./NavMenuStyles.js";
import GalleryList from "./GalleryList.jsx";
import { CatCard } from "../cards/CatCard.jsx";
import theme from "../../theme.js";
import { BusinessCatSVG } from "../SVG/BusinessCatSVG.jsx";
import { IndividualCatSVG } from "../SVG/IndividualCatSVG.jsx";
import { CardsWrapper } from "../cards/CatCardStyles.js";

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
        //onTouchStart={handleTouchStart}
        //onTouchEnd={handleTouchEnd}
        onClick={toggleMenu}
      >
        <GalleryList />
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
        <CardsWrapper>
          <CatCard
            svg={<IndividualCatSVG />}
            header={"For Individuals"}
            description={"Personalized Miniature Art for one or many."}
            color={theme.colors.tiel_dark}
          />
          <CatCard
            svg={<BusinessCatSVG />}
            header={"For Businesses"}
            description={"Gifts, Memorabilia, Awards and Game Events."}
            color={theme.colors.blue_dark}
          />
        </CardsWrapper>
      </Nav>
    </>
  );
}
export default NavMenu;
