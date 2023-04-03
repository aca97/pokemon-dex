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
              <h2>{pokemon.name}</h2>
              <div>{pokemonTypes[index]?.join(", ")}</div>
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
