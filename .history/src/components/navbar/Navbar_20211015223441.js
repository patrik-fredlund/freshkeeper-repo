import React from 'react';
import { AppWrap } from '../appStyles';
import { HeaderWrap } from '../header/headerStyles';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';

const Navbar = () => {
  const menuList = MenuList.map(({ url, title, index }) => {
    return (
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    );
  });

  return (
    <HeaderWrap>
      <nav>
        <ul className='menu-list'>{menuList} </ul>
      </nav>
    </HeaderWrap>
  );
};

export default Navbar;
