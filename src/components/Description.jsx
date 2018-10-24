import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
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
         <h2>Lorem ipsum dolor sit amet</h2>
         <h3>Lorem ipsum dolor sit amet lorem</h3>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum, orci elit iaculis quam, eget venenatis quam libero vitae est. Nam blandit, dolor id dignissim convallis, nunc ipsum imperdiet mi, sit amet malesuada ex elit at nisi. </p>
       </div>
       <Fade right>
        <img style={{justifySelf: 'end'}} id='description_img' src={phoneImg} alt='phoneImg'></img>
       </Fade>
      </div>
      <div className='grid_item_description'>
       <Fade left>
        <img style={{justifySelf: 'start'}} id='description_img' src={graphImg} alt='graphImg'></img>
       </Fade>
       <div className='description_text_container'>
        <div>
         <h2>Lorem ipsum dolor sit amet</h2>
         <h3>Lorem ipsum dolor sit amet lorem</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum, orci elit iaculis quam, eget venenatis quam libero vitae est. Nam blandit, dolor id dignissim convallis, nunc ipsum imperdiet mi, sit amet malesuada ex elit at nisi. </p>
       </div>
      </div>
     </div>
    </div>
   )
  }
 }
 
 export default Description;
  