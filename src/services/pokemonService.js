import axios from 'axios';
 
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';
 
export const fetchPokemon = async () => {

  const response = await axios.get(API_URL);

  return response.data.results;

};

 