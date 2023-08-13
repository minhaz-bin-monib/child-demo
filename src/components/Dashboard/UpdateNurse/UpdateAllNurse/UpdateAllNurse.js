import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';
import './UpdateAllNurse.css'

const UpdateAllNurse = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
    return (
        <section className="update_all_nurse_main_section">
            <Maindashboard></Maindashboard>
            <div className='container Update_All_Nurse_main_div  text-center' >


                <h2 style={{ color: '#ff347f' }} className='text-center mb-5'>All Nurses:</h2>



                <div className='row' style={{ width: '100%', paddingLeft: '400px' }}>
                    {
                        displayUsers.map(
                            user =>
                                <div className='col' >
                                    <p key={user._id}>
                                        {/* <h3>Nurse Name:  {user.name}</h3>
                                    <h3>Nurse Email: {user.email}</h3>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button> */}

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={user.imageURL} alt='' />
                                            <Card.Body className='text-center'>
                                                <Card.Title>Nurse Name:  {user.name}</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    <p><b>Nurse Email: {user.email}</b></p>
                                                </Card.Text>
                                                <Link to={`/updateSingleNurse/${user._id}`}>
                                                <Button variant="warning" >Update</Button> 
                                                </Link>
                                            </Card.Body>
                                        </Card>

                                    </p>

                                </div>

                        )




                    }




                </div>


            </div>
        </section>
    );
};

export default UpdateAllNurse;