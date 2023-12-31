import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const EditEnrolementStatus = () => {

    const users = useLoaderData();
    const [enrolment, setEnrolment] = useState({});

    console.log(users);

    const { _id, name, childName, mobile1, email, program, gender, address, city, country, status, } = users;


    const handleAddEnrollment = event => {
        event.preventDefault();

        const form = event.target;
        const status = form.status.value;
        const paymentStatus = form.paymentStatus.value;

        const eventData = {

            status, paymentStatus
        }
        console.log(eventData);

        const url = `http://localhost:5000/enrollment/${_id}`;

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
                    alert('Enrollment Status updated successfully');
                    event.target.reset();

                    window.location.href = '/dashboard/allSection'

                }
            })
    }



    // const handleServiceBlur = event => {
    //     const value = event.target.value;
    //     const field = event.target.name;

    //     const newEnrollment = { ...enrolment };
    //     newEnrollment[field] = value;
    //     console.log(newEnrollment);
    //     setEnrolment(newEnrollment);

    // }

    return (
        <div>
            <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                {/* Loop on data  */}
                <h3 className='text-center'>Edit Enrolment Status</h3>


                <section className="container">

                    <form onSubmit={handleAddEnrollment}>
                        <h6>Primary Details</h6>
                        <div className="row">
                            <div className=' col-6 mb-3'>
                                <p  > Parent Name: {name} </p>
                            </div>

                            <div className=' col-6 mb-3'>
                                <p  > Phone: {mobile1} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Email: {email} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Email: {email} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Child Name: {childName} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Child Gender: {gender} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Program: {program} </p>
                            </div>

                            <br />
                            <div className=' col-6 mb-3'>
                                <p  > Address: {address} </p>
                            </div>

                            <div className=' col-6 mb-3'>

                                <p  > Citry: {city} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Country: {country} </p>
                            </div>
                            <div className=' col-6 mb-3'>
                                <p  > Country: {country} </p>
                            </div>
                            <div className='form-control col-6 mb-3'>
                                <h6>Please Change Status from "{status}" To Other</h6>
                                <select className="form-control" name='status'  >
                                    <option value="" selected disabled>select</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Onboard">Onhold</option>
                                    <option value="Rejected">Rejected</option>
                                </select>

                            </div>
                            <div className='form-control col-6 mb-3'>
                                <h6>Please Change Payment status from here</h6>
                                <select className="form-control" name='paymentStatus' >
                                    <option value="" selected disabled>select</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Unpaid">Unpaid</option>
                                </select>

                            </div>
                        </div>
                        <button className='btn btn-danger' type="submit">Update</button>
                    </form>


                </section>


            </div>
        </div>

    );
};

export default EditEnrolementStatus;