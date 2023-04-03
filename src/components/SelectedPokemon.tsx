import { Pokemon } from "../models/Pokemon.model";
import PokemonCard from "./PokemonCard";

const SelectedPokemon = ({
  selectedPokemon,
}: {
  selectedPokemon: Pokemon | any;
}) => {
  return (
    <div className="selected-pokemon">
      {selectedPokemon ? (
        <PokemonCard pokemon={selectedPokemon}></PokemonCard>
      ) : (
        <p>No Pokemon selected</p>
      )}
    </div>
  );
};

export default SelectedPokemon;
