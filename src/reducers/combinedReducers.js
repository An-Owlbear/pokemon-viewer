import { pokemonReducer } from './pokemonReducer';
import { combineReducers, createStore } from 'redux';
import { errorReducer } from './errorReducer';
import { teamReducer } from './teamReducer';
import { moveReducer } from './moveReducer';

const combinedReducers = combineReducers({
  pokemon: pokemonReducer,
  errors: errorReducer,
  team: teamReducer,
  moves: moveReducer
});

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
