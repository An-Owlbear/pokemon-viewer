import React from 'react';
import { Link } from 'react-router-dom';
import pokeBall from '../assets/PokemonSymbol.svg';

const Navbar = ({ className }) => {
  return (
    <div className={`flex flex-row items-center bg-red-500 text-white shadow-md p-4 gap-4 ${className}`}>
      <Link className="text-2xl font-semibold hover:opacity-50 flex flex-row items-center" to="/">
        <img className="inline w-10 h-10 filter-white md:hidden" src={pokeBall} alt="" />
        <p className="my-auto hidden md:inline">Pokemon Viewer</p>
      </Link>
      <div className="flex-grow" />
      <Link className="text-xl h-full hover:opacity-50 md:hidden" to="/team-builder">Team</Link>
      <Link className="text-xl h-full hover:opacity-50" to="/search">Search</Link>
    </div>
  )
};

export default Navbar;
