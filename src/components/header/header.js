import React from 'react';

import { HeaderWrap } from './headerStyles';

function Header() {
  return (
    <HeaderWrap>
      <div className='logoContainer'>
        <h1>Freshkeeper</h1>
      </div>
    </HeaderWrap>
  );
}

export default Header;
