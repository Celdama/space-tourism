import React from 'react';
import { Wrapper, Content } from './navbar.style';
import Logo from '../../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <div className='divider'></div>
        <div className='nav'>
          <ul>
            <Link to='/'>00 Home</Link>
            <Link to='/destination'>01 Destination</Link>
            <Link to='/crew'>02 Crew</Link>
            <Link to='/technology'>03 Technology</Link>
          </ul>
        </div>
      </Content>
    </Wrapper>
  );
};
