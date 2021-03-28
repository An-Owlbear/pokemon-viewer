import React from 'react';
import pokeBall from '../assets/PokemonSymbol.svg'

const Spinner = ({ className }) => {
  return (
    <img className={`animate-spin ${className}`} src={pokeBall} alt="" />
  )
};

export default Spinner;
