import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalWrapper } from './components/shared/containers/GlobalWrapper';
import Gallery from './pages/Gallery';
import NavMenu from './components/app/nav/NavMenu.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <GlobalWrapper>

      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </GlobalWrapper>
  );
}

export default App;
