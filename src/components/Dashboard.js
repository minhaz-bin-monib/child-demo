import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';


const Dashboard = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        //         <div className='main_div'>
        //             {/* <div>
        //             <h2>Simple Admin Dashboard</h2>
        //             <button className='btn btn-primary'><Link style={{textDecoration:"none", color:"white"}} to='/addNurse'>Add Nurse From Here</Link></button> <br />
        //             <button className='btn btn-danger'><Link style={{textDecoration:"none", color:"white"}} to='/nurses'>Delete Nurse From Here</Link></button>
        //             </div> */}

        //             {/* <div className='row main-row'>
        //                 <div className='main_row_first col-md-6'><Link style={{ textDecoration: 'none' }} to='/addNurse'><p>Add Nurse From Here</p></Link></div>
        //                 <div className='main_row_second col-md-6'><Link style={{ textDecoration: 'none' }} to='/nurses'><p>Delete Nurse From Here</p></Link></div>
        //             </div>
        //             <div className='row'>

        //             </div> */}




        //            <div>

        // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        //   Launch demo modal
        // </button>


        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //   <div class="modal-dialog">
        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //       </div>
        //       <div class="modal-body">

        //       </div>
        //       <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        //            </div>














        //             <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        //                 Link with href
        //             </a>
        //             <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        //                 Button with data-bs-target
        //             </button>

        //             <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        //                 <div class="offcanvas-header">
        //                     <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        //                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //                 </div>
        //                 <div class="offcanvas-body">
        //                     <div>
        //                         Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        //                     </div>
        //                     <div class="dropdown mt-3">
        //                         <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        //                             Dropdown button
        //                         </button>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">Action</a></li>
        //                             <li><a class="dropdown-item" href="#">Another action</a></li>
        //                             <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>




















        //         </div>

        <>
            <Button style={{marginLeft:'573px', marginTop:'100px'}} variant="danger" onClick={handleShow}>
                <span>Go to Dashborad</span>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Nurses
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><Link style={{ textDecoration: 'none' }} to='/addNurse'><p>Add Nurse From Here</p></Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><Link style={{ textDecoration: 'none' }} to='/nurses'><p>Delete Nurse From Here</p></Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};

export default Dashboard;