import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';

const ReadEnquiry = () => {
    const enquiries = useLoaderData().filter(f => f.status === 'old');
    const [enquiry, setEnquiry] = useState(enquiries);

    
    return (
        <div>

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


                                        <Link to={`/dashboard/unreadEnquiryDetails/${enqer._id}`} ><i class="bi bi-eye-fill"></i></Link>


                                    </td>
                                </tr>
                        )

                    }

                </tbody>
            </Table>


        </div>

        </div>



            
        </div>
    );
};

export default ReadEnquiry;