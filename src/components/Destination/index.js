import React from 'react';
import { Wrapper, Content } from './destination.style';
import bg from '../../assets/destination/background-destination-desktop.jpg';

export const Destination = () => {
  return (
    <Wrapper bg={bg}>
      <Content>
        <div className='content'>
          <p className='heading'>so, you want to travel to</p>
          <p className='big'>space</p>
          <p className='body'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='action'>
          <p>Explore</p>
        </div>
      </Content>
    </Wrapper>
  );
};
