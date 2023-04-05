import { useEffect, useState } from "react";
import { getAllPokemons, getSelectedPokemonData } from "./api/api";
import { Pokemon } from "./models/Pokemon.model";
import PokemonList from "./components/PokemonList";
import SelectedPokemon from "./components/SelectedPokemon";
import pokeballicon from "./assets/pokeball-icon.png";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handlePokemonClick = async (id: number) => {
    const result = await getSelectedPokemonData(id);
    setSelectedPokemon(result);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPokemons();
      setPokemons(result);
      setFilteredPokemons(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [pokemons, searchTerm]);

  return (
    <>
      <img src={pokeballicon} alt="pokemon" className="background-image" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a Pokemon"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="pokemon-container">
        <PokemonList
          pokemons={filteredPokemons}
          onPokemonClick={handlePokemonClick}
        />
        <SelectedPokemon selectedPokemon={selectedPokemon}></SelectedPokemon>
      </div>
    </>
  );
}

export default App;
