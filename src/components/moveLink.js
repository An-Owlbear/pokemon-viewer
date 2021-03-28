import React from 'react';
import { Link } from 'react-router-dom';

const MoveLink = ({ move }) => {
  return (
    <Link className="block flex flex-row justify-between my-4 p-4 bg-gray-100 rounded transition-colors select-none shadow-md hover:bg-red-500 hover:text-white"
          to={`/move/${move.name}`}>
      <p>{move.name}</p>
      {move.type === 'levelup' && <p>Leaned at: Level {move.levelLearned}</p>}
    </Link>
  )
};

export default MoveLink;
