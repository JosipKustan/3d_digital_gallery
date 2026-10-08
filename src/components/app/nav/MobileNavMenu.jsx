import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Backdrop,
  BrandName,
  ComicBubble,
  Hamburger,
  MenuItem,
  MenuList,
  Nav,
  TigiPeekZone,
  TopNavigationWrapper,
} from "./NavMenuStyles.js";
import { TigiSVG } from "../SVG/TigiSideEyeSVG.jsx";

const TIGI_COMPLAINTS = [
  // meows
  "...meooow...",
  "...mrrrow...",
  "...meeOOOw...",
  "...mrowr...",
  "...miaow...",
  "...meh.",
  "...mrp.",
  // short and annoyed
  "You again.",
  "Hurry up.",
  "Rude.",
  "Fine. What.",
  "No.",
  "Again?",
  "Unbelievable.",
  "I was warm. You ruined it.",
  "Pick one already.",
  "I have naps scheduled.",
  "Žuki is asleep. Lucky him.",
  "You could have just scrolled.",
  "I was literally sleeping.",
];

const variants = {
  open: {
    x: 0,
    transition: { ease: "easeInOut" },
  },
  closed: {
    x: "-100%",
    transition: { ease: "easeInOut" },
  },
};

function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const [openCount, setOpenCount] = useState(0);
  const [message, setMessage] = useState(null);

  const toggleMenu = () => {
    if (!isOpen) {
      const nextCount = openCount + 1;
      setOpenCount(nextCount);
      // Tigi starts complaining from the second open
      if (nextCount >= 2) {
        setMessage(
          TIGI_COMPLAINTS[Math.floor(Math.random() * TIGI_COMPLAINTS.length)],
        );
      }
    }
    setIsOpen(!isOpen);
  };

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    if (endX < startX) toggleMenu();
  };

  return (
    <>
      <TopNavigationWrapper>
        <Hamburger onClick={toggleMenu} aria-label="Open navigation menu">
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
        onClick={toggleMenu}
      >
        <MenuList>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/gallery">Gallery</MenuItem>
          <MenuItem href="/services">Services</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </MenuList>

        <AnimatePresence>
          {isOpen && openCount >= 2 && message && (
            <motion.div
              key={`bubble-${openCount}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.4,
                times: [0, 0.45, 1],
                ease: "easeOut",
                delay: 0.8,
              }}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <ComicBubble>{message}</ComicBubble>
            </motion.div>
          )}
        </AnimatePresence>

        <TigiPeekZone>
          <motion.div
            style={{ position: "absolute", bottom: 0, right: 0 }}
            initial={{ y: "50%" }}
            animate={{ y: openCount >= 1 ? "0%" : "50%" }}
            transition={{ duration: 7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <TigiSVG width={200} height={183} />
          </motion.div>
        </TigiPeekZone>
      </Nav>
    </>
  );
}

export default MobileNavMenu;
