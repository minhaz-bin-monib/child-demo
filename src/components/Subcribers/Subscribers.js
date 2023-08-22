import React, { useState } from 'react';
import './Subscribers.css'
import Maindashboard from '../Dashboard/MainDashboard/Maindashboard';

const Subscribers = () => {

    const [subcribe, setSubcribe] = useState({});


    const handleAddSubscribe = event => {
        event.preventDefault();
        
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;

        const eventData = {
            subscribe_email: subcribe.subscribe_email,
            currentDate : currentDate

        }
        console.log(eventData);

        const url = 'http://localhost:5000/subscribers';

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
                    alert('Subcribe added successfully');
                    event.target.reset();
                }
            })
    }




    const handleServiceBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newSubscribe = { ...subcribe };
        newSubscribe[field] = value;
        setSubcribe(newSubscribe);

    }
    return (
        <div>
            {/* <section className="container">
                <div className="row">
                    

                    <h1 className='text-center'>Join Our News Letter</h1>
                    <form onSubmit={handleAddSubscribe} className='form_control w-50 ms-5'>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='subscribe_email' placeholder='Email' required />
                        <br />

                        <button className='btn btn-danger mt-3' type="submit">Subscribe</button>
                    </form>
                </div>
            </section> */}
            <div class="container d-flex align-items-center justify-content-center orange-bg" id="subscribe">
    <div>
      <h3 className='text-center' style={{color:'#e52159'}}>Join Our News Letter</h3>
      <h6>Get updates on Events, specials and more</h6>
      <form action="" onSubmit={handleAddSubscribe}>
      <div class="submit">
        <input class="form-control" onBlur={handleServiceBlur} type="text" name='subscribe_email' placeholder="Enter Your Email"/>
      <button class="buy-now-button" type="submit">SUBMIT</button>
      </div>
      </form>
    </div>
  </div>

        </div>
    );
};

export default Subscribers;