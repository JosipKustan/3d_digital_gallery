import { NavItem, NavList } from "./NavMenuStyles.js";
import ThumbnailPicker from "../thumbnailPicker/ThumbnailPicker.jsx";
import { galleryWorks } from "../../../art/galleryWorks.js";

function GalleryList({ big }) {
  return (
    <NavList size={big}>
      {galleryWorks.map((image) => (
        <NavItem
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.7 }}
          key={image.id}
          size={big}
        >
          <ThumbnailPicker image={image} />
        </NavItem>
      ))}
    </NavList>
  );
}
export default GalleryList;
