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
            <Maindashboard></Maindashboard>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                {/* Loop on data  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Address</th>

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
                                            <Link className='btn' to={`/dashboard/detailsbabysiter/${user._id}`}>Details</Link>
                                            <Link className='btn' to={`/dashboard/updatebabysiter/${user._id}`}>Update</Link>
                                            <Link className='btn' to={`/dashboard/deletebabysiter/${user._id}`}>Delete</Link>
                                           
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

export default BabySiterTable;