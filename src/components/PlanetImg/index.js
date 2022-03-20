import React from 'react';
import { Planet } from './planetImg.style';

export const PlanetImg = ({ url }) => {
  return <Planet src={url} alt='planet' />;
};
