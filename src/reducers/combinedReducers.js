import { pokemonReducer } from './pokemonReducer';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  pokemon: pokemonReducer
});

export default combinedReducers;
