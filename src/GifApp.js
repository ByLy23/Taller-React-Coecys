import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifApp = () => {
  const [categories, setcategories] = useState([]);
  return (
    <div>
      <h1>Gif React Coecys</h1>
      <AddCategory setCat={setcategories} />
      <hr />
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </div>
  );
};
