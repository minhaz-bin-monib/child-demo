import React, { useState } from 'react';


import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';

const BabySiterTable = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const { _id, name, address, email, imageURL } = users;
    console.log(users);

    return (
        <div>
            <Maindashboard></Maindashboard> <span style={{display:'block', height:'60px', width:'1100px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h3 className='mb-2'>All baby Sitters: </h3>
                {/* Loop on data  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            displayUsers.map(
                                user =>


                                    <tr>

                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>

                                        <td>
                                            {/* Id Pass */}
                                            <Link className='btn btn-secondary me-2' to={`/dashboard/detailsbabysiter/${user._id}`}>Details</Link>
                                            <Link className='btn btn-warning me-2' to={`/dashboard/updatebabysiter/${user._id}`}>Update</Link>
                                            <Link className='btn btn-danger me-2' to={`/dashboard/deletebabysiter/${user._id}`}>Delete</Link>
                                           
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