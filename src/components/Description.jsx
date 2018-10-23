import React, { Component } from 'react';
import phoneImg from './assets/img1.jpg';
import graphImg from './assets/img2.jpg';


class Description extends Component {
  render() {
   return (
    <div className='description'>
     <div className='grid_container_description'>
      <div className='grid_item_header'>
       <div className='section_header_regular'>
        <span className='section_header_bold'>Lorem</span> Ipsum
       </div>
      </div>
      <div style={{padding: '60px 0px 60px'}} className='grid_item_description'>
       <div className='description_text_container'>
        <div>
         <h2>Lorem Ipsum</h2>
         <h3>lorem ipsum</h3>
        </div>
        <p>hi I am Eric</p>
       </div>
       <img id='description_img' src={phoneImg} alt='phoneImg'></img>
      </div>
      <div className='grid_item_description'>
       <img id='description_img' src={graphImg} alt='graphImg'></img>
       <div className='description_text_container'>
        <div>
         <h2>Lorem Ipsum</h2>
         <h3>lorem ipsum</h3>
        </div>
        <p>hi I am Eric</p>
       </div>
      </div>
     </div>
    </div>
   )
  }
 }
 
 export default Description;
  