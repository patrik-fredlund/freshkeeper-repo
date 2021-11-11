import React, { useState } from 'react';
import { HeaderWrap } from './header/headerStyles';
import { ShoppinglistStyle } from './mainContentStyles';
import { Icon } from '@iconify/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ShoppingList() {
  //----------------------States----------------------//

  const [open, setOpen] = useState(true);
  //----------------------Functions----------------------//

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

        <Accordion className='item'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>Milk</p>
            <div className='item-info'>
              <div className='line'></div>
              <p className='quatnity'>
                <b>1</b>&nbsp;liter
              </p>
              <div className='line'></div>
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <div className='item-details'>
              <button className='item-details-button'>
                <Icon
                  icon='ic:baseline-delete-forever'
                  width='32'
                  height='32'
                />{' '}
                delete
              </button>

              <button className='item-details-button'>
                <Icon icon='bx:bxs-edit' width='32' height='32' />
                Edit
              </button>
            </div>
          </AccordionDetails>
          {/* )} */}
        </Accordion>
      </ShoppinglistStyle>
    </>
  );
}
