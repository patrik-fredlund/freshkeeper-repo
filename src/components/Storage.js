import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Header from './header/Header';
import { HeaderWrap } from './header/headerStyles';

export default function Storage() {
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
    <HeaderWrap>
      <h2 className='titleText'>Storage</h2>
      <p className='infoText'>
        This Is Your Storage. See All Items In Storage,<br></br> Or Sorted In
        Preferred Sections, Or Create A New Storage
      </p>
      <hr />
    </HeaderWrap>
  );
}
