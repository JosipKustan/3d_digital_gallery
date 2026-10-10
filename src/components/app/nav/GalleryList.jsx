import { NavItem, NavList } from "./NavMenuStyles.js";
import ThumbnailPicker from "../thumbnailPicker/ThumbnailPicker.jsx";
import { galleryWorks } from "../../../data/siteContent";

function GalleryList({ big, excludeId }) {
  // Only works with a 3D scene: each thumbnail links to work.link
  const items = galleryWorks.filter((w) => w.link && w.id !== excludeId);
  return (
    <NavList size={big}>
      {items.map((image) => (
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
