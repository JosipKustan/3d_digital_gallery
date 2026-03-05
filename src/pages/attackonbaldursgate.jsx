import dynamic from "next/dynamic";
import Head from "next/head";
import GalleryArt from "../components/GalleryArt";
import { galleryWorks } from "../art/galleryWorks";

const AttackOnBaldursGateScene = dynamic(
  () => import("../scenes/AttackOnBaldursGateScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function AttackOnBaldursGatePage() {
  return (
    <>
      <Head>
        <title>Attack on Baldur's Gate — 3D Miniature | Creative Studio Kuki</title>
        <meta
          name="description"
          content="Interactive 3D miniature of the Attack on Baldur's Gate scene. Explore the handcrafted model in your browser."
        />
      </Head>
      <GalleryArt galleryID={galleryWorks.find((w) => w.id === 5)}>
        <AttackOnBaldursGateScene />
      </GalleryArt>
    </>
  );
}
