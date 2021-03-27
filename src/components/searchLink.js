import React from 'react';
import { Link } from 'react-router-dom';

const SearchLink = ({ name, id }) => {
  return (
    <Link className="block p-2" to={`/pokemon/${id}`}>
      <p>#{id} - {name}</p>
    </Link>
  );
}

export default SearchLink;
