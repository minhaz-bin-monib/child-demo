import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const EditEnrolementStatus = () => {

    const users = useLoaderData();
    const [enrolment, setEnrolment] = useState({});

    const {_id, name, childName, mobile1, email, program, gender, address, city, country, status, } = users;


    const handleAddEnrollment = event => {
        event.preventDefault();
        
        const eventData = {
            
            status: enrolment.status
        }
        console.log(eventData);

        const url = `http://localhost:5000/enrollment/${_id}`;

        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User updated successfully');
                event.target.reset();
                window.history.push('/dashboard/babysiter');
            }
        })
    }



    const handleServiceBlur = event => {
        const value = event.target.value;
        const field = event.target.name;

        const newEnrollment = { ...enrolment };
        newEnrollment[field] = value;
        console.log(newEnrollment);
        setEnrolment(newEnrollment);

    }
   
    return (
        <div>
        <Maindashboard></Maindashboard>
        <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>New Enrolment</h3>
           
            
            <section className="container">
                  
                    <form onSubmit={handleAddEnrollment}>
                         <h6>Primary Details</h6>
                    <div className="row">
                        <div className='from-control col-6 mb-3'>
                             <p  className="form-control"> Parent Name: {name} </p>
                        </div>
                       
                        <div className='from-control col-6 mb-3'>
                            <p  className="form-control"> Phone: {mobile1} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                            <p  className="form-control"> Email: {email} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                             <p  className="form-control"> Email: {email} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                            <p  className="form-control"> Child Name: {childName} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <p  className="form-control"> Child Gender: {gender} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                             <p  className="form-control"> Program: {program} </p>
                        </div>
                       
                        <br />
                        <div className='from-control col-6 mb-3'>
                             <p  className="form-control"> Address: {address} </p>
                        </div>
                      
                        <div className='from-control col-6 mb-3'>
                       
                        <p  className="form-control"> Citry: {city} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                            <p  className="form-control"> Country: {country} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                            <p  className="form-control"> Country: {country} </p>
                        </div>
                        <div className='from-control col-6 mb-3'>
                                <h6>Please Change Status: Now {status}</h6>
                                <select className="form-control" onBlur={handleServiceBlur} name='status' required >
                                    <option value="" selected disabled>select</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Onboard">Onboard</option>
                                    <option value="Reject">Reject</option>
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