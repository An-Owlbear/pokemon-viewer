import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  return (
    <div className={`flex flex-row items-center bg-red-500 text-white shadow-md p-4 ${className}`}>
      <Link className="text-2xl font-semibold hover:opacity-50" to="/">Pokemon Viewer</Link>
      <div className="flex-grow" />
      <Link className="text-xl h-full hover:opacity-50" to="/search">
        <p>Search</p>
      </Link>
    </div>
  )
};

export default Navbar;
