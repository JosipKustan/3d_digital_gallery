import dynamic from "next/dynamic";
import { SEO } from "../../../components/shared/SEO";
import GalleryArt from "../../../components/GalleryArt";
import { galleryWorks } from "../../../data/siteContent";

const RastovacLiDARScene = dynamic(
  () => import("../../../scenes/RastovacLiDARScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function RastovacLidarPage() {
  const work = galleryWorks.find((w) => w.id === 1);
  return (
    <>
      <SEO
        title="Rastovac LiDAR 3D Scan | Creative Studio Kuki"
        description="Interactive 3D LiDAR scan of Rastovac, a childhood memory preserved in miniature. Explore the model in your browser."
        path="/gallery/3d/rastovac"
        image={work.src}
      />
      <GalleryArt galleryID={work}>
        <RastovacLiDARScene />
      </GalleryArt>
    </>
  );
}
