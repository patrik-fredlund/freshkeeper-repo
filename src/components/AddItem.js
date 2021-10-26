import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { HeaderWrap } from './header/headerStyles';
import { AddItemStyle } from './mainContentStyles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment from 'moment';

export default function AddItem() {
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);

  const handleDate = (date) => {
    setDay(date);
  };

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
        {/* --------------------välj produkt--------------------------- */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form>
            <div className='addItemContainer'>
              <p className='mainNumber'>1</p>
              <h3 className='mainTitle'>Add product name</h3>
              <input
                className='searchBar'
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Add product name'
                autoFocus
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
              <div className='storages'>
                <p className='fridge'>fridge</p>
                <p className='freezer'>freezer</p>
                <p className='pantry'>pantry</p>
                <p className='custom'>custom</p>
              </div>
            </div>
            <hr />
            {/* ---------------------Välj dag-------------------------- */}
            <div className='chooseDateContainer'>
              <p className='mainNumber'>4</p>
              <h3 className='mainTitle'>Choose Date</h3>
              <MobileDatePicker
                inputFormat='dd/MM/yyyy'
                value={day}
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>

            <hr />
            <div className='summary'>
              <div className='summary-item'>
                <div className='summary-title'>product</div>
                <p className='summary-subtitel'>
                  {text}
                  <br />
                </p>
              </div>
              <div className='summary-item'>
                <div className='summary-title'>storage</div>
                <p className='summary-subtitel'>frys</p>
                <br />
              </div>
              <div className='summary-item'>
                <div className='summary-title'>date</div>
                <p className='summary-subtitel'>
                  {day ? moment(day).endOf('day').fromNow() : null}
                  <br />
                </p>
              </div>
              <div className='summary-item'>
                <div className='summary-title'>quantity</div>
                <p className='summary-subtitel'>5l</p>
                <br />
              </div>
            </div>
            <div className='confirm'>
              <button>Confirm</button>
            </div>
          </form>
        </LocalizationProvider>
      </AddItemStyle>
    </>
  );
}
