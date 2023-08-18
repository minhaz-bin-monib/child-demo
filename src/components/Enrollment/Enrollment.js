import React, { useState } from 'react';
import './Enrollment.css'
import Navbar from '../../layout/Navbar/Navbar';

const Enrollment = () => {

    const [enrollment, setEnrollment] = useState({});


    const handleAddEnrollment = event => {
        event.preventDefault();
        
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        console.log(currentDate); // "17-6-2022"

        const eventData = {
            name: enrollment.name,
            currentDate : currentDate

        }
        console.log(eventData);

        const url = 'http://localhost:5000/enrollment';

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
                    alert('enrollment added successfully');
                    event.target.reset();
                }
            })
    }





    const handleServiceBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newEnrollment = { ...enrollment };
        newEnrollment[field] = value;
        setEnrollment(newEnrollment);

    }
    return (
        <div>
            <Navbar></Navbar>

            <section className="container">
                <div className="row">
                    <h1 className='text-center'>Enroll Now</h1>

                    <form onSubmit={handleAddEnrollment} className='form_control w-50 ms-5'>
                        <label >Your Name</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='name' placeholder='Your Name' required />
                        <br />

                        <button className='btn btn-danger mt-3 w-100' type="submit">Enroll</button>
                    </form>

                </div>
            </section>

        </div>
    );
};

export default Enrollment;