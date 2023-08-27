import React, { useState } from 'react';
import Maindashboard from '../MainDashboard/Maindashboard';

import './ContactUsControll.css'

const ContactUsControll = () => {

    



    const [services, setServices] = useState({});


    const handleAddService = event => {
        event.preventDefault();

        


        const eventData = {
            c_address: services.c_address,
            c_phone: services.c_phone,
            c_email: services.c_email
            
        }
        console.log(eventData);

        const url = 'http://localhost:5000/contactUs';

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
                    alert('Info added successfully');
                    event.target.reset();
                }
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
        <section className="about_us_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 about_us_main_div" >
                    
                        
                <form onSubmit={handleAddService} className='form_control'>
                        <h2 className='mb-5 mt-3'>Add New Info </h2>
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Address</b> </label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='c_address' placeholder='Address' required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Phone</b> </label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='c_phone' placeholder='Phone' required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Email</b> </label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='c_email' placeholder='Email' required />
                        
                        <br />
                        <button className='btn btn-danger mt-3' type="submit">Add</button>
                    </form>

                </div>

            </div>
            
        </section>
    );
};

export default ContactUsControll;