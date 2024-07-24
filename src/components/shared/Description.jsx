import { galleryWorks } from "../../art/galleryWorks";
import { TextWrapper } from "../app/cards/CardStyles";
import { H5Header, H6Header } from "./StaticStyles";

export function Description({ galleryWorksID }) {
  return (
    <>
      <H5Header>{galleryWorks[galleryWorksID].name}</H5Header>
      <p>{galleryWorks[galleryWorksID].shortDescription}</p>
      <TextWrapper>
        <H6Header>How is it made?</H6Header>
        <p>{galleryWorks[galleryWorksID].making}</p>
      </TextWrapper>
    </>
  );
}
