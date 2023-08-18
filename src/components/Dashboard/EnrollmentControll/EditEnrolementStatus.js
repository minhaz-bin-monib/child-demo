import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const EditEnrolementStatus = () => {

    const users = useLoaderData();
    const [enrolment, setEnrolment] = useState({});

    console.log(users);

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
             
               window.location.href = '/dashboard'
               
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
        <Maindashboard></Maindashboard> <span style={{display:'block', height:'82px', width:'1090px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
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
                                <select className="form-control" onBlur={handleServiceBlur} name='status' required >
                                    <option value="" selected disabled>select</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Onboard">Onboard</option>
                                    <option value="Rejected">Rejected</option>
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