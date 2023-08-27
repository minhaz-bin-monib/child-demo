import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';
import { Table } from 'react-bootstrap';

const ServiceUpdate = () => {
    const singleService = useLoaderData();
    const { _id, service_name, service_details } = singleService;
    // const [user, setUser] = useState({});
    console.log(singleService);

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const service_name = form.service_name.value;
        const service_details = form.service_details.value;


        const date = new Date();


        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;

        const eventData = {
            service_name, service_details, currentDate
        }
        console.log(eventData);

        const url = `http://localhost:5000/services/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service updated successfully');
                    event.target.reset();
                    // window.history.pushState('/dashboard/babysiter');
                    window.location.href = '/dashboard/manageService'
                }
            })
    }




    // const handleInputBlur = event => {
    //     const value = event.target.value;
    //     const field = event.target.name;
    //     const newUser = { ...user };
    //     newUser[field] = value;
    //     setUser(newUser);

    // }
    return (
        <section className="manage_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 manage_service_main_div" >
                    <h2>Manage Services</h2>

                    <form onSubmit={handleAddService} className='form_control' style={{ marginTop: '45px' }}>
                        <h2 className='mb-5 mt-3'>Update Service </h2>
                        <input className="form-control" type="text" name='service_name' defaultValue={service_name} />
                        <br />
                        <input className="form-control" type="text" name='service_details' defaultValue={service_details} />

                        <br />
                        <button className='btn btn-danger mt-3' type="submit">Update</button>
                    </form>




                </div>

            </div>
        </section>
    );
};

export default ServiceUpdate;