import { Description } from "../../shared/Description";
import { ModelDescriptionWrapper } from "./ModelDescriptionStyles";

export function ModelDescription({ galleryWorksID }) {
  return (
    <ModelDescriptionWrapper>
      <Description galleryWorksID={galleryWorksID} />
    </ModelDescriptionWrapper>
  );
}
