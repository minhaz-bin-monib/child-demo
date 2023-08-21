import React, { useState } from 'react';


import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';

import "../../Dashboard-nav.css"
import "./BabySiterTable.css"

const BabySiterTable = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const { _id, name, address, email, imageURL } = users;
    console.log(users);

    const handleDelete = user => {

        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            // console.log('deleting user with id: ', user._id);

            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }

                });
        }
    }

    return (
        <div>
            <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h3 className='mb-2'>All baby Sitters: </h3>
                {/* Loop on data  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Profile Pic</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Mobile Number</th>
                            <th>Reg. Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            displayUsers.map(
                                (user, index) =>


                                    <tr>
                                        <th>{index + 1}</th>
                                        <th><img src={user.imageURL} alt="" className='img-fluid nurse_pro_pic' /></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <th>{user.number}</th>
                                        <th>{user.currentDate}</th>

                                        <td>
                                            {/* Id Pass */}
                                            {/* <Link className='btn btn-secondary me-2' to={`/dashboard/detailsbabysiter/${user._id}`}>Details</Link>
                                            <Link className='btn btn-warning me-2' to={`/dashboard/updatebabysiter/${user._id}`}>Update</Link>
                                            <Link className='btn btn-danger me-2' to={`/dashboard/deletebabysiter/${user._id}`}>Delete</Link> */}

                                            <a href={`/dashboard/updatebabysiter/${user._id}`} style={{ textDecoration: 'none' }}><i class="bi bi-pencil-square"></i> | </a>

                                            <a onClick={() => handleDelete(user)} style={{ color: 'red', cursor:'pointer' }} ><i class="bi bi-trash-fill"></i></a>

                                            

                                        </td>
                                    </tr>


                            )



                        }

                        <button></button>
                        <Link className='btn btn-primary mt-5' to="/dashboard/createbabysiter">Create New Babysitter</Link>






                    </tbody>
                </Table>


            </div>
        </div>

    );
};

export default BabySiterTable;