import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Header from './header/header';
import { HeaderWrap } from './header/headerStyles';

export default function ShoppingList() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('failed to log out');
    }
  }

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
    </>
  );
}
