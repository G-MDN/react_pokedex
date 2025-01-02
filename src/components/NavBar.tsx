interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  function NavBar({setPokemonIndex, pokemonList}: NavBarProps) {
    const handlePokemonSelect = (index: number) => {
        const selectedPokemon = pokemonList[index];

        if (selectedPokemon.name === "pikachu") {
            alert("pika pikachu !!!");
          }
      
          setPokemonIndex(index);
        };
      

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
            <button
                key={pokemon.name}
                type="button"
                onClick={() => handlePokemonSelect(index)}
            >
                {pokemon.name}
            </button>
        ))}
        </nav>
        );
    }



export default NavBar;