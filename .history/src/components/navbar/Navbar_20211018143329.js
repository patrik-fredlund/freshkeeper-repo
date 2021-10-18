import React from 'react';
import { AppWrap } from '../appStyles';
import { HeaderWrap } from '../header/headerStyles';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';

const Navbar = () => {
  const menuList = MenuList.map(({ url, title, icon, index }) => {
    return (
      <li key={index}>
        <div>
          <a href={url}>{icon}</a>
          <p className='navbarTitles'>{title}</p>
        </div>
      </li>
    );
  });

  return (
    <NavbarStyles>
      <ul className='menu-list'>{menuList} </ul>
    </NavbarStyles>
  );
};

export default Navbar;
