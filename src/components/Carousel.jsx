import React, { Component } from 'react';

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
                <img  style={{height: '509px'}} className="d-block w-100" src="src/components/assets/hero-img.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img  style={{height: '509px'}} className="d-block w-100" src="src/components/assets/img1.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img  style={{height: '509px'}} className="d-block w-100" src="src/components/assets/img2.jpg" alt="Third slide"/>
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
        </div>
      )
    }
   }
   
   export default Carousel;
    