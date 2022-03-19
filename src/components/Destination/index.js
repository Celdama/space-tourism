import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './destination.style';
import bg from '../../assets/destination/background-destination-desktop.jpg';
import data from '../../data/data.json';
import { Planet } from '../Planet';

console.log(bg);

export const Destination = () => {
  const [destinations, setDestinations] = useState(data.destinations);
  const [currentDestination, setCurrentDestination] = useState({});

  useEffect(() => {
    setCurrentDestination(destinations[0]);
  }, []);

  return (
    <Wrapper bg={bg}>
      <Content>
        <h1>01 pick your destination</h1>
        <Planet destination={currentDestination} />
      </Content>
    </Wrapper>
  );
};
