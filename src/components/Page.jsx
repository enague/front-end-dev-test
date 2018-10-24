import React, { Component } from 'react';
import paperIcon from './assets/page-icon.svg';
import slantedBackground from './assets/slanted-gradient-background.svg';


class Page extends Component {
  render() {
   return (
    <div>
     <div>
      <div className='grid_container_page'>
        <div className='grid_item_page'>
          <img src={paperIcon} alt='paper_icon'></img> 
        </div>
        <div className='grid_item_page'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum.</p>
        </div>
        <div className='grid_item_page'>
        <img src={paperIcon} alt='paper_icon'></img> 
        </div>
        <div className='grid_item_page'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum.</p>
        </div>
        <div className='grid_item_page'>
          <img src={paperIcon} alt='paper_icon'></img> 
        </div>
        <div className='grid_item_page'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum.</p>
        </div>
        <div className='grid_item_page'>
        <img src={paperIcon} alt='paper_icon'></img> 
        </div>
        <div className='grid_item_page'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum.</p>
        </div>
      </div>
     </div>
     <img id='slanted_background' src={slantedBackground} alt='slanted_background'></img>
     <div className='slanted_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum, orci elit iaculis quam, eget venenatis quam libero vitae est.</div>
    </div>
   )
  }
 }
 
 export default Page;
  

 