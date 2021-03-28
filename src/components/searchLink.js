import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonInfo } from '../services/pokemonStoreService';


const SearchLink = ({ name }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  // Loads pokemon information
  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await getPokemonInfo(name);
        setPokemon(response)
      }
      catch (e) {
        console.log(e);
      }
    };
    loadInfo();
  }, [name]);

  return (
    <Link className="block p-2 m-4 bg-gray-100 rounded transition-colors select-none shadow-md hover:bg-red-500 hover:text-white" to={`/pokemon/${name}`}>
      {loading && <div className="w-52 h-52 bg-gray-300 animate-pulse" />}
      <img className={`w-52 h-52 mx-auto ${loading ? 'hidden' : ''}`} src={pokemon.info?.sprites.other["official-artwork"].front_default ?? pokemon.info?.sprites.front_default}
           alt={name} onLoad={() => setLoading(false)} />
      <p className="text-2xl text-center" >{name}</p>
    </Link>
  );
};

export default SearchLink;
