import React, { useState } from 'react';
import './Payment.css'

const Payment = () => {

  const [services, setServices] = useState({});


  const handleAddService = event => {
    event.preventDefault();

   
    const eventData = {
      p_name: services.p_name,
      p_email: services.p_email,
      p_number: services.p_number,
      p_amount: services.p_amount,
      p_enroll: services.p_enroll
      

    }
    console.log(eventData);

    const url = 'http://localhost:5000/payment';

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
        .then(res => res.json())
        .then(result => {
           window.location.replace(result.url);
        })
}





  const handleServiceBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newService = { ...services };
    newService[field] = value;
    setServices(newService);

}
  return (
    <div>
      <div class="main-back">
        <div class="container m-auto  p-5 bod-3">
          <div class="row">
            <h3 className='text-center'>Welcome to child Care Payment Portal</h3>
            <br />
            <br />
            <br />

            <form onSubmit={handleAddService} className='form_control'>
              <br />
              <input className="form-control" onBlur={handleServiceBlur} type="text" name='p_name' placeholder='Your Name' required />
              <br />
              <input className="form-control" onBlur={handleServiceBlur} type="email" name='p_email' placeholder='Your Email' required />
              <br />
              <input className="form-control" onBlur={handleServiceBlur} type="text" name='p_number' placeholder='Your Contact Number' required />
              <br />
              <input className="form-control" onBlur={handleServiceBlur} type="text" name='p_amount' placeholder='Enter Your Amount' required />
              <br />
              <input className="form-control" onBlur={handleServiceBlur} type="text" name='p_enroll' placeholder='Enter Enroll Id' required />

              <br />
              <button className='btn btn-danger mt-3' type="submit">Add</button>
            </form>



          </div>
        </div>
      </div>
      <script src="./script.js"></script>
    </div>
  );
};

export default Payment;