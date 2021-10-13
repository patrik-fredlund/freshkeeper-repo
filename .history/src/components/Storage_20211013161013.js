import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { AppWrap } from './appStyles';
import Header from './header/header';

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
    <AppWrap>
      <Header />

      {/* <Card>
        <Card.Body> */}
      <div className='container'>
        <div className='top_nav'>
          <h2 className='freshkeeper_header'>Freshkeeper</h2>
        </div>
        <h2 className='text-center mb-4'>Storage</h2>
      </div>

      {/* </Card.Body>
      </Card> */}
    </AppWrap>
  );
}
