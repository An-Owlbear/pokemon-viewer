import React from 'react';
import { useDispatch } from 'react-redux';
import { removeError } from '../reducers/errorReducer';

const ErrorPopup = ({ error, className }) => {
  const dispatch = useDispatch();

  return (
    <div className={`bg-red-600 p-4 mx-auto my-4 rounded shadow-xl flex flex-row items-center justify-around space-x-24 w-max ${className}`}>
      <div className="flex flex-col p-2">
        <h1 className="text-white text-xl font-bold">An error occurred</h1>
        <p className="text-white text-lg font-semibold">{error.message}</p>
      </div>
      <button className="p-2 text-white font-bold text-2xl cursor-pointer select-none"
              onClick={() => dispatch(removeError(error.id))}>OK</button>
    </div>
  )
};

export default ErrorPopup;
