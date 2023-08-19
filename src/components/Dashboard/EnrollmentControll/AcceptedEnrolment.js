import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const AcceptedEnrolment = () => {

    const users = useLoaderData().filter(f => f.status === 'Accepted');
    const [displayUsers, setDisplayUsers] = useState(users);

    


    return (
        <div>
        <Maindashboard></Maindashboard> <span style={{display:'block', height:'82px', width:'1090px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
        <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>Accepted Enrolments</h3>
            <Table style={{fontSize:'14px'}} striped bordered hover>
                <thead>
                    <tr>

                    <th>Enroll Id</th>
                    <th>Parent</th>
                        <th>program</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        displayUsers.map(
                            user =>
                                <tr>
                                     <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.program}</td>
                                    <td>{user.address}</td>
                                    <td>{user.mobile1}</td>
                                    <td>{user.email}</td>
                                   
                                    <td>{user.status}</td>
                                    <td>
                                        {/* Id Pass */}
                                        <Link className='btn btn-sm btn-primary' to={`/dashboard/editenrolment/${user._id}`}>Update Status</Link>

                                    </td>
                                </tr>
                        )

                    }

                </tbody>
            </Table>


        </div>
    </div>

    );
};

export default AcceptedEnrolment;