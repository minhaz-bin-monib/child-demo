import React, { createContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { Button, Card } from 'react-bootstrap';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const ShowallNurses = () => {

    const users = useLoaderData();
    const {_id, name, address, email, imageURL,designation} = users;
    const [displayUsers, setDisplayUsers] = useState(users);


    return (
        <div >
            
            <Navbar></Navbar>
            <h2 style={{color:'#ff347f'}} className='text-center mb-5 mt-5'>All Staffs:</h2>


            
            <div className='row' style={{width:'90%', paddingLeft:'100px'}}>
                {
                    displayUsers.map(
                        user =>
                            <div  className='col-md-4' >
                                <p key={user._id}>
                                    {/* <h3>Nurse Name:  {user.name}</h3>
                                    <h3>Nurse Email: {user.email}</h3>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button> */}

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={user.imageURL} alt='' />
                                        <Card.Body className='text-center'>
                                            <Card.Title>Stuff Name:  {user.name}</Card.Title>
                                            <Card.Text>
                                                <p><b>Designation: {user.designation}</b></p>
                                            </Card.Text>
                                            
                                            <Link to={`/singleStaff/${user._id}`}>
                                                <Button variant="success" >Details</Button> 
                                                </Link>

                                        </Card.Body>
                                    </Card>

                                </p>

                            </div>

                    )




                }




            </div>

            <Footer></Footer>
        </div>
    );
};

export default ShowallNurses;