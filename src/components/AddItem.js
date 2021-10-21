import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { HeaderWrap } from './header/headerStyles';
import { AddItemStyle } from './mainContentStyles';

export default function AddItem() {
  return (
    <>
      <HeaderWrap>
        <h2 className='titleText'>Add Item</h2>
        <h4 className='infoText'>
          choose your product, quantity, storage and expiration date.
        </h4>
        <hr />
      </HeaderWrap>
      <AddItemStyle>
        <div className='addItemContainer'>
          <p className='mainNumber'>1</p>
          <h3 className='mainTitle'>Add product name</h3>
          <input
            className='searchBar'
            type='text'
            placeholder='Add product name'
          />
        </div>
        <div className='addQuantityContainer'>
          <p className='mainNumber'>2</p>
          <h3 className='mainTitle'>Choose Quantity</h3>
        </div>
        <div className='addStorageContainer'>
          <p className='mainNumber'>3</p>
          <h3 className='mainTitle'>Choose Storage</h3>
        </div>
        <div className='chooseDateContainer'>
          <p className='mainNumber'>4</p>
          <h3 className='mainTitle'>Choose Date</h3>
        </div>
      </AddItemStyle>
    </>
  );
}
