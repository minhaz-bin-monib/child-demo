import React, { createContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NurseDetails from './NurseDetails';
import { Button, Card } from 'react-bootstrap';

const ShowallNurses = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);


    return (
        <div >
            

            <h2 style={{color:'#ff347f'}} className='text-center mb-5 mt-5'>All Nurses:</h2>


            <h3>Day Shift:</h3>
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
                                            <Card.Title>Nurse Name:  {user.name}</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                <p><b>Nurse Email: {user.email}</b></p>
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>

                                </p>

                            </div>

                    )




                }




            </div>

            <h3>Night Shift:</h3>
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
                                            <Card.Title>Nurse Name:  {user.name}</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                <p><b>Nurse Email: {user.email}</b></p>
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>

                                </p>

                            </div>

                    )




                }




            </div>
        </div>
    );
};

export default ShowallNurses;