import React, { useEffect, useState } from 'react';
import SearchLink from '../components/searchLink';
import TextInput from '../components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../services/pokemonService';
import { setPokemon } from '../reducers/pokemonReducer';

const Search = () => {
  // Loads pokemon from store
  const dispatch = useDispatch();
  const pokemon = useSelector(x => x.pokemon);

  // Component state
  const [loading, setLoading ] = useState(true);
  const [listPokemon, setListPokemon] = useState(pokemon);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    // Loads pokemon from the api
    const loadPokemon = async () => {
      // Returns if data is already loaded
      if (pokemon.length !== 0) {
        return;
      }

      // Requests and loads data
      try {
        const response = await getPokemonList();
        dispatch(setPokemon(response));
        setListPokemon(response);
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
    };
    loadPokemon();
  }, [dispatch, pokemon]);

  // Updates the search term value
  const updateSearch = (e) => setSearch(e.target.value);

  // Searches for pokemon where the name contains the search term
  const searchPokemon = (e) => {
    e.preventDefault();
    setLimit(20);
    const results = pokemon.filter(x => x.name.includes(search));
    setListPokemon(results);
  };


  return (
    <div className="m-6">
      <form className="flex flex-row space-x-4" onSubmit={searchPokemon}>
        <TextInput className="w-full" placeholder="Search" onBlur={updateSearch} />
        <button className="bg-red-500 w-32 p-2 rounded text-white shadow-md transition-colors hover:bg-red-600" type="submit">Search</button>
      </form>
      <ul className="mt-6 flex flex-row flex-wrap justify-center">
        {listPokemon.slice(0, limit).map(item => <li key={item.name}><SearchLink name={item.name} /></li>)}
      </ul>
      <button className="block bg-red-500 mx-auto w-full md:w-3/4 p-4 mt-6 rounded text-white shadow-md transition-colors hover:bg-red-600"
              onClick={() => setLimit(limit + 20)}>Load more</button>
    </div>
  );
};

export default Search;
