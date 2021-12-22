import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import HomeComponent from './components/Home/HomeComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
