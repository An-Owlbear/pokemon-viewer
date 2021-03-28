import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamPokemon from '../components/teamPokemon';

const TeamBuilder = ({ className }) => {
  const dispatch = useDispatch();
  const team = useSelector(x => x.team);

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-center">Team builder</h1>
      {team.map(x => <TeamPokemon key={x} name={x} />)}
    </div>
  )
};

export default TeamBuilder;
