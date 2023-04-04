import React, { useState } from "react";
import { Pokemon } from "../models/Pokemon.model";
import { typeColors } from "../models/colors.model";
import CardButtons from "./CardButton";
import About from "./AboutSection";
import BaseStatsSection from "./BaseStatsSection";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const [activeCard, setActiveCard] = useState("about");
  const backgroundColor = typeColors[pokemon.types[0].type.name] || "#fff";

  return (
    <div className="pokemon-info">
      <div
        className="pokemon-info-top"
        style={{ textAlign: "center", backgroundColor }}
      >
        <div className="name">
          {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
          <div>#{pokemon.id.toString().padStart(3, "0")}</div>
        </div>
        <div className="info-types">
          {pokemon.types.map((type: any, index: number) => (
            <div className="pokemon-type" key={index}>
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="img">
          <img
            style={{ display: "block", margin: "0 auto" }}
            id="gif"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
          />
        </div>
      </div>

      <CardButtons activeCard={activeCard} setActiveCard={setActiveCard} />
      {activeCard === "about" && <About pokemon={pokemon} />}
      {activeCard === "baseStats" && <BaseStatsSection stats={pokemon.stats} />}
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
