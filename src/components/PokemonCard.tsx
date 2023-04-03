import { useState } from "react";
import { Pokemon } from "../models/Pokemon.model";
import { typeColors } from "../models/colors.model";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
 

  const [activeCard, setActiveCard] = useState("about");
  const backgroundColor = typeColors[pokemon.types[0].type.name] || "#fff";

  return (
    <div style={{ textAlign: "center", backgroundColor }}>
      <div>{pokemon.name}</div>
      <p>#{pokemon.id}</p>
      <div>
        {pokemon.types.map((type: any, index: number) => (
          <span key={index}>{type.type.name}</span>
        ))}
      </div>
      <img
        style={{ display: "block", margin: "0 auto" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
      >
        <button
          onClick={() => setActiveCard("about")}
          style={{ marginRight: "1rem" }}
        >
          About
        </button>
        <button
          onClick={() => setActiveCard("baseStats")}
          style={{ marginRight: "1rem" }}
        >
          Base Stats
        </button>
        <button onClick={() => setActiveCard("evolution")}>Evolution</button>
      </div>
      {activeCard === "about" && (
        <div>
          <h2>About</h2>
          <div>Height: {pokemon.height}</div>
          <div>Weight: {pokemon.weight}</div>
          <div>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((ability: any, index: number) => (
              <span key={index}>{ability.ability.name}</span>
            ))}
          </div>
        </div>
      )}
      {activeCard === "baseStats" && (
        <div>
          <h2>Base Stats</h2>
          {pokemon.stats.map((stat: any, index: number) => (
            <div key={index}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      )}
      {activeCard === "evolution" && (
        <div>
          <h2>Evolution</h2>
          {/* Here you can add the code for the evolution card */}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
