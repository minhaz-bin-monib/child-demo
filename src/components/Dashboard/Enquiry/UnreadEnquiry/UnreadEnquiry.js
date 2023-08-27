import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import Maindashboard from '../../MainDashboard/Maindashboard';



const UnreadEnquiry = () => {

    const enquiries = useLoaderData().filter(f => f.status === 'new');
    const [enquiry, setEnquiry] = useState(enquiries);



    const handleUpdate = (id) => {

        const newStatus ={
            status: 'old'
        }
        fetch(`http://localhost:5000/enquiry/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                // alert('User updated successfully');
               // event.target.reset();
             
            //    window.location.href = '/dashboard'
               
            }
        })
      
    }

   
    return (
        <div>
            <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>
            






            <div className="container rightMainD" style={{
            width: '1000px', marginRight: '1px',
            marginLeft: '280px', marginTop: '15px'
        }}>
            {/* Loop on data  */}
            <h3 className='text-center'>Enquiries: </h3>
            <Table style={{fontSize:'14px'}} striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl no.</th>
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
                            (enqer,index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{enqer.first_name} {enqer.last_name}</td>
                                    <td>{enqer.email}</td>
                                    <td>{enqer.currentDate}</td>
                                    <td>{enqer.message}</td>


                                    <td>
                                       
                                        {/* <Link className='' to={`/dashboard/unreadEnquiryDetails/${enqer._id}`}><AiOutlineEye></AiOutlineEye></Link> */}


                                        <Link to={`/dashboard/unreadEnquiryDetails/${enqer._id}`} onClick={() => handleUpdate(enqer._id) }><i class="bi bi-eye-fill"></i></Link>


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