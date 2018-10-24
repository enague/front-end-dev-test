import React, { Component } from 'react';
import envelopeIcon from './assets/envelope-icon.svg'

class Carousel extends Component {
    render() {
      return (
        <div className='carousel'>
            <div style={{height: '509px'}}id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                 <div style={{height: '509px'}} id='carousel_image_hero' className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                 <div style={{height: '509px'}} id='carousel_image_1' className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                 <div style={{height: '509px'}} id='carousel_image_2' className="d-block w-100"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            <div className='hero_box'>
             <div className='hero_text'>Lorem Ipsum Lorem Ipsum</div>
             <div className='hero_buttons'>
              <button id='button_carousel' data-toggle="modal" data-target="#exampleModalCenter">Button</button>
              <button id='button_envelope'>
               <img src={envelopeIcon} alt='envelope'></img>
              </button>
             </div>
            </div>
        </div>
      )
    }
   }
   
   export default Carousel;
    