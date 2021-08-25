import React from 'react';

export const GifGridItem = ({ titulo, url }) => {
  return (
    <div className="card">
      <img src={url} alt={titulo} />
      <p>{titulo}</p>
    </div>
  );
};
