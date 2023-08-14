import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './ContactUs.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9i0lqcq', 'template_6cbhbmw', form.current, 'sdvAbZrHc6oiIsWvw')
      .then((result) => {
        console.log(result.text);
        alert('Thank you. We will Contact with you soon');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>

      <div className='container contactUs_main_div' style= {{backgroudColor:'red'}}>
       <div className="row " >

       <form ref={form} onSubmit={sendEmail}>
        <h2 className='text-center mt-5' style={{color:'red'}} >Contact Us</h2>
 

        <div class="mb-3">
          <label for="formGroupExampleInput" className="form-label">Name</label>
          <input type="text" name='user_name' className="form-control" id="formGroupExampleInput" placeholder="Your Name" required />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" className="form-label">Email</label>
          <input type="email" name='user_email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" className="form-label">Message</label>
          <textarea name='message' className="form-control" id="formGroupExampleInput" placeholder="Your Message" required />
        </div>
        <input className='btn btn-danger' type="submit" value="Send" />
        
      </form>
       </div>
      </div>

      {/* <!-- map section start --> */}
    <section class="map row">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8886980296834!2d90.39124041445722!3d23.822556591934035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77cbb1fa9e5%3A0x569577792aeedbc0!2sECB%20Chattar!5e0!3m2!1sbn!2sbd!4v1663343202483!5m2!1sbn!2sbd"
            width="100%" height="400" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    {/* <!-- map section end --> */}
    </div>
  );
};

export default ContactUs;