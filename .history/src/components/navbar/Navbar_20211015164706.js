import React from 'react';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';

const Navbar = () => {
  const menuList = MenuList.map(({ url, title, index }) => {
    return (
      <NavbarStyles>
        <li key={index}>
          <a href={url}>{title}</a>
        </li>
      </NavbarStyles>
    );
  });

  return (
    <NavbarStyles>
      <nav>
        <ul className='menu-list'>{menuList} </ul>
      </nav>
    </NavbarStyles>
  );
};

export default Navbar;
