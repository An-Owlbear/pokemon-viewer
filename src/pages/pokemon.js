import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updatePokemon } from '../reducers/pokemonReducer';
import Spinner from '../components/spinner';

const Pokemon = () => {
  const dispatch = useDispatch();
  let name = useParams().id;
  const pokemon = useSelector(x => x.pokemon).find(x => x.name === name);

  const [loading, setLoading] = useState(true);

  // Retrieves pokemon information if not already available
  useEffect(() => {
    const loadPokemon = async () => {
      // Returns if already stored
      if (pokemon?.info !== undefined){
        setLoading(false);
        return;
      }
      // Retrieves and sets information
      const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const updatedPokemon = { ...pokemon, info: response.data };
      dispatch(updatePokemon(pokemon, updatedPokemon));
      setLoading(false);
    };
    loadPokemon();
  }, [dispatch, name, pokemon]);

  return (
    <>
      {loading && <Spinner className="w-14 h-14 mx-auto mt-4" />}
      {!loading &&
        <div>
          <img className="w-32 h-32" src={pokemon?.info?.sprites?.other["official-artwork"].front_default} alt="" />
        </div>
      }
    </>
  )
};

export default Pokemon;
