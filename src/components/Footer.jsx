import React from 'react';

const Footer = (props) => (
    <div className='footer'>
     <div className='container'>
      <div className='row'>
       <div className='col-sm'>
        <h2>Categories</h2>
         <div>
          <div className='footer_links'>Lorem</div>
          <div className='footer_links'>Dolor</div>
          <div className='footer_links'>Blandit</div>
          <div className='footer_links'>Imperdiet</div>
         </div>
       </div>
       <div className='col-sm'>
        <h2>About Us</h2>
        <div>
          <div className='footer_links'>Careers</div>
          <div className='footer_links'>FAQ</div>
          <div className='footer_links'>Contacts</div>
         </div>
       </div>
       <div className='col-sm'>
        <h2>Follow Us</h2>
        <div className='social_media'>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-facebook fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
        </div>
       </div>
      </div>
     </div>
    </div>
)

export default Footer;