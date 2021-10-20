import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { AppWrap } from './appStyles';

import Header from './header/header';
import GlobalStyle from './globalStyles';

export default function AddItem() {
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
      <h2 className='titleText'>Add Item</h2>
      <h4 className='infoText'>
        choose your product, quantity, storage and expiration date.
      </h4>
    </AppWrap>
  );
}
