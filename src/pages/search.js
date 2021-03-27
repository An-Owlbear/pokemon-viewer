import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchLink from '../components/searchLink';
import TextInput from '../components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemon } from '../reducers/pokemonReducer';

const Search = () => {
  // Loads pokemon from store
  const dispatch = useDispatch();
  const pokemon = useSelector(x => x.pokemon);

  // Component state
  const [loading, setLoading ] = useState(true);
  const [listPokemon, setListPokemon] = useState(pokemon);
  const [search, setSearch] = useState('');

  // Loads pokemon from the api
  const loadPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    dispatch(setPokemon(response.data.results));
    setListPokemon(response.data.results);
    setLoading(false)
  }

  useEffect(() => { loadPokemon(); }, [])

  // Updates the search term value
  const updateSearch = (e) => setSearch(e.target.value);

  // Searches for pokemon where the name contains the search term
  const searchPokemon = (e) => {
    e.preventDefault();
    const results = pokemon.filter(x => x.name.includes(search));
    setListPokemon(results);
  }

  return (
    <div className="m-6">
      <form className="flex flex-row space-x-4" onSubmit={searchPokemon}>
        <TextInput className="w-full" placeholder="Search" onBlur={updateSearch} />
        <button className="bg-red-500 w-32 p-2 rounded text-white" type="submit">Search</button>
      </form>
      <ul className="mt-6 flex flex-row flex-wrap justify-center">
        {listPokemon.map((item, id) => <li key={id}><SearchLink name={item.name} /></li>)}
      </ul>
    </div>
  );
}

export default Search;
