import React, { useRef,useState } from 'react';
import './contacts.css'
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
   const [send,setSend]= useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_j3h64pr", "template_k3nr24l", form.current, "Fh4clyxaaR5hx8A-a")
      .then((result) => {
          setSend(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='c'>
    <div className='c-bg'></div>
    <form ref={form} onSubmit={sendEmail} className='f'>
    <h1 className='c-me'>Contact Me </h1>

    <div className='f-name'>
    <input type="text" name="to_name" placeholder='Name' />
    </div>
    
    <div className='f-email'>
    <input type="email" name="user_email" placeholder='Email' />
    </div>

    <div className='f-message'>
    <textarea name="message" placeholder='Message' />
    </div>

    <input type="submit"   value="Send"  className='f-btn'/>

    {send ? "mesajul a fost trimis ":" "}
  </form>

    </div>
 
  );
};


export default ContactUs