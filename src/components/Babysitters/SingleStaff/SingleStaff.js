import React from 'react';
import Navbar from '../../../layout/Navbar/Navbar';
import Footer from '../../../layout/Footer/Footer';

import './SingleStaff.css'
import { useLoaderData } from 'react-router-dom';

const SingleStaff = () => {

    const users = useLoaderData();
    const {_id, name, address, email, imageURL,designation, qualification, certificate, number} = users;


    return (
        <div className=''>
            <Navbar></Navbar>
            <section className="s_main_section container mt-5">
                <div className="s_main_div row">
                <img src={imageURL} className='img-fluid' alt="" />
                
            <h2 style={{paddingLeft:'407px'}}>Name: {name}</h2>
            <p style={{paddingLeft:'407px'}}><b>Address</b>: {address}</p>
            <p style={{paddingLeft:'407px'}}><b>Email</b>: {email}</p>
            <p style={{paddingLeft:'407px'}}><b>Phone No</b>: {number}</p>
            <p style={{paddingLeft:'407px'}}><b>Certification</b>: {certificate}</p>
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
};

export default SingleStaff;