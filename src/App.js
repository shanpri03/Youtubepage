import React from 'react';
import './App.css';
import Header from "./Components/Header/Header.js";
import Sidedheader from './Components/Sideheader/Sideheader';
import Subheader from './Components/Subheader.js/Subheader';

function App() {
  return (
    <div>
      <Header></Header>
      <Subheader></Subheader>
      <Sidedheader></Sidedheader>
    </div>
  );
}

export default App;