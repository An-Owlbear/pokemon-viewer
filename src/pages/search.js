import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchLink from '../components/searchLink';
import TextInput from '../components/textInput';

const Search = () => {
  const [loading, setLoading ] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  // Loads pokemon from the api
  const loadPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1')
    const pokemonResult = response.data.results.map((x, id) => ({...x, id: id + 1 }))
    setPokemon(pokemonResult);
    setResults(pokemonResult);
    setLoading(false)
  }

  useEffect(() => { loadPokemon(); }, [])

  // Updates the search term value
  const updateSearch = (e) => setSearch(e.target.value);

  // Searches for pokemon where the name contains the search term
  const searchPokemon = (e) => {
    e.preventDefault();
    const results = pokemon.filter(x => x.name.includes(search));
    setResults(results);
  }

  return (
    <div className="m-6">
      <form className="flex flex-row space-x-4" onSubmit={searchPokemon}>
        <TextInput className="w-full" placeholder="Search" onBlur={updateSearch} />
        <button className="bg-red-500 w-32 p-2 rounded text-white" type="submit">Search</button>
      </form>
      <ul className="mt-6 p-2 border rounded border-gray-500 divide-solid">
        {results.map((item, id) => <li key={id}><SearchLink id={item.id} name={item.name} /></li>)}
      </ul>
    </div>
  );
}

export default Search;
