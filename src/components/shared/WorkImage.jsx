import Image from "next/image";
import getImageDimensions from "./hooks/useImageDimensions";

/**
 * WorkImage: next/image for gallery photos. Width and height are read from the
 * "-WIDTHxHEIGHT" part of the filename, so callers only pass src, alt, sizes.
 * Next.js (Netlify Image CDN in production) then serves a resized WebP that
 * fits the slot instead of the full-size original.
 *
 * Style it with styled(WorkImage); CSS width/height/object-fit still apply.
 * @param {string}  src       Image path with dimensions in the name.
 * @param {string}  alt       Alt text.
 * @param {string}  sizes     Rendered width per breakpoint, e.g. "(min-width: 1080px) 33vw, 100vw".
 * @param {number}  [width]   Only for files without dimensions in the name.
 * @param {number}  [height]  Only for files without dimensions in the name.
 * @param {boolean} [fill]    Fill the positioned parent (hero backgrounds).
 */
export default function WorkImage({ src, alt, width, height, fill, ...props }) {
  // fill mode sizes the image to its positioned parent, so no width/height
  if (fill) return <Image src={src} alt={alt} fill {...props} />;

  const dims = getImageDimensions(src);
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? dims.width}
      height={height ?? dims.height}
      {...props}
    />
  );
}
