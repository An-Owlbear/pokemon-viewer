import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamPokemon from '../components/teamPokemon';
import TeamPlaceholder from '../components/teamPlaceholder';

const TeamBuilder = ({ className }) => {
  const dispatch = useDispatch();
  const team = useSelector(x => x.team);

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-center">Team builder</h1>
      {team.map(x => <TeamPokemon key={x} name={x} />)}
      {[...Array(6 - team.length).keys()].map(_ => <TeamPlaceholder />)}
    </div>
  )
};

export default TeamBuilder;
