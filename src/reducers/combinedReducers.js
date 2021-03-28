import { pokemonReducer } from './pokemonReducer';
import { combineReducers, createStore } from 'redux';
import { errorReducer } from './errorReducer';
import { teamReducer } from './teamReducer';

const combinedReducers = combineReducers({
  pokemon: pokemonReducer,
  errors: errorReducer,
  team: teamReducer
});

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
