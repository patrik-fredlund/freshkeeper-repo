import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { AppWrap } from './appStyles';
import Header from './header/header';

export default function ShopingList() {
  return <h2 className='text-center mb-4'>Shopinglist</h2>;
}
