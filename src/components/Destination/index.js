import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './destination.style';
import bg from '../../assets/destination/background-destination-desktop.jpg';
import data from '../../data/data.json';

export const Destination = () => {
  const [destinations, setDestinations] = useState(data.destinations);
  const [currentDestination, setCurrentDestination] = useState({});

  useEffect(() => {
    setCurrentDestination(destinations[0]);
  }, []);

  return (
    <Wrapper bg={bg}>
      {/* <Content>
        <h1>01 pick your destination</h1>
        <Planet destination={currentDestination} />
      </Content> */}
      {currentDestination && (
        <div className='grid'>
          <div className='div1'>
            <h1>01 pick your destination</h1>
          </div>
          <div className='div2'>
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </div>
          <div className='div3'>
            <img src={currentDestination.images?.png} alt='' />
          </div>
          <div className='div4'>
            <h2>{currentDestination.name}</h2>
            <p>{currentDestination.description}</p>
            <div className='divider'></div>
            <div className='info'>
              <div className='distance'>
                <span className='title'>avg. distance</span>
                <span className='data'>{currentDestination.distance}</span>
              </div>
              <div className='travel'>
                <span className='title'>est. travel time</span>
                <span className='data'>{currentDestination.travel}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
