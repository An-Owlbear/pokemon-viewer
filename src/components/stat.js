import React from 'react';
import TwoPartText from './twoPartText';

const Stat = ({ name, amount }) => {
  return (
    <TwoPartText className={`p-2 my-2 bg-${name}`} textOne={name} textTwo={amount} />
  )
};

export default Stat;
