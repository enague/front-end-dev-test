import React, { Component } from 'react';

import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Page from './Page.jsx';
import Percentage from './Percentage.jsx';


class App extends Component {
  render() {
   return (
    <div>
      <Header />
      <Carousel />
      <Page />
      <Percentage />
    </div>
   )
  }
 }
 
 
 export default App;
  


