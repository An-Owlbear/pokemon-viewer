export const moveReducer = (state = [], action) => {
  if (action.type === 'ADD_MOVE') {
    return [...state, action.data];
  }

  return state;
};

export const setMoveAction = (move) => {
  return {
    type: 'ADD_MOVE',
    data: move
  };
};
