import axios from 'axios';
import store from '../reducers/combinedReducers';
import { addError } from '../reducers/errorReducer';

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

const errorHandler = (error) => {
  store.dispatch(addError(error.message));
  return Promise.reject(error)
};

client.interceptors.response.use(
  response => response,
  error => errorHandler(error)
);

// Requests the pokemon list from the API
export const getApiPokemonList = async () => {
  const response = await client.get('/pokemon?limit=-1');
  return response.data.results;
};

// Request pokemon info from the API
export const getApiPokemonInfo = async (name) => {
  const response = await client.get(`/pokemon/${name}`);
  return response.data;
};
