import axios from "axios";
import { Pokemon } from "../models/Pokemon.model";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemons = async (): Promise<Pokemon[]> => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/?limit=898`);
  return response.data.results;
};

export const getSelectedPokemonData = async (id: number): Promise<Pokemon> => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
  return response.data;
};

// export const getEvolutionChainForSelectedPokemon = async (
//   id: number
// ): Promise<EvolutionChain> => {
//   const response = await axios.get(`${API_BASE_URL}/evolution-chain/${id}`);
//   return response.data;
// };
