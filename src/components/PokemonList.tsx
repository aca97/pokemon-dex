import { useState, useEffect } from "react";
import { getAllTypes } from "../api/api";
import { typeColors } from "../models/colors.model";

const PokemonList = ({ pokemons, onPokemonClick }: any) => {
  const [pokemonTypes, setPokemonTypes] = useState<string[][]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const types = await Promise.all(
        pokemons.map(async (pokemon: any) => await getAllTypes(pokemon.name))
      );
      setPokemonTypes(types);
    };

    fetchTypes();
  }, [pokemons]);

  const getBackgroundColor = (types: string[]) => {
    return typeColors[types[0]];
  };

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon: any, index: number) => {
        const backgroundColor = getBackgroundColor(pokemonTypes[index] || []);
        return (
          <div
            key={index}
            className="pokemon-card"
            onClick={() => onPokemonClick(index + 1)}
            style={{ background: backgroundColor }}
          >
            <div className="pokemon-details">
              <h2 className="pokemon-name">
                {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
              </h2>{" "}
              <div className="pokemon-types">
                {pokemonTypes[index]?.map((type: string, index: number) => (
                  <div key={index} className="pokemon-type">
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="pokemon-image-container">
              <img
                id="pokemon-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${
                  index + 1
                }.png`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
