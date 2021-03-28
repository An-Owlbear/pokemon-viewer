import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemonAction } from '../reducers/pokemonReducer';
import { getApiPokemonInfo } from '../services/pokemonService';


const SearchLink = ({ name }) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector(x => x.pokemon).find(x => x.name === name);

  const [pokemon, setPokemon] = useState(pokemonState);
  const [loading, setLoading] = useState(true);

  // Loads pokemon information
  useEffect(() => {
    const loadInfo = async () => {
      // Returns if pokemon information is already stored
      if (pokemonState.info !== undefined) return;

      // Retrieves and sets information
      try{
        const response = await getApiPokemonInfo(name);
        const updatedPokemon = { ...pokemonState, info: response };
        dispatch(updatePokemonAction(pokemonState, updatedPokemon));
        setPokemon(updatedPokemon);
      }
      catch (e) {
        console.log(e)
      }
    };
    loadInfo();
  }, [dispatch, name, pokemonState]);

  const getUrl = () => {
    return pokemon.info?.sprites?.other["official-artwork"].front_default;
  };

  return (
    <Link className="block p-2 m-4 bg-gray-100 rounded transition-colors select-none shadow-md hover:bg-red-500 hover:text-white" to={`/pokemon/${name}`}>
      {loading && <div className="w-52 h-52 bg-gray-300 animate-pulse" />}
      <img className={`w-52 h-52 ${loading ? 'hidden' : ''}`} src={getUrl()} alt={name} onLoad={() => setLoading(false)} />
      <p className="text-2xl text-center" >{name}</p>
    </Link>
  );
};

export default SearchLink;
