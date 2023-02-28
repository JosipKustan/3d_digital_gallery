import React from 'react';
import { GlobalWrapper } from './components/shared/containers/GlobalWrapper';
import Gallery from './pages/Gallery';
import NavMenu from './components/app/nav/NavMenu.jsx';

function App() {
  return (
    <GlobalWrapper>
      <NavMenu />
      <Gallery />
    </GlobalWrapper>
  );
}

export default App;
