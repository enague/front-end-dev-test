import React, { Component } from 'react';
import logo from './assets/igniter-logo-white.svg';


class Header extends Component {
  render() {
   return (
    <div className='header'>
     <img id='logo' src={logo} alt='logo'></img>
    </div>
   )
  }
 }
 
 export default Header;
  