import React, { Component } from 'react';

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
  


