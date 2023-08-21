import React, { useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import './ManageService.css'
import '../../Dashboard-nav.css'
import { Link, useLoaderData } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const ManageService = () => {
    const services = useLoaderData();
    const [service, setService] = useState(services);

    const handleUpdate = () =>{

    }

    const handleDelete = () =>{

    }

    return (
        <section className="manage_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 manage_service_main_div" >
                        <h2>Manage Services</h2>

                    <Table className='manage_service_table' striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl no.</th>
                                <th>Service Name</th>
                                <th>Creation Date</th>
                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>


                            {
                                service.map(
                                    (servic, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{servic.service_name}</td>
                                            <td>{servic.service_details}</td>
                                            
                                            <td>

                                                {/* <Link className='' to={`/dashboard/unreadEnquiryDetails/${enqer._id}`}><AiOutlineEye></AiOutlineEye></Link> */}


                                                <a href="" style={{textDecoration:'none'}} onClick={handleUpdate}><i class="bi bi-pencil-square"></i> | </a>
                                                 
                                                <a href="" style={{color:'red'}} onClick={handleDelete}><i class="bi bi-trash-fill"></i></a>



                                            </td>
                                        </tr>
                                )

                            }

                        </tbody>
                    </Table>




                </div>

            </div>
        </section>
    );
};

export default ManageService;