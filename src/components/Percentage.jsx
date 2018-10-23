import React, { Component } from 'react';


class Percentage extends Component {
  render() {
   return (
    <div className='container'>
     <div className='grid_container_percentage'>
      <div className='grid_item_header'>
        <div className='section_header_regular'>
          <span className='section_header_bold'>Lorem</span> Ipsum
        </div>
      </div>
      <div className='grid_item_percentage_button'>
       <div>Lorem ipsum</div>
       <button id='button_percentage' data-toggle="modal" data-target="#exampleModalCenter" >Button</button>
      </div>
      <div className='grid_item_percentage'>
       <div>
        <div className='percentage'>240%</div>
        <p>Lorem ipsum</p>
       </div>
       <div>
        <div className='percentage'>105%</div>
        <p>Lorem ipsum</p>
       </div>
       <div>
        <div className='percentage'>159%</div>
        <p>Lorem ipsum</p>
       </div>
      </div>
     </div>
    </div>
   )
  }
 }
 
 
 export default Percentage;
  