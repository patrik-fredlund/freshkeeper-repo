import React, { useState } from 'react';
import { HeaderWrap } from './header/headerStyles';
import { ShoppinglistStyle } from './mainContentStyles';
import { Icon } from '@iconify/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <p className='all-items'>All Shoppinglist Items</p>
        {/* <Icon
                className='arrow'
                onClick={handleToggle}
                icon='dashicons:arrow-right-alt2'
              /> */}
        <Accordion className='accordion'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {/* <div className='shop-item'> */}
            <div className='item'>
              <p>Milk</p>
              <div className='line'></div>
              <p className='quatnity'>
                <b>1</b>&nbsp;liter
              </p>
              <div className='line'></div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </AccordionSummary>
          {/* {open ? (
            !false
          ) : ( */}

          <AccordionDetails className='shop-detials'>
            <button>add to cart</button>
            <button>delete</button>
          </AccordionDetails>
          {/* )} */}
        </Accordion>
      </ShoppinglistStyle>
    </>
  );
}
