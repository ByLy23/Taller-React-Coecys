import React, { useState } from 'react';

export const AddCategory = ({ setCat }) => {
  const [InputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputValue.trim().length > 1) setCat((cat) => [InputValue, ...cat]);
    setInputValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={InputValue}
        onChange={handleInputChange}
        placeholder="Busca tu gif favorito..."
      />
    </form>
  );
};
