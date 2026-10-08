import dynamic from "next/dynamic";
import { SEO } from "../../../components/shared/SEO";
import GalleryArt from "../../../components/GalleryArt";
import { galleryWorks } from "../../../data/siteContent";

const AttackOnBaldursGateScene = dynamic(
  () => import("../../../scenes/AttackOnBaldursGateScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function AttackOnBaldursGatePage() {
  const work = galleryWorks.find((w) => w.id === 5);
  return (
    <>
      <SEO
        title="Attack on Baldur's Gate — 3D Miniature | Creative Studio Kuki"
        description="Interactive 3D miniature of the Attack on Baldur's Gate scene. Explore the handcrafted model in your browser."
        path="/gallery/3d/attack-on-baldurs-gate"
        image={work.src}
      />
      <GalleryArt galleryID={work}>
        <AttackOnBaldursGateScene />
      </GalleryArt>
    </>
  );
}
