import React from 'react';

import './App.css';

import data from '../data/data.pokedex';

import Pokedex from './Pokedex/Pokedex.component';

function App() {
  return (
    <div className="App">
      <h1 className="head p-4">Pokedex</h1>
      <div className="container">
        <div className="row">
          <Pokedex data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
