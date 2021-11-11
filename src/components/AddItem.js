import React, { useState } from 'react';
import { HeaderWrap } from './header/headerStyles';
import { AddItemStyle } from './mainContentStyles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment from 'moment';
import { Icon } from '@iconify/react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AddItem() {
  //----------------------States----------------------//

  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');
  const [storage, setStorage] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const storages = ['Freezer', 'Fridge', 'Pantry'];

  //----------------------Functions----------------------//

  const handleDate = (date) => {
    setDay(date);
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  const handlePlus = (e) => {
    e.preventDefault();
    setQuantity(parseInt(quantity) + 1);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const icons = [
    { storage: 'Freezer', icon: 'ph:thermometer-cold' },
    { storage: 'Fridge', icon: 'bx:bx-fridge' },
    { storage: 'Pantry', icon: 'carbon:wheat' },
  ];

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
        {/* --------------------Add Item--------------------------- */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form onSubmit={handleSubmit}>
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
            {/* --------------------Choose Quantity--------------------------- */}
            <div className='addQuantityContainer'>
              <p className='mainNumber'>2</p>
              <h3 className='mainTitle'>Choose Quantity</h3>
              <div className='counterContainer'>
                <button className='minusBtn' onClick={handleMinus}>
                  -
                </button>
                <input
                  className='counter'
                  type='number'
                  min={0}
                  max={1000}
                  precision={2}
                  step={0.1}
                  value={quantity}
                  onChange={handleQuantity}
                />
                <button className='plusBtn' onClick={handlePlus}>
                  +
                </button>
                <select
                  placeholder='Choose quantity'
                  className='select-input'
                  onChange={handleUnit}
                  value={unit}
                >
                  <option hidden>...</option>
                  <option value='kg'>kg</option>
                  <option value='g'>g</option>
                  <option value='liter'>L</option>
                  <option value='ml'>ml</option>
                  <option value='pcs'>pcs</option>
                </select>
              </div>
            </div>
            <hr />
            {/* --------------------Choose Storage--------------------------- */}
            <div className='addStorageContainer '>
              {storages.map((storage) => (
                <div className='storages' key={storage}>
                  <input
                    className={storage}
                    type='radio'
                    id={storage}
                    name='storage'
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                  />
                  <label for={storage}>
                    <Icon
                      icon={icons.find((i) => i.storage === storage).icon}
                      width='31'
                      height='31'
                    />
                    {storage}
                  </label>
                </div>
              ))}
            </div>
            <hr />
            {/* ---------------------Choose date-------------------------- */}
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
            {/* ---------------------Summary-------------------------- */}

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
                <p className='summary-subtitel'>{storage}</p>
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
                <p className='summary-subtitel'>
                  {quantity === 0 ? ' ' : quantity} {unit}
                  <br />
                </p>
              </div>
            </div>
            <div className='confirm'>
              <button type='submit'>Confirm</button>
            </div>

            {/* Snackbar */}

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert onClose={handleClose} severity='info'>
                Please fill in all fields!
              </Alert>
            </Snackbar>
            <Snackbar
              open={message}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert onClose={handleClose} severity='success'>
                Item added !
              </Alert>
            </Snackbar>
          </form>
        </LocalizationProvider>
      </AddItemStyle>
    </>
  );
}
