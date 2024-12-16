import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const next = () => {
    setPokemonIndex(pokemonIndex < pokemonList.length-1 ?
        pokemonIndex +1: 
        pokemonIndex
    );
  };

  const prev = () => {
    setPokemonIndex(pokemonIndex >0 ?
      pokemonIndex -1: 
      pokemonIndex
    );
  }
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button type="button" onClick={prev}>
        Précédent
      </button>
      <button type="button" onClick={next}>
        Suivant
      </button>
    </div>
  );
}

export default App;
