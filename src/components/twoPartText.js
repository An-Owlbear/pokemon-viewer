import React from 'react';

const TwoPartText = ({ className, textOne, textTwo }) => {
  return (
      <div className={`flex flex-row justify-between ${className}`}>
      <p>{textOne}</p>
      <p>{textTwo}</p>
    </div>
  )
};

export default TwoPartText;
