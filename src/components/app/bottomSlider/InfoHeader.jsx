import { InfoHeaderContainer, Name, NameContainer } from './BottomSliderStyles.js';
import AvatarImage from '../../shared/Avatar.jsx';

export function InfoHeader({ isOpen, artPiece }) {
  return (
    <InfoHeaderContainer>
      <AvatarImage
        image={artPiece.artistsImage}
        isOpen={isOpen}
      />
      <NameContainer>
        <strong>{artPiece.artistName}</strong>
        <Name>{artPiece.artistRealName}</Name>
      </NameContainer>
    </InfoHeaderContainer>
  );
}
