import React from 'react';
import { AppWrap } from '../appStyles';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';

const Navbar = () => {
  const menuList = MenuList.map(({ url, title, index }) => {
    return (
      <AppWrap>
        <NavbarStyles>
          <li key={index}>
            <a href={url}>{title}</a>
          </li>
        </NavbarStyles>
      </AppWrap>
    );
  });

  return (
    <AppWrap>
      <NavbarStyles>
        <nav>
          <ul className='menu-list'>{menuList} </ul>
        </nav>
      </NavbarStyles>
    </AppWrap>
  );
};

export default Navbar;
