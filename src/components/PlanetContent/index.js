import React from 'react';
import { Wrapper } from './planetContent.style';

export const PlanetContent = ({ name, description, distance, travel }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className='divider'></div>
      <div className='info'>
        <div className='distance'>
          <span className='title'>avg. distance</span>
          <span className='data'>{distance}</span>
        </div>
        <div className='travel'>
          <span className='title'>est. travel time</span>
          <span className='data'>{travel}</span>
        </div>
      </div>
    </Wrapper>
  );
};
