import dynamic from "next/dynamic";
import Head from "next/head";
import GalleryArt from "../components/GalleryArt";
import { galleryWorks } from "../data/siteContent";

const RastovacPhotogrammetryScene = dynamic(
  () => import("../scenes/RastovacPhotogrammetryScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function PhotogrammetryPage() {
  return (
    <>
      <Head>
        <title>Rastovac Photogrammetry — 3D Scan | Creative Studio Kuki</title>
        <link rel="canonical" href="https://creativestudiokuki.com/photogrammetry" />
        <meta
          name="description"
          content="Interactive 3D photogrammetry scan of Rastovac — explore the model with realistic HDRI lighting in your browser."
        />
      </Head>
      <GalleryArt galleryID={galleryWorks[1]}>
        <RastovacPhotogrammetryScene />
      </GalleryArt>
    </>
  );
}
