import { useEffect, useState } from "react";
import { getAllPokemons, getSelectedPokemonData } from "./api/api";
import { Pokemon } from "./models/Pokemon.model";

import "./App.css";
function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

  const handlePokemonClick = async (id: number) => {
    const result = await getSelectedPokemonData(id);
    setSelectedPokemon(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPokemons();
      setPokemons(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pokemon-container">
        <div className="pokemon-list">
          {pokemons.map((pokemon: any, index: number) => (
            <div
              key={index}
              className="pokemon-card"
              onClick={() => handlePokemonClick(index + 1)}
            >
              <div className="pokemon-image-container">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${
                    index + 1
                  }.png`}
                />
              </div>
              <h2>{pokemon.name}</h2>
            </div>
          ))}
        </div>
        <div className="selected-pokemon">
          {selectedPokemon && (
            <>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${selectedPokemon.id}.gif`}
              />
              <h1>{selectedPokemon.name}</h1>
              <div>Height: {selectedPokemon.height}</div>
              <div>Weight: {selectedPokemon.weight}</div>
              <div>
                {selectedPokemon.types.map((type: any, index: number) => (
                  <span key={index}>{type.type.name}</span>
                ))}
              </div>
              <div>
                <strong>Abilities:</strong>{" "}
                {selectedPokemon.abilities.map(
                  (ability: any, index: number) => (
                    <span key={index}>{ability.ability.name}</span>
                  )
                )}
              </div>
              <div>
                <strong>Stats:</strong>
                {selectedPokemon.stats.map((stat: any, index: number) => (
                  <div key={index}>
                    <span>{stat.stat.name}: </span>
                    <span>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
