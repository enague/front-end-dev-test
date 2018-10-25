import React, { Component } from 'react';

import envelopeIcon from './assets/envelope-icon.svg'

import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Page from './Page.jsx';
import Percentage from './Percentage.jsx';
import Description from './Description.jsx';
import Footer from './Footer.jsx';
import Modal from './Modal.jsx';


class App extends Component {
  render() {
   return (
    <div>
      {/* Want envelope icon to be sticky so needs to be outside*/}
      <div className='sticky-top' >
        <div id='button_evelope_sticky'>
          <button id='button_envelope'>
            <img src={envelopeIcon} alt='envelope'></img>
          </button>
        </div>
      </div>
      <Header />
      <Carousel />
      <Page />
      <Percentage />
      <Modal />
      <Description />
      <Footer />
    </div>
   )
  }
 }
 
 
 export default App;
  


