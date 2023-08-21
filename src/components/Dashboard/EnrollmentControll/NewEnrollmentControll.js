import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const NewEnrollmentControll = () => {

    const users = useLoaderData().filter(f => f.status === 'New');
    const [displayUsers, setDisplayUsers] = useState(users);

    


    return (
        <div>
        <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>
        <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>New Enrolments</h3>
            <Table style={{fontSize:'14px'}} striped bordered hover>
                <thead>
                    <tr>
                    <th>Sl no.</th>
                    <th>Enroll Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Status</th>
                    <th>Enrollment Date</th>
                    <th>Action</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        displayUsers.map(
                            (user, index) =>
                                <tr>
                                    <td>{index+1}</td>
                                     <td>{user._id}</td>
                                    <td>{user.childName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile1}</td>
                                    <td>{user.status}</td>
                                    <td>{user.currentDate}</td>
                                   
                                    <td>
                                        {/* Id Pass */}
                                        <Link className='btn btn-sm btn-primary' to={`/dashboard/editenrolment/${user._id}`} ><i class="bi bi-eye-fill"></i></Link>
                                   
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

export default NewEnrollmentControll;