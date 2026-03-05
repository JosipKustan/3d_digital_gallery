import dynamic from "next/dynamic";
import Head from "next/head";
import GalleryArt from "../components/GalleryArt";
import { galleryWorks } from "../art/galleryWorks";

const Bg3CrashScene = dynamic(
  () => import("../scenes/Bg3CrashScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", background: "#131122" }} />
    ),
  }
);

export default function Bg3CrashPage() {
  return (
    <>
      <Head>
        <title>Nautaloid Crash — Baldur's Gate 3 | Creative Studio Kuki</title>
        <meta
          name="description"
          content="Interactive 3D miniature of the Nautaloid crash scene from Baldur's Gate 3. Explore the model in your browser."
        />
      </Head>
      <GalleryArt galleryID={galleryWorks[2]}>
        <Bg3CrashScene />
      </GalleryArt>
    </>
  );
}
