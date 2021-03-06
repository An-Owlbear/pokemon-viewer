import React, { useState } from 'react';

const TextInput = ({ placeholder, className, onBlur }) => {
  const [input, setInput] = useState('');

  // Updates the input value
  const updateValue = (e) => {
    setInput(e.target.value);
  };

  // Blurs and refocuses the form if enter is pressed
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      e.currentTarget.focus();
    }
  };

  return (
    <input className={`p-2 w-full border rounded border-gray-500 focus:ring ring-red-500 transition-shadow ${className}`}
           type="test" placeholder={placeholder} value={input} onChange={updateValue} onBlur={onBlur} onKeyPress={onEnter} />
  );
};

export default TextInput;
