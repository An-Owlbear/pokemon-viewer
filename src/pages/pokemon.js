import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import { getPokemonInfo } from '../services/pokemonStoreService';
import TwoPartText from '../components/twoPartText';
import Stat from '../components/stat';
import MoveLink from '../components/moveLink';

const Pokemon = () => {
  let name = useParams().id;

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  // Retrieves pokemon information if not already available
  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await getPokemonInfo(name);
        setPokemon(response);
        setLoading(false);
      }
      catch (e) {
        console.log(e);
      }
    };
    loadPokemon();
  }, [name]);

  return (
    <>
      {loading && <Spinner className="w-14 h-14 mx-auto mt-4" />}
      {!loading &&
        <div className="flex flex-col m-2 md:flex-row md:gap-24 md:p-8 md:m-8">
          <div className="text-lg">
            <img className="mx-auto w-52 h-52" src={pokemon.info?.sprites.other["official-artwork"].front_default ?? pokemon.info?.sprites.front_default} alt="" />
            <TwoPartText className="text-3xl font-bold" textOne={pokemon.info?.name} textTwo={`#${pokemon.info?.id}`} />
            <p className="my-4 text-2xl font-semibold">Base Stats</p>
            {pokemon.info?.stats.map(x => <Stat key={x.stat.name} name={x.stat.name} amount={x.base_stat} />)}
          </div>
          <div className="flex-grow">
            <p className="text-3xl font-bold mb-4">Moves</p>
            {pokemon.info?.moves.map(x => <MoveLink key={x.move.name} move={x} />)}
          </div>
        </div>
      }
    </>
  )
};

export default Pokemon;
