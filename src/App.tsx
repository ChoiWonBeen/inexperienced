import React from 'react';

import './styles/global.scss';

import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
