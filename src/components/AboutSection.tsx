import { Pokemon } from "../models/Pokemon.model";

const AboutSection = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <div className="pok">Height {pokemon.height}</div>
      <div className="pok">Weight {pokemon.weight}</div>
      <div className="pok">
        Abilities
        {pokemon.abilities.map((ability: any, index: number) => (
          <span key={index}>
            {ability.ability.name}
            {index !== pokemon.abilities.length - 1 && ", "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
