import React from 'react';
import Pokedex from './components/Pokedex';
import './App.css';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pokedex</h1>
        {/* O título já tá aqui, mas o componente mesmo só depois :) */}
        {/* Acho tão lindo sqn o fato de ter que englobar o comment nos bigodes lol */}
        <Pokedex pokemons={pokemons} />
      </>
    );
  }
}

export default App;
