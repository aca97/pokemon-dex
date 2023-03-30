import axios from "axios";

export const getAllPokemons = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=898"
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSelectedPokemonData = async (id: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
