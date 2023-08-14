import React from 'react';
import Navbar from '../../../layout/Navbar/Navbar';
import Footer from '../../../layout/Footer/Footer';

import './SingleStaff.css'
import { useLoaderData } from 'react-router-dom';

const SingleStaff = () => {

    const users = useLoaderData();
    const {_id, name, address, email, imageURL,designation, qualification} = users;


    return (
        <div className=''>
            <Navbar></Navbar>
            <section className="s_main_section container mt-5">
                <div className="s_main_div row">
                <img src={imageURL} className='img-fluid' alt="" />
            <h2>Name: {name}</h2>
            <p><b>Address</b>: {address}</p>
            <p><b>Email</b>: {email}</p>
            <p><b>Designation</b>: {designation}</p>
            <p><b>Qualification</b>: {qualification}</p>
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
};

export default SingleStaff;