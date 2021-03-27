import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchLink = ({ name }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const loadInfo = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response.data);
    setPokemonInfo(response.data);
    setLoading(false);
  }

  useEffect(() => { loadInfo(); }, [])

  return (
    <Link className="block p-2 m-4 bg-gray-100 rounded transition-all hover:bg-red-500 hover:text-white" to={`/pokemon/${name}`}>
      {!loading && <img className="w-52 h-52" src={pokemonInfo.sprites.other["official-artwork"].front_default} alt={name} />}
      <p className="text-2xl text-center" >{name}</p>
    </Link>
  );
}

export default SearchLink;
