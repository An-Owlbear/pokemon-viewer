import store from '../reducers/combinedReducers';
import { getApiMove, getApiPokemonInfo, getApiPokemonList } from './pokemonApiService';
import { setPokemonAction, updatePokemonAction } from '../reducers/pokemonReducer';
import { setMoveAction } from '../reducers/moveReducer';

// Gets pokemon list from store if available, otherwise queries API
export const getPokemon = async () => {
  // Gets pokemon from store, returning if already available
  const state = store.getState();
  if (state.pokemon.length !== 0) return state.pokemon;

  // Retrieves pokemon from API, and adds to store
  const response = await getApiPokemonList();
  store.dispatch(setPokemonAction(response));
  return response;
};

// Gets pokemon info, ensuring the list of pokemon is available
export const getPokemonInfo = async (name) => {
  // Gets pokemon from store, and returns if info is set
  const pokemon = await getPokemon();
  const targetPokemon = pokemon.find(x => x.name === name);
  if (targetPokemon.info !== undefined) return targetPokemon;

  // Retrieves pokemon info and updates store
  const response = await getApiPokemonInfo(name);
  const updatedPokemon = { ...targetPokemon, info: response };
  store.dispatch(updatePokemonAction(targetPokemon, updatedPokemon));
  return updatedPokemon;
};

// Gets move info from store or API
export const getMoveInfo = async (name) => {
  // Gets move from store, and returns it if already set
  const state = store.getState();
  const targetMove = state.moves.find(x => x.name === name);
  if (targetMove !== undefined) return targetMove;

  // Retrieves move and updates store
  const response = await getApiMove(name);
  store.dispatch(setMoveAction(response));
  return response;
};
