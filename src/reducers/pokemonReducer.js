export const pokemonReducer = (state = [], action) => {
  if (action.type === 'SET_LIST') {
    return action.data
  }
  else if (action.type === 'SET_POKEMON_INFO') {
    return state;
  }

  return state;
}

export const setPokemon = (pokemon) => {
  return {
    type: 'SET_LIST',
    data: pokemon
  }
}
