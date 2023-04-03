import { useEffect, useState } from "react";
import { getAllPokemons, getSelectedPokemonData, getEvolutionChainForSelectedPokemon } from "./api/api";
import { Pokemon } from "./models/Pokemon.model";
import PokemonList from "./components/PokemonList";
import SelectedPokemon from "./components/SelectedPokemon";
import pokeballicon from './assets/pokeball-icon.png'
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [evolutionData, setEvolutionData] = useState<any[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]);

  const handlePokemonClick = async (id: number) => {
    const result = await getSelectedPokemonData(id);
    const data = await getEvolutionChainForSelectedPokemon(id);
    setSelectedPokemon(result);
    setEvolutionData(data);
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
    <img src={pokeballicon} alt="pokemon"  className="background-image" />
      <div className="pokemon-container">
        <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
        <SelectedPokemon selectedPokemon={selectedPokemon}></SelectedPokemon>
      </div>
    </>
  );
}

export default App;
