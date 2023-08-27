import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';

const UnreadEnquiryDetails = () => {
    const enquery = useLoaderData();
    const { first_name, email, currentDate, message } = enquery;
    return (
        <div>
            <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>


            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '90px'
            }}>

<h3>Details of Enquery</h3>
            <p>Name: {first_name}</p>
            <p>Email: {email}</p>
            <p>Date: {currentDate}</p>
            <p>Message: {message}</p>

            </div>

            
        </div>
    );
};

export default UnreadEnquiryDetails;