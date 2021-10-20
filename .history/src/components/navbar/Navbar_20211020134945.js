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
          <Icon icon='ic:baseline-playlist-add' width='55' height='34' />
          <p>Add items</p>
        </NavLink>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
