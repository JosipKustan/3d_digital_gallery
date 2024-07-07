import { Gallery, Item, useGallery } from "react-photoswipe-gallery";
import {
  CameraFrontDrop,
  GallerySliderWrapper,
  Thumbnail,
} from "./GallerySliderStyles";
import "photoswipe/style.css";

export function GallerySlider({ images }) {
  return (
    <Gallery>
      <GallerySliderWrapper>
        <CameraFrontDrop>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M19.5 26a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.948 15.284A6.284 6.284 0 0 1 21.232 9h5.536a6.284 6.284 0 0 1 6.284 6.284.06.06 0 0 0 .052.058l4.46.36a4.455 4.455 0 0 1 4.014 3.61 44.138 44.138 0 0 1 .208 15.226l-.194 1.208a5.01 5.01 0 0 1-4.54 4.198l-3.886.314c-6.1.495-12.231.495-18.332 0l-3.886-.314a5.01 5.01 0 0 1-4.54-4.2l-.194-1.206c-.814-5.05-.742-10.2.208-15.226a4.452 4.452 0 0 1 4.014-3.608l4.46-.362a.056.056 0 0 0 .052-.058ZM24 18.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
              clipRule="evenodd"
            />
          </svg>
        </CameraFrontDrop>
        {images.map((path, index) => (
          <Item
            key={index}
            original={path}
            thumbnail={path}
            width={6053}
            height={5624}
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
        ))}
      </GallerySliderWrapper>
    </Gallery>
  );
}
