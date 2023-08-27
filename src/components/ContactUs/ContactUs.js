import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import './ContactUs.css'
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const ContactUs = () => {

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_9i0lqcq', 'template_6cbhbmw', form.current, 'sdvAbZrHc6oiIsWvw')
  //     .then((result) => {
  //       console.log(result.text);
  //       alert('Thank you. We will Contact with you soon');
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };
  // ref={form} onSubmit={sendEmail}

  const ContactInfo = useLoaderData();
  const [contact, setContact] = useState(ContactInfo);

  const [enquery, srtEnquery] = useState({});


  const handleAddEnquiry = event => {
    event.preventDefault();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate); // "17-6-2022"

    const eventData = {
      first_name: enquery.first_name,
      last_name: enquery.last_name,
      phone: enquery.phone,
      email: enquery.email,
      message: enquery.message,
      currentDate: currentDate,
      status: 'new'

    }
    console.log(eventData);

    const url = 'http://localhost:5000/enquiry';

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert('Thank you. We will Contact with you soon');
          event.target.reset();
        }
      })
  }









  const handleServiceBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newEnquery = { ...enquery };
    newEnquery[field] = value;
    srtEnquery(newEnquery);

  }
  return (
    <div>
      <Navbar></Navbar>
      <div className='container contactUs_main_div' style={{ backgroudColor: 'red' }}>
        <div className="row " >
          <h2 className='text-center mt-5 mb-5'>Contact Us</h2>
          <div className='row' style={{paddingLeft:'70px', textAlign:'center'}}>
            {
              contact.map(con =>
                <>
                <p>Address: {con.c_address}</p>
                <p>Phone: {con.c_phone}</p>
                <p>Email: {con.c_email}</p>
                </>
              )

            }
          </div>


          <form onSubmit={handleAddEnquiry} className='contact_us_form'>
            <div className='form_div'>

              <div class="row mb-3">

                <div class="col">
                  <input type="text" onBlur={handleServiceBlur} name='first_name' class="form-control" placeholder="First name" />
                </div>

                <div class="col ">
                  <input type="text" onBlur={handleServiceBlur} name='last_name' class="form-control" placeholder="Last name" />
                </div>

              </div>

              <div class="row">

                <div class="col">
                  <input type="text" onBlur={handleServiceBlur} name='phone' class="form-control" placeholder="Phone" />
                </div>

                <div class="col">
                  <input type="text" onBlur={handleServiceBlur} name='email' class="form-control" placeholder="Email" />
                </div>

              </div>


              <div class="col">
                <br />
                <textarea class="form-control" onBlur={handleServiceBlur} placeholder='Message' name='message' id="" cols="30" rows="10"></textarea>
              </div>

              <button className='btn btn-danger mt-3 w-100' type="submit">Contact Us</button>

            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>

      {/* <section class="map row">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8886980296834!2d90.39124041445722!3d23.822556591934035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77cbb1fa9e5%3A0x569577792aeedbc0!2sECB%20Chattar!5e0!3m2!1sbn!2sbd!4v1663343202483!5m2!1sbn!2sbd"
            width="100%" height="400" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section> */}

    </div>
  );
};

export default ContactUs;