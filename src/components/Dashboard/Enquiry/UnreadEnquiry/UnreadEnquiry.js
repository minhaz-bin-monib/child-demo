import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai'



const UnreadEnquiry = () => {

    const enquiries = useLoaderData().filter(f => f.status === 'new');
    const [enquiry, setEnquiry] = useState(enquiries);
    return (
        <div>
            <h3 className='text-center'>New Enrolments</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Enquiry Date</th>
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
                                    
                                    
                                    <td>
                                        {/* Id Pass */}
                                        <Link className='' to={`/dashboard/unreadEnquiryDetails/${enqer._id}`}><AiOutlineEye></AiOutlineEye></Link>

                                    </td>
                                </tr>
                        )

                    }

                </tbody>
            </Table>

        </div>
    );
};

export default UnreadEnquiry;