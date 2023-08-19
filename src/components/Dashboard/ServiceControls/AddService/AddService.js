import React, { useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';

import './AddService.css'

const AddService = () => {


    const [services, setServices] = useState({});




    const handleAddService = event => {
        event.preventDefault();


        const eventData = {
            service_name: services.service_name,
            service_details: services.service_details,

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
        <div>
            
            <Maindashboard></Maindashboard> <span style={{ display: 'block', height: '60px', width: '1100px', backgroundColor: 'ghostwhite', marginLeft: '256px' }}></span>
            
            <form onSubmit={handleAddService} className='form_control'>
            <h2 className='mb-2'>Add New Service from here: </h2>
                <input className="form-control" onBlur={handleServiceBlur} type="text" name='service_name' placeholder='Service Name' required />
                <br />
                <input className="form-control" onBlur={handleServiceBlur} type="text" name='service_details' placeholder='Service Details' required />

                <br />
                <button className='btn btn-danger mt-3' type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddService;