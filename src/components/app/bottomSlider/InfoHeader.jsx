import { InfoHeaderContainer, Name, NameContainer } from './BottomSliderStyles.js';
import AvatarImage from '../../shared/Avatar.jsx';

export function InfoHeader({ isOpen }) {
  return (
    <InfoHeaderContainer>
      <AvatarImage
        isOpen={isOpen}
      />
      <NameContainer>
        <strong>Kukicrafts</strong>
        <Name>Josip Kuštan</Name>
      </NameContainer>
    </InfoHeaderContainer>
  );
}
