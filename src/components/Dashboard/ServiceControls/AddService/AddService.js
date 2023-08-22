import React, { useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';

import './AddService.css'
import '../../Dashboard-nav.css'

const AddService = () => {


    const [services, setServices] = useState({});




    const handleAddService = event => {
        event.preventDefault();

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;


        const eventData = {
            service_name: services.service_name,
            service_details: services.service_details,
            currentDate: currentDate
        }
        console.log(eventData);

        const url = 'http://localhost:5000/services';

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
                    alert('Service added successfully');
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


        <section className="add_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 add_service_main_div" >
                    
                        
                    <form onSubmit={handleAddService} className='form_control'>
                        <h2 className='mb-5 mt-3'>Add New Service </h2>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='service_name' placeholder='Service Name' required />
                        <br />
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='service_details' placeholder='Service Details' required />

                        <br />
                        <button className='btn btn-danger mt-3' type="submit">Add</button>
                    </form>

                </div>

            </div>
        </section>


    );
};

export default AddService;