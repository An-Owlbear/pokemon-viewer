export const teamReducer = (state = [], action) => {
  if (action.type === 'ADD_POKEMON') {
    return [...state, action.data];
  }
  else if (action.type === 'REMOVE_POKEMON') {
    return state.filter(x => x !== action.data);
  }

  return state;
};

export const addTeamPokemon = (name) => {
  return {
    type: 'ADD_POKEMON',
    data: name
  }
};

export const removeTeamPokemon = (name) => {
  return {
    type: 'REMOVE_POKEMON',
    data: name
  }
};
