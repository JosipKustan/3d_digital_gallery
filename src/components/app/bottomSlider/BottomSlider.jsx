import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronIcon, ChevronWrapper } from './Chevron.jsx';
import AvatarImage from '../../shared/Avatar.jsx';

const BottomSliderWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  padding: 16px;
  background: rgba(244, 233, 230, 0.45);
  color: white;
  z-index: 1;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
`;

const BottomSliderContent = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoHeader = styled.div`
 display: flex;
  gap: 8px;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Name = styled.span`
  font-size: 12px;
  color: #625959;
`;
const ArtName = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
function BottomSlider() {
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
      toggleSlider();
    } else if (endY > startY) {
      toggleSlider();
    }
  };

  const sliderHeight = isOpen ? '0%' : '72%';

  const wrapperBgColor = isOpen ? 'rgba(244, 233, 230)' : 'rgba(244, 233, 230, 0.45)';
  return (
    <BottomSliderWrapper
      animate={{ y: sliderHeight, backgroundColor: wrapperBgColor }}
      transition={{ type: 'spring', stiffness: 300, damping: 40 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronWrapper onClick={toggleSlider}>
        <ChevronIcon isOpen={isOpen} />
      </ChevronWrapper>
      <BottomSliderContent>
        <InfoHeader>
          <AvatarImage
            isOpen={isOpen}
          />
          <NameContainer>
            <strong>Kukicrafts</strong>
            <Name>Josip Kuštan</Name>
          </NameContainer>
        </InfoHeader>
        <ArtName>Old counts house and chicken coop</ArtName>
        <p>This is the BottomSlider content</p>
      </BottomSliderContent>

    </BottomSliderWrapper>
  );
}
export default BottomSlider;
