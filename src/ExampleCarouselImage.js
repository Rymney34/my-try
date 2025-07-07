import React from 'react';

const ExampleCarouselImage = ({ src, alt }) => {
  return (
    <img src={src} className="d-block w-100" alt={alt} />
  );
};

export default ExampleCarouselImage;