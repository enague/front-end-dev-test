import React, { Component } from 'react';
import paperIcon from './assets/page-icon.svg';
import slantedBackground from './assets/slanted-gradient-background.svg';


class Page extends Component {
  render() {
   return (
    <div>
     <div className='grid_container_page'>
      <div className='grid_item_page'>
       <img src={paperIcon} alt='paper_icon'></img> 
       <p>Lorem ipsum</p>
      </div>
      <div className='grid_item_page'>
       <img src={paperIcon} alt='paper_icon'></img> 
       <p>Lorem ipsum</p>
      </div>
      <div className='grid_item_page'>
       <img src={paperIcon} alt='paper_icon'></img> 
       <p>Lorem ipsum</p>
      </div>
      <div className='grid_item_page'>
       <img src={paperIcon} alt='paper_icon'></img> 
       <p>Lorem ipsum</p>
      </div>
     </div>
     <img id='slanted_background' src={slantedBackground} alt='slanted_background'></img>
     <div className='slanted_text'>lorem ipsum</div>
    </div>
   )
  }
 }
 
 export default Page;
  

 