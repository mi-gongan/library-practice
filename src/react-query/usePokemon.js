import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


export const pokemonApi = () => axios.get(`https://pokeapi.co/api/v2/pokemon/`, { params: { limit: 151 }});

const usePokemon = () =>
  useQuery(['pokemon'],()=>pokemonApi());

export default usePokemon;