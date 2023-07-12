import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{background:'#ffebf1', display:'flex', alignItems:'center', justifyContent:'center', marginTop:'50px'}}>
            <div>
            <h2>Simple Admin Dashboard</h2>
            <button className='btn btn-primary'><Link style={{textDecoration:"none", color:"white"}} to='/addNurse'>Add Nurse From Here</Link></button> <br />
            <button className='btn btn-danger'><Link style={{textDecoration:"none", color:"white"}} to='/nurses'>Delete Nurse From Here</Link></button>
            </div>

        </div>
    );
};

export default Dashboard;