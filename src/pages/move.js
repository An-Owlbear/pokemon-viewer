import React, { useEffect, useState } from 'react';
import Spinner from '../components/spinner';
import { getMoveInfo } from '../services/pokemonStoreService';
import { useParams } from 'react-router-dom';

const Move = () => {
  const name = useParams().id;

  const [loading, setLoading] = useState(true);
  const [move, setMove] = useState({});

  // Retrieves move information from store or API
  useEffect(() => {
    const loadMove = async () => {
      try {
        const response = await getMoveInfo(name);
        setMove(response);
        setLoading(false)
      }
      catch (e) {
        console.log(e);
      }
    };
    loadMove();
  }, [name]);

  return (
    <>
      {loading && <Spinner className="w-14 h-14 mx-auto mt-4" />}
      {!loading &&
        <div className="m-4 p-4 md:w-1/2 md:mx-auto text-xl font-semibold">
          <h1 className="text-4xl font-bold my-4">{move.name}</h1>
          <p className="my-2">Type - {move.type.name}</p>
          <p className="my-2">Accuracy - {move.accuracy}</p>
          <p className="my-2">Power - {move.power}</p>
          <p className="my-2">PP - {move.pp}</p>
          <p className="my-2">Description - {move.flavor_text_entries[0].flavor_text}</p>
        </div>
      }
    </>
  )
};

export default Move;
