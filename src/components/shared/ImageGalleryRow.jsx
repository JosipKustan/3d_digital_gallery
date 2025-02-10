import { Gallery, Item } from "react-photoswipe-gallery";
import { GalleryPageWrapper, H2Header, H4Header } from "./StaticStyles";
import {
  GalleryWorkWrapper,
  Thumbnail,
} from "../app/bottomSlider/GallerySliderStyles";
import useImageDimensions from "./hooks/getImageDimensions";
import { galleryWorks } from "../../art/galleryWorks";

function ImageGalleryRow({ number }) {
  const images1 = galleryWorks[number];
  return (
    <GalleryWorkWrapper>
      <H4Header style={{ paddingLeft: "16px" }}>{images1.name}</H4Header>
      <GalleryPageWrapper>
        <Gallery>
          {images1.galleryImages.map((path, index) => {
            const { width, height } = useImageDimensions(path);
            return (
              <Item
                key={index}
                original={path}
                thumbnail={path}
                width={width}
                height={height}
                caption={`Gallery Image ${index + 1}`}
              >
                {({ ref, open }) => (
                  <Thumbnail
                    ref={ref}
                    onClick={open}
                    className="image-item"
                    src={path}
                    alt={`Gallery Image ${index + 1}`}
                  />
                )}
              </Item>
            );
          })}
        </Gallery>
      </GalleryPageWrapper>
    </GalleryWorkWrapper>
  );
}
export default ImageGalleryRow;
