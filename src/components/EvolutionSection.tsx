import { useState, useEffect } from "react";
import { Pokemon } from "../models/Pokemon.model";
import axios from "axios";

const EvolutionSection = ({ id }: { id: number }) => {
  const [evolutionChain, setEvolutionChain] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemonEvolutionChain = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        const evolutionChainUrl = data.evolution_chain.url;
        const { data: evolutionChainData } = await axios.get(evolutionChainUrl);
        const chain = evolutionChainData.chain;
        const evolutionChain: any = [];

        const processChain = (chain: any, level = 0) => {
          const { species, evolves_to } = chain;
          const pokemon = {
            id: parseInt(species.url.split("/").slice(-2, -1)),
            name: species.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(
              species.url.split("/").slice(-2, -1)
            )}.png`,
            min_level: null,
            level: level,
          };
          if (evolves_to.length > 0) {
            pokemon.min_level = evolves_to[0].evolution_details[0].min_level;
          }
          evolutionChain.push(pokemon);
          evolves_to.forEach((evolution: any) =>
            processChain(evolution, level + 1)
          );
        };

        processChain(chain);
        setEvolutionChain(evolutionChain);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemonEvolutionChain();
  }, [id]);

  return (
    <div className="evolution-chain">
      {evolutionChain.map((evolution, index) => (
        <div key={index} className="evolution-stage">
          <img src={evolution.image} alt={evolution.name} />
          {evolution.min_level !== null && <div> {evolution.min_level}</div>}
        </div>
      ))}
    </div>
  );
};

export default EvolutionSection;
