import { v4 as uuid } from 'uuid';

export const errorReducer = (state = [], action) => {
  if (action.type === 'ADD_ERROR') {
    return [...state, action.data];
  }
  else if (action.type === 'REMOVE_ERROR') {
    return state.filter(x => x.id !== action.data);
  }

  return state;
};

export const addError = (message) => {
  return {
    type: 'ADD_ERROR',
    data: {
      id: uuid(),
      message: message
    }
  }
};

export const removeError = (id) => {
  return {
    type: 'REMOVE_ERROR',
    data: id
  }
};
