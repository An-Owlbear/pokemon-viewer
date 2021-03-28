import React from 'react';
import { Link } from 'react-router-dom';

const MoveLink = ({ move }) => {
  return (
    <Link className="block my-4 p-2 bg-gray-100 rounded transition-colors select-none shadow-md hover:bg-red-500 hover:text-white"
          to={`/move/${move.name}`}>{move.name}</Link>
  )
};

export default MoveLink;
