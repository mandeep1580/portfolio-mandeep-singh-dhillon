import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
// import { Input } from 'react-advanced-form-addons'
require('dotenv').config();


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,
      form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className="content-container">
      <div className="container">
        <div className="heading">
          <h1>Contact</h1>
          <hr></hr>
        </div>
        <div className="contact">
          <form ref={form} onSubmit={sendEmail} >
            <div className='container' >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="user_name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name="user_email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" name="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" text-align="centre">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


