import React from 'react';
import { AppWrap } from '../appStyles';
import { HeaderWrap } from '../header/headerStyles';
import { MenuList } from './MenuList';
import { NavbarStyles } from './navbarStyles';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const menuList = MenuList.map(({ url, title, index, icon }) => {
//     return (
//       <li key={index}>
//         <a href={url}>{icon}</a>
//         <p className='navbarTitles'>{title}</p>
//       </li>
//     );
//   });

//   return (
//     <NavbarStyles>
//       <ul className='menu-list'>{menuList} </ul>
//     </NavbarStyles>
//   );
// };

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
        <NavLink to='/storage' activeClassName='Active'>
          <Icon icon='bx:bxs-fridge' width='27' height='27' />
          <p>Storage</p>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink to='/shoppinglist' activeClassName='Active'>
          <Icon icon='mdi:clipboard-text' width='27' height='27' />
          <p>Shopping list</p>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink exact to='/account' activeClassName='Active'>
          <Icon icon='ic:baseline-account-circle' width='27' height='27' />
          <p>Account</p>
        </NavLink>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
