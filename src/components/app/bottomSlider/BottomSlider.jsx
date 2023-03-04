import { useState } from 'react';
import { ChevronIcon, ChevronWrapper } from './Chevron.jsx';
import AvatarImage from '../../shared/Avatar.jsx';
import {
  ArtName,
  BottomSliderContent,
  BottomSliderWrapper, Description,
} from './BottomSliderStyles.js';
import { InfoHeader } from './InfoHeader.jsx';

function BottomSlider({ artName, description }) {
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

  const sliderHeight = isOpen ? '0%' : 'calc(100% - 88px)';

  const wrapperBgColor = isOpen ? 'rgba(244, 233, 230)' : 'rgba(244, 233, 230, 0.45)';
  return (
    <BottomSliderWrapper
      animate={{ y: sliderHeight, backgroundColor: wrapperBgColor }}
      transition={{ type: 'glide' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronWrapper onClick={toggleSlider}>
        <ChevronIcon isOpen={isOpen} />
      </ChevronWrapper>
      <BottomSliderContent>
        <InfoHeader isOpen={isOpen} />
        <ArtName>{artName}</ArtName>
        <Description>{description}</Description>
      </BottomSliderContent>

    </BottomSliderWrapper>
  );
}
export default BottomSlider;
