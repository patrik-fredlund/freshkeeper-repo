import React from 'react';
import { HeaderWrap } from './headerStyles';

function Header() {
  return (
    <HeaderWrap>
      {/* <div className='top_nav'>
        <h2 className='freshkeeper_header'>Freshkeeper</h2>
      </div> */}
      <h1>Freshkeeper</h1>
    </HeaderWrap>
  );
}

export default Header;
