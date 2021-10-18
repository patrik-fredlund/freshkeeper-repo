import React from 'react';
import { AppWrap } from '../appStyles';
import { HeaderWrap } from '../header/headerStyles';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';

const Navbar = () => {
  const menuList = MenuList.map(({ url, title, icon, index }) => {
    return (
      <li key={index}>
        <a href={url}>{(title, icon)}</a>
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
