/* eslint-disable quotes */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalWrapper } from "./components/shared/containers/GlobalWrapper";
import RastovacLiDARScene from "./pages/scenes/RastovacLiDARScene.jsx";
import RastovacPhotogrammetryScene from "./pages/scenes/RastovacPhotogrammetryScene.jsx";
import DeimosAxeScene from "./pages/scenes/DeimosAxeScene.jsx";
import Bg3CrashScene from "./pages/scenes/Bg3CrashScene.jsx";
import AttackOnBaldursGateScene from "./pages/scenes/AttackOnBaldursGateScene.jsx";
import Home from "./pages/Home.jsx";
import GalleryArt from "./pages/GalleryArt.jsx";
import { galleryWorks } from "./art/galleryWorks.js";
import ImageGalleryPage from "./pages/ImageGalleryPage.jsx";
import NavMenu from "./components/app/nav/NavMenu.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PriceFactors from "./pages/PriceFactors.jsx";

function App() {
  return (
    <GlobalWrapper>
      <BrowserRouter>
        <NavMenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<ImageGalleryPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/#About" />
          <Route
            exact
            path="/lidar"
            element={
              <GalleryArt galleryID={galleryWorks[0]}>
                <RastovacLiDARScene />
              </GalleryArt>
            }
          />
          <Route
            exact
            path="/bg3crash"
            element={
              <GalleryArt galleryID={galleryWorks[2]}>
                <Bg3CrashScene />
              </GalleryArt>
            }
          />
          <Route
            exact
            path="/attackonbaldursgate"
            element={
              <GalleryArt galleryID={galleryWorks[1]}>
                <AttackOnBaldursGateScene />
              </GalleryArt>
            }
          />
          <Route
            exact
            path="/photogrammetry"
            element={
              <GalleryArt galleryID={galleryWorks[1]}>
                <RastovacPhotogrammetryScene />
              </GalleryArt>
            }
          />
          <Route exact path="/deimos-axe" element={<DeimosAxeScene />} />
          <Route exact path="/price-factors" element={<PriceFactors />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </GlobalWrapper>
  );
}

export default App;
