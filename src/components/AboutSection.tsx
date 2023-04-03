import { Pokemon } from "../models/Pokemon.model";

const AboutSection = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>
        <strong>Abilities:</strong>{" "}
        {pokemon.abilities.map((ability: any, index: number) => (
          <span key={index}>{ability.ability.name}</span>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
