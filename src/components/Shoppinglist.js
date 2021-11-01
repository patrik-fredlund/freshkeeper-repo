import React, { useState } from 'react';
import { HeaderWrap } from './header/headerStyles';
import { ShoppinglistStyle } from './mainContentStyles';
import { Icon } from '@iconify/react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ShoppingList() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderWrap>
        <h2 className='titleText'>Shoppinglist</h2>
        <h4 className='infoText'>
          This is your shoppinglist. See all shoppinglist items,<br></br> or add
          //new catagoies
        </h4>
        <hr />
      </HeaderWrap>
      <ShoppinglistStyle>
        <div className='allShoppingListItems'>
          All Shoppinglist Items
          {/* <button onClick={handleToggle}>open</button> */}
          {/* <svg data-testid='KeyboardArrowRightIcon'></svg> */}
          <Icon
            className='arrow'
            onClick={handleToggle}
            icon='dashicons:arrow-right-alt2'
          />
        </div>
        {open ? (
          !false
        ) : (
          <div className='shop-item'>
            <div className='item'>
              Milk
              <div className='line'></div>
              <p className='quatnity'>
                <b>1</b>&nbsp;liter
              </p>
              <div className='line'></div>
            </div>
          </div>
        )}
      </ShoppinglistStyle>
    </>
  );
}
