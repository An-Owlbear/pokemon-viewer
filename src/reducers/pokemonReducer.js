import { updateListItem } from '../tools';

export const pokemonReducer = (state = [], action) => {
  if (action.type === 'SET_LIST') {
    return action.data
  }
  else if (action.type === 'UPDATE_POKEMON') {
    return updateListItem(state, action.data.item, action.data.updated)
  }

  return state;
};

export const setPokemon = (pokemon) => {
  return {
    type: 'SET_LIST',
    data: pokemon
  }
};

export const updatePokemon = (item, updated) => {
  return {
    type: 'UPDATE_POKEMON',
    data: {
      item: item,
      updated: updated
    }
  }
};
