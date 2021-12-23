import React from 'react';

import './App.scss';

import HeaderComponent from './components/Header/HeaderComponent';
import CanvasComponent from './components/Canvas/CanvasComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <CanvasComponent />
    </div>
  );
}

export default App;
