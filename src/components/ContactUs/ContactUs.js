import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9i0lqcq', 'template_6cbhbmw', form.current, 'sdvAbZrHc6oiIsWvw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>

<form ref={form} onSubmit={sendEmail}>
    <h4>Contact Us</h4>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
    );
};

export default ContactUs;