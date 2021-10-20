import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { AppWrap } from './appStyles';
import Header from './header/header';
import GlobalStyle from './globalStyles';

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
    <AppWrap>
      <GlobalStyle />
      <h2 className='titleText'>Shoppinglist</h2>
      <p className='infoText'>
        This is your shoppinglist. See all shoppinglist items, or add new
        catagoies.
      </p>
    </AppWrap>
  );
}
