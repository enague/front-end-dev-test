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
       <div id='percentage_button_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. Fusce condimentum, tellus nec luctus dictum, orci elit iaculis quam, eget venenatis quam libero vitae est. Nam blandit, dolor id dignissim convallis, nunc ipsum imperdiet mi, sit amet malesuada ex elit at nisi. </div>
       <button id='button_percentage' data-toggle="modal" data-target="#exampleModalCenter" >Button</button>
      </div>
      <div className='grid_item_percentage'>
       <div className='percentage_box'>
        <div className='percentage'>240%</div>
        <p className='percentage_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. </p>
       </div>
       <div className='percentage_box'>
        <div className='percentage'>105%</div>
        <p className='percentage_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. </p>
       </div>
       <div className='percentage_box'>
        <div className='percentage'>159%</div>
        <p className='percentage_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo justo. </p>
       </div>
      </div>
     </div>
    </div>
   )
  }
 }
 
 
 export default Percentage;
  