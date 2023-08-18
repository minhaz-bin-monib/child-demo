import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const EnrollmentControll = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);


    return (
        <div>
        <Maindashboard></Maindashboard>
        <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>New Enrolment</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Parent</th>
                        <th>Child Name</th>
                        <th>program</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        displayUsers.map(
                            user =>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.childName}</td>
                                    <td>{user.program}</td>
                                    <td>{user.address}</td>
                                    <td>{user.mobile1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.country}</td>
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

export default EnrollmentControll;