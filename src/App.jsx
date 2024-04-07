import React from 'react';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { GlobalWrapper } from './components/shared/containers/GlobalWrapper';
import NavMenu from './components/app/nav/NavMenu.jsx';
import RastovacLiDARScene from './pages/scenes/RastovacLiDARScene.jsx';
import RastovacPhotogrammetryScene from './pages/scenes/RastovacPhotogrammetryScene.jsx';
import DeimosAxeScene from './pages/scenes/DeimosAxeScene.jsx';
import Bg3Crash from './pages/scenes/Bg3Crash.jsx'

function App() {
  return (
    <GlobalWrapper>

      <HashRouter>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<RastovacLiDARScene />} />
          <Route exact path="/lidar" element={<RastovacLiDARScene />} />
          <Route exact path="/bg3crash" element={<Bg3Crash />} />
          <Route exact path="/photogrammetry" element={<RastovacPhotogrammetryScene />} />
          <Route exact path="/deimos-axe" element={<DeimosAxeScene />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </GlobalWrapper>
  );
}

export default App;
