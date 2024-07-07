import {
  ArtName,
  InfoHeaderContainer,
  Name,
  NameContainer,
} from "./BottomSliderStyles.js";
import AvatarImage from "../../shared/Avatar.jsx";

export function InfoHeader({ isOpen, artPiece }) {
  return (
    <InfoHeaderContainer>
      <ArtName>{artPiece.name}</ArtName>

      <NameContainer>
        <strong>{artPiece.artistName}</strong>
        <Name>{artPiece.artistRealName}</Name>
      </NameContainer>
      <AvatarImage image={artPiece.artistsImage} isOpen={isOpen} />
    </InfoHeaderContainer>
  );
}
