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
        <hr />
        <div className='addQuantityContainer'>
          <p className='mainNumber'>2</p>
          <h3 className='mainTitle'>Choose Quantity</h3>
          <div className='counterContainer'>
            <p className='minusBtn'>-</p>
            <p className='counter'>5</p>
            <p className='plusBtn'>+</p>
          </div>
        </div>
        <hr />
        <div className='addStorageContainer'>
          <p className='mainNumber'>3</p>
          <h3 className='mainTitle'>Choose Storage</h3>
          <div className='storageContainer'>
            <p className='fridge'>fridge</p>
            <p className='freezer'>freezer</p>
            <p className='pantry'>pantry</p>
            <p className='custom'>custom</p>
          </div>
        </div>
        <hr />
        <div className='chooseDateContainer'>
          <p className='mainNumber'>4</p>
          <h3 className='mainTitle'>Choose Date</h3>
        </div>
        <hr />
        <div className='summary'>
          <div className='summary-item'>
            <div className='summary-title'>product</div>
          </div>
          <div className='summary-item'>
            <div className='summary-title'>storage</div>
          </div>
          <div className='summary-item'>
            <div className='summary-title'>date</div>
          </div>
          <div className='summary-item'>
            <div className='summary-title'>quantity</div>
          </div>
        </div>
        <div className='confirm'>
          <button>Confirm</button>
        </div>
      </AddItemStyle>
    </>
  );
}
