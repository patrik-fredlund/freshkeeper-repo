import React from 'react';
import { AppWrap } from '../appStyles';
import { HeaderWrap } from '../header/headerStyles';
// import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <NavbarStyles>
      <div className='nav-button'>
        <NavLink to='/additem' activeClassName='Active'>
          <Icon icon='ic:baseline-playlist-add' width='55' height='34' />
          <p>Add items</p>
        </NavLink>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
