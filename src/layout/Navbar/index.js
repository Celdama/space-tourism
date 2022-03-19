import React from 'react';
import { Wrapper, Content } from './navbar.style';
import Logo from '../../assets/shared/logo.svg';

export const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <img src={Logo} alt='logo' />
        <div className='divider'></div>
        <div className='nav'>
          <ul>
            <li>00 Home</li>
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </div>
      </Content>
    </Wrapper>
  );
};
