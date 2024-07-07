import { useState } from "react";
import { ChevronIcon, ChevronWrapper } from "./Chevron.jsx";
import AvatarImage from "../../shared/Avatar.jsx";
import {
  ArtName,
  BottomSliderContent,
  BottomSliderWrapper,
  Description,
} from "./BottomSliderStyles.js";
import { InfoHeader } from "./InfoHeader.jsx";
import { GallerySlider } from "./GallerySlider.jsx";
import theme from "../../theme.js";

function BottomSlider({ artPiece }) {
  const [isOpen, setIsOpen] = useState(false);
  const [startY, setStartY] = useState(null);
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;

    if (endY < startY) {
      setIsOpen(true);
    } else if (endY > startY) {
      setIsOpen(false);
    }
  };
  const sliderHeight = isOpen ? "0%" : "calc(100% - 96px)";

  const wrapperBgColor = isOpen
    ? theme.colors.purple_dark
    : theme.colors.purple_dark_transparent;
  return (
    <BottomSliderWrapper
      animate={{ y: sliderHeight, backgroundColor: wrapperBgColor }}
      transition={{ type: "glide" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronWrapper onClick={toggleSlider}>
        <ChevronIcon isOpen={isOpen} />
      </ChevronWrapper>
      <BottomSliderContent>
        <InfoHeader artPiece={artPiece} isOpen={isOpen} />
        <Description>{artPiece.description}</Description>
        <GallerySlider images={artPiece.galleryImages} />
      </BottomSliderContent>
    </BottomSliderWrapper>
  );
}
export default BottomSlider;
