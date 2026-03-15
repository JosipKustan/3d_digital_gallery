import dynamic from "next/dynamic";
import Head from "next/head";
import GalleryArt from "../components/GalleryArt";
import { galleryWorks } from "../data/siteContent";

const RastovacLiDARScene = dynamic(
  () => import("../scenes/RastovacLiDARScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function LidarPage() {
  return (
    <>
      <Head>
        <title>Rastovac LiDAR — 3D Scan | Creative Studio Kuki</title>
        <link rel="canonical" href="https://creativestudiokuki.com/lidar" />
        <meta
          name="description"
          content="Interactive 3D LiDAR scan of Rastovac — a childhood memory preserved in miniature. Explore the model in your browser."
        />
      </Head>
      <GalleryArt galleryID={galleryWorks.find((w) => w.id === 1)}>
        <RastovacLiDARScene />
      </GalleryArt>
    </>
  );
}
