import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"; 

export default function Contact  () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!e.target[0].user_name || e.target[1].user_email || !e.target[2].message) {
      // Displaying appropriate text on the page
      console.log('Please fill in all fields.');
      return;
    }
    emailjs.sendForm('service_ouonbsc', 'template_laevjun', form.current, 'HvEwxezUqPkwXcSX9')
      .then((result) => {
          console.log(result.text);
          console.log(e)
          console.log(e.target)
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };  
  return (
    <div className="parent">
      <h1 className='heading'>GET IN CONTACT</h1>
      <div className="contact--container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" rows={7} cols={50} />
          <input type="submit" value="Send" className='submit--btn' />
        </form>
      </div>
    </div>
  );
};