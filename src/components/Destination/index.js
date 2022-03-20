import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './destination.style';
import bg from '../../assets/destination/background-destination-desktop.jpg';
import data from '../../data/data.json';
import { PlanetImg } from '../PlanetImg';
import { PlanetContent } from '../PlanetContent';

export const Destination = () => {
  const [destinations, setDestinations] = useState(data.destinations);
  const [currentDestination, setCurrentDestination] = useState({});

  useEffect(() => {
    setCurrentDestination(destinations[0]);
  }, []);

  return (
    <Wrapper bg={bg}>
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
            <PlanetImg url={currentDestination.images?.png} />
          </div>
          <div className='div4'>
            <PlanetContent
              name={currentDestination.name}
              description={currentDestination.description}
              distance={currentDestination.distance}
              travel={currentDestination.travel}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};
