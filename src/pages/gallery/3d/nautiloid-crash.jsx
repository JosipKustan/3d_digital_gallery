import dynamic from "next/dynamic";
import { SEO } from "../../../components/shared/SEO";
import GalleryArt from "../../../components/GalleryArt";
import { galleryWorks } from "../../../data/siteContent";

const Bg3CrashScene = dynamic(
  () => import("../../../scenes/Bg3CrashScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function NautiloidCrashPage() {
  const work = galleryWorks.find((w) => w.id === 4);
  return (
    <>
      <SEO
        title="Nautiloid Crash from Baldur's Gate 3 | Creative Studio Kuki"
        description="Interactive 3D miniature of the Nautiloid crash scene from Baldur's Gate 3. Explore the model in your browser."
        path="/gallery/3d/nautiloid-crash"
        image={work.src}
      />
      <GalleryArt galleryID={work}>
        <Bg3CrashScene />
      </GalleryArt>
    </>
  );
}
