import React, { useState } from 'react';

import Header from './header/Header';
import { HeaderWrap } from './header/headerStyles';

const storages = ['Freezer', 'Fridge', 'Pantry'];
const items = [
  {
    id: 1,
    name: 'Milk',
    quantity: '1',
    unit: 'L',
    storage: 'Fridge',
    expiry: '9 days',
  },
  {
    id: 2,
    name: 'Bread',
    quantity: '1',
    unit: 'pcs',
    storage: 'Pantry',
    expiry: '1 week',
  },
  {
    id: 3,
    name: 'Eggs',
    quantity: '12',
    unit: 'pcs',
    storage: 'Fridge',
    expiry: '1 month',
  },
  {
    id: 4,
    name: 'Butter',
    quantity: '1',
    unit: 'L',
    storage: 'Fridge',
    expiry: '1 month',
  },
];
export default function Storage() {
  return (
    <>
      <HeaderWrap>
        <h2 className='titleText'>Storage</h2>
        <p className='infoText'>
          This Is Your Storage. See All Items In Storage,<br></br> Or Sorted In
          Preferred Sections, Or Create A New Storage
        </p>
        <hr />
      </HeaderWrap>
      <div>
        {storages.map((storage) => (
          <div>
            <div className={storage}>{storage}</div>
            {items.map((item) => {
              if (item.storage === storage) {
                return (
                  <li key={item.id}>
                    <div className='item-name'>{item.name}</div>{' '}
                    <p>
                      <div className='line'></div>
                      {item.quantity}
                      {item.unit} <div className='line'></div> {item.expiry}{' '}
                      <div className='line'></div>{' '}
                    </p>
                  </li>
                );
              }
            })}
          </div>
        ))}
      </div>
    </>
  );
}
