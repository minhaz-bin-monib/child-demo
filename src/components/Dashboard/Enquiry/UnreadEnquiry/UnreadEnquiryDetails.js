import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UnreadEnquiryDetails = () => {
    const enquery = useLoaderData();
    const {first_name, email, currentDate, message } = enquery;
    return (
        <div>
            <h3>Details of Enquery</h3>
           <p>Name: {first_name}</p>
           <p>Email: {email}</p>
           <p>Date: {currentDate}</p>
           <p>Message: {message}</p>
        </div>
    );
};

export default UnreadEnquiryDetails;