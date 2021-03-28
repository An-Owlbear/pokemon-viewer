import { pokemonReducer } from './pokemonReducer';
import { combineReducers, createStore } from 'redux';
import { errorReducer } from './errorReducer';

const combinedReducers = combineReducers({
  pokemon: pokemonReducer,
  errors: errorReducer
});

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
