import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';


const Dashboard = () => {

    return (
       <div className='dashboard_style '>
        <h3 className='heading_style'>Admin Dashboard:</h3>
        <ul>
            <li><Link style={{ textDecoration: 'none' }} to='/addNurse'><p>Add Nurse From Here</p></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to='/nurses'><p>Delete Nurse From Here</p></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to='/services'><p>Add Services From Here</p></Link></li>
            <li><Link style={{ textDecoration: 'none' }} to='/services'><p>Delete Services From Here</p></Link></li>
        </ul>

       </div>
    );
};

export default Dashboard;