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
      <>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>Storage</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong>Email: </strong>
            {currentUser.email}
            <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </>
    </AppWrap>
  );
}
