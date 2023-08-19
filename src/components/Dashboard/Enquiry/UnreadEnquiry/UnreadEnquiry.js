import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import Maindashboard from '../../MainDashboard/Maindashboard';



const UnreadEnquiry = () => {

    const enquiries = useLoaderData().filter(f => f.status === 'new');
    const [enquiry, setEnquiry] = useState(enquiries);



    const handleDelete = id => {

        const agree = window.confirm(`Are you sure you want to delete`);

        if (agree) {
            // console.log('deleting user with id: ', user._id);

            fetch(`http://localhost:5000/enquiry/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully.');
                        // const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        // setDisplayUsers(remainingUsers);
                    }

                });
        }
    }
    return (
        <div>
            <Maindashboard></Maindashboard> <span style={{ display: 'block', height: '60px', width: '1100px', backgroundColor: 'ghostwhite', marginLeft: '256px' }}></span>
            






            <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>Enquiries: </h3>
            <Table style={{fontSize:'14px'}} striped bordered hover>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Enquiry Date</th>
                        <th>Message</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>


                    {
                        enquiry.map(
                            enqer =>
                                <tr>
                                    <td>{enqer.first_name} {enqer.last_name}</td>
                                    <td>{enqer.email}</td>
                                    <td>{enqer.currentDate}</td>
                                    <td>{enqer.message}</td>


                                    <td>
                                       
                                        {/* <Link className='' to={`/dashboard/unreadEnquiryDetails/${enqer._id}`}><AiOutlineEye></AiOutlineEye></Link> */}


                                        <Button variant="danger" onClick={() => handleDelete(enqer._id)}>Delete</Button>


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

export default UnreadEnquiry;