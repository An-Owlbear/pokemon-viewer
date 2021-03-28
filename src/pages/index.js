import React from 'react';
import background from '../assets/background.png';
import logo from '../assets/PokemonSymbol.svg';

const Index = () => {
  return (
    <div className="m-8">
      <img src={logo} className="h-44 w-44 mx-auto m-4" alt="" />
      <h1 className="text-7xl text-center font-extrabold m-4">Pokemon Viewer</h1>
      <p className="text-4xl text-gray-500 text-center font-semibold m-8">View Pokemon and create a team - click the search button to get started</p>
      <img src={background} className="block mx-auto mt-14 h-96" alt="" />
    </div>
  )
};

export default Index;
