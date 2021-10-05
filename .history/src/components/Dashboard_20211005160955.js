import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Dashboard() {
  function handleLogOut() {}

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}
