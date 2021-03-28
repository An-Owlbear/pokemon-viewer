import React from 'react';
import SearchLink from './searchLink';
import { useDispatch } from 'react-redux';
import { removeTeamPokemon } from '../reducers/teamReducer';

const TeamPokemon = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-2">
      <SearchLink name={name} />
      <button className="p-4 my-4 shadow-md text-xl font-extrabold bg-gray-100 rounded transition-colors hover:bg-red-500 hover:text-white"
              onClick={() => dispatch(removeTeamPokemon(name))}>X</button>
    </div>
  )
};

export default TeamPokemon;
