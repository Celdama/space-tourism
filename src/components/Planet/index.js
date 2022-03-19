import React from 'react';
import { Wrapper } from './planet.style';

export const Planet = ({ destination }) => {
  return (
    <Wrapper>
      {destination.name && (
        <>
          <div className='planet'>
            <img src={destination.images.png} alt='' />
          </div>
          <div className='desc'>
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div className='divider'></div>
            <div className='info'>
              <div className='distance'>
                <span className='title'>avg. distance</span>
                <span className='data'>{destination.distance}</span>
              </div>
              <div className='travel'>
                <span className='title'>est. travel time</span>
                <span className='data'>{destination.travel}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
