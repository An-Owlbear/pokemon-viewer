import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemon } from '../reducers/pokemonReducer';

const SearchLink = ({ name }) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector(x => x.pokemon).find(x => x.name === name);

  const [pokemonInfo, setPokemonInfo] = useState(pokemonState.info);
  const [loading, setLoading] = useState(true);

  // Loads pokemon information
  const loadInfo = async () => {
    if (pokemonInfo !== undefined) {
      setLoading(false);
      return;
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const updatedPokemon = { ...pokemonState, info: response.data }
    dispatch(updatePokemon(pokemonState, updatedPokemon))

    setPokemonInfo(response.data);
    setLoading(false);
  }

  useEffect(() => { loadInfo(); }, [])

  return (
    <Link className="block p-2 m-4 bg-gray-100 rounded transition-all hover:bg-red-500 hover:text-white" to={`/pokemon/${name}`}>
      {!loading && <img className="w-52 h-52" key={pokemonInfo.sprites.other["official-artwork"].front_default}
                        src={pokemonInfo.sprites.other["official-artwork"].front_default} alt={name} />}
      <p className="text-2xl text-center" >{name}</p>
    </Link>
  );
}

export default SearchLink;
