import React from 'react';

import './styles/global.scss';

import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}

export default App;
