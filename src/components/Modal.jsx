import React, { Component } from 'react';


class Modal extends Component {
  render() {
   return (
    <div>
     <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
       <div className='modal-content'>
        <div>
          <h2 style={{alignItems: 'center', paddingBottom: '20px'}} className='modal_enter_text'>Lorem Ipsum</h2>
          <div className='modal_enter_text'>
           <label htmlFor='name' className='modal_label'>Your Name</label> 
           <input  className='modal_input' id='name' type='text'></input>
          </div>
          <div className='modal_enter_email_phone'>
           <div className='modal_gap'>
            <label className='modal_label'>Your Email</label>
            <input className='modal_input_email_phone' type='text'></input>
           </div>
           <div className='modal_gap'>
            <label className='modal_label'>Phone Number</label>
            <input className='modal_input_email_phone' type='text'></input>
           </div>
          </div>
          <div className='modal_enter_text'>
           <label className='modal_label'>Message</label> 
           <textarea style={{height: '100px'}} className='modal_input'></textarea>
          </div>
          <div className='modal_enter_text'>
           <button style={{margin: 'auto'}} id='button_percentage'>Button</button>
          </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   )
  }
 }
 
 
 export default Modal;
  
