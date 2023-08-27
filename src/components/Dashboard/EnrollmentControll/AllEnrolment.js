import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const AllEnrolment = () => {

    const users = useLoaderData().filter(f => f.status == 'New' || f.status == 'Accepted' || f.status == 'Onboard' || f.status == 'Rejected');
    const [displayUsers, setDisplayUsers] = useState(users);

    // useEffect(() => {
    //     fetch('http://localhost:5000/payment')
    //         .then(res => res.json())
    //         .then(data => setPayment(data))

    // }, [])
    const [payment, setPayment] = useState(true);
    console.log(payment.p_enroll
    );


    return (
        <div>
            <Maindashboard></Maindashboard><span className='dashboard_nav'></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                {/* Loop on data  */}
                <h3 className='text-center'>All Enrolments</h3>
                <Table style={{ fontSize: '14px' }} striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Enroll Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Status</th>
                            <th>Enrollment Date</th>
                            <th>Payment Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            displayUsers.map(
                                (user, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user._id}</td>
                                        <td>{user.childName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile1}</td>
                                        <td>{user.status}</td>
                                        <td>{user.currentDate}</td>
                                        <td>  {user.paymentStatus} </td>
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

export default AllEnrolment;