import React from 'react';
import logo from './logo.png';
import './style.css';

const Logo = ({size = 'small'}) =>
  <img src={logo} className={`App-logo ${size}`} alt='logo' />


export default Logo;
