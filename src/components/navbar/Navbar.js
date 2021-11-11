import React from 'react';
import { NavbarStyles } from './navbarStyles';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarStyles>
      <div className='nav-button'>
        <NavLink to='/additem' activeClassName='Active'>
          <Icon icon='ic:baseline-playlist-add' width='27' height='27' />
          <p>Add items</p>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink exact to='/' activeClassName='Active'>
          <Icon icon='bx:bxs-fridge' width='27' height='27' />
          <p>Storage</p>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink to='/shoppinglist' activeClassName='Active'>
          <Icon icon='mdi:clipboard-text' width='27' height='27' />
          <p>Shoppinglist</p>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink to='/account' activeClassName='Active'>
          <Icon icon='ic:baseline-account-circle' width='27' height='27' />
          <p>Account</p>
        </NavLink>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
